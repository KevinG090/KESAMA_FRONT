'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/config'
import { getVisibleCategories } from '@/data/catalog'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Lee categorías dinámicamente — si agregas/ocultas en catalog.ts, se refleja aquí
  const categories = getVisibleCategories({ move_materials_to_end: true })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cierra el menú móvil al navegar
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const handleLogoClick = () => {
    setMenuOpen(false)
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
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

          {/* Logo → home */}
          <button
            onClick={handleLogoClick}
            className="text-2xl font-bold tracking-tighter text-[#1b1c1a] hover:text-[#535353] transition-colors bg-transparent border-none cursor-pointer"
          >
            {siteConfig.companyName}
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-manrope tracking-tight font-medium uppercase text-xs text-[#4e453e] hover:text-[#1b1c1a] transition-colors"
            >
              Inicio
            </Link>

            {/* Dinámico: una entrada por cada categoría visible en catalog.ts */}
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/catalogo/${cat.slug}`}
                className="font-manrope tracking-tight font-medium uppercase text-xs text-[#4e453e] hover:text-[#1b1c1a] transition-colors"
              >
                { cat.title }
              </Link>
            ))}
          </div>

          {/* Iconos derecha */}
          <div className="flex items-center space-x-4">
            <button
              className="hover:opacity-70 transition-opacity duration-300 hidden md:block"
              aria-label="Buscar"
            >
              <span className="material-symbols-outlined text-[#535353]">search</span>
            </button>
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

      {/* Menú móvil */}
      <div
        className={`fixed inset-0 z-40 bg-[#fbf9f6]/98 backdrop-blur-xl pt-24 px-8 flex flex-col transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-1">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-left py-5 text-3xl font-bold tracking-tighter text-[#1b1c1a] hover:text-[#715a3e] transition-colors border-b border-[#d1c4ba]/20 block"
          >
            Inicio
          </Link>

          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/catalogo/${cat.slug}`}
              onClick={() => setMenuOpen(false)}
              className="text-left py-3 text-2xl font-bold tracking-tighter text-[#1b1c1a] hover:text-[#715a3e] transition-colors border-b border-[#d1c4ba]/20 block"
              style={{ animationDelay: `${(i + 1) * 60}ms` }}
            >
              {cat?.second_title ?? cat.title} {cat.titleAccent}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}