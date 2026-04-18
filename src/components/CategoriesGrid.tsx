'use client'

import { useEffect, useRef } from 'react'
import { categories } from '@/data/products'

const bentoLayout = [
  { id: 'escritorios', col: 'md:col-span-2 md:row-span-2', height: 'h-64 md:h-full' },
  { id: 'comedores',  col: 'md:col-span-2 md:row-span-1', height: 'h-48 md:h-full' },
  { id: 'cocinas',    col: 'md:col-span-2 md:row-span-1', height: 'h-48 md:h-full' },
  { id: 'puertas',    col: 'md:col-span-2 md:row-span-1', height: 'h-48 md:h-full' },
  { id: 'materiales', col: 'md:col-span-1 md:row-span-1', height: 'h-48 md:h-full' },
  { id: 'vestidores', col: 'md:col-span-1 md:row-span-2', height: 'h-64 md:h-full' },
  { id: 'mesitas',    col: 'md:col-span-2 md:row-span-1', height: 'h-48 md:h-full' },
]

export default function CategoriesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  const scrollToSection = (slug: string) => {
    const el = document.getElementById(slug)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="categorias" className="px-6 md:px-12 py-12 max-w-[1920px] mx-auto">
      {/* Section header */}
      <div ref={sectionRef} className="animate-on-scroll mb-10">
        <span className="text-[#715a3e] font-bold text-xs uppercase tracking-widest block mb-3">
          Colecciones
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1b1c1a] leading-none">
          Cada espacio, <br />
          <span className="text-[#535353]">una pieza de autor</span>
        </h2>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:h-[900px]">
        {bentoLayout.map(({ id, col, height }) => {
          const cat = categories.find((c) => c.id === id)
          if (!cat) return null
          return (
            <div
              key={id}
              className={`${col} ${height} group relative overflow-hidden rounded-sm bg-[#f5f3f0] cursor-pointer`}
              onClick={() => scrollToSection(cat.slug)}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover grayscale-[0.25] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1">
                  {cat.name}
                </h3>
                <span className="text-white/70 text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver Catálogo →
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
