// ============================================================
// CATÁLOGO COMPLETO KESAMA
// ============================================================
// GUÍA RÁPIDA PARA ACTUALIZAR:
//
// ▶ Para OCULTAR una categoría de la landing:
//     visible: false
//
// ▶ Para MOSTRAR una categoría:
//     visible: true
//
// ▶ Para agregar un producto nuevo, copia el bloque de
//   un producto existente dentro del array "products" y
//   edita sus campos. Cada producto DEBE tener una "image".
//
// ▶ Para agregar una categoría nueva:
//   1. Crea un nuevo objeto CatalogCategory con todos sus campos.
//   2. Agrégalo al array "allCategoriesList" al final del archivo.
//   3. Listo — la landing lo detecta automáticamente.
// ============================================================

export interface CatalogProduct {
  id: string
  name: string
  subtitle: string
  material: string
  dimensions?: string
  weight?: string
  finish?: string
  price?: string
  description: string
  features: string[]
  image: string
  tag?: string // "Nuevo", "Más vendido", "Edición limitada", etc.
  visible?: boolean // true por defecto; false para ocultar este producto
}

export interface CatalogCategory {
  id: string
  slug: string
  title: string
  second_title?: string
  titleAccent: string
  badge: string
  description: string
  heroDescription: string
  heroImage: string
  heroProduct: CatalogProduct
  products: CatalogProduct[]
  materials: string[]
  finishes: string[]
  visible?: boolean // true por defecto; false para ocultar toda la categoría
  order?: number   // menor número = aparece primero
}

// ─── ESCRITORIOS ──────────────────────────────────────────────────────────────

export const escritoriosCategory: CatalogCategory = {
  id: 'escritorios',
  slug: 'escritorios',
  visible: true,
  order: 3,
  title: 'Escritorios',
  titleAccent: 'de Precisión',
  badge: 'Colección Oficina',
  description: 'Espacios de trabajo diseñados para inspirar. Cada escritorio es una declaración arquitectónica que eleva tu productividad al nivel del arte.',
  heroDescription: 'Maderas nobles de crecimiento lento, seleccionadas por su veta única y tratadas con aceites naturales para revelar su carácter. Cada escritorio es una pieza irrepetible.',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKZbqR14oWuL5dHXuePbjqY95bqWaoW8KbXb7kAbV-8-fOrAtO25c43-Ze6CnYOUUQqTQlDbIVugRRsnY72cS6aX_FtbiVCZ0ATwhzeByZ6by7SAdo3Me4amDIiA4s0KZ2sTn8N1DgkeKuDLN1GXgyPpVVCHsZBUekMyVVjAz1FepDeIjwWKesYGyrox3q03YIrvq7mfMPObVkhVyEiTttQF2Y-SkdTdHyNrOjIV6JRW0JFoPcUQQFbC-Okew6TzIT4U-y9_m',
  materials: ['Roble Macizo', 'Nogal Americano', 'Fresno Nórdico', 'Cedro Natural'],
  finishes: ['Aceite Natural', 'Tinte Carbón', 'Tinte Ebano', 'Lacado Mate'],
  heroProduct: {
    id: 'escritorio-meridian',
    name: 'Escritorio Meridian',
    subtitle: 'La pieza definitiva del estudio contemporáneo',
    material: 'Fresno Nórdico',
    dimensions: '180 × 80 × 75 cm',
    weight: '42 kg',
    finish: 'Aceite Natural',
    price: 'Consultar',
    tag: 'Más vendido',
    description: 'El Meridian redefine el concepto de escritorio de autor. Su superficie continua en fresno nórdico de poro cerrado invita a la concentración absoluta, mientras que las patas en acero bruñido añaden tensión arquitectónica sin sacrificar calidez.',
    features: [
      'Tapa en fresno nórdico macizo de 4 cm de grosor',
      'Estructura en acero bruñido pintado en polvo negro mate',
      'Pasacables oculto en lateral derecho',
      'Cajón profundo con cierre suave',
      'Pies regulables en altura ±2 cm',
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKZbqR14oWuL5dHXuePbjqY95bqWaoW8KbXb7kAbV-8-fOrAtO25c43-Ze6CnYOUUQqTQlDbIVugRRsnY72cS6aX_FtbiVCZ0ATwhzeByZ6by7SAdo3Me4amDIiA4s0KZ2sTn8N1DgkeKuDLN1GXgyPpVVCHsZBUekMyVVjAz1FepDeIjwWKesYGyrox3q03YIrvq7mfMPObVkhVyEiTttQF2Y-SkdTdHyNrOjIV6JRW0JFoPcUQQFbC-Okew6TzIT4U-y9_m',
  },
  products: [
    {
      id: 'escritorio-atlas',
      name: 'Escritorio Atlas',
      subtitle: 'Roble Macizo · Patas Cónicas Torneadas',
      material: 'Roble Macizo',
      dimensions: '160 × 75 × 74 cm',
      finish: 'Aceite de Tung',
      price: 'Consultar',
      tag: 'Nuevo',
      visible: true,
      description: 'Geometría pura al servicio del trabajo. El Atlas combina la solidez del roble macizo con una estructura de patas cónicas que aligera visualmente la pieza sin perder un gramo de carácter.',
      features: ['Roble europeo FSC', 'Patas torneadas a mano', 'Superficie tratada con aceite de tung', 'Ensamble espiga y mortaja'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKZbqR14oWuL5dHXuePbjqY95bqWaoW8KbXb7kAbV-8-fOrAtO25c43-Ze6CnYOUUQqTQlDbIVugRRsnY72cS6aX_FtbiVCZ0ATwhzeByZ6by7SAdo3Me4amDIiA4s0KZ2sTn8N1DgkeKuDLN1GXgyPpVVCHsZBUekMyVVjAz1FepDeIjwWKesYGyrox3q03YIrvq7mfMPObVkhVyEiTttQF2Y-SkdTdHyNrOjIV6JRW0JFoPcUQQFbC-Okew6TzIT4U-y9_m',
    },
    {
      id: 'escritorio-bruma',
      name: 'Escritorio Bruma',
      subtitle: 'Nogal Americano · Cajón Oculto Magnético',
      material: 'Nogal Americano',
      dimensions: '200 × 90 × 74 cm',
      finish: 'Tinte Ahumado',
      price: 'A medida',
      visible: true,
      description: 'Para los que necesitan espacio sin concesiones estéticas. El Bruma en nogal americano presenta una veta dramática y oscura. El cajón oculto con apertura magnética es nuestro guiño al minimalismo radical.',
      features: ['Nogal americano seleccionado a mano', 'Cajón oculto de apertura magnética', 'Veta continua de tablero a tablero', 'Patas macizas inclinadas 5°'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKZbqR14oWuL5dHXuePbjqY95bqWaoW8KbXb7kAbV-8-fOrAtO25c43-Ze6CnYOUUQqTQlDbIVugRRsnY72cS6aX_FtbiVCZ0ATwhzeByZ6by7SAdo3Me4amDIiA4s0KZ2sTn8N1DgkeKuDLN1GXgyPpVVCHsZBUekMyVVjAz1FepDeIjwWKesYGyrox3q03YIrvq7mfMPObVkhVyEiTttQF2Y-SkdTdHyNrOjIV6JRW0JFoPcUQQFbC-Okew6TzIT4U-y9_m',
    },
    {
      id: 'escritorio-linea-l',
      name: 'Escritorio Línea L',
      subtitle: 'Fresno Nórdico · Configuración Angular',
      material: 'Fresno Nórdico',
      dimensions: '220 × 140 × 74 cm (configuración L)',
      finish: 'Lacado Mate Blanco Roto',
      price: 'Consultar',
      visible: true,
      description: 'El espacio de trabajo de quien no acepta límites. La configuración en L maximiza la superficie operativa y permite organizar el flujo creativo de manera orgánica.',
      features: ['Configuración en L reversible', 'Fresno con acabado lacado mate', 'Integración de cableado invisible', 'Refuerzo central en acero inoxidable'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKZbqR14oWuL5dHXuePbjqY95bqWaoW8KbXb7kAbV-8-fOrAtO25c43-Ze6CnYOUUQqTQlDbIVugRRsnY72cS6aX_FtbiVCZ0ATwhzeByZ6by7SAdo3Me4amDIiA4s0KZ2sTn8N1DgkeKuDLN1GXgyPpVVCHsZBUekMyVVjAz1FepDeIjwWKesYGyrox3q03YIrvq7mfMPObVkhVyEiTttQF2Y-SkdTdHyNrOjIV6JRW0JFoPcUQQFbC-Okew6TzIT4U-y9_m',
    },
    {
      id: 'escritorio-viga',
      name: 'Escritorio Viga',
      subtitle: 'Cedro Natural · Estructura de Viga Vista',
      material: 'Cedro Natural',
      dimensions: '190 × 85 × 78 cm',
      finish: 'Cera Natural',
      price: 'Consultar',
      tag: 'Edición limitada',
      visible: true,
      description: 'Inspirado en la arquitectura industrial nórdica. Las uniones reforzadas en acero negro y la viga de cedro natural crean una estética de hangar de lujo.',
      features: ['Cedro red de aroma característico', 'Estructura de viga vista expuesta', 'Refuerzos en acero negro texturizado', 'Disponible con o sin estantería lateral'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKZbqR14oWuL5dHXuePbjqY95bqWaoW8KbXb7kAbV-8-fOrAtO25c43-Ze6CnYOUUQqTQlDbIVugRRsnY72cS6aX_FtbiVCZ0ATwhzeByZ6by7SAdo3Me4amDIiA4s0KZ2sTn8N1DgkeKuDLN1GXgyPpVVCHsZBUekMyVVjAz1FepDeIjwWKesYGyrox3q03YIrvq7mfMPObVkhVyEiTttQF2Y-SkdTdHyNrOjIV6JRW0JFoPcUQQFbC-Okew6TzIT4U-y9_m',
    },
    {
      id: 'escritorio-plano',
      name: 'Escritorio Plano',
      subtitle: 'Roble Blanco · Ultra Minimalista',
      material: 'Roble Blanco',
      dimensions: '150 × 70 × 72 cm',
      finish: 'Aceite Blanco Transparente',
      price: 'Consultar',
      visible: true,
      description: 'La depuración absoluta. El Plano reduce el escritorio a su esencia: una superficie perfecta en roble blanco y cuatro patas que desaparecen visualmente.',
      features: ['Roble blanco de poro cerrado', 'Espesor de tapa 3.5 cm', 'Cantos mecanizados a 45°', 'Sin tornillos visibles'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKZbqR14oWuL5dHXuePbjqY95bqWaoW8KbXb7kAbV-8-fOrAtO25c43-Ze6CnYOUUQqTQlDbIVugRRsnY72cS6aX_FtbiVCZ0ATwhzeByZ6by7SAdo3Me4amDIiA4s0KZ2sTn8N1DgkeKuDLN1GXgyPpVVCHsZBUekMyVVjAz1FepDeIjwWKesYGyrox3q03YIrvq7mfMPObVkhVyEiTttQF2Y-SkdTdHyNrOjIV6JRW0JFoPcUQQFbC-Okew6TzIT4U-y9_m',
    },
  ],
}

// ─── COMEDORES ────────────────────────────────────────────────────────────────

export const comedoresCategory: CatalogCategory = {
  id: 'comedores',
  slug: 'comedores',
  visible: true,
  order: 2,
  title: 'Comedores',
  titleAccent: 'Monumentales',
  badge: 'Colección Comedor',
  description: 'Piezas de herencia talladas en madera maciza. La intersección entre el brutalismo arquitectónico y la calidez orgánica del hogar.',
  heroDescription: 'Una mesa de comedor es el centro de la vida familiar. En KESAMA la diseñamos para que sea también una obra de arte: proporciones monumentales, maderas seleccionadas y acabados que mejoran con cada año de uso.',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe178oTjDgSvZaQrDFPbef_amADkzPdgsd24HCTY0mooX_mx1VWzOMs3_ny5KEJHwnFAKoz6k-LA80A3AkU92BH422qdDbJCuZsFYYSW2wwfdpmlkf7ugrdYmjX7AcUzvzQ4IKvgtyjmvjf9tBexWUhLOawBNJ3qsAs1cTFmfDdS88MJmWq7q9-_G2Zs6bqVaw5efls0UcZqqk-JxwOxe-YUiSANxf5tKm82BOy6VxwHAYVF8UTUZP2SsKBkaQhwEefNAWLfbC',
  materials: ['Roble Macizo', 'Nogal Americano', 'Cedro Natural', 'Teca Recuperada'],
  finishes: ['Aceite Natural', 'Tinte Carbón', 'Aceite Danés', 'Cera de Abeja'],
  heroProduct: {
    id: 'mesa-basalto',
    name: 'Mesa Basalto 01',
    subtitle: 'La mesa que redefine el comedor',
    material: 'Roble Macizo',
    dimensions: '320 × 110 × 76 cm',
    weight: '210 kg',
    finish: 'Tinte Carbón + Aceite',
    price: 'Consultar',
    tag: 'Pieza de autor',
    description: 'El Basalto es nuestra declaración más contundente: 320 centímetros de roble macizo sin juntas, tratado con tinte carbón y sellado en aceite danés. Las patas de bloque de 15 × 15 cm evocan los pilares de un templo contemporáneo.',
    features: [
      'Tablero de roble macizo sin juntas (pieza única)',
      'Espesor de tapa 6 cm — 210 kg de presencia pura',
      'Patas de bloque 15 × 15 × 72 cm en roble macizo',
      'Tinte carbón aplicado en 3 capas + aceite danés sellador',
      'Capacidad para 10-12 personas',
      'Maderas de origen FSC certificado',
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe178oTjDgSvZaQrDFPbef_amADkzPdgsd24HCTY0mooX_mx1VWzOMs3_ny5KEJHwnFAKoz6k-LA80A3AkU92BH422qdDbJCuZsFYYSW2wwfdpmlkf7ugrdYmjX7AcUzvzQ4IKvgtyjmvjf9tBexWUhLOawBNJ3qsAs1cTFmfDdS88MJmWq7q9-_G2Zs6bqVaw5efls0UcZqqk-JxwOxe-YUiSANxf5tKm82BOy6VxwHAYVF8UTUZP2SsKBkaQhwEefNAWLfbC',
  },
  products: [
    {
      id: 'mesa-monolito',
      name: 'Mesa Monolito',
      subtitle: 'Nogal Americano · Borde Vivo',
      material: 'Nogal Americano',
      dimensions: '280 × 100 × 75 cm',
      finish: 'Aceite Natural de Nogal',
      price: 'Consultar',
      tag: 'Más pedido',
      visible: true,
      description: 'Borde vivo sin intervención: respetamos cada irregularidad del borde original del árbol. La veta dramática del nogal americano convierte cada comida en una experiencia táctil y visual única.',
      features: ['Borde vivo natural sin intervención', 'Nogal americano de 5 cm de grosor', 'Patas a horquilla en acero negro', 'Tratamiento con aceite de linaza crudo'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD23Ync5hNENxCSUT6rHZX7aeoFBSjj33so8Fi-ix29ME2Bbm--SjS0lFgdXCWhP6CzTo2vvAUusu5ko8ju_V4xVSI3pI6pbhAdPWItFSwr4K30W7JplJl02O9kSMIg2lT0qUoAVTxuYMwh085AV7Xsf3iUCwjCkrio_fYRjJS30A1FXWFSHCT4VaCBisci5Q9UV6W4As-q4iUVna3CD4mu6GT07rVNT3a9nT6o8CbjybDWAOteRktbLKs1tQ_Qw38uRdGvMVs-',
    },
    {
      id: 'mesa-arc',
      name: 'Mesa Arc',
      subtitle: 'Roble · Patas en Arco Esculpidas',
      material: 'Roble Macizo',
      dimensions: '240 × 95 × 74 cm',
      finish: 'Aceite de Tung Puro',
      price: 'Consultar',
      visible: true,
      description: 'Las patas en arco del Mesa Arc son esculpidas a mano, generando un movimiento orgánico que contrasta con la rigurosa horizontalidad del tablero.',
      features: ['Patas en arco talladas a mano', 'Ensamble de cola de milano visible', 'Roble de grano recto seleccionado', 'Capacidad 8-10 personas'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5yMQg9dkDVjsP-WOwXMW2CMOxkGydtbUW1w49f2pg2b8v2-Ou8NSkyH61KndizwD2-B8MtWx-VMVQW0d8S-J51ElvyaQlab4j1ECfhQSAI7RMNauW9P1VwW5WP4oLoLfkNoRRnZIqHZYuTfu4r5WP7MGTOKml2dd6jyY1b4hFHl9mR0IWY00IboC7T-uurJh-w_CdgVgKVvjMVd3PpqCX-37KGWPD3VqQeYtvrAiX3tLNXyRL7yuRRHzoguxVjxEXr3pDll5w',
    },
    {
      id: 'mesa-teca-rec',
      name: 'Mesa Teca Recuperada',
      subtitle: 'Teca Rescatada · Historia en Cada Veta',
      material: 'Teca Recuperada',
      dimensions: '260 × 100 × 75 cm',
      finish: 'Aceite de Teca + Cera Natural',
      price: 'A medida',
      tag: 'Edición única',
      visible: true,
      description: 'Fabricada con madera de teca recuperada de estructuras coloniales del siglo XX. Las marcas y variaciones de tono no son imperfecciones: son la firma del tiempo.',
      features: ['Teca rescatada de edificaciones históricas', 'Cada pieza es única e irrepetible', 'Certificado de procedencia incluido', 'Tratamiento de aceite de teca natural'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5yMQg9dkDVjsP-WOwXMW2CMOxkGydtbUW1w49f2pg2b8v2-Ou8NSkyH61KndizwD2-B8MtWx-VMVQW0d8S-J51ElvyaQlab4j1ECfhQSAI7RMNauW9P1VwW5WP4oLoLfkNoRRnZIqHZYuTfu4r5WP7MGTOKml2dd6jyY1b4hFHl9mR0IWY00IboC7T-uurJh-w_CdgVgKVvjMVd3PpqCX-37KGWPD3VqQeYtvrAiX3tLNXyRL7yuRRHzoguxVjxEXr3pDll5w',
    },
    {
      id: 'mesa-tulip',
      name: 'Mesa Tulip',
      subtitle: 'Cedro · Pedestal Central Esculpido',
      material: 'Cedro Natural',
      dimensions: '180 × 180 cm (redonda)',
      finish: 'Cera de Abeja Natural',
      price: 'Consultar',
      visible: true,
      description: 'La única mesa redonda de nuestro catálogo. El pedestal central en cedro esculpido elimina las patas esquineras, creando una experiencia democrática donde cada asiento tiene el mismo protagonismo.',
      features: ['Formato circular — igualdad en la mesa', 'Pedestal central esculpido a mano', 'Cedro de aroma natural', 'Extensible a 240 cm con hoja central'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5yMQg9dkDVjsP-WOwXMW2CMOxkGydtbUW1w49f2pg2b8v2-Ou8NSkyH61KndizwD2-B8MtWx-VMVQW0d8S-J51ElvyaQlab4j1ECfhQSAI7RMNauW9P1VwW5WP4oLoLfkNoRRnZIqHZYuTfu4r5WP7MGTOKml2dd6jyY1b4hFHl9mR0IWY00IboC7T-uurJh-w_CdgVgKVvjMVd3PpqCX-37KGWPD3VqQeYtvrAiX3tLNXyRL7yuRRHzoguxVjxEXr3pDll5w',
    },
  ],
}

// ─── COCINAS ──────────────────────────────────────────────────────────────────

export const cocinasCategory: CatalogCategory = {
  id: 'cocinas',
  slug: 'cocinas',
  visible: true,
  order: 1,
  title: 'Cocinas',
  titleAccent: 'Integrales',
  badge: 'Colección Cocina',
  description: 'El corazón del hogar redefinido. Diseños integrales que fusionan la funcionalidad de un laboratorio gastronómico con la estética de una galería de arte.',
  heroDescription: 'Diseñamos cocinas como si fueran arquitectura interior: cada módulo es calculado, cada material seleccionado por su comportamiento ante la humedad y el calor. La madera maciza convive con el acero inoxidable y la piedra natural.',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfZzs7iBN0WahWRybOvo8s2iNDh1WBfYYBV07KHkSUuHQ3JfO_vhiZMMFrZFxqbmJmCI94Od_3Fu7mc9vI2RLHR8RP3trcx6iQsieoDYDLftF4cs45RxwO485_1PopTY21c9o8VDaT-psqNBwmqM9Qx9ygqBeTla91vHnwSnMKMvV8XEVM3TpiNPD_c7cM8Of5wmRrJE2cLRK3qa2_VgvEtp4meQpM6BXcrpz3d5k5M1mCI9E1_ag6q8kzXlLv4_Of8kl6AuiO',
  materials: ['Roble Oscuro', 'Nogal Natural', 'Fresno Blanco', 'MDF Lacado + Cantos Macizos'],
  finishes: ['Lacado Mate', 'Aceite Termoestable', 'Vinilo Textured', 'Microcemento'],
  heroProduct: {
    id: 'cocina-obsidiana',
    name: 'Cocina Obsidiana',
    subtitle: 'La cocina para quienes cocinan en serio',
    material: 'Roble Oscuro + Encimera de Granito Negro',
    dimensions: 'A medida — proyecto completo',
    finish: 'Lacado Mate Antihuellas',
    price: 'A medida',
    tag: 'Proyecto completo',
    description: 'La Obsidiana es un estudio en contrastes: la rugosidad del roble oscuro frente al granito negro pulido, los frentes sin tiradores frente a los interiores perfectamente organizados. Incluye planificación de instalación y visita técnica.',
    features: [
      'Frentes en roble oscuro lacado mate antihuellas',
      'Encimera en granito negro Zimbabwe 3 cm',
      'Sistema push-to-open sin tiradores',
      'Iluminación LED integrada bajo muebles superiores',
      'Cajones con soft-close Blum',
      'Organizadores interiores a medida',
      'Visita de proyecto y planos 3D incluidos',
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfZzs7iBN0WahWRybOvo8s2iNDh1WBfYYBV07KHkSUuHQ3JfO_vhiZMMFrZFxqbmJmCI94Od_3Fu7mc9vI2RLHR8RP3trcx6iQsieoDYDLftF4cs45RxwO485_1PopTY21c9o8VDaT-psqNBwmqM9Qx9ygqBeTla91vHnwSnMKMvV8XEVM3TpiNPD_c7cM8Of5wmRrJE2cLRK3qa2_VgvEtp4meQpM6BXcrpz3d5k5M1mCI9E1_ag6q8kzXlLv4_Of8kl6AuiO',
  },
  products: [
    {
      id: 'cocina-alba',
      name: 'Cocina Alba',
      subtitle: 'Fresno Blanco · Tonos Nórdicos Cálidos',
      material: 'Fresno Blanco + Encimera Cuarzo Blanco',
      dimensions: 'A medida',
      finish: 'Aceite Termoestable Blanco',
      price: 'A medida',
      visible: true,
      description: 'Luminosidad escandinava en madera maciza. El fresno blanco tratado con aceite termoestable aporta una calidez natural que los lacados nunca pueden imitar.',
      features: ['Fresno blanco con aceite termoestable resistente al agua', 'Encimera de cuarzo blanco Calacatta', 'Fregadero integrado flush', 'Campana extractora integrada en carpintería'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfZzs7iBN0WahWRybOvo8s2iNDh1WBfYYBV07KHkSUuHQ3JfO_vhiZMMFrZFxqbmJmCI94Od_3Fu7mc9vI2RLHR8RP3trcx6iQsieoDYDLftF4cs45RxwO485_1PopTY21c9o8VDaT-psqNBwmqM9Qx9ygqBeTla91vHnwSnMKMvV8XEVM3TpiNPD_c7cM8Of5wmRrJE2cLRK3qa2_VgvEtp4meQpM6BXcrpz3d5k5M1mCI9E1_ag6q8kzXlLv4_Of8kl6AuiO',
    },
    {
      id: 'cocina-terra',
      name: 'Cocina Terra',
      subtitle: 'Nogal Natural · Isla Central Protagonista',
      material: 'Nogal Natural + Encimera Mármol Emperador',
      dimensions: 'A medida',
      finish: 'Aceite de Nogal Natural',
      price: 'A medida',
      tag: 'Con isla',
      visible: true,
      description: 'La isla de cocina como escultura. En la Terra, la isla central en nogal macizo es el primer elemento que se percibe al entrar. La encimera de mármol Emperador convierte el espacio en una declaración de poder doméstico.',
      features: ['Isla central en nogal macizo 4 cm', 'Encimera de mármol Emperador gold', 'Módulos inferiores con gavetas extraíbles', 'Tapa de isla con espacio para taburetes integrado'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfZzs7iBN0WahWRybOvo8s2iNDh1WBfYYBV07KHkSUuHQ3JfO_vhiZMMFrZFxqbmJmCI94Od_3Fu7mc9vI2RLHR8RP3trcx6iQsieoDYDLftF4cs45RxwO485_1PopTY21c9o8VDaT-psqNBwmqM9Qx9ygqBeTla91vHnwSnMKMvV8XEVM3TpiNPD_c7cM8Of5wmRrJE2cLRK3qa2_VgvEtp4meQpM6BXcrpz3d5k5M1mCI9E1_ag6q8kzXlLv4_Of8kl6AuiO',
    },
    {
      id: 'cocina-muro',
      name: 'Cocina Muro',
      subtitle: 'Roble + Microcemento · Wall-to-Wall',
      material: 'Roble Natural + Microcemento',
      dimensions: 'A medida',
      finish: 'Aceite + Microcemento Sellado',
      price: 'A medida',
      visible: true,
      description: 'Una pared completa convertida en cocina funcional y escultórica. La combinación de paneles de roble natural y zonas de microcemento organiza el espacio de manera intuitiva.',
      features: ['Diseño wall-to-wall de piso a techo', 'Alternancia madera + microcemento', 'Almacenamiento máximo oculto', 'Integración de electrodomésticos empotrados'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfZzs7iBN0WahWRybOvo8s2iNDh1WBfYYBV07KHkSUuHQ3JfO_vhiZMMFrZFxqbmJmCI94Od_3Fu7mc9vI2RLHR8RP3trcx6iQsieoDYDLftF4cs45RxwO485_1PopTY21c9o8VDaT-psqNBwmqM9Qx9ygqBeTla91vHnwSnMKMvV8XEVM3TpiNPD_c7cM8Of5wmRrJE2cLRK3qa2_VgvEtp4meQpM6BXcrpz3d5k5M1mCI9E1_ag6q8kzXlLv4_Of8kl6AuiO',
    },
  ],
}

// ─── PUERTAS ──────────────────────────────────────────────────────────────────

export const puertasCategory: CatalogCategory = {
  id: 'puertas',
  slug: 'puertas',
  visible: true,
  order: 4,
  title: 'Puertas',
  titleAccent: 'Pivotantes',
  badge: 'Colección Accesos',
  description: 'La primera impresión de tu hogar. Cada puerta es una declaración arquitectónica diseñada para impresionar antes de cruzarla.',
  heroDescription: 'Una puerta define el umbral entre el mundo exterior y tu espacio íntimo. Las puertas KESAMA son ingeniería y escultura en igual medida: sistemas de pivote de precisión alemana envueltos en madera noble tratada para resistir la intemperie durante décadas.',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA998zyToXo5tDkbKNm4sx-MM6DDE18YZJT-PhBS2mgOaFVDNDI26y8zACUv4EwIKvqDLGRqT0DzE3cB80ck998So1aXfnFqJSr24t3Z0D9vOVburl3jcDPKf1uMj_qqEzC4k5UQzw_o6gJfY83-0Cbcuh93uCiler6EQ7GvFbUax2WXuNOxfsvAhh7-xp7v3Adak6b5zJYx4XdXrnsSjIrNLfq4XCXkMLfs-bFb1vR2QmapDx6Vjznp7pKx8AYPNqP1TChcdg2',
  materials: ['Cedro Natural', 'Roble Europeo', 'Teca de Exterior', 'Nogal + Vidrio'],
  finishes: ['Aceite Exterior UV', 'Tinte Grafito', 'Tinte Natural', 'Barniz Marino'],
  heroProduct: {
    id: 'puerta-basalto',
    name: 'Puerta Basalto',
    subtitle: 'El umbral que impone respeto',
    material: 'Cedro Natural + Acero Corten',
    dimensions: 'A medida — hasta 300 × 120 cm',
    finish: 'Aceite Exterior UV + Corten Sellado',
    price: 'A medida',
    tag: 'Diseño exclusivo',
    description: 'El Basalto toma su nombre del volcán por su carácter imponente. La combinación de tablones verticales de cedro con incrustaciones de acero corten crea una textura que evoluciona con el tiempo: el corten desarrolla su pátina naranja y el cedro se aclara con el sol.',
    features: [
      'Tablones verticales de cedro de 6 cm de espesor',
      'Incrustaciones de acero corten que desarrollan pátina natural',
      'Sistema de pivote alemán Häfele — 0° a 180°',
      'Jaladera en barra de acero negro de 80 cm',
      'Aislamiento acústico integrado 42 dB',
      'Tratamiento exterior resistente a UV y lluvia 15 años',
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA998zyToXo5tDkbKNm4sx-MM6DDE18YZJT-PhBS2mgOaFVDNDI26y8zACUv4EwIKvqDLGRqT0DzE3cB80ck998So1aXfnFqJSr24t3Z0D9vOVburl3jcDPKf1uMj_qqEzC4k5UQzw_o6gJfY83-0Cbcuh93uCiler6EQ7GvFbUax2WXuNOxfsvAhh7-xp7v3Adak6b5zJYx4XdXrnsSjIrNLfq4XCXkMLfs-bFb1vR2QmapDx6Vjznp7pKx8AYPNqP1TChcdg2',
  },
  products: [
    {
      id: 'puerta-horizontal',
      name: 'Puerta Horizontal',
      subtitle: 'Roble · Veta Transversal Impactante',
      material: 'Roble Europeo',
      dimensions: 'A medida — hasta 280 × 110 cm',
      finish: 'Tinte Grafito + Aceite UV',
      price: 'A medida',
      visible: true,
      description: 'Los tablones horizontales de roble crean un efecto de profundidad visual que engrandece cualquier fachada. Cada tablón es seleccionado para que la veta fluya de manera continua.',
      features: ['Tablones horizontales de roble 8 cm de grosor', 'Veta continua book-matched', 'Sistema de pivote central', 'Disponible con visor de privacidad'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA998zyToXo5tDkbKNm4sx-MM6DDE18YZJT-PhBS2mgOaFVDNDI26y8zACUv4EwIKvqDLGRqT0DzE3cB80ck998So1aXfnFqJSr24t3Z0D9vOVburl3jcDPKf1uMj_qqEzC4k5UQzw_o6gJfY83-0Cbcuh93uCiler6EQ7GvFbUax2WXuNOxfsvAhh7-xp7v3Adak6b5zJYx4XdXrnsSjIrNLfq4XCXkMLfs-bFb1vR2QmapDx6Vjznp7pKx8AYPNqP1TChcdg2',
    },
    {
      id: 'puerta-nordic',
      name: 'Puerta Nordic',
      subtitle: 'Teca · Minimalismo Escandinavo',
      material: 'Teca de Exterior',
      dimensions: 'A medida — hasta 260 × 100 cm',
      finish: 'Aceite de Teca Natural',
      price: 'A medida',
      visible: true,
      description: 'Inspirada en la arquitectura doméstica escandinava, la Nordic presenta un panel liso de teca que con el tiempo adquiere una pátina plateada natural. No necesita mantenimiento anual.',
      features: ['Teca A-grade de Birmania certificada', 'Envejecimiento natural a plata sin mantenimiento', 'Bisagras ocultas de acero inoxidable', 'Panel macizo sin uniones visibles'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA998zyToXo5tDkbKNm4sx-MM6DDE18YZJT-PhBS2mgOaFVDNDI26y8zACUv4EwIKvqDLGRqT0DzE3cB80ck998So1aXfnFqJSr24t3Z0D9vOVburl3jcDPKf1uMj_qqEzC4k5UQzw_o6gJfY83-0Cbcuh93uCiler6EQ7GvFbUax2WXuNOxfsvAhh7-xp7v3Adak6b5zJYx4XdXrnsSjIrNLfq4XCXkMLfs-bFb1vR2QmapDx6Vjznp7pKx8AYPNqP1TChcdg2',
    },
    {
      id: 'puerta-transparencia',
      name: 'Puerta Transparencia',
      subtitle: 'Nogal + Vidrio Templado · Luz y Madera',
      material: 'Nogal Americano + Vidrio Templado 12mm',
      dimensions: 'A medida — hasta 280 × 100 cm',
      finish: 'Aceite Natural + Vidrio Esmerilado',
      price: 'A medida',
      tag: 'Más solicitada',
      visible: true,
      description: 'La tensión perfecta entre privacidad y apertura. El marco en nogal americano enmarca un paño de vidrio templado esmerilado que filtra la luz exterior.',
      features: ['Marco de nogal americano 8 cm de perfil', 'Vidrio templado esmerilado 12 mm', 'Disponible en vidrio claro, esmerilado o laminado', 'Sistema de pivote lateral o central'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA998zyToXo5tDkbKNm4sx-MM6DDE18YZJT-PhBS2mgOaFVDNDI26y8zACUv4EwIKvqDLGRqT0DzE3cB80ck998So1aXfnFqJSr24t3Z0D9vOVburl3jcDPKf1uMj_qqEzC4k5UQzw_o6gJfY83-0Cbcuh93uCiler6EQ7GvFbUax2WXuNOxfsvAhh7-xp7v3Adak6b5zJYx4XdXrnsSjIrNLfq4XCXkMLfs-bFb1vR2QmapDx6Vjznp7pKx8AYPNqP1TChcdg2',
    },
  ],
}

// ─── MATERIALES ───────────────────────────────────────────────────────────────

export const materialesCategory: CatalogCategory = {
  id: 'materiales',
  slug: 'materiales',
  visible: true,
  order: 5,
  title: 'Materiales',
  titleAccent: 'Nobles',
  badge: 'Catálogo de Materias Primas',
  description: 'Cada pieza KESAMA comienza con la selección rigurosa del material. Conoce las maderas que usamos, de dónde vienen y por qué las elegimos.',
  heroDescription: 'No compramos madera: seleccionamos árboles. Nuestro equipo visita los aserraderos y elige cada tablón con la misma atención que un sommelier elegiría un vino.',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCidgRuY3SJrVrjN5AmVQtQbIWSMPobOtmoK-S02Biogp7bEbmh8g3Sv-CAwLabK4F2aQNpjCCKlRir0HK3rxdK6saNafiy4fQUnxNRW4MaMwpN5AzeN-W4v833AsB8kJgAVXqgWG77JP3xxDLj3TpY1TUhrdJMNUTUF-Aqhaw1LT_M3vjE39V-tMh37J2b_sm7uKC3BioVINs65rasT9QjeV_7CiTZd1pBi0xMFIL4LiZPo8iYbSefDxGsuizPsL9xVxaVaCwO',
  materials: ['Roble', 'Nogal', 'Fresno', 'Cedro', 'Cerezo', 'Teca'],
  finishes: ['Aceites Naturales', 'Tintes de Base Agua', 'Lacas al Agua', 'Ceras Naturales'],
  heroProduct: {
    id: 'material-roble',
    name: 'Roble Europeo FSC',
    subtitle: 'La madera más versátil de nuestro catálogo',
    material: 'Quercus robur — Roble europeo',
    dimensions: 'Tablones hasta 4 m de largo',
    finish: 'Disponible en todos los acabados',
    price: 'Desde proyecto',
    tag: 'Más utilizado',
    description: 'El roble europeo es nuestra materia prima más solicitada: su equilibrio entre dureza, veta visual y versatilidad de acabados es insuperable. El poro abierto acepta tintes de manera extraordinaria.',
    features: [
      'Dureza Janka: 1290 lbf — resiste el uso intensivo',
      'Origen certificado FSC — bosques gestionados',
      'Disponible en veta recta, cacheada y rizada',
      'Acepta todos nuestros acabados sin imprimación',
      'Densidad: 720 kg/m³ — solidez real',
      'Envejecimiento: se aclara levemente con la luz',
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCidgRuY3SJrVrjN5AmVQtQbIWSMPobOtmoK-S02Biogp7bEbmh8g3Sv-CAwLabK4F2aQNpjCCKlRir0HK3rxdK6saNafiy4fQUnxNRW4MaMwpN5AzeN-W4v833AsB8kJgAVXqgWG77JP3xxDLj3TpY1TUhrdJMNUTUF-Aqhaw1LT_M3vjE39V-tMh37J2b_sm7uKC3BioVINs65rasT9QjeV_7CiTZd1pBi0xMFIL4LiZPo8iYbSefDxGsuizPsL9xVxaVaCwO',
  },
  products: [
    {
      id: 'material-nogal',
      name: 'Nogal Americano',
      subtitle: 'Juglans nigra — Veta dramática y oscura',
      material: 'Juglans nigra',
      finish: 'Aceite natural o tinte ahumado',
      price: 'Desde proyecto',
      visible: true,
      description: 'El nogal americano es la madera del carácter. Su coloración natural va del marrón medio al chocolate oscuro, con vetas que pueden ir de lineales a onduladas de forma impredecible.',
      features: ['Dureza Janka: 1010 lbf', 'Color: marrón chocolate natural', 'Veta: variable, ondulada, con figura', 'Envejece oscureciéndose ligeramente'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCidgRuY3SJrVrjN5AmVQtQbIWSMPobOtmoK-S02Biogp7bEbmh8g3Sv-CAwLabK4F2aQNpjCCKlRir0HK3rxdK6saNafiy4fQUnxNRW4MaMwpN5AzeN-W4v833AsB8kJgAVXqgWG77JP3xxDLj3TpY1TUhrdJMNUTUF-Aqhaw1LT_M3vjE39V-tMh37J2b_sm7uKC3BioVINs65rasT9QjeV_7CiTZd1pBi0xMFIL4LiZPo8iYbSefDxGsuizPsL9xVxaVaCwO',
    },
    {
      id: 'material-fresno',
      name: 'Fresno Nórdico',
      subtitle: 'Fraxinus excelsior — Ligereza escandinava',
      material: 'Fraxinus excelsior',
      finish: 'Aceite blanco o barniz natural',
      price: 'Desde proyecto',
      tag: 'Para minimalismo',
      visible: true,
      description: 'El fresno es la madera de los diseñadores que buscan ligereza visual. Su tono cremoso casi blanco y su veta fina y uniforme crean superficies que aportan luz al espacio.',
      features: ['Dureza Janka: 1320 lbf — más duro que el roble', 'Color: crema a blanco amarillento', 'Veta: recta y fina, muy uniforme', 'Acepta lacas blancas sin imprimación especial'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCidgRuY3SJrVrjN5AmVQtQbIWSMPobOtmoK-S02Biogp7bEbmh8g3Sv-CAwLabK4F2aQNpjCCKlRir0HK3rxdK6saNafiy4fQUnxNRW4MaMwpN5AzeN-W4v833AsB8kJgAVXqgWG77JP3xxDLj3TpY1TUhrdJMNUTUF-Aqhaw1LT_M3vjE39V-tMh37J2b_sm7uKC3BioVINs65rasT9QjeV_7CiTZd1pBi0xMFIL4LiZPo8iYbSefDxGsuizPsL9xVxaVaCwO',
    },
    {
      id: 'material-cedro',
      name: 'Cedro Natural',
      subtitle: 'Cedrela odorata — Aroma y carácter colombiano',
      material: 'Cedrela odorata',
      finish: 'Cera natural o aceite de cedro',
      price: 'Desde proyecto',
      tag: 'Local',
      visible: true,
      description: 'El cedro es nuestra apuesta por lo local. Cultivado en Colombia y procesado en nuestro taller, es la madera de menor huella de carbono de nuestro catálogo.',
      features: ['Origen: Colombia — menor huella de carbono', 'Color: rosado salmón que aclara con la luz', 'Aroma: cedro natural persistente', 'Dureza Janka: 600 lbf — más suave, más fácil de trabajar'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCidgRuY3SJrVrjN5AmVQtQbIWSMPobOtmoK-S02Biogp7bEbmh8g3Sv-CAwLabK4F2aQNpjCCKlRir0HK3rxdK6saNafiy4fQUnxNRW4MaMwpN5AzeN-W4v833AsB8kJgAVXqgWG77JP3xxDLj3TpY1TUhrdJMNUTUF-Aqhaw1LT_M3vjE39V-tMh37J2b_sm7uKC3BioVINs65rasT9QjeV_7CiTZd1pBi0xMFIL4LiZPo8iYbSefDxGsuizPsL9xVxaVaCwO',
    },
    {
      id: 'material-teca',
      name: 'Teca de Exterior',
      subtitle: 'Tectona grandis — La madera invencible',
      material: 'Tectona grandis',
      finish: 'Aceite de teca o envejecimiento natural',
      price: 'Desde proyecto',
      visible: true,
      description: 'La teca es la única madera que no teme al exterior. Su aceite natural interno la hace hidrofóbica. No necesita tratamiento anual y con el tiempo adquiere una pátina plateada.',
      features: ['Dureza Janka: 1155 lbf', 'Aceite interno natural — resistente sin tratamiento', 'Exterior: envejecimiento natural a plateado', 'Origen certificado Myanmar/Indonesia FSC'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCidgRuY3SJrVrjN5AmVQtQbIWSMPobOtmoK-S02Biogp7bEbmh8g3Sv-CAwLabK4F2aQNpjCCKlRir0HK3rxdK6saNafiy4fQUnxNRW4MaMwpN5AzeN-W4v833AsB8kJgAVXqgWG77JP3xxDLj3TpY1TUhrdJMNUTUF-Aqhaw1LT_M3vjE39V-tMh37J2b_sm7uKC3BioVINs65rasT9QjeV_7CiTZd1pBi0xMFIL4LiZPo8iYbSefDxGsuizPsL9xVxaVaCwO',
    },
  ],
}

// ─── VESTIDORES ───────────────────────────────────────────────────────────────

export const vestidoresCategory: CatalogCategory = {
  id: 'vestidores',
  slug: 'vestidores',
  visible: true,
  order: 6,
  title: 'Vestidores',
  titleAccent: 'a Medida',
  badge: 'Colección Walk-In',
  description: 'Tu espacio más íntimo, diseñado con la misma precisión milimétrica que un reloj suizo. Cada vestidor es un proyecto único.',
  heroDescription: 'El vestidor perfecto no es el más grande: es el que tiene exactamente lo que necesitas donde lo necesitas. En KESAMA comenzamos siempre por entender cómo vives antes de diseñar cómo organizas.',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHoX0SaLwsAxqFcRni1_uae2VEG2fERFZoJBgXvwf27W-nCmyolmMhkvA0dV1YHLZvHlmW2QjkRiDNIrv1XlqpDdZD5M4V6OkTJqhFd8UqCMxUHwjc-6kOYlTfjj-BNfwrND4bYeOQZeKwqV1dB1ZN00fSNQId4SVpZ0rG_EdSDiT5NXmnauPaTrGLGbna7cn1kQ_QMMZ47gF1ZREdKf3q0Gi8-2lhBf1NLpilk7BF7MEcM0-yoAAEY37cyOiL_4L7w6lx3XPY',
  materials: ['Nogal Americano', 'Roble Natural', 'Lacado Mate', 'Combinado Madera + Metal'],
  finishes: ['Aceite Natural', 'Lacado Mate Premium', 'Barniz Semimate', 'Tinte Oscuro'],
  heroProduct: {
    id: 'vestidor-zen',
    name: 'Vestidor Zen',
    subtitle: 'El santuario del orden perfecto',
    material: 'Nogal Americano',
    dimensions: 'A medida — proyecto completo',
    finish: 'Aceite de Nogal + LED 2700K',
    price: 'A medida',
    tag: 'Proyecto estrella',
    description: 'El Zen parte de una filosofía: que la ropa bien organizada no se busca, se encuentra. Diseñado con zonas claramente definidas e iluminación LED de 2700K que reproduce la luz del amanecer.',
    features: [
      'Nogal americano seleccionado por veta continua',
      'Iluminación LED 2700K con sensor de presencia',
      'Cajones con separadores de cuero intercambiables',
      'Barras de colgar en latón cepillado',
      'Espejo de cuerpo completo con marco integrado',
      'Zona de joyería con bandeja de terciopelo extraíble',
      'Planos 3D incluidos + visita de medición',
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXlBFd4xgGoNnpna5xQqHhVFZJF40t0YDL1FYy5J2gLVwFizJ1SIfXEZJJGXoUsoDVWv6cIs0-9nHbVf3HWQkoPl9ihBECZarsK2dYwUFo4TUs3-tvUJNzxWmkRRdz1wS1FSbGazxMS8hRasva2wXBDuphmtFZGnvLEyz9NCJHblcgWebvi6a_W6Xvu1ENmQFvr8A1s0E-jsQMaBQxjVPs3b1kLouTB5NWE6FVsb6n--HBKC9MRPsXIr8YW56B9ok9Qu0-ttV7',
  },
  products: [
    {
      id: 'vestidor-lineal',
      name: 'Vestidor Lineal',
      subtitle: 'Roble · Pared Completa en Una Línea',
      material: 'Roble Natural',
      dimensions: 'A medida — hasta 5 m de longitud',
      finish: 'Aceite Natural + Barniz Semimate Interior',
      price: 'A medida',
      visible: true,
      description: 'Para espacios donde el recorrido es lineal. El Lineal ocupa una pared de piso a techo convirtiendo un corredor de dormitorio en una experiencia de boutique privada.',
      features: ['Carpintería de piso a techo en roble', 'Puertas correderas de espejo templado', 'Sistema de rieles Hettich de precisión silencioso', 'Interior con 3 zonas diferenciadas'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHoX0SaLwsAxqFcRni1_uae2VEG2fERFZoJBgXvwf27W-nCmyolmMhkvA0dV1YHLZvHlmW2QjkRiDNIrv1XlqpDdZD5M4V6OkTJqhFd8UqCMxUHwjc-6kOYlTfjj-BNfwrND4bYeOQZeKwqV1dB1ZN00fSNQId4SVpZ0rG_EdSDiT5NXmnauPaTrGLGbna7cn1kQ_QMMZ47gF1ZREdKf3q0Gi8-2lhBf1NLpilk7BF7MEcM0-yoAAEY37cyOiL_4L7w6lx3XPY',
    },
    {
      id: 'vestidor-isla',
      name: 'Vestidor con Isla',
      subtitle: 'Nogal + Lacado · Isla Central de Accesorios',
      material: 'Nogal + Lacado Blanco Mate',
      dimensions: 'A medida',
      finish: 'Combinado Oscuro/Claro',
      price: 'A medida',
      tag: 'Premium',
      visible: true,
      description: 'La isla central es el corazón del vestidor de alto nivel. En nogal oscuro con tapa de granito o cuarzo, funciona como superficie de preparación y punto focal visual del espacio.',
      features: ['Isla central en nogal con encimera de cuarzo', 'Cajones de accesorios con terciopelo', 'Perimetral en lacado blanco mate', 'Lámpara suspendida sobre isla incluida'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXlBFd4xgGoNnpna5xQqHhVFZJF40t0YDL1FYy5J2gLVwFizJ1SIfXEZJJGXoUsoDVWv6cIs0-9nHbVf3HWQkoPl9ihBECZarsK2dYwUFo4TUs3-tvUJNzxWmkRRdz1wS1FSbGazxMS8hRasva2wXBDuphmtFZGnvLEyz9NCJHblcgWebvi6a_W6Xvu1ENmQFvr8A1s0E-jsQMaBQxjVPs3b1kLouTB5NWE6FVsb6n--HBKC9MRPsXIr8YW56B9ok9Qu0-ttV7',
    },
    {
      id: 'vestidor-capsule',
      name: 'Vestidor Cápsula',
      subtitle: 'Fresno · Optimización de Espacio Pequeño',
      material: 'Fresno Natural',
      dimensions: 'A medida — desde 2 × 2 m',
      finish: 'Lacado Mate Arena',
      price: 'A medida',
      visible: true,
      description: 'Para espacios donde cada centímetro cuenta. El Cápsula es nuestro expertise en optimización: nichos de profundidades variables y cajones de apertura completa.',
      features: ['Diseño de optimización máxima', 'Nichos de profundidad variable (30/45/60 cm)', 'Iluminación LED en cada módulo', 'Puertas abatibles de eficiencia total'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHoX0SaLwsAxqFcRni1_uae2VEG2fERFZoJBgXvwf27W-nCmyolmMhkvA0dV1YHLZvHlmW2QjkRiDNIrv1XlqpDdZD5M4V6OkTJqhFd8UqCMxUHwjc-6kOYlTfjj-BNfwrND4bYeOQZeKwqV1dB1ZN00fSNQId4SVpZ0rG_EdSDiT5NXmnauPaTrGLGbna7cn1kQ_QMMZ47gF1ZREdKf3q0Gi8-2lhBf1NLpilk7BF7MEcM0-yoAAEY37cyOiL_4L7w6lx3XPY',
    },
  ],
}

// ─── MUEBLES DE BAÑO ──────────────────────────────────────────────────────────
// Para ocultar: pon visible: false


export const banoCategory: CatalogCategory = {
  id: 'bano',
  slug: 'bano',
  visible: true,
  order: 7,
  title: 'Muebles de Baño',
  second_title: 'Muebles de',
  titleAccent: 'Baño',
  badge: 'Colección Baño',
  description: 'El baño como santuario privado. Vanities, muebles flotantes y accesorios en madera tratada que desafían la humedad y elevan la experiencia diaria.',
  heroDescription: 'El baño es el primer y último espacio del día. En KESAMA lo tratamos como un spa íntimo: maderas hidrófugas, herrajes de acero inoxidable marino y encimeras de piedra natural que convierten la rutina en ritual.',
 
  // ── Imagen 1: vanity doble roble claro, lavamanos sobre encimera ──
  heroImage: '/images/bano/vanity-doble-roble.png',
 
  materials: ['Teca Hidrofugada', 'Roble Tratado', 'Fresno Lacado', 'Nogal con Epoxi'],
  finishes: ['Aceite Termoestable Marino', 'Lacado Hidrófugo', 'Barniz Poliuretano', 'Epoxi Transparente'],
 
  heroProduct: {
    id: 'vanity-obsidian',
    name: 'Vanity Obsidian',
    subtitle: 'El tocador que transforma el baño en galería',
    material: 'Teca Hidrofugada + Encimera Mármol Negro',
    dimensions: '120 × 50 × 55 cm (flotante)',
    finish: 'Aceite Termoestable Marino + Herrajes Inox',
    price: 'A medida',
    tag: 'Diseño exclusivo',
    description: 'El Vanity Obsidian redefine el concepto de mueble de baño: suspendido a 45 cm del suelo, en teca hidrofugada que resiste la humedad durante décadas, con encimera de mármol negro veteado y lavamanos integrado flush. Un mueble que parece diseñado para un hotel de cinco estrellas pero que vive en tu espacio.',
    features: [
      'Teca hidrofugada grado marino — inmune a la humedad',
      'Encimera de mármol negro Zimbabwe 3 cm',
      'Lavamanos integrado flush sin juntas visibles',
      'Montaje flotante — facilita la limpieza del suelo',
      'Cajones con guías de acero inoxidable Blum',
      'Iluminación LED frontal integrada en cantos',
      'Herrajes en acero inoxidable 316 — no oxida nunca',
    ],
    // ── Imagen 1: vanity doble roble claro ──
    image: '/images/bano/vanity-doble-roble.png',
  },
 
  products: [
    {
      id: 'vanity-alba',
      name: 'Vanity Alba',
      subtitle: 'Fresno Lacado · Blanco Nórdico Hidrófugo',
      material: 'Fresno Lacado Hidrófugo + Cuarzo Blanco',
      dimensions: '90 × 48 × 52 cm',
      finish: 'Lacado Blanco Hidrófugo Mate',
      price: 'Consultar',
      tag: 'Más pedido',
      visible: true,
      description: 'Luminosidad nórdica en el baño. El Vanity Alba en fresno lacado blanco aporta la calidez de la madera natural con la resistencia técnica de un acabado hidrófugo de grado contractual.',
      features: [
        'Fresno macizo con lacado hidrófugo de 5 capas',
        'Encimera cuarzo blanco Calacatta',
        'Lavamanos sobre encimera o integrado (a elegir)',
        'Cajón profundo con divisor interior',
        'Sifón oculto integrado en la carpintería',
        'Disponible en 60, 90 y 120 cm de ancho',
      ],
      // ── Imagen 2: vanity nogal oscuro, encimera negra, espejo LED ──
      image: '/images/bano/vanity-nogal-negro.png',
    },
    {
      id: 'gabinete-espejo',
      name: 'Gabinete Espejo',
      subtitle: 'Roble Tratado · Almacenamiento Oculto Tras el Espejo',
      material: 'Roble con Tratamiento Hidrófugo',
      dimensions: '80 × 15 × 70 cm',
      finish: 'Aceite Termoestable Natural',
      price: 'Consultar',
      tag: 'Nuevo',
      visible: true,
      description: 'La solución más elegante para el almacenamiento de baño: un espejo que al abrirse revela un gabinete perfectamente organizado. El marco en roble tratado resiste la condensación sin deformarse.',
      features: [
        'Marco en roble con tratamiento termoestable marino',
        'Espejo de 6 mm retroiluminado con LED 3000K',
        'Interior con 3 estantes ajustables',
        'Cierre suave y silencioso',
        'Instalación empotrada o sobre superficie',
        'Disponible con espejo esmerilado o transparente',
      ],
      // ── Imagen 3: vanity nogal cálido con columna lateral ──
      image: '/images/bano/vanity-nogal-columna.png',
    },
    // {
    //   id: 'torre-toallas',
    //   name: 'Torre Toallero',
    //   subtitle: 'Teca Natural · Escultura Funcional para el Baño',
    //   material: 'Teca Natural Grado Exterior',
    //   dimensions: '35 × 35 × 160 cm',
    //   finish: 'Aceite de Teca Natural',
    //   price: 'Consultar',
    //   visible: true,
    //   description: 'Un toallero que es, ante todo, una escultura. La Torre en teca natural presenta cinco barras escalonadas en latón cepillado. La teca no requiere mantenimiento en ambientes húmedos: simplemente envejece con gracia.',
    //   features: [
    //     'Teca A-grade — no requiere mantenimiento en baños',
    //     '5 barras escalonadas en latón cepillado',
    //     'Base pesada de 8 kg — estabilidad total',
    //     'Ensamble espiga y mortaja sin tornillos visibles',
    //     'Capacidad para 10+ toallas',
    //     'Disponible con o sin estante inferior',
    //   ],
    //   // ── Imagen 4: vanity estriado madera clara, lavamanos cobre ──
    //   image: '/images/bano/vanity-estriado.png',
    // },
    // {
    //   id: 'banco-bano',
    //   name: 'Banco de Baño',
    //   subtitle: 'Nogal con Epoxi · Asiento de Ducha de Autor',
    //   material: 'Nogal con Sellado Epoxi',
    //   dimensions: '60 × 35 × 45 cm',
    //   finish: 'Epoxi Transparente Marino + Aceite',
    //   price: 'Consultar',
    //   tag: 'Edición limitada',
    //   visible: true,
    //   description: 'El asiento de ducha reinterpretado como pieza de autor. El nogal sellado con epoxi transparente marino crea una superficie completamente impermeable sin perder la textura natural de la veta.',
    //   features: [
    //     'Nogal americano con sellado epoxi marino transparente',
    //     'Superficie 100% impermeable — uso directo en ducha',
    //     'Patas en acero inoxidable 316 (grado marino)',
    //     'Antideslizante integrado en base de patas',
    //     'Grosor de tablero 5 cm — asiento cómodo',
    //     'Disponible en ancho 45, 60 o 80 cm',
    //   ],
    //   // ── Imagen 3: reutilizada (nogal cálido, ambiente warm) ──
    //   image: '/images/bano/vanity-nogal-columna.png',
    // },
    {
      id: 'estante-bano',
      name: 'Estantería de Baño',
      subtitle: 'Roble Flotante · Organización Minimalista',
      material: 'Roble con Tratamiento Hidrófugo',
      dimensions: 'A medida — módulos de 30, 45 y 60 cm',
      finish: 'Aceite Termoestable + Barniz Sellador',
      price: 'Consultar',
      visible: true,
      description: 'Organización modular para el baño que no sacrifica la estética. Los estantes flotantes en roble tratado se instalan sin soportes visibles. Sistema modular: añade o quita estantes según necesidad.',
      features: [
        'Sistema flotante — sin soportes visibles',
        'Roble con tratamiento hidrófugo 5 capas',
        'Módulos combinables en alturas libres',
        'Carga máxima 25 kg por estante',
        'Cantos redondeados a 5 mm de radio',
        'Incluye anclajes y guía de instalación',
      ],
      // ── Imagen 4: reutilizada (vanity estriado madera clara) ──
      image: '/images/bano/vanity-estriado.png',
    },
  ],
}
// ─── MESITAS DE NOCHE ─────────────────────────────────────────────────────────

export const mesitasCategory: CatalogCategory = {
  id: 'mesitas-de-noche',
  slug: 'mesitas-de-noche',
  visible: true,
  order: 8,
  title: 'Mesitas',
  titleAccent: 'de Noche',
  badge: 'Colección Dormitorio',
  description: 'Piezas escultóricas que habitan el espacio más íntimo del hogar. Lo último que ves al cerrar los ojos merece ser hermoso.',
  heroDescription: 'La mesita de noche es el objeto doméstico más infravalorado. En KESAMA lo tratamos con la misma seriedad que una mesa de comedor: proporción, material, funcionalidad y carácter son innegociables.',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDx2e3doWTPYFa8qi9Aha0lGvwUhPx0w1C6j-40kId38FVOStjkHTUAXsCkClnrcTYU_ogeEUnwKZXL1zBx8RVu4Z7WzMsyOUPn_Ibk69WnDjtGet3LrvYJp8BVGhyqr9acf5eZSLVzIAzUFLQn_zVlw9g6HCX6WzVg-AGsBf0qhs0PlY_j8MKuaDJWgvBDTIvjq6-uLlSgCV6E7JuinS-EC8i9R9usZGgVHZGAjpxWPLZT_0kLJckJz1_Rn-f2V9js2RYqjXh',
  materials: ['Fresno Nórdico', 'Roble Natural', 'Nogal Oscuro', 'Cerezo Americano'],
  finishes: ['Aceite Natural', 'Tinte Humo', 'Barniz Semimate', 'Lacado Mate'],
  heroProduct: {
    id: 'mesita-eterea',
    name: 'Mesita Etérea',
    subtitle: 'Ligereza arquitectónica a la altura del descanso',
    material: 'Fresno Nórdico',
    dimensions: '55 × 35 × 50 cm',
    weight: '6 kg',
    finish: 'Aceite Natural',
    price: 'Consultar',
    tag: 'Diseño propio',
    description: 'La Etérea parece flotar: sus patas de sección cuadrada de 2 × 2 cm reducen el contacto visual con el suelo al mínimo posible, mientras el tablero de 4 cm de fresno impone su presencia material.',
    features: [
      'Tablero en fresno nórdico de 4 cm de grosor',
      'Patas cuadradas de sección 2 × 2 cm — efecto flotante',
      'Bandeja inferior en fresno de 1.5 cm',
      'Acabado aceite natural de aroma neutro',
      'Montaje a pared opcional (sin patas)',
      'Disponible en pareja con ajuste de veta',
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDx2e3doWTPYFa8qi9Aha0lGvwUhPx0w1C6j-40kId38FVOStjkHTUAXsCkClnrcTYU_ogeEUnwKZXL1zBx8RVu4Z7WzMsyOUPn_Ibk69WnDjtGet3LrvYJp8BVGhyqr9acf5eZSLVzIAzUFLQn_zVlw9g6HCX6WzVg-AGsBf0qhs0PlY_j8MKuaDJWgvBDTIvjq6-uLlSgCV6E7JuinS-EC8i9R9usZGgVHZGAjpxWPLZT_0kLJckJz1_Rn-f2V9js2RYqjXh',
  },
  products: [
    {
      id: 'mesita-monke',
      name: 'Mesita Monke',
      subtitle: 'Roble · Cajón de Apertura por Tacto',
      material: 'Roble Natural',
      dimensions: '50 × 38 × 52 cm',
      finish: 'Aceite de Tung',
      price: 'Consultar',
      visible: true,
      description: 'Funcionalidad esculpida: el cajón sin tirador se abre con un toque suave gracias al sistema push-to-open integrado.',
      features: ['Cajón push-to-open sin tirador', 'Roble de grano fino europeo', 'Base sólida con radio de curvatura sutil', 'Guías con cierre suave'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDx2e3doWTPYFa8qi9Aha0lGvwUhPx0w1C6j-40kId38FVOStjkHTUAXsCkClnrcTYU_ogeEUnwKZXL1zBx8RVu4Z7WzMsyOUPn_Ibk69WnDjtGet3LrvYJp8BVGhyqr9acf5eZSLVzIAzUFLQn_zVlw9g6HCX6WzVg-AGsBf0qhs0PlY_j8MKuaDJWgvBDTIvjq6-uLlSgCV6E7JuinS-EC8i9R9usZGgVHZGAjpxWPLZT_0kLJckJz1_Rn-f2V9js2RYqjXh',
    },
    {
      id: 'mesita-oscura',
      name: 'Mesita Oscura',
      subtitle: 'Nogal Oscuro · Carácter Dramático',
      material: 'Nogal Americano',
      dimensions: '48 × 36 × 54 cm',
      finish: 'Tinte Humo + Aceite Negro',
      price: 'Consultar',
      tag: 'Más vendida',
      visible: true,
      description: 'Para dormitorios que no temen al drama. El nogal americano con tinte humo adquiere una profundidad casi negra que crea una presencia escultórica junto a la cama.',
      features: ['Nogal americano con tinte humo en 2 capas', 'Tablero de 5 cm — peso visual máximo', 'Patas en bloque de 6 × 6 cm', 'Disponible con o sin cajón'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDx2e3doWTPYFa8qi9Aha0lGvwUhPx0w1C6j-40kId38FVOStjkHTUAXsCkClnrcTYU_ogeEUnwKZXL1zBx8RVu4Z7WzMsyOUPn_Ibk69WnDjtGet3LrvYJp8BVGhyqr9acf5eZSLVzIAzUFLQn_zVlw9g6HCX6WzVg-AGsBf0qhs0PlY_j8MKuaDJWgvBDTIvjq6-uLlSgCV6E7JuinS-EC8i9R9usZGgVHZGAjpxWPLZT_0kLJckJz1_Rn-f2V9js2RYqjXh',
    },
    {
      id: 'mesita-cerezo',
      name: 'Mesita Cerezo',
      subtitle: 'Cerezo Americano · Calidez Anaranjada',
      material: 'Cerezo Americano',
      dimensions: '45 × 35 × 50 cm',
      finish: 'Barniz Semimate Natural',
      price: 'Consultar',
      tag: 'Nuevo',
      visible: true,
      description: 'El cerezo americano es la madera que más cambia con el tiempo: empieza en un rosa pálido y con los años se oscurece hacia un naranja dorado profundo.',
      features: ['Cerezo americano que oscurece con el tiempo', 'Superficie de 45 cm — funcional y compacta', 'Bisagra piano en tapa superior (versión con almacenamiento)', 'Disponible en versión simple o con tapa articulada'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDx2e3doWTPYFa8qi9Aha0lGvwUhPx0w1C6j-40kId38FVOStjkHTUAXsCkClnrcTYU_ogeEUnwKZXL1zBx8RVu4Z7WzMsyOUPn_Ibk69WnDjtGet3LrvYJp8BVGhyqr9acf5eZSLVzIAzUFLQn_zVlw9g6HCX6WzVg-AGsBf0qhs0PlY_j8MKuaDJWgvBDTIvjq6-uLlSgCV6E7JuinS-EC8i9R9usZGgVHZGAjpxWPLZT_0kLJckJz1_Rn-f2V9js2RYqjXh',
    },
    {
      id: 'mesita-suspendida',
      name: 'Mesita Suspendida',
      subtitle: 'Fresno · Montaje a Pared Sin Patas',
      material: 'Fresno Nórdico',
      dimensions: '50 × 30 cm (voladizo 25 cm)',
      finish: 'Aceite Blanco Transparente',
      price: 'Consultar',
      visible: true,
      description: 'La mesita más ligera que fabricamos: se ancla a la pared sin tocar el suelo. El efecto es de joyería arquitectónica — un tablero de fresno que emerge de la pared como si siempre hubiera estado ahí.',
      features: ['Montaje a pared — sin patas', 'Anclaje estructural para 25 kg', 'Tablero de 4 cm en voladizo libre', 'Instalación incluida en Bogotá y área metropolitana'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDx2e3doWTPYFa8qi9Aha0lGvwUhPx0w1C6j-40kId38FVOStjkHTUAXsCkClnrcTYU_ogeEUnwKZXL1zBx8RVu4Z7WzMsyOUPn_Ibk69WnDjtGet3LrvYJp8BVGhyqr9acf5eZSLVzIAzUFLQn_zVlw9g6HCX6WzVg-AGsBf0qhs0PlY_j8MKuaDJWgvBDTIvjq6-uLlSgCV6E7JuinS-EC8i9R9usZGgVHZGAjpxWPLZT_0kLJckJz1_Rn-f2V9js2RYqjXh',
    },
  ],
}

// ─── Export all ───────────────────────────────────────────────────────────────
// Para agregar una categoría nueva, solo añádela aquí.
// Para ocultar una, pon visible: false en su objeto arriba.

export const allCategoriesList: CatalogCategory[] = [
  cocinasCategory,
  escritoriosCategory,
  comedoresCategory,
  puertasCategory,
  vestidoresCategory,
  banoCategory,
  mesitasCategory,
  materialesCategory,
]

// Helper: solo las categorías visibles, ordenadas
export function getVisibleCategories({ move_materials_to_end = false } = {}): CatalogCategory[] {

  // Mover materiales al final
  if (move_materials_to_end) {
    const materiales = allCategoriesList.find((c) => c.slug === 'materiales')
    if (materiales) {
      const newAllCategoriesList = []
      // const materialesIndex = allCategoriesList.findIndex((c) => c.slug === 'materiales')
      const otherCategories = allCategoriesList.filter((c) => c.slug !== 'materiales')
      newAllCategoriesList.push(...otherCategories)
      newAllCategoriesList.push(materiales)
      
      return newAllCategoriesList
    }
  }
  return allCategoriesList
    .filter((c) => c.visible !== false)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
}

// Helper: categoría por slug
export function getCategoryBySlug(slug: string): CatalogCategory | undefined {
  return allCategoriesList.find((c) => c.slug === slug && c.visible !== false)
}

// Legacy named exports for backward compatibility
export const allCategories = {
  escritorios: escritoriosCategory,
  comedores: comedoresCategory,
  cocinas: cocinasCategory,
  puertas: puertasCategory,
  vestidores: vestidoresCategory,
  'mesitas-de-noche': mesitasCategory,
  materiales: materialesCategory,
  bano: banoCategory,
}