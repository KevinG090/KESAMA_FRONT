import Navbar from '@/components/Navbar'
import WhatsAppBubble from '@/components/WhatsAppBubble'
import HeroSection from '@/components/HeroSection'
import CategoriesGrid from '@/components/CategoriesGrid'
import FeaturedProducts from '@/components/FeaturedProducts'
import CategorySection from '@/components/CategorySection'
import PhilosophySection from '@/components/PhilosophySection'
import MaterialsSection from '@/components/MaterialsSection'
import Footer from '@/components/Footer'

// ─── Data inline por categoría (podés mover a /data/products.ts) ─────────────

const escritoriosData = {
  id: 'escritorios',
  title: 'Escritorios',
  titleAccent: 'de Precisión',
  description: 'Espacios de trabajo diseñados para inspirar. Madera noble y estructura arquitectónica en cada línea.',
  badge: 'Colección Oficina',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKZbqR14oWuL5dHXuePbjqY95bqWaoW8KbXb7kAbV-8-fOrAtO25c43-Ze6CnYOUUQqTQlDbIVugRRsnY72cS6aX_FtbiVCZ0ATwhzeByZ6by7SAdo3Me4amDIiA4s0KZ2sTn8N1DgkeKuDLN1GXgyPpVVCHsZBUekMyVVjAz1FepDeIjwWKesYGyrox3q03YIrvq7mfMPObVkhVyEiTttQF2Y-SkdTdHyNrOjIV6JRW0JFoPcUQQFbC-Okew6TzIT4U-y9_m',
  heroProduct: {
    id: 'escritorio-meridian',
    name: 'Escritorio Meridian',
    subtitle: 'Fresno Nórdico · Acero Bruñido',
    material: 'Fresno Nórdico',
    dimensions: '180 × 80 cm',
    price: 'Consultar',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKZbqR14oWuL5dHXuePbjqY95bqWaoW8KbXb7kAbV-8-fOrAtO25c43-Ze6CnYOUUQqTQlDbIVugRRsnY72cS6aX_FtbiVCZ0ATwhzeByZ6by7SAdo3Me4amDIiA4s0KZ2sTn8N1DgkeKuDLN1GXgyPpVVCHsZBUekMyVVjAz1FepDeIjwWKesYGyrox3q03YIrvq7mfMPObVkhVyEiTttQF2Y-SkdTdHyNrOjIV6JRW0JFoPcUQQFbC-Okew6TzIT4U-y9_m',
  },
  products: [
    {
      id: 'e1', name: 'Escritorio Atlas', subtitle: 'Roble · Patas Cónicas',
      material: 'Roble Macizo', price: 'Consultar',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKZbqR14oWuL5dHXuePbjqY95bqWaoW8KbXb7kAbV-8-fOrAtO25c43-Ze6CnYOUUQqTQlDbIVugRRsnY72cS6aX_FtbiVCZ0ATwhzeByZ6by7SAdo3Me4amDIiA4s0KZ2sTn8N1DgkeKuDLN1GXgyPpVVCHsZBUekMyVVjAz1FepDeIjwWKesYGyrox3q03YIrvq7mfMPObVkhVyEiTttQF2Y-SkdTdHyNrOjIV6JRW0JFoPcUQQFbC-Okew6TzIT4U-y9_m',
    },
    {
      id: 'e2', name: 'Escritorio Bruma', subtitle: 'Nogal · Cajón Oculto',
      material: 'Nogal Americano', price: 'A medida',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKZbqR14oWuL5dHXuePbjqY95bqWaoW8KbXb7kAbV-8-fOrAtO25c43-Ze6CnYOUUQqTQlDbIVugRRsnY72cS6aX_FtbiVCZ0ATwhzeByZ6by7SAdo3Me4amDIiA4s0KZ2sTn8N1DgkeKuDLN1GXgyPpVVCHsZBUekMyVVjAz1FepDeIjwWKesYGyrox3q03YIrvq7mfMPObVkhVyEiTttQF2Y-SkdTdHyNrOjIV6JRW0JFoPcUQQFbC-Okew6TzIT4U-y9_m',
    },
    {
      id: 'e3', name: 'Escritorio Línea L', subtitle: 'Fresno · Estructura Angular',
      material: 'Fresno Nórdico', price: 'Consultar',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKZbqR14oWuL5dHXuePbjqY95bqWaoW8KbXb7kAbV-8-fOrAtO25c43-Ze6CnYOUUQqTQlDbIVugRRsnY72cS6aX_FtbiVCZ0ATwhzeByZ6by7SAdo3Me4amDIiA4s0KZ2sTn8N1DgkeKuDLN1GXgyPpVVCHsZBUekMyVVjAz1FepDeIjwWKesYGyrox3q03YIrvq7mfMPObVkhVyEiTttQF2Y-SkdTdHyNrOjIV6JRW0JFoPcUQQFbC-Okew6TzIT4U-y9_m',
    },
  ],
}

const comedoresData = {
  id: 'comedores',
  title: 'Comedores',
  titleAccent: 'Monumentales',
  description: 'Piezas de herencia talladas en madera maciza. La intersección entre el brutalismo arquitectónico y la calidez orgánica.',
  badge: 'Colección Comedor',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe178oTjDgSvZaQrDFPbef_amADkzPdgsd24HCTY0mooX_mx1VWzOMs3_ny5KEJHwnFAKoz6k-LA80A3AkU92BH422qdDbJCuZsFYYSW2wwfdpmlkf7ugrdYmjX7AcUzvzQ4IKvgtyjmvjf9tBexWUhLOawBNJ3qsAs1cTFmfDdS88MJmWq7q9-_G2Zs6bqVaw5efls0UcZqqk-JxwOxe-YUiSANxf5tKm82BOy6VxwHAYVF8UTUZP2SsKBkaQhwEefNAWLfbC',
  heroProduct: {
    id: 'mesa-basalto',
    name: 'Mesa Basalto 01',
    subtitle: 'Roble Macizo · Tinte Carbón',
    material: 'Roble Macizo',
    dimensions: '320 × 110 cm',
    price: 'Consultar',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe178oTjDgSvZaQrDFPbef_amADkzPdgsd24HCTY0mooX_mx1VWzOMs3_ny5KEJHwnFAKoz6k-LA80A3AkU92BH422qdDbJCuZsFYYSW2wwfdpmlkf7ugrdYmjX7AcUzvzQ4IKvgtyjmvjf9tBexWUhLOawBNJ3qsAs1cTFmfDdS88MJmWq7q9-_G2Zs6bqVaw5efls0UcZqqk-JxwOxe-YUiSANxf5tKm82BOy6VxwHAYVF8UTUZP2SsKBkaQhwEefNAWLfbC',
  },
  products: [
    {
      id: 'c1', name: 'Mesa Monolito', subtitle: 'Roble Macizo · Tinte Carbón',
      material: 'Roble Macizo', price: 'Consultar',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD23Ync5hNENxCSUT6rHZX7aeoFBSjj33so8Fi-ix29ME2Bbm--SjS0lFgdXCWhP6CzTo2vvAUusu5ko8ju_V4xVSI3pI6pbhAdPWItFSwr4K30W7JplJl02O9kSMIg2lT0qUoAVTxuYMwh085AV7Xsf3iUCwjCkrio_fYRjJS30A1FXWFSHCT4VaCBisci5Q9UV6W4As-q4iUVna3CD4mu6GT07rVNT3a9nT6o8CbjybDWAOteRktbLKs1tQ_Qw38uRdGvMVs-',
    },
    {
      id: 'c2', name: 'Mesa Brutalista', subtitle: 'Nogal · Patas de Bloque',
      material: 'Nogal Americano', price: 'Consultar',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5yMQg9dkDVjsP-WOwXMW2CMOxkGydtbUW1w49f2pg2b8v2-Ou8NSkyH61KndizwD2-B8MtWx-VMVQW0d8S-J51ElvyaQlab4j1ECfhQSAI7RMNauW9P1VwW5WP4oLoLfkNoRRnZIqHZYuTfu4r5WP7MGTOKml2dd6jyY1b4hFHl9mR0IWY00IboC7T-uurJh-w_CdgVgKVvjMVd3PpqCX-37KGWPD3VqQeYtvrAiX3tLNXyRL7yuRRHzoguxVjxEXr3pDll5w',
    },
    {
      id: 'c3', name: 'Mesa Orgánica', subtitle: 'Cedro · Borde Vivo Natural',
      material: 'Cedro Natural', price: 'A medida',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5yMQg9dkDVjsP-WOwXMW2CMOxkGydtbUW1w49f2pg2b8v2-Ou8NSkyH61KndizwD2-B8MtWx-VMVQW0d8S-J51ElvyaQlab4j1ECfhQSAI7RMNauW9P1VwW5WP4oLoLfkNoRRnZIqHZYuTfu4r5WP7MGTOKml2dd6jyY1b4hFHl9mR0IWY00IboC7T-uurJh-w_CdgVgKVvjMVd3PpqCX-37KGWPD3VqQeYtvrAiX3tLNXyRL7yuRRHzoguxVjxEXr3pDll5w',
    },
  ],
}

const puertasData = {
  id: 'puertas',
  title: 'Puertas',
  titleAccent: 'Pivotantes',
  description: 'Cada entrada es una declaración arquitectónica. Diseño preciso en maderas nobles con herrajes de alta gama.',
  badge: 'Colección Accesos',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA998zyToXo5tDkbKNm4sx-MM6DDE18YZJT-PhBS2mgOaFVDNDI26y8zACUv4EwIKvqDLGRqT0DzE3cB80ck998So1aXfnFqJSr24t3Z0D9vOVburl3jcDPKf1uMj_qqEzC4k5UQzw_o6gJfY83-0Cbcuh93uCiler6EQ7GvFbUax2WXuNOxfsvAhh7-xp7v3Adak6b5zJYx4XdXrnsSjIrNLfq4XCXkMLfs-bFb1vR2QmapDx6Vjznp7pKx8AYPNqP1TChcdg2',
  heroProduct: {
    id: 'puerta-basalto',
    name: 'Puerta Basalto',
    subtitle: 'Cedro Natural · Herraje Bruñido',
    material: 'Cedro Natural',
    dimensions: 'A medida',
    price: 'A medida',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA998zyToXo5tDkbKNm4sx-MM6DDE18YZJT-PhBS2mgOaFVDNDI26y8zACUv4EwIKvqDLGRqT0DzE3cB80ck998So1aXfnFqJSr24t3Z0D9vOVburl3jcDPKf1uMj_qqEzC4k5UQzw_o6gJfY83-0Cbcuh93uCiler6EQ7GvFbUax2WXuNOxfsvAhh7-xp7v3Adak6b5zJYx4XdXrnsSjIrNLfq4XCXkMLfs-bFb1vR2QmapDx6Vjznp7pKx8AYPNqP1TChcdg2',
  },
  products: [],
  reversed: true,
}

const vestidoresData = {
  id: 'vestidores',
  title: 'Vestidores',
  titleAccent: 'a Medida',
  description: 'Espacios íntimos diseñados con milimétrica precisión. Cada detalle responde a tu estilo de vida.',
  badge: 'Colección Walk-In',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHoX0SaLwsAxqFcRni1_uae2VEG2fERFZoJBgXvwf27W-nCmyolmMhkvA0dV1YHLZvHlmW2QjkRiDNIrv1XlqpDdZD5M4V6OkTJqhFd8UqCMxUHwjc-6kOYlTfjj-BNfwrND4bYeOQZeKwqV1dB1ZN00fSNQId4SVpZ0rG_EdSDiT5NXmnauPaTrGLGbna7cn1kQ_QMMZ47gF1ZREdKf3q0Gi8-2lhBf1NLpilk7BF7MEcM0-yoAAEY37cyOiL_4L7w6lx3XPY',
  heroProduct: {
    id: 'vestidor-zen',
    name: 'Vestidor Zen',
    subtitle: 'Nogal Americano · LED Integrado',
    material: 'Nogal Americano',
    dimensions: 'A medida',
    price: 'A medida',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXlBFd4xgGoNnpna5xQqHhVFZJF40t0YDL1FYy5J2gLVwFizJ1SIfXEZJJGXoUsoDVWv6cIs0-9nHbVf3HWQkoPl9ihBECZarsK2dYwUFo4TUs3-tvUJNzxWmkRRdz1wS1FSbGazxMS8hRasva2wXBDuphmtFZGnvLEyz9NCJHblcgWebvi6a_W6Xvu1ENmQFvr8A1s0E-jsQMaBQxjVPs3b1kLouTB5NWE6FVsb6n--HBKC9MRPsXIr8YW56B9ok9Qu0-ttV7',
  },
  products: [],
}

const mesitasData = {
  id: 'mesitas-de-noche',
  title: 'Mesitas',
  titleAccent: 'de Noche',
  description: 'Piezas flotantes de carácter escultórico. Funcionalidad que se vuelve arte cuando la luz toca la madera.',
  badge: 'Colección Dormitorio',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDx2e3doWTPYFa8qi9Aha0lGvwUhPx0w1C6j-40kId38FVOStjkHTUAXsCkClnrcTYU_ogeEUnwKZXL1zBx8RVu4Z7WzMsyOUPn_Ibk69WnDjtGet3LrvYJp8BVGhyqr9acf5eZSLVzIAzUFLQn_zVlw9g6HCX6WzVg-AGsBf0qhs0PlY_j8MKuaDJWgvBDTIvjq6-uLlSgCV6E7JuinS-EC8i9R9usZGgVHZGAjpxWPLZT_0kLJckJz1_Rn-f2V9js2RYqjXh',
  heroProduct: {
    id: 'mesita-eterea',
    name: 'Mesita Etérea',
    subtitle: 'Fresno Natural · Suspensión Minimal',
    material: 'Fresno Nórdico',
    dimensions: '50 × 35 cm',
    price: 'Consultar',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDx2e3doWTPYFa8qi9Aha0lGvwUhPx0w1C6j-40kId38FVOStjkHTUAXsCkClnrcTYU_ogeEUnwKZXL1zBx8RVu4Z7WzMsyOUPn_Ibk69WnDjtGet3LrvYJp8BVGhyqr9acf5eZSLVzIAzUFLQn_zVlw9g6HCX6WzVg-AGsBf0qhs0PlY_j8MKuaDJWgvBDTIvjq6-uLlSgCV6E7JuinS-EC8i9R9usZGgVHZGAjpxWPLZT_0kLJckJz1_Rn-f2V9js2RYqjXh',
  },
  products: [],
  bgLight: true,
}

const cocinasData = {
  id: 'cocinas',
  title: 'Cocinas',
  titleAccent: 'Integrales',
  description: 'El corazón de tu hogar redefinido. Gabinetes en madera maciza con acabados de galería gastronómica.',
  badge: 'Colección Cocina',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfZzs7iBN0WahWRybOvo8s2iNDh1WBfYYBV07KHkSUuHQ3JfO_vhiZMMFrZFxqbmJmCI94Od_3Fu7mc9vI2RLHR8RP3trcx6iQsieoDYDLftF4cs45RxwO485_1PopTY21c9o8VDaT-psqNBwmqM9Qx9ygqBeTla91vHnwSnMKMvV8XEVM3TpiNPD_c7cM8Of5wmRrJE2cLRK3qa2_VgvEtp4meQpM6BXcrpz3d5k5M1mCI9E1_ag6q8kzXlLv4_Of8kl6AuiO',
  heroProduct: {
    id: 'cocina-obsidiana',
    name: 'Cocina Obsidiana',
    subtitle: 'Roble Oscuro · Encimera de Piedra',
    material: 'Roble Oscuro',
    dimensions: 'A medida',
    price: 'A medida',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfZzs7iBN0WahWRybOvo8s2iNDh1WBfYYBV07KHkSUuHQ3JfO_vhiZMMFrZFxqbmJmCI94Od_3Fu7mc9vI2RLHR8RP3trcx6iQsieoDYDLftF4cs45RxwO485_1PopTY21c9o8VDaT-psqNBwmqM9Qx9ygqBeTla91vHnwSnMKMvV8XEVM3TpiNPD_c7cM8Of5wmRrJE2cLRK3qa2_VgvEtp4meQpM6BXcrpz3d5k5M1mCI9E1_ag6q8kzXlLv4_Of8kl6AuiO',
  },
  products: [],
  bgLight: true,
  reversed: true,
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppBubble />

      <main>
        <HeroSection />
        <CategoriesGrid />
        <FeaturedProducts />

        <CategorySection {...escritoriosData} />
        <CategorySection {...comedoresData} bgLight />
        <CategorySection {...cocinasData} />
        <CategorySection {...puertasData} bgLight />
        <CategorySection {...vestidoresData} />
        <CategorySection {...mesitasData} />

        <MaterialsSection />
        <PhilosophySection />
      </main>

      <Footer />
    </>
  )
}
