import Navbar from '@/components/Navbar'
import WhatsAppBubble from '@/components/WhatsAppBubble'
import HeroSection from '@/components/HeroSection'
import CategoriesGrid from '@/components/CategoriesGrid'
import FeaturedProducts from '@/components/FeaturedProducts'
import PhilosophySection from '@/components/PhilosophySection'
import MaterialsSection from '@/components/MaterialsSection'
import Footer from '@/components/Footer'
import ScrollToHash from '@/components/ScrollToHash'

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppBubble />
      {/* Maneja scroll a secciones cuando se llega con hash en la URL */}
      <ScrollToHash />
      <main>
        <HeroSection />
        <CategoriesGrid />
        <FeaturedProducts />
        {/* Los IDs deben coincidir con los hashes del Footer */}
        <div id="materiales"><MaterialsSection /></div>
        <div id="filosofia"><PhilosophySection /></div>
      </main>
      <Footer />
    </>
  )
}
