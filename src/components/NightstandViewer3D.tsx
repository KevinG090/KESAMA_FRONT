'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './NightstandViewer3D.module.css'
import type { ViewerAPI, ViewName } from '@/lib/nightstandScene'

const views: ViewName[] = ['Perspectiva', 'Frontal', 'Lateral', 'Superior', 'Trasera']

export default function NightstandViewer3D() {
  const host = useRef<HTMLDivElement>(null)
  const api = useRef<ViewerAPI | null>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [drawers, setDrawers] = useState([false, false])
  const [led, setLed] = useState(true)
  const [finish, setFinish] = useState('Roble')
  const [view, setView] = useState<string>('Perspectiva')
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let cancelled = false
    import('@/lib/nightstandScene').then(({ createNightstandScene }) => {
      if (cancelled || !host.current) return
      try {
        api.current = createNightstandScene(host.current, {
          onDrawer: (index, open) => setDrawers(old => old.map((v, i) => i === index ? open : v)),
          onOrbit: () => setView('Libre'),
          onError: () => setStatus('error'),
        })
        setStatus('ready')
      } catch { setStatus('error') }
    }).catch(() => { if (!cancelled) setStatus('error') })
    return () => { cancelled = true; api.current?.dispose(); api.current = null }
  }, [attempt])

  const reset = () => {
    api.current?.reset(); setDrawers([false, false]); setLed(true); setFinish('Roble'); setView('Perspectiva')
  }
  return <div className={styles.viewer}>
    <div className={styles.stage}>
      <div ref={host} className={styles.canvas} role="img" aria-label="Modelo tridimensional de mesita flotante con dos cajones. Usa los controles inferiores como alternativa al arrastre." />
      <div className={styles.badge}>NTS—02 <span>ESTUDIO INTERACTIVO</span></div>
      {status !== 'ready' && <div className={styles.overlay} role="status">
        <strong>{status === 'loading' ? 'Preparando tu pieza…' : 'El visor 3D no pudo iniciarse'}</strong>
        <p>{status === 'loading' ? 'Geometría y materiales generados en tu dispositivo.' : 'Necesitas WebGL y aceleración gráfica. Puedes seguir consultando el resto del catálogo.'}</p>
        {status === 'error' && <button type="button" onClick={() => { reset(); setStatus('loading'); setAttempt(a => a + 1) }}>Reintentar</button>}
      </div>}
      <div className={styles.hint}>Arrastra para girar · Pellizca para acercar · Toca un cajón</div>
    </div>
    <fieldset disabled={status !== 'ready'} className={styles.controls}>
      <legend className={styles.srOnly}>Controles del mueble 3D</legend>
      <div className={styles.row} aria-label="Puntos de vista">
        {views.map(name => <button key={name} type="button" aria-pressed={view === name} onClick={() => { setView(name); api.current?.setView(name) }}>{name}</button>)}
      </div>
      <div className={styles.row}>
        {drawers.map((open, i) => <button key={i} type="button" aria-pressed={open} onClick={() => api.current?.toggleDrawer(i)}>{open ? 'Cerrar' : 'Abrir'} {i === 0 ? 'izquierdo' : 'derecho'}</button>)}
        <button type="button" aria-pressed={led} onClick={() => { api.current?.setLED(!led); setLed(!led) }}>LED {led ? 'encendido' : 'apagado'}</button>
      </div>
      <div className={styles.bottom}>
        <div className={styles.row} aria-label="Acabado de madera">{['Roble', 'Nogal'].map(name => <button type="button" key={name} aria-pressed={finish === name} onClick={() => { setFinish(name); api.current?.setFinish(name) }}><span className={styles.swatch} style={{ background: name === 'Roble' ? '#b38a53' : '#65412c' }} />{name}</button>)}</div>
        <div className={styles.row}>
          <button type="button" aria-label="Alejar" onClick={() => api.current?.zoom(1.15)}>−</button>
          <button type="button" aria-label="Acercar" onClick={() => api.current?.zoom(.87)}>+</button>
          <button type="button" onClick={reset}>Restablecer</button>
        </div>
      </div>
      <p className={styles.note}>Modelo conceptual basado en referencia visual. Proporciones y herrajes aproximados.</p>
      <span className={styles.srOnly} aria-live="polite">Cajón izquierdo {drawers[0] ? 'abierto' : 'cerrado'}. Cajón derecho {drawers[1] ? 'abierto' : 'cerrado'}.</span>
    </fieldset>
  </div>
}
