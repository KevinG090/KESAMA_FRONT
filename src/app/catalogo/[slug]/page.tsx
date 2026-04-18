// ──────────────────────────────────────────────────────────────────────────────
// /catalogo/[slug] — Página exclusiva de cada categoría
//
// Para agregar/ocultar productos: edita src/data/catalog.ts
// No necesitas tocar este archivo.
// ──────────────────────────────────────────────────────────────────────────────

import { notFound } from 'next/navigation'
import { getCategoryBySlug, getVisibleCategories } from '@/data/catalog'
import CatalogSection from '@/components/CatalogSection'
import Navbar from '@/components/Navbar'
import WhatsAppBubble from '@/components/WhatsAppBubble'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import Link from 'next/link'

// Genera rutas estáticas en build para cada categoría visible
export async function generateStaticParams() {
  const categories = getVisibleCategories()
  return categories.map((cat) => ({ slug: cat.slug }))
}

// Metadata dinámica por categoría
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return { title: 'KESAMA' }
  return {
    title: `${category.title} ${category.titleAccent} — KESAMA`,
    description: category.description,
  }
}

export default async function CatalogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) notFound()

  return (
    <>
      <Navbar />
      <WhatsAppBubble />

      {/* Breadcrumb */}
      <div className="pt-24 pb-0 px-6 md:px-12 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#80756d]">
          <Link href="/" className="hover:text-[#715a3e] transition-colors">
            Inicio
          </Link>
          <span>→</span>
          <Link href="/#categorias" className="hover:text-[#715a3e] transition-colors">
            Colecciones
          </Link>
          <span>→</span>
          <span className="text-[#715a3e]">
            {category.title} {category.titleAccent}
          </span>
        </nav>
      </div>

      {/* Full catalog section — reutiliza el mismo componente */}
      <CatalogSection category={category} />

      {/* Nav entre categorías */}
      <OtherCategories currentSlug={slug} />

      <Footer />
    </>
  )
}

// ── Navegación a otras categorías ─────────────────────────────────────────────
function OtherCategories({ currentSlug }: { currentSlug: string }) {
  const others = getVisibleCategories().filter((c) => c.slug !== currentSlug)

  return (
    <section className="bg-[#1b1c1a] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-8">
          Otras colecciones
        </p>
        <div className="flex flex-wrap gap-3">
          {others.map((cat) => (
            <Link
              key={cat.id}
              href={`/catalogo/${cat.slug}`}
              className="
                border border-white/20 text-white/60
                text-xs font-bold uppercase tracking-widest
                px-5 py-3
                hover:border-[#715a3e] hover:text-white
                transition-all duration-200
              "
            >
              {cat.title} {cat.titleAccent}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
