'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/lib/config'

const navLinks = [
  { label: 'Escritorios', href: '#escritorios' },
  { label: 'Comedores', href: '#comedores' },
  { label: 'Cocinas', href: '#cocinas' },
  { label: 'Puertas', href: '#puertas' },
  { label: 'Materiales', href: '#materiales' },
  { label: 'Vestidores', href: '#vestidores' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#fbf9f6]/90 backdrop-blur-xl shadow-sm shadow-[#1b1c1a]/5'
            : 'bg-[#fbf9f6]/80 backdrop-blur-xl'
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-[1920px] mx-auto">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold tracking-tighter text-[#1b1c1a] hover:text-[#535353] transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {siteConfig.companyName}
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-manrope tracking-tight font-medium uppercase text-xs text-[#4e453e] hover:text-[#1b1c1a] transition-colors cursor-pointer border-none bg-transparent"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <button
              className="hover:opacity-70 transition-opacity duration-300 hidden md:block"
              aria-label="Buscar"
            >
              <span className="material-symbols-outlined text-[#535353]">search</span>
            </button>
            {/* Mobile menu button */}
            <button
              className="md:hidden hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              <span className="material-symbols-outlined text-[#535353]">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#fbf9f6]/98 backdrop-blur-xl pt-24 px-8 flex flex-col transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-1">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left py-5 text-3xl font-bold tracking-tighter text-[#1b1c1a] hover:text-[#715a3e] transition-colors border-b border-[#d1c4ba]/20 bg-transparent border-t-0 border-l-0 border-r-0"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
