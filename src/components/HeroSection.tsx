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
      <div className="relative h-[85vh] min-h-[600px] max-h-[900px] w-full overflow-hidden rounded-lg">
        {/* Hero image */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmpnXEPnua7eHFdFueJHZvRqvqDYN8e_WyjJPDRsWPOPw5AnZ6NgVt2WQRdVS1oxhfckFkQ_pqrwwI5mzc7yiu03_hlXxSiAyyTNkhaLyecbGSgiR2B_5McqKk3Nh-IoeiKXwPEAWw6CcLCx4wvStAsm2yI_alKTiGv_j355cOsP-ox-Xbpc9P_q0B7MgI2S30K5nLawGqjJ3RE75KRJFX1o-kkGdly4fyeCO8Or2Lt-4pfpCjUDtFrVtrtKLQ71QfsoNFdoED"
          alt="Interior minimalista de lujo con paneles de madera de roble"
          className="w-full h-full object-cover"
          loading="eager"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

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
          <div ref={btnRef} className="flex gap-4">
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-60">
          <span className="text-white text-[10px] uppercase tracking-widest font-bold writing-mode-vertical">
            Scroll
          </span>
          <div className="w-px h-12 bg-white/60 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
