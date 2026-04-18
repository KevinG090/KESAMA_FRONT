// ──────────────────────────────────────────────────────────────────────────────
// página principal de KESAMA
//
// Para agregar, ocultar o reordenar categorías:
//   → Edita src/data/catalog.ts  (visible: true/false, order: N)
//
// Los catálogos completos viven en /catalogo/[slug]
// ──────────────────────────────────────────────────────────────────────────────

import Navbar from '@/components/Navbar'
import WhatsAppBubble from '@/components/WhatsAppBubble'
import HeroSection from '@/components/HeroSection'
import CategoriesGrid from '@/components/CategoriesGrid'
import FeaturedProducts from '@/components/FeaturedProducts'
import PhilosophySection from '@/components/PhilosophySection'
import MaterialsSection from '@/components/MaterialsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppBubble />
      <main>
        <HeroSection />

        {/* Grid bento — cada tarjeta tiene "Ver más" → /catalogo/[slug] */}
        <CategoriesGrid />

        {/* Productos destacados (máx 3, definidos en products.ts) */}
        <FeaturedProducts />

        <MaterialsSection />
        <PhilosophySection />
      </main>
      <Footer />
    </>
  )
}
