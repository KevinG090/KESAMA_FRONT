// CPU-side integration tests. These do NOT substitute for a real WebGL/browser test.
const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const ts = require('typescript')
const THREE = require('three')

async function fixture() {
  const { RoundedBoxGeometry } = await import('three/addons/geometries/RoundedBoxGeometry.js')
  let scene, camera, time = 0, nextID = 1, removed = false
  const frames = new Map()
  const canvas = { style: {}, addEventListener() {}, removeEventListener() {}, remove() { removed = true }, getBoundingClientRect: () => ({ left: 0, top: 0, width: 600, height: 440 }) }
  class Renderer {
    constructor() { this.domElement = canvas; this.shadowMap = {}; this.capabilities = { getMaxAnisotropy: () => 8 } }
    setPixelRatio() {} setSize() {} dispose() {}
    render(s, c) { scene = s; camera = c }
  }
  class Controls extends THREE.EventDispatcher {
    constructor() { super(); this.target = new THREE.Vector3() }
    update() {} dispose() {}
  }
  const callbacks = []
  const context = {
    exports: {}, console, performance: { now: () => time },
    window: { devicePixelRatio: 1, matchMedia: () => ({ matches: false }) },
    document: { hidden: false, addEventListener() {}, removeEventListener() {}, createElement: () => ({ width: 0, height: 0, getContext: () => ({ createImageData: (w, h) => ({ data: new Uint8ClampedArray(w * h * 4) }), putImageData() {} }) }) },
    ResizeObserver: class { observe() {} disconnect() {} },
    IntersectionObserver: class { observe() {} disconnect() {} },
    requestAnimationFrame: fn => { const id = nextID++; frames.set(id, fn); return id },
    cancelAnimationFrame: id => frames.delete(id),
    require: name => {
      if (name === 'three') return { ...THREE, WebGLRenderer: Renderer, PMREMGenerator: class { fromScene() { return { texture: new THREE.Texture(), dispose() {} } } dispose() {} } }
      if (name.includes('OrbitControls')) return { OrbitControls: Controls }
      if (name.includes('RoundedBoxGeometry')) return { RoundedBoxGeometry }
      if (name.includes('RoomEnvironment')) return { RoomEnvironment: class { dispose() {} } }
      throw Error(`Unexpected import: ${name}`)
    },
  }
  const source = fs.readFileSync(path.join(__dirname, '../src/lib/nightstandScene.ts'), 'utf8')
  vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, context)
  const api = context.exports.createNightstandScene({ clientWidth: 600, clientHeight: 440, appendChild() {} }, {
    onDrawer: (i, state) => callbacks.push([i, state]), onOrbit() {}, onError() {},
  })
  function tick(n = 150) {
    for (let i = 0; i < n; i++) {
      time += 16.67
      const queue = [...frames.values()]; frames.clear(); queue.forEach(fn => fn(time))
      assert.ok(frames.size <= 1, 'At most one scheduled animation frame')
    }
  }
  tick()
  return { api, tick, callbacks, get scene() { return scene }, get camera() { return camera }, frames, removed: () => removed }
}

test('cabinet geometry is finite, independently modelled and correctly bounded', async () => {
  const f = await fixture()
  const model = f.scene.getObjectByName('NTS-02')
  assert.ok(model)
  assert.ok(model.getObjectByName('Cajon_izquierdo'))
  assert.ok(model.getObjectByName('Cajon_derecho'))
  model.traverse(object => {
    if (!object.isMesh) return
    for (const name of ['position', 'normal', 'uv']) {
      const attribute = object.geometry.getAttribute(name)
      assert.ok([...attribute.array].every(Number.isFinite), `${name} contains no NaN/Infinity`)
    }
  })
  const size = new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3())
  assert.ok(size.x > 1.19 && size.x < 1.22)
  assert.ok(size.z < .5)
  f.api.dispose()
})

test('drawer toggles are independent, reversible and clamped', async () => {
  const f = await fixture()
  const left = f.scene.getObjectByName('Cajon_izquierdo'), right = f.scene.getObjectByName('Cajon_derecho')
  f.api.toggleDrawer(0); f.tick()
  assert.ok(Math.abs(left.position.z - .29) < .0001)
  assert.equal(right.position.z, 0)
  f.api.toggleDrawer(1); f.tick()
  assert.ok(Math.abs(right.position.z - .29) < .0001)
  f.api.toggleDrawer(0); f.tick()
  assert.ok(left.position.z < .0001)
  f.api.toggleDrawer(8); f.tick()
  assert.deepEqual(f.callbacks, [[0, true], [1, true], [0, false]])
  f.api.dispose()
})

test('camera presets, zoom, materials, LEDs and reset', async () => {
  const f = await fixture()
  for (const view of ['Frontal', 'Lateral', 'Superior', 'Trasera', 'Perspectiva']) {
    f.api.setView(view); f.tick()
    assert.ok(f.camera.position.toArray().every(Number.isFinite))
    if (view === 'Trasera') assert.ok(f.camera.position.z < 0)
    if (view === 'Superior') assert.ok(f.camera.position.y > 2)
  }
  const focus = new THREE.Vector3(0, -.015, .07)
  f.api.zoom(.0001); f.tick(); assert.ok(Math.abs(f.camera.position.distanceTo(focus) - 1.25) < 1e-6)
  f.api.zoom(100); f.tick(); assert.ok(Math.abs(f.camera.position.distanceTo(focus) - 4.2) < 1e-6)
  const front = f.scene.getObjectByName('Cajon_izquierdo').children[0]
  f.api.setFinish('Nogal'); assert.notEqual(front.material.color.getHexString(), 'ffffff')
  f.api.setLED(false)
  const lights = []; f.scene.traverse(o => { if (o.isPointLight) lights.push(o) })
  assert.equal(lights.length, 3); assert.ok(lights.every(l => l.intensity === 0))
  f.api.toggleDrawer(0); f.tick(); f.api.reset(); f.tick()
  assert.equal(front.material.color.getHexString(), 'ffffff')
  assert.ok(lights.every(l => l.intensity > 0))
  assert.ok(f.scene.getObjectByName('Cajon_izquierdo').position.z < .0001)
  f.api.dispose(); assert.equal(f.frames.size, 0); assert.ok(f.removed())
})
