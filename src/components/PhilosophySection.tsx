'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { value: '100%', label: 'Sostenible' },
  { value: '100%', label: 'Calidad' },
  { value: '∞', label: 'Durabilidad y Garantía' },

]

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="filosofia" className="py-36 px-6 md:px-12 bg-[#fbf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image side */}
        <div className="relative">
          <div className="aspect-square bg-[#f5f3f0] rounded-sm overflow-hidden max-w-md ml-auto relative z-10">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5SZdoXD3ms_CxWMzs8KZ3Cy0QUzs3SyayxVHbBB1OrBIbKjyE_LkAGiwSfjH8VSt5AX9S7GuSw3H5R2cHKYcSooU_CIQvDQgrFcQM7z2Y5jtTLnne5oVAG3gm4MbVdTopc2JyFfpRUMybqjE00M_saxvt6CYokotWd3dUiQY4DmI1nQt_gsXJufypbSgzu1I10YF_TxYxszA2v9lb6oj6HMGlhB9-MRZr7f2ITF4eeg7LNGQy0LZeWnY_4-PMoAp4o7jjwi46"
              alt="Artesano trabajando en madera en taller iluminado"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Quote card */}
          <div
            className="absolute -bottom-6 -left-4 md:-left-8 w-72 bg-[#fdddb9] p-7 hidden md:block"
            style={{ borderRadius: '0.125rem' }}
          >
            <p className="text-[#786044] font-medium text-sm leading-relaxed italic">
              &ldquo;La madera respira, nosotros simplemente le damos una nueva forma para habitar su mundo.&rdquo;
            </p>
          </div>
          {/* Decorative dot */}
          <div className="absolute top-8 -left-4 w-3 h-3 bg-[#715a3e] rounded-full opacity-60" />
        </div>

        {/* Text side */}
        <div ref={ref} className="animate-on-scroll">
          <span className="text-[#715a3e] font-bold text-xs uppercase tracking-widest block mb-6">
            Nuestra Filosofía
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight text-[#1b1c1a]">
            El Respeto al Tiempo <br />y la Materia
          </h2>
          <div className="space-y-6 text-[#4e453e] leading-relaxed text-lg mb-12">
            <p>
              En KESAMA, cada pieza comienza con la selección rigurosa de maderas nobles
              de origen sostenible. Entendemos el diseño no como un proceso industrial,
              sino como un diálogo entre la mano del artesano y la veta natural.
            </p>
            <p>
              No fabricamos muebles; creamos herencias. Nuestros procesos combinan la
              precisión de la tecnología moderna con técnicas ancestrales de ebanistería
              para garantizar que cada ensamblaje sea una promesa de durabilidad.
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-[#535353] font-extrabold text-3xl">{s.value}</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#80756d]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
