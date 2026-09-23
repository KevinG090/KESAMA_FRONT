import Link from 'next/link'
import Navbar from '@/components/Navbar'
import WhatsAppBubble from '@/components/WhatsAppBubble'
import Footer from '@/components/Footer'

export interface LegalSection {
  id: string
  title: string
}

interface LegalLayoutProps {
  title: string
  badge: string
  intro: string
  updated: string
  sections: LegalSection[]
  children: React.ReactNode
}

// ──────────────────────────────────────────────────────────────────────────────
// LegalLayout — cabecera, índice y chrome compartidos por las páginas legales
// (Términos y Condiciones, Política de Tratamiento de Datos Personales).
// El contenido de cada sección se pasa como children usando <LegalSection />.
// ──────────────────────────────────────────────────────────────────────────────
export default function LegalLayout({ title, badge, intro, updated, sections, children }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <WhatsAppBubble />

      {/* Breadcrumb */}
      <div className="pt-24 pb-0 px-6 md:px-12 max-w-5xl mx-auto">
        <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#80756d]">
          <Link href="/" className="hover:text-[#715a3e] transition-colors">
            Inicio
          </Link>
          <span>→</span>
          <span className="text-[#715a3e]">{title}</span>
        </nav>
      </div>

      {/* Header */}
      <header className="px-6 md:px-12 pt-8 pb-14 max-w-5xl mx-auto">
        <span className="text-[#715a3e] font-bold text-xs uppercase tracking-widest block mb-4">{badge}</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none text-[#1b1c1a] mb-6">{title}</h1>
        <p className="text-[#4e453e] text-base md:text-lg leading-relaxed max-w-2xl">{intro}</p>
        <p className="text-[#80756d] text-xs font-semibold uppercase tracking-widest mt-6">
          Última actualización: {updated}
        </p>
      </header>

      <div className="px-6 md:px-12 max-w-5xl mx-auto pb-28 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">
        {/* Índice */}
        <nav aria-label="Índice del documento" className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[#80756d] text-xs font-bold uppercase tracking-widest mb-3">Contenido</p>
          <ul className="space-y-2 border-l border-[#d1c4ba]/40 pl-4">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-xs text-[#4e453e] hover:text-[#715a3e] transition-colors leading-relaxed block"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contenido */}
        <div className="min-w-0">{children}</div>
      </div>

      <Footer />
    </>
  )
}

// Bloque de sección reutilizable dentro del contenido (título + cuerpo)
export function LegalSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-14 scroll-mt-28">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1b1c1a] mb-5">{title}</h2>
      <div className="space-y-4 text-[#4e453e] text-[15px] leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-[#1b1c1a] [&_strong]:font-semibold [&_a]:text-[#715a3e] [&_a]:font-medium [&_a:hover]:text-[#535353]">
        {children}
      </div>
    </section>
  )
}
