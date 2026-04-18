'use client'

import { useEffect, useRef } from 'react'
import { featuredProducts } from '@/data/products'
import { getWhatsappProductUrl } from '@/lib/config'

function ProductCard({
  product,
  offset = false,
}: {
  product: (typeof featuredProducts)[0]
  offset?: boolean
}) {
  const waUrl = getWhatsappProductUrl(product.name, product.category)

  return (
    <div className={`group ${offset ? 'md:mt-24' : ''}`}>
      <div className="aspect-[4/5] bg-[#ffffff] overflow-hidden rounded-sm mb-6 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        {/* Quick tag */}
        <div className="absolute top-4 left-4 bg-[#715a3e] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {product.category}
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h4 className="text-2xl font-bold tracking-tight mb-1 text-[#1b1c1a]">{product.name}</h4>
          <p className="text-[#4e453e] text-sm mb-5">{product.subtitle}</p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#715a3e] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#535353] transition-colors duration-300 active:scale-95"
          >
            {/* WhatsApp icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar por WhatsApp
          </a>
        </div>
        {product.price && (
          <span className="text-[#535353] font-bold text-base ml-4 mt-1 whitespace-nowrap">
            {product.price}
          </span>
        )}
      </div>
    </div>
  )
}

export default function FeaturedProducts() {
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    if (titleRef.current) observer.observe(titleRef.current)
    return () => observer.disconnect()
  }, [])

  // Show only the first 2 featured
  const highlighted = featuredProducts.filter((p) => p.featured)

  return (
    <section id="destacados" className="py-28 bg-[#f5f3f0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={titleRef} className="animate-on-scroll flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-[#715a3e] font-bold text-xs uppercase tracking-widest block mb-4">
              Selección Curada
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none text-[#1b1c1a]">
              Piezas de Autor
            </h2>
          </div>
          <p className="text-[#4e453e] max-w-sm text-sm leading-relaxed">
            Ediciones diseñadas para trascender tendencias, enfocadas en la pureza geométrica
            y el respeto al material.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {highlighted.map((product, i) => (
            <ProductCard key={product.id} product={product} offset={i % 2 !== 0} />
          ))}
        </div>

        {/* All products CTA */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => document.querySelector('#categorias')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-[#535353]/30 text-[#535353] px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#535353] hover:text-white transition-all duration-300"
          >
            Ver Todas las Colecciones
          </button>
        </div>
      </div>
    </section>
  )
}
