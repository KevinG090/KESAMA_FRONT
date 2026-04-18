'use client'

import { useEffect, useRef } from 'react'
import { getWhatsappProductUrl } from '@/lib/config'

interface CategoryProduct {
  id: string
  name: string
  subtitle: string
  material: string
  dimensions?: string
  price?: string
  image: string
}

interface CategorySectionProps {
  id: string
  title: string
  titleAccent?: string
  description: string
  badge: string
  products: CategoryProduct[]
  heroImage: string
  heroProduct?: CategoryProduct
  reversed?: boolean
  bgLight?: boolean
}

export default function CategorySection({
  id,
  title,
  titleAccent,
  description,
  badge,
  products,
  heroImage,
  heroProduct,
  reversed = false,
  bgLight = false,
}: CategorySectionProps) {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      className={`py-24 ${bgLight ? 'bg-[#f5f3f0]' : 'bg-[#fbf9f6]'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div ref={headerRef} className="animate-on-scroll mb-16">
          <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-end`}>
            <div className="md:col-span-7">
              <span className="text-[#715a3e] font-bold text-xs uppercase tracking-widest block mb-4">
                {badge}
              </span>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#1b1c1a] leading-[0.9]">
                {title}
                {titleAccent && (
                  <>
                    <br />
                    <span className="text-[#715a3e]">{titleAccent}</span>
                  </>
                )}
              </h2>
            </div>
            <div className="md:col-span-5 md:text-right">
              <p className="text-[#4e453e] text-lg leading-relaxed max-w-sm md:ml-auto">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Hero product (featured) */}
        {heroProduct && (
          <div
            className={`mb-20 grid grid-cols-1 md:grid-cols-10 gap-0 items-stretch bg-[#ffffff] rounded-sm overflow-hidden shadow-[0_10px_60px_rgba(27,28,26,0.05)] ${
              reversed ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className={`md:col-span-6 h-[500px] md:h-[560px] relative ${reversed ? 'md:order-2' : ''}`}>
              <img
                src={heroImage}
                alt={heroProduct.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className={`md:col-span-4 p-10 md:p-14 flex flex-col justify-center bg-[#ffffff] ${reversed ? 'md:order-1' : ''}`}>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[#1b1c1a]">
                {heroProduct.name}
              </h3>
              <div className="space-y-3 mb-10">
                <div className="flex justify-between items-center pb-2" style={{ borderBottom: '1px solid rgba(209,196,186,0.2)' }}>
                  <span className="text-[#4e453e] text-sm">Material</span>
                  <span className="font-medium text-[#1b1c1a]">{heroProduct.material}</span>
                </div>
                {heroProduct.dimensions && (
                  <div className="flex justify-between items-center pb-2" style={{ borderBottom: '1px solid rgba(209,196,186,0.2)' }}>
                    <span className="text-[#4e453e] text-sm">Dimensiones</span>
                    <span className="font-medium text-[#1b1c1a]">{heroProduct.dimensions}</span>
                  </div>
                )}
                {heroProduct.price && (
                  <div className="flex justify-between items-center pb-2" style={{ borderBottom: '1px solid rgba(209,196,186,0.2)' }}>
                    <span className="text-[#4e453e] text-sm">Precio</span>
                    <span className="font-bold text-[#535353]">{heroProduct.price}</span>
                  </div>
                )}
              </div>
              <a
                href={getWhatsappProductUrl(heroProduct.name, title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#535353] text-white py-4 px-8 text-xs font-bold tracking-widest uppercase hover:bg-[#715a3e] transition-all duration-300 active:scale-95 self-start"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar Disponibilidad
              </a>
            </div>
          </div>
        )}

        {/* Product grid */}
        {products.length > 0 && (
          <div ref={gridRef} className="animate-on-scroll grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-[4/5] bg-[#efeeeb] relative mb-5 overflow-hidden rounded-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold tracking-tight text-[#1b1c1a] mb-1">
                      {product.name}
                    </h4>
                    <p className="text-[#4e453e] text-xs mb-4">{product.subtitle}</p>
                    <a
                      href={getWhatsappProductUrl(product.name, title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#715a3e] text-xs font-bold uppercase tracking-widest hover:text-[#535353] transition-colors inline-flex items-center gap-1"
                    >
                      Consultar →
                    </a>
                  </div>
                  {product.price && (
                    <span className="text-[#535353] font-semibold text-sm">{product.price}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
