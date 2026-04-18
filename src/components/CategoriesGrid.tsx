'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { getVisibleCategories } from '@/data/catalog'

// ──────────────────────────────────────────────────────────────────────────────
// CategoriesGrid — completamente dinámico
// Las categorías se leen de catalog.ts.
// Para agregar/ocultar una categoría: edita el campo visible: true/false
// en el objeto correspondiente de catalog.ts. ¡No toques este archivo!
// ──────────────────────────────────────────────────────────────────────────────

// Layout bento: define el orden y el tamaño de columnas de cada celda.
// Si hay más categorías que entradas en el layout, usan el tamaño por defecto.
const bentoLayout: Record<string, { col: string; height: string }> = {
  escritorios: { col: 'md:col-span-2 md:row-span-2', height: 'h-64 md:h-full' },
  comedores:   { col: 'md:col-span-2 md:row-span-1', height: 'h-48 md:h-full' },
  cocinas:     { col: 'md:col-span-2 md:row-span-1', height: 'h-48 md:h-full' },
  puertas:     { col: 'md:col-span-2 md:row-span-1', height: 'h-48 md:h-full' },
  materiales:  { col: 'md:col-span-1 md:row-span-1', height: 'h-48 md:h-full' },
  vestidores:  { col: 'md:col-span-1 md:row-span-2', height: 'h-64 md:h-full' },
  bano:        { col: 'md:col-span-2 md:row-span-1', height: 'h-48 md:h-full' },
  'mesitas-de-noche': { col: 'md:col-span-2 md:row-span-1', height: 'h-48 md:h-full' },
}

const defaultLayout = { col: 'md:col-span-2 md:row-span-1', height: 'h-48 md:h-full' }

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

  // Solo categorías visibles, ordenadas por el campo order
  const categories = getVisibleCategories()

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
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:min-h-[900px]">
        {categories.map((cat) => {
          const layout = bentoLayout[cat.slug] ?? defaultLayout
          return (
            <div
              key={cat.id}
              className={`${layout.col} ${layout.height} group relative overflow-hidden rounded-sm bg-[#f5f3f0] cursor-pointer`}
            >
              {/* Background image */}
              <img
                src={cat.heroImage || cat.heroProduct.image}
                alt={`${cat.title} ${cat.titleAccent}`}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10 group-hover:from-black/75 group-hover:via-black/30 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                {/* Category name */}
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1 leading-tight">
                  {cat.title}{' '}
                  <span className="text-[#fdddb9]">{cat.titleAccent}</span>
                </h3>

                {/* Product count pill */}
                <p className="text-white/60 text-xs mb-4 font-medium">
                  {cat.products.length + 1} modelos disponibles
                </p>

                {/* "Ver más" → navega a /catalogo/[slug] en nueva pestaña exclusiva */}
                <Link
                  href={`/catalogo/${cat.slug}`}
                  className="
                    self-start
                    flex items-center gap-2
                    bg-[#715a3e] hover:bg-[#fdddb9]
                    text-white hover:text-[#1b1c1a]
                    text-[11px] font-bold uppercase tracking-widest
                    px-4 py-2.5
                    translate-y-2 opacity-0
                    group-hover:translate-y-0 group-hover:opacity-100
                    transition-all duration-300 ease-out
                    active:scale-95
                  "
                >
                  Ver más
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}