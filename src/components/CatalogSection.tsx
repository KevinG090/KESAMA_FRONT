'use client'

import { useEffect, useRef, useState } from 'react'
import type { CatalogCategory, CatalogProduct } from '@/data/catalog'
import { getWhatsappProductUrl } from '@/lib/config'

// WhatsApp SVG icon
function WAIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// Tag badge
function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block bg-[#715a3e] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
      {label}
    </span>
  )
}

// Hero product — large asymmetric editorial card
function HeroProduct({ product, categoryTitle }: { product: CatalogProduct; categoryTitle: string }) {
  const waUrl = getWhatsappProductUrl(product.name, categoryTitle)
  return (
    <div className="grid grid-cols-1 md:grid-cols-10 gap-0 bg-white rounded-sm overflow-hidden shadow-[0_16px_80px_rgba(27,28,26,0.06)] mb-20">
      {/* Image */}
      <div className="md:col-span-6 h-[480px] md:h-[600px] relative group overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
        />
        {product.tag && (
          <div className="absolute top-6 left-6">
            <Tag label={product.tag} />
          </div>
        )}
      </div>

      {/* Details */}
      <div className="md:col-span-4 p-10 md:p-14 flex flex-col justify-center">
        <div className="mb-6">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1b1c1a] mb-2">
            {product.name}
          </h3>
          <p className="text-[#715a3e] font-semibold text-sm">{product.subtitle}</p>
        </div>

        <p className="text-[#4e453e] text-sm leading-relaxed mb-8">{product.description}</p>

        {/* Specs */}
        <div className="space-y-2.5 mb-8">
          {product.material && (
            <div className="flex justify-between items-center pb-2" style={{ borderBottom: '1px solid rgba(209,196,186,0.2)' }}>
              <span className="text-[#80756d] text-xs uppercase tracking-wider font-semibold">Material</span>
              <span className="font-medium text-[#1b1c1a] text-sm text-right max-w-[55%]">{product.material}</span>
            </div>
          )}
          {product.dimensions && (
            <div className="flex justify-between items-center pb-2" style={{ borderBottom: '1px solid rgba(209,196,186,0.2)' }}>
              <span className="text-[#80756d] text-xs uppercase tracking-wider font-semibold">Dimensiones</span>
              <span className="font-medium text-[#1b1c1a] text-sm">{product.dimensions}</span>
            </div>
          )}
          {product.finish && (
            <div className="flex justify-between items-center pb-2" style={{ borderBottom: '1px solid rgba(209,196,186,0.2)' }}>
              <span className="text-[#80756d] text-xs uppercase tracking-wider font-semibold">Acabado</span>
              <span className="font-medium text-[#1b1c1a] text-sm text-right max-w-[55%]">{product.finish}</span>
            </div>
          )}
        </div>

        {/* Features */}
        {product.features.length > 0 && (
          <div className="mb-8">
            <p className="text-[#80756d] text-xs uppercase tracking-wider font-semibold mb-3">Características</p>
            <ul className="space-y-2">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#4e453e]">
                  <span className="text-[#715a3e] mt-0.5 flex-shrink-0">—</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#715a3e] text-white py-4 px-8 text-xs font-bold uppercase tracking-widest hover:bg-[#535353] transition-colors duration-300 active:scale-95 self-start"
        >
          <WAIcon />
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  )
}

// Standard product card
function ProductCard({ product, categoryTitle, index }: { product: CatalogProduct; categoryTitle: string; index: number }) {
  const waUrl = getWhatsappProductUrl(product.name, categoryTitle)
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="group bg-white rounded-sm overflow-hidden shadow-[0_4px_40px_rgba(27,28,26,0.04)] hover:shadow-[0_8px_60px_rgba(27,28,26,0.10)] transition-shadow duration-500"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="aspect-[4/3] relative overflow-hidden bg-[#f5f3f0]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {product.tag && (
          <div className="absolute top-4 left-4">
            <Tag label={product.tag} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="mb-4">
          <h4 className="text-xl font-bold tracking-tight text-[#1b1c1a] mb-1">{product.name}</h4>
          <p className="text-[#715a3e] text-xs font-semibold">{product.subtitle}</p>
        </div>

        <p className="text-[#4e453e] text-sm leading-relaxed mb-5 line-clamp-3">{product.description}</p>

        {/* Quick specs */}
        <div className="flex flex-wrap gap-2 mb-5">
          {product.material && (
            <span className="bg-[#f5f3f0] text-[#4e453e] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1">
              {product.material.split(' ')[0]}
            </span>
          )}
          {product.finish && (
            <span className="bg-[#f5f3f0] text-[#4e453e] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1">
              {product.finish.split(' ').slice(0, 2).join(' ')}
            </span>
          )}
          {product.dimensions && (
            <span className="bg-[#f5f3f0] text-[#4e453e] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1">
              {product.dimensions.split('—')[0].trim()}
            </span>
          )}
        </div>

        {/* Features expandable */}
        {product.features.length > 0 && (
          <div className="mb-5">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[#535353] text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:text-[#715a3e] transition-colors bg-transparent border-none p-0 cursor-pointer"
            >
              {expanded ? 'Menos detalles' : 'Ver detalles'}
              <span className="material-symbols-outlined text-sm">
                {expanded ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {expanded && (
              <ul className="mt-3 space-y-1.5">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#4e453e]">
                    <span className="text-[#715a3e] flex-shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 justify-center w-full bg-[#1b1c1a] text-white py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#715a3e] transition-colors duration-300"
        >
          <WAIcon size={13} />
          Consultar
        </a>
      </div>
    </div>
  )
}

// Materials/finishes pill list
function PillList({ items, label }: { items: string[]; label: string }) {
  return (
    <div>
      <p className="text-[#80756d] text-xs uppercase tracking-wider font-semibold mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="border border-[#d1c4ba]/60 text-[#4e453e] text-xs font-medium px-3 py-1.5 hover:border-[#715a3e] hover:text-[#715a3e] transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Main CatalogSection export ────────────────────────────────────────────────

export default function CatalogSection({ category }: { category: CatalogCategory }) {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  const isLight = ['comedores', 'puertas', 'materiales'].includes(category.id)

  return (
    <section
      id={category.slug}
      className={`py-28 ${isLight ? 'bg-[#f5f3f0]' : 'bg-[#fbf9f6]'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* ── Section header ── */}
        <div ref={headerRef} className="animate-on-scroll mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <span className="text-[#715a3e] font-bold text-xs uppercase tracking-widest block mb-4">
                {category.badge}
              </span>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#1b1c1a] leading-[0.88]">
                {category.title}
                <br />
                <span className="text-[#715a3e]">{category.titleAccent}</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-[#4e453e] text-lg leading-relaxed mb-6">{category.description}</p>
              {/* Materials & finishes */}
              <div className="space-y-4">
                <PillList items={category.materials} label="Maderas disponibles" />
                <PillList items={category.finishes} label="Acabados" />
              </div>
            </div>
          </div>

          {/* Hero description strip */}
          <div className="mt-12 bg-[#fdddb9]/40 p-8 rounded-sm border-l-2 border-[#715a3e]">
            <p className="text-[#4e453e] text-base leading-relaxed italic max-w-3xl">
              &ldquo;{category.heroDescription}&rdquo;
            </p>
          </div>
        </div>

        {/* ── Hero product ── */}
        <HeroProduct product={category.heroProduct} categoryTitle={category.title} />

        {/* ── Product grid ── */}
        {category.products.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl font-bold tracking-tight text-[#1b1c1a]">
                Más de la colección
              </h3>
              <div className="flex-1 h-px bg-[#d1c4ba]/30" />
              <span className="text-[#80756d] text-xs font-semibold uppercase tracking-wider">
                {category.products.length} modelos
              </span>
            </div>

            <div ref={gridRef} className="animate-on-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  categoryTitle={category.title}
                  index={i}
                />
              ))}
            </div>
          </>
        )}

        {/* ── CTA strip ── */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-[#1b1c1a] rounded-sm">
          <div>
            <p className="text-white font-bold text-lg mb-1">¿Tienes un proyecto en mente?</p>
            <p className="text-white/60 text-sm">
              Nuestros diseñadores te acompañan desde la idea hasta la instalación.
            </p>
          </div>
          <a
            href={getWhatsappProductUrl(`proyecto de ${category.title}`, 'Consulta general')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#715a3e] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#535353] transition-colors"
          >
            <WAIcon />
            Iniciar mi proyecto
          </a>
        </div>
      </div>
    </section>
  )
}
