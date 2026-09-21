import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'

export type ViewName = 'Perspectiva' | 'Frontal' | 'Lateral' | 'Superior' | 'Trasera'
export interface ViewerAPI {
  toggleDrawer(index: number): void
  setView(view: ViewName): void
  setLED(on: boolean): void
  setFinish(name: string): void
  zoom(factor: number): void
  reset(): void
  dispose(): void
}
interface Callbacks {
  onDrawer(index: number, open: boolean): void
  onOrbit(): void
  onError(): void
}

// Geometry is in metres; these are visual estimates, not manufacturing dimensions.
const WIDTH = 1.2, HEIGHT = .30, DEPTH = .40, BOARD = .022
const DRAWER_TRAVEL = .29
const VIEWS: Record<ViewName, [number, number, number]> = {
  Perspectiva: [1.35, .90, 1.75], Frontal: [0, .12, 2.25],
  Lateral: [2.3, .3, .04], Superior: [0, 2.4, .01], Trasera: [-.85, .55, -2.15],
}

// Seeded grain: generated locally, with no image URLs, keys, or external assets.
function woodTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 1024; canvas.height = 512
  const ctx = canvas.getContext('2d')!
  const image = ctx.createImageData(canvas.width, canvas.height)
  let seed = 90210
  const random = () => { seed = (1664525 * seed + 1013904223) >>> 0; return seed / 4294967296 }
  for (let y = 0; y < canvas.height; y++) for (let x = 0; x < canvas.width; x++) {
    const wave = y + 7 * Math.sin(x * .005 + y * .007) + 3 * Math.sin(x * .018 + y * .012)
    const bands = Math.sin(wave * .075) * 5 + Math.sin(wave * .53) * 2
    const pores = Math.pow(Math.abs(Math.sin(wave * 1.7 + Math.sin(x * .012))), 16) * 10
    const noise = (random() - .5) * 7
    const v = bands - pores + noise
    const i = (y * canvas.width + x) * 4
    image.data[i] = 188 + v; image.data[i + 1] = 149 + v; image.data[i + 2] = 102 + v
    image.data[i + 3] = 255
  }
  ctx.putImageData(image, 0, 0)
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  return texture
}

export function createNightstandScene(host: HTMLElement, callbacks: Callbacks): ViewerAPI {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  host.appendChild(renderer.domElement)
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(38, 1, .05, 30)
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true; controls.dampingFactor = .10
  controls.enablePan = false
  controls.minDistance = 1.25; controls.maxDistance = 4.2
  controls.minPolarAngle = .015; controls.maxPolarAngle = Math.PI * .77
  controls.target.set(0, -.015, .07)
  const focus = controls.target.clone()
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const studio = new RoomEnvironment()
  const pmrem = new THREE.PMREMGenerator(renderer)
  const environment = pmrem.fromScene(studio, .06)
  scene.environment = environment.texture
  scene.environmentIntensity = .55
  studio.dispose(); pmrem.dispose()
  scene.add(new THREE.HemisphereLight('#fff9ef', '#8c7963', 1.5))
  const key = new THREE.DirectionalLight('#fff5e4', 3)
  key.position.set(-2, 3, 3)
  key.castShadow = true
  key.shadow.mapSize.set(1024, 1024)
  key.shadow.camera.left = -2; key.shadow.camera.right = 2
  key.shadow.camera.top = 2; key.shadow.camera.bottom = -2
  key.shadow.normalBias = .018; key.shadow.bias = -.0002
  scene.add(key)
  const fill = new THREE.DirectionalLight('#d9e7ff', 1.1)
  fill.position.set(2, 1, -2); scene.add(fill)

  const grain = woodTexture()
  grain.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy())
  const bump = grain.clone(); bump.colorSpace = THREE.NoColorSpace
  const wood = new THREE.MeshStandardMaterial({ map: grain, bumpMap: bump, bumpScale: .0006, roughness: .46 })
  const inner = new THREE.MeshStandardMaterial({ map: grain, color: '#ddd1b3', roughness: .7 })
  const white = new THREE.MeshStandardMaterial({ color: '#f2eee5', roughness: .34 })
  const steel = new THREE.MeshStandardMaterial({ color: '#a7abb0', metalness: .85, roughness: .25 })
  const black = new THREE.MeshStandardMaterial({ color: '#242522', metalness: .55, roughness: .4 })
  const ledMaterial = new THREE.MeshStandardMaterial({ color: '#fff2bf', emissive: '#ffcf76', emissiveIntensity: 3 })
  const model = new THREE.Group(); model.name = 'NTS-02'; scene.add(model)
  const geometries = new Set<THREE.BufferGeometry>()
  const materials = new Set<THREE.Material>([wood, inner, white, steel, black, ledMaterial])
  function box(parent: THREE.Object3D, size: [number, number, number], pos: [number, number, number], material: THREE.Material, radius = .002) {
    const geometry = new RoundedBoxGeometry(...size, 2, Math.min(radius, ...size.map(v => v / 3)))
    geometries.add(geometry)
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(...pos); mesh.castShadow = mesh.receiveShadow = true; parent.add(mesh)
    return mesh
  }
  // Open carcass: no solid box hidden behind the drawer fronts.
  box(model, [WIDTH, BOARD, DEPTH], [0, -HEIGHT / 2 + BOARD / 2, 0], white)
  box(model, [WIDTH, BOARD, DEPTH], [0, HEIGHT / 2 - BOARD / 2, 0], white)
  box(model, [WIDTH - .06, .006, DEPTH - .04], [0, HEIGHT / 2 + .002, 0], wood)
  for (const x of [-WIDTH / 2 + BOARD / 2, WIDTH / 2 - BOARD / 2, 0])
    box(model, [BOARD, HEIGHT - BOARD * 2, DEPTH], [x, 0, 0], white)
  box(model, [WIDTH - BOARD * 2, HEIGHT - BOARD * 2, .014], [0, 0, -DEPTH / 2 + .007], white)

  // Rear mounting bracket and screw heads, visible with the rear camera preset.
  box(model, [.38, .12, .025], [0, 0, -.217], black)
  for (const x of [-.19, .19]) box(model, [.04, .20, .014], [x, 0, -.224], black)
  function screw(parent: THREE.Object3D, x: number, y: number, z: number) {
    const geo = new THREE.CylinderGeometry(.004, .004, .002, 12); geometries.add(geo)
    const mesh = new THREE.Mesh(geo, steel); mesh.rotation.x = Math.PI / 2; mesh.position.set(x, y, z); parent.add(mesh)
    box(parent, [.005, .0009, .001], [x, y, z - .002], black, 0)
  }
  for (const x of [-.19, .19, -.53, .53]) for (const y of [-.07, .07]) screw(model, x, y, -.234)

  const drawers: THREE.Group[] = []
  const rails: THREE.Mesh[] = []
  const opened = [false, false]
  const targets = [0, 0]
  const frontWidth = .563, frontHeight = .245
  // Extruded outline creates an actual finger notch, not a black painted handle.
  const shape = new THREE.Shape()
  shape.moveTo(-frontWidth / 2, -frontHeight / 2)
  shape.lineTo(frontWidth / 2, -frontHeight / 2)
  shape.lineTo(frontWidth / 2, frontHeight / 2)
  shape.lineTo(.067, frontHeight / 2)
  shape.quadraticCurveTo(.062, frontHeight / 2, .058, frontHeight / 2 - .012)
  shape.quadraticCurveTo(.054, frontHeight / 2 - .025, .045, frontHeight / 2 - .025)
  shape.lineTo(-.045, frontHeight / 2 - .025)
  shape.quadraticCurveTo(-.054, frontHeight / 2 - .025, -.058, frontHeight / 2 - .012)
  shape.quadraticCurveTo(-.062, frontHeight / 2, -.067, frontHeight / 2)
  shape.lineTo(-frontWidth / 2, frontHeight / 2); shape.closePath()
  const frontGeometry = new THREE.ExtrudeGeometry(shape, { depth: .019, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: .0015, bevelThickness: .0015, curveSegments: 12 })
  // Front UVs use furniture-scale coordinates for consistent grain across the face.
  const uv = frontGeometry.getAttribute('uv'), positions = frontGeometry.getAttribute('position')
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (positions.getX(i) + frontWidth / 2) / frontWidth, (positions.getY(i) + frontHeight / 2) / frontHeight)
  geometries.add(frontGeometry)
  for (let i = 0; i < 2; i++) {
    const drawer = new THREE.Group(); drawer.name = i === 0 ? 'Cajon_izquierdo' : 'Cajon_derecho'
    drawer.position.x = i === 0 ? -.293 : .293
    drawer.userData.drawerIndex = i; model.add(drawer); drawers.push(drawer)
    const front = new THREE.Mesh(frontGeometry, wood)
    front.position.z = .186; front.castShadow = front.receiveShadow = true; drawer.add(front)
    box(drawer, [.524, .012, .332], [0, -.105, .005], inner)
    for (const x of [-.254, .254]) box(drawer, [.016, .173, .332], [x, -.025, .005], inner)
    box(drawer, [.508, .173, .014], [0, -.025, -.154], inner)
    // Fixed outer rails, half-travel centre rails, and moving drawer rails.
    for (const side of [-1, 1]) {
      const x = drawer.position.x + side * .273
      box(model, [.007, .027, .32], [x, -.055, 0], steel, .0008)
      const rail = box(model, [.005, .019, .30], [x - side * .003, -.055, 0], steel, .0006)
      rail.userData.drawerIndex = i; rails.push(rail)
      box(drawer, [.004, .012, .30], [side * .267, -.055, .004], steel, .0006)
      box(drawer, [.007, .018, .035], [side * .267, -.055, .13], black, .001)
    }
  }
  box(model, [1.08, .006, .014], [0, -.154, -.10], ledMaterial)
  const leds: THREE.PointLight[] = []
  for (const x of [-.43, 0, .43]) {
    const light = new THREE.PointLight('#ffd18a', .35, 1.2, 2)
    light.position.set(x, -.19, -.06); model.add(light); leds.push(light)
  }
  // Studio floor rather than an opaque wall, so rear views remain unobstructed.
  const floorMat = new THREE.MeshStandardMaterial({ color: '#ded6c8', roughness: .95 })
  materials.add(floorMat)
  const floor = box(scene, [200, .02, 200], [0, -.65, 0], floorMat, 0)
  floor.castShadow = false

  let disposed = false, visible = true, frame = 0, framesLeft = 0, lastTime = 0
  let cameraTween: { from: THREE.Spherical; to: THREE.Spherical; start: number } | null = null
  const destination = new THREE.Vector3()
  function requestRender() {
    framesLeft = Math.max(framesLeft, 90)
    if (!frame && !disposed && visible && !document.hidden) frame = requestAnimationFrame(render)
  }
  function render(now: number) {
    frame = -1 // Prevent change events during controls.update from scheduling duplicate RAFs.
    if (disposed || !visible || document.hidden) { frame = 0; return }
    const dt = Math.min((now - lastTime) / 1000 || .016, .05); lastTime = now
    const blend = reducedMotion.matches ? 1 : 1 - Math.exp(-10 * dt)
    drawers.forEach((drawer, i) => { drawer.position.z = THREE.MathUtils.lerp(drawer.position.z, targets[i], blend) })
    rails.forEach(rail => { rail.position.z = drawers[rail.userData.drawerIndex].position.z * .5 })
    if (cameraTween) {
      const t = reducedMotion.matches ? 1 : Math.min(1, (now - cameraTween.start) / 850)
      const eased = t * t * (3 - 2 * t)
      const s = new THREE.Spherical(
        THREE.MathUtils.lerp(cameraTween.from.radius, cameraTween.to.radius, eased),
        THREE.MathUtils.lerp(cameraTween.from.phi, cameraTween.to.phi, eased),
        THREE.MathUtils.lerp(cameraTween.from.theta, cameraTween.to.theta, eased))
      camera.position.copy(destination.setFromSpherical(s).add(focus))
      if (t === 1) cameraTween = null
    }
    controls.update()
    renderer.render(scene, camera)
    frame = 0
    if (--framesLeft > 0 || cameraTween) frame = requestAnimationFrame(render)
  }
  function setView(view: ViewName) {
    controls.enableDamping = false; controls.update(); controls.enableDamping = true
    const from = new THREE.Spherical().setFromVector3(camera.position.clone().sub(focus))
    const to = new THREE.Spherical().setFromVector3(new THREE.Vector3(...VIEWS[view]))
    // Keep the cabinet comfortably framed on narrower portrait canvases.
    to.radius *= Math.max(1, .95 / camera.aspect)
    to.radius = Math.min(controls.maxDistance, to.radius)
    to.theta = from.theta + THREE.MathUtils.euclideanModulo(to.theta - from.theta + Math.PI, Math.PI * 2) - Math.PI
    cameraTween = { from, to, start: performance.now() }; requestRender()
  }
  function toggleDrawer(i: number) {
    if (i !== 0 && i !== 1) return
    opened[i] = !opened[i]; targets[i] = opened[i] ? DRAWER_TRAVEL : 0
    callbacks.onDrawer(i, opened[i]); requestRender()
  }
  function setLED(on: boolean) { ledMaterial.emissiveIntensity = on ? 3 : 0; leds.forEach(l => { l.intensity = on ? .35 : 0 }); requestRender() }
  function setFinish(name: string) { wood.color.set(name === 'Nogal' ? '#80604b' : '#ffffff'); requestRender() }
  function reset() {
    opened.fill(false); targets.fill(0); callbacks.onDrawer(0, false); callbacks.onDrawer(1, false)
    setFinish('Roble'); setLED(true); setView('Perspectiva')
  }
  function zoom(factor: number) {
    cameraTween = null
    const offset = camera.position.clone().sub(focus)
    offset.setLength(THREE.MathUtils.clamp(offset.length() * factor, controls.minDistance, controls.maxDistance))
    camera.position.copy(focus).add(offset); requestRender()
  }
  const onOrbit = () => { cameraTween = null; callbacks.onOrbit(); requestRender() }
  controls.addEventListener('start', onOrbit)
  controls.addEventListener('change', requestRender)
  let pointerStart = new THREE.Vector2(), activePointer = -1, wasMultiTouch = false
  const activePointers = new Set<number>()
  const onDown = (e: PointerEvent) => {
    activePointers.add(e.pointerId)
    if (activePointers.size > 1) wasMultiTouch = true
    if (activePointers.size === 1) { wasMultiTouch = false; activePointer = e.pointerId; pointerStart.set(e.clientX, e.clientY) }
  }
  const onUp = (e: PointerEvent) => {
    activePointers.delete(e.pointerId)
    if (e.type === 'pointercancel' || wasMultiTouch || e.pointerId !== activePointer || Math.hypot(e.clientX - pointerStart.x, e.clientY - pointerStart.y) > 5) return
    const rect = renderer.domElement.getBoundingClientRect()
    const pointer = new THREE.Vector2((e.clientX - rect.left) / rect.width * 2 - 1, -(e.clientY - rect.top) / rect.height * 2 + 1)
    const ray = new THREE.Raycaster(); ray.setFromCamera(pointer, camera)
    // Raycast the whole cabinet first: a hidden drawer cannot be clicked through its back.
    let object: THREE.Object3D | null = ray.intersectObject(model, true)[0]?.object ?? null
    while (object && object !== model) {
      if (typeof object.userData.drawerIndex === 'number' && drawers.includes(object as THREE.Group)) { toggleDrawer(object.userData.drawerIndex); break }
      object = object.parent
    }
  }
  const onLost = (e: Event) => { e.preventDefault(); cancelAnimationFrame(frame); frame = 0; visible = false; callbacks.onError() }
  renderer.domElement.addEventListener('pointerdown', onDown)
  renderer.domElement.addEventListener('pointerup', onUp)
  renderer.domElement.addEventListener('pointercancel', onUp)
  renderer.domElement.addEventListener('webglcontextlost', onLost)
  const resize = () => {
    const width = Math.max(1, host.clientWidth), height = Math.max(1, host.clientHeight)
    camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height, false); requestRender()
  }
  const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(host)
  const intersection = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting
    if (visible) requestRender()
    else { cancelAnimationFrame(frame); frame = 0 }
  }); intersection.observe(host)
  const onVisibility = () => { if (document.hidden) { cancelAnimationFrame(frame); frame = 0 } else requestRender() }
  document.addEventListener('visibilitychange', onVisibility)
  resize()
  camera.position.copy(focus).add(new THREE.Vector3(...VIEWS.Perspectiva).multiplyScalar(Math.max(1, .95 / camera.aspect)))
  controls.update(); requestRender()
  return { toggleDrawer, setView, setLED, setFinish, zoom, reset, dispose() {
    disposed = true; cancelAnimationFrame(frame)
    resizeObserver.disconnect(); intersection.disconnect()
    document.removeEventListener('visibilitychange', onVisibility)
    renderer.domElement.removeEventListener('pointerdown', onDown)
    renderer.domElement.removeEventListener('pointerup', onUp)
    renderer.domElement.removeEventListener('pointercancel', onUp)
    renderer.domElement.removeEventListener('webglcontextlost', onLost)
    controls.removeEventListener('start', onOrbit); controls.removeEventListener('change', requestRender); controls.dispose()
    geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose())
    grain.dispose(); bump.dispose(); environment.dispose(); key.shadow.map?.dispose()
    renderer.dispose(); renderer.domElement.remove()
  } }
}
