// ─────────────────────────────────────────────────────────────────────────────
// ScrollToHash — colócalo en el layout o en page.tsx del home
//
// Detecta si la URL tiene un hash (#filosofia, #materiales, etc.)
// y hace scroll suave al elemento correspondiente después de que la página carga.
// Funciona cuando llegas desde otra página (ej: /catalogo/bano → /#filosofia)
// ─────────────────────────────────────────────────────────────────────────────

'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    // Lee el hash de la URL del navegador
    const hash = window.location.hash
    if (!hash) return

    // Espera a que el DOM esté listo (pequeño delay por animaciones)
    const timeout = setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 300)

    return () => clearTimeout(timeout)
  }, [pathname])

  return null // No renderiza nada visible
}
