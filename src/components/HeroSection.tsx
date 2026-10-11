'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '@/lib/config'

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [headingRef.current, subRef.current, btnRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(32px)'
      setTimeout(() => {
        if (!el) return
        el.style.transition = 'opacity 0.9s ease-out, transform 0.9s ease-out'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 300 + i * 180)
    })
  }, [])

  const scrollToCategories = () => {
    document.querySelector('#categorias')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="px-6 md:px-12 mb-20 pt-24">
      <div className="relative h-[70vh] min-h-[540px] md:h-[85vh] md:min-h-[600px] max-h-[900px] w-full overflow-hidden rounded-lg">
        {/* Hero: el mismo centro de entretenimiento con LEDs encendidos (abajo) y con
            las lámparas de pared (arriba, se desvanece en bucle). Cada versión con
            lámparas está alineada sobre su par con LEDs para que el fundido no se vea
            doble. En móvil (< md) se usan las fotos verticales. */}
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/centro_entretenimiento/hero-led-mobile.webp" />
          <img
            src="/images/centro_entretenimiento/hero-led.webp"
            alt="Centro de entretenimiento KESAMA en tono nogal con panel efecto mármol e iluminación LED integrada"
            className="absolute inset-0 w-full h-full object-cover object-[38%_50%] md:object-[45%_50%]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/centro_entretenimiento/hero-lamparas-mobile.webp" />
          <img
            src="/images/centro_entretenimiento/hero-lamparas.webp"
            alt=""
            aria-hidden="true"
            className="hero-lights-swap absolute inset-0 w-full h-full object-cover object-[38%_50%] md:object-[45%_50%]"
            loading="eager"
          />
        </picture>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-20">
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-6 max-w-4xl leading-[0.9] text-shadow-subtle"
          >
            {siteConfig.tagline}
          </h1>
          <p
            ref={subRef}
            className="text-white/85 text-lg md:text-xl font-light max-w-lg mb-10 leading-relaxed"
          >
            {siteConfig.heroSubtitle}
          </p>
          <div ref={btnRef} className="flex gap-4 mb-24 md:mb-0">
            <button
              onClick={scrollToCategories}
              className="bg-[#535353] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#6c6b6b] transition-all duration-300 active:scale-95"
            >
              Ver Colección
            </button>
            <button
              onClick={() => document.querySelector('#filosofia')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/40 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
            >
              Nuestra Historia
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
