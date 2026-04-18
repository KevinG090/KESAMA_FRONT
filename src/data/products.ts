export interface Product {
  id: string
  name: string
  subtitle: string
  category: string
  material: string
  dimensions?: string
  price?: string
  image: string
  featured?: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
  colSpan?: string
  rowSpan?: string
}

export const categories: Category[] = [
  {
    id: 'escritorios',
    name: 'Escritorios',
    slug: 'escritorios',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKZbqR14oWuL5dHXuePbjqY95bqWaoW8KbXb7kAbV-8-fOrAtO25c43-Ze6CnYOUUQqTQlDbIVugRRsnY72cS6aX_FtbiVCZ0ATwhzeByZ6by7SAdo3Me4amDIiA4s0KZ2sTn8N1DgkeKuDLN1GXgyPpVVCHsZBUekMyVVjAz1FepDeIjwWKesYGyrox3q03YIrvq7mfMPObVkhVyEiTttQF2Y-SkdTdHyNrOjIV6JRW0JFoPcUQQFbC-Okew6TzIT4U-y9_m',
  },
  {
    id: 'comedores',
    name: 'Comedores',
    slug: 'comedores',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5yMQg9dkDVjsP-WOwXMW2CMOxkGydtbUW1w49f2pg2b8v2-Ou8NSkyH61KndizwD2-B8MtWx-VMVQW0d8S-J51ElvyaQlab4j1ECfhQSAI7RMNauW9P1VwW5WP4oLoLfkNoRRnZIqHZYuTfu4r5WP7MGTOKml2dd6jyY1b4hFHl9mR0IWY00IboC7T-uurJh-w_CdgVgKVvjMVd3PpqCX-37KGWPD3VqQeYtvrAiX3tLNXyRL7yuRRHzoguxVjxEXr3pDll5w',
  },
  {
    id: 'cocinas',
    name: 'Cocinas',
    slug: 'cocinas',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfZzs7iBN0WahWRybOvo8s2iNDh1WBfYYBV07KHkSUuHQ3JfO_vhiZMMFrZFxqbmJmCI94Od_3Fu7mc9vI2RLHR8RP3trcx6iQsieoDYDLftF4cs45RxwO485_1PopTY21c9o8VDaT-psqNBwmqM9Qx9ygqBeTla91vHnwSnMKMvV8XEVM3TpiNPD_c7cM8Of5wmRrJE2cLRK3qa2_VgvEtp4meQpM6BXcrpz3d5k5M1mCI9E1_ag6q8kzXlLv4_Of8kl6AuiO',
  },
  {
    id: 'puertas',
    name: 'Puertas',
    slug: 'puertas',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA998zyToXo5tDkbKNm4sx-MM6DDE18YZJT-PhBS2mgOaFVDNDI26y8zACUv4EwIKvqDLGRqT0DzE3cB80ck998So1aXfnFqJSr24t3Z0D9vOVburl3jcDPKf1uMj_qqEzC4k5UQzw_o6gJfY83-0Cbcuh93uCiler6EQ7GvFbUax2WXuNOxfsvAhh7-xp7v3Adak6b5zJYx4XdXrnsSjIrNLfq4XCXkMLfs-bFb1vR2QmapDx6Vjznp7pKx8AYPNqP1TChcdg2',
  },
  {
    id: 'materiales',
    name: 'Materiales',
    slug: 'materiales',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCidgRuY3SJrVrjN5AmVQtQbIWSMPobOtmoK-S02Biogp7bEbmh8g3Sv-CAwLabK4F2aQNpjCCKlRir0HK3rxdK6saNafiy4fQUnxNRW4MaMwpN5AzeN-W4v833AsB8kJgAVXqgWG77JP3xxDLj3TpY1TUhrdJMNUTUF-Aqhaw1LT_M3vjE39V-tMh37J2b_sm7uKC3BioVINs65rasT9QjeV_7CiTZd1pBi0xMFIL4LiZPo8iYbSefDxGsuizPsL9xVxaVaCwO',
  },
  {
    id: 'vestidores',
    name: 'Vestidores',
    slug: 'vestidores',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHoX0SaLwsAxqFcRni1_uae2VEG2fERFZoJBgXvwf27W-nCmyolmMhkvA0dV1YHLZvHlmW2QjkRiDNIrv1XlqpDdZD5M4V6OkTJqhFd8UqCMxUHwjc-6kOYlTfjj-BNfwrND4bYeOQZeKwqV1dB1ZN00fSNQId4SVpZ0rG_EdSDiT5NXmnauPaTrGLGbna7cn1kQ_QMMZ47gF1ZREdKf3q0Gi8-2lhBf1NLpilk7BF7MEcM0-yoAAEY37cyOiL_4L7w6lx3XPY',
  },
  {
    id: 'mesitas',
    name: 'Mesitas de Noche',
    slug: 'mesitas-de-noche',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDx2e3doWTPYFa8qi9Aha0lGvwUhPx0w1C6j-40kId38FVOStjkHTUAXsCkClnrcTYU_ogeEUnwKZXL1zBx8RVu4Z7WzMsyOUPn_Ibk69WnDjtGet3LrvYJp8BVGhyqr9acf5eZSLVzIAzUFLQn_zVlw9g6HCX6WzVg-AGsBf0qhs0PlY_j8MKuaDJWgvBDTIvjq6-uLlSgCV6E7JuinS-EC8i9R9usZGgVHZGAjpxWPLZT_0kLJckJz1_Rn-f2V9js2RYqjXh',
  },
  {
    id: 'bano',
    name: 'Muebles de Baño',
    slug: 'bano',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXlBFd4xgGoNnpna5xQqHhVFZJF40t0YDL1FYy5J2gLVwFizJ1SIfXEZJJGXoUsoDVWv6cIs0-9nHbVf3HWQkoPl9ihBECZarsK2dYwUFo4TUs3-tvUJNzxWmkRRdz1wS1FSbGazxMS8hRasva2wXBDuphmtFZGnvLEyz9NCJHblcgWebvi6a_W6Xvu1ENmQFvr8A1s0E-jsQMaBQxjVPs3b1kLouTB5NWE6FVsb6n--HBKC9MRPsXIr8YW56B9ok9Qu0-ttV7',
  },
]

export const featuredProducts: Product[] = [
  {
    id: 'mesa-monolito',
    name: 'Mesa Monolito',
    subtitle: 'Roble Macizo · Tinte Carbón',
    category: 'Comedores',
    material: 'Roble Macizo',
    dimensions: '320 × 110 cm',
    price: 'Consultar',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD23Ync5hNENxCSUT6rHZX7aeoFBSjj33so8Fi-ix29ME2Bbm--SjS0lFgdXCWhP6CzTo2vvAUusu5ko8ju_V4xVSI3pI6pbhAdPWItFSwr4K30W7JplJl02O9kSMIg2lT0qUoAVTxuYMwh085AV7Xsf3iUCwjCkrio_fYRjJS30A1FXWFSHCT4VaCBisci5Q9UV6W4As-q4iUVna3CD4mu6GT07rVNT3a9nT6o8CbjybDWAOteRktbLKs1tQ_Qw38uRdGvMVs-',
    featured: true,
  },
  {
    id: 'vestidor-zen',
    name: 'Vestidor Zen',
    subtitle: 'Nogal Americano · Iluminación Integrada',
    category: 'Vestidores',
    material: 'Nogal Americano',
    price: 'A medida',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXlBFd4xgGoNnpna5xQqHhVFZJF40t0YDL1FYy5J2gLVwFizJ1SIfXEZJJGXoUsoDVWv6cIs0-9nHbVf3HWQkoPl9ihBECZarsK2dYwUFo4TUs3-tvUJNzxWmkRRdz1wS1FSbGazxMS8hRasva2wXBDuphmtFZGnvLEyz9NCJHblcgWebvi6a_W6Xvu1ENmQFvr8A1s0E-jsQMaBQxjVPs3b1kLouTB5NWE6FVsb6n--HBKC9MRPsXIr8YW56B9ok9Qu0-ttV7',
    featured: true,
  },
  {
    id: 'escritorio-meridian',
    name: 'Escritorio Meridian',
    subtitle: 'Fresno Nórdico · Acero Negro',
    category: 'Escritorios',
    material: 'Fresno Nórdico',
    dimensions: '180 × 80 cm',
    price: 'Consultar',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKZbqR14oWuL5dHXuePbjqY95bqWaoW8KbXb7kAbV-8-fOrAtO25c43-Ze6CnYOUUQqTQlDbIVugRRsnY72cS6aX_FtbiVCZ0ATwhzeByZ6by7SAdo3Me4amDIiA4s0KZ2sTn8N1DgkeKuDLN1GXgyPpVVCHsZBUekMyVVjAz1FepDeIjwWKesYGyrox3q03YIrvq7mfMPObVkhVyEiTttQF2Y-SkdTdHyNrOjIV6JRW0JFoPcUQQFbC-Okew6TzIT4U-y9_m',
    featured: false,
  },
  {
    id: 'puerta-basalto',
    name: 'Puerta Basalto',
    subtitle: 'Cedro Natural · Herraje Bruñido',
    category: 'Puertas',
    material: 'Cedro Natural',
    price: 'A medida',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA998zyToXo5tDkbKNm4sx-MM6DDE18YZJT-PhBS2mgOaFVDNDI26y8zACUv4EwIKvqDLGRqT0DzE3cB80ck998So1aXfnFqJSr24t3Z0D9vOVburl3jcDPKf1uMj_qqEzC4k5UQzw_o6gJfY83-0Cbcuh93uCiler6EQ7GvFbUax2WXuNOxfsvAhh7-xp7v3Adak6b5zJYx4XdXrnsSjIrNLfq4XCXkMLfs-bFb1vR2QmapDx6Vjznp7pKx8AYPNqP1TChcdg2',
    featured: false,
  },
]

export const materials = [
  { name: 'Roble', description: 'Macizo · Poro Abierto', tone: 'Cálido' },
  { name: 'Nogal', description: 'Americano · Veta Dramática', tone: 'Oscuro' },
  { name: 'Fresno', description: 'Nórdico · Grano Fino', tone: 'Neutro' },
  { name: 'Cedro', description: 'Natural · Aromático', tone: 'Medio' },
]

// Agrega Muebles de Baño a las categorías del bento grid
// Para usarlo en CategoriesGrid, agrégalo al array categories arriba con:
// { id: 'bano', name: 'Muebles de Baño', slug: 'bano', image: '...' }