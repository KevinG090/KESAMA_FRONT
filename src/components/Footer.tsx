'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/config'

const footerLinks = {
  colecciones: [
    { label: 'Escritorios', href: '#escritorios' },
    { label: 'Comedores', href: '#comedores' },
    { label: 'Cocinas', href: '#cocinas' },
    { label: 'Puertas', href: '#puertas' },
    { label: 'Vestidores', href: '#vestidores' },
    { label: 'Mesitas de Noche', href: '#mesitas-de-noche' },
  ],
  compania: [
    { label: 'Filosofía', href: '#filosofia' },
    { label: 'Materiales', href: '#materiales' },
    { label: 'Sostenibilidad', href: '#filosofia' },
    { label: 'Contacto', href: `https://wa.me/${siteConfig.whatsappNumber}` },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="w-full py-20 px-6 md:px-12 bg-[#efeeeb]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col">
            <span className="text-2xl font-bold text-[#1b1c1a] tracking-tighter mb-5">
              {siteConfig.companyName}
            </span>
            <p className="text-sm text-[#535353] leading-relaxed max-w-xs mb-8">
              Elevando el estándar del diseño en madera a través de la maestría artesanal y la
              visión contemporánea.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {siteConfig.socialLinks.instagram && (
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4e453e] hover:text-[#715a3e] transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Collections */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1b1c1a] mb-1">
              Colecciones
            </span>
            {footerLinks.colecciones.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm text-[#4e453e] hover:text-[#715a3e] transition-colors bg-transparent border-none p-0 cursor-pointer font-manrope"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1b1c1a] mb-1">
              Compañía
            </span>
            {footerLinks.compania.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={link.href.startsWith('#') ? (e) => { e.preventDefault(); handleNavClick(link.href) } : undefined}
                className="text-sm text-[#4e453e] hover:text-[#715a3e] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1b1c1a] mb-4">
              Newsletter
            </span>
            <p className="text-xs text-[#535353] mb-5 leading-relaxed">
              Suscríbete para recibir lanzamientos de nuevas colecciones y eventos exclusivos.
            </p>
            {subscribed ? (
              <p className="text-[#715a3e] font-bold text-sm">¡Gracias por suscribirte!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-0" style={{ borderBottom: '1px solid rgba(209,196,186,0.4)' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="bg-transparent border-none focus:outline-none text-sm w-full py-2 text-[#1b1c1a] placeholder:text-[#80756d]"
                />
                <button
                  type="submit"
                  className="text-[#1b1c1a] hover:text-[#715a3e] transition-colors flex-shrink-0"
                  aria-label="Suscribirse"
                >
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(209,196,186,0.2)' }}
        >
          <span className="text-xs text-[#535353]">
            © {new Date().getFullYear()} {siteConfig.companyName}. Artesanía en Madera de Alta Gama.
          </span>
          <div className="flex gap-6">
            <span className="text-xs font-medium text-[#4e453e] cursor-pointer hover:text-[#715a3e] transition-colors">
              Política de Privacidad
            </span>
            <span className="text-xs font-medium text-[#4e453e] cursor-pointer hover:text-[#715a3e] transition-colors">
              Términos y Condiciones
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
