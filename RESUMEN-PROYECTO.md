# KESAMA Landing — Resumen técnico del proyecto

> Documento de análisis de punta a punta: stack, arquitectura, módulos, datos, visor 3D, diseño y estado actual.
> Fecha del análisis: 2026-09-21 · Rama `main` · 8 commits.

---

## 1. Qué es

Landing page + catálogo para **KESAMA**, marca de muebles en madera de alta gama (Colombia). No hay carrito ni backend: **toda conversión termina en WhatsApp** con un mensaje prellenado que incluye el producto y la categoría.

| Aspecto | Valor |
|---|---|
| Framework | **Next.js 15** (App Router) + **React 19** |
| Lenguaje | TypeScript 5 (`strict`) |
| Estilos | **Tailwind CSS 3** + un CSS Module para el visor 3D |
| 3D | **Three.js 0.180** (sin React Three Fiber, sin Spline) |
| Tests | `node:test` (pruebas CPU del visor 3D) |
| Deploy | Vercel (`vercel.json`, región `gru1` – São Paulo) |
| Tamaño | ~3.800 líneas de código propio |

### Scripts (`package.json`)

```bash
npm run dev        # servidor de desarrollo (http://localhost:3000)
npm run build      # build de producción
npm run start      # servir el build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
npm run test:3d    # node --test tests/nightstand.test.cjs
```

---

## 2. Estructura de carpetas

```
kesama-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx               # <html lang="es">, metadata SEO, fuentes Google
│   │   ├── page.tsx                 # Home: compone todas las secciones
│   │   ├── globals.css              # Tailwind + animaciones scroll + utilidades
│   │   └── catalogo/[slug]/page.tsx # Página por categoría (SSG)
│   ├── components/
│   │   ├── Navbar.tsx               # Nav fija glassmorphism + menú móvil (dinámico)
│   │   ├── WhatsAppBubble.tsx       # Botón flotante de WhatsApp
│   │   ├── ScrollToHash.tsx         # Scroll a #hash al llegar desde otra ruta
│   │   ├── HeroSection.tsx          # Hero a pantalla casi completa
│   │   ├── CategoriesGrid.tsx       # Bento grid de colecciones (dinámico)
│   │   ├── FeaturedProducts.tsx     # "Piezas de Autor" + visor 3D
│   │   ├── NightstandViewer3D.tsx   # UI React del visor 3D
│   │   ├── NightstandViewer3D.module.css
│   │   ├── MaterialsSection.tsx     # Selector interactivo de maderas
│   │   ├── PhilosophySection.tsx    # Filosofía + estadísticas
│   │   ├── CatalogSection.tsx       # Plantilla completa de una categoría
│   │   ├── CategorySection.tsx      # (legacy, no se usa)
│   │   └── Footer.tsx               # Footer + newsletter (dinámico)
│   ├── data/
│   │   ├── catalog.ts               # ⭐ Fuente de verdad del catálogo (8 categorías)
│   │   └── products.ts              # Destacados + materiales (datos de la home)
│   ├── lib/
│   │   ├── config.ts                # ⭐ WhatsApp, textos, redes
│   │   ├── nightstandScene.ts       # ⭐ Motor 3D (Three.js puro)
│   │   └── useScrollAnimation.ts    # Hook (no se usa)
│   └── types/spline.d.ts            # Tipos de Spline (restos, ya no se usa)
├── public/images/                   # Fotos locales por categoría (ver §7)
├── tests/nightstand.test.cjs        # Tests del visor 3D
├── INSTRUCCIONES-3D.md              # Guía de uso/pruebas del visor
├── README.md
├── next.config.ts                   # remotePatterns para Google/Unsplash
├── tailwind.config.ts               # Paleta Material 3 "Digital Atelier"
├── vercel.json
└── vite.config.js                   # Restos de un setup Vite (no se usa)
```

Alias de import: `@/*` → `src/*`.

---

## 3. Rutas y flujo de navegación

| Ruta | Archivo | Tipo | Contenido |
|---|---|---|---|
| `/` | `app/page.tsx` | Estática | Home completa |
| `/catalogo/[slug]` | `app/catalogo/[slug]/page.tsx` | **SSG** (`generateStaticParams`) | Catálogo de una categoría |

Slugs generados: `cocinas`, `comedores`, `escritorios`, `puertas`, `materiales`, `vestidores`, `bano`, `mesitas-de-noche`. Un slug inexistente u oculto → `notFound()` (404).

### Home (`/`) — orden de secciones

```
Navbar (fija)
WhatsAppBubble (flotante, abajo-izquierda)
ScrollToHash (invisible)
<main>
  1. HeroSection          → tagline + subtítulo + CTA "Ver Colección" / "Nuestra Historia"
  2. CategoriesGrid       → #categorias  · bento grid de colecciones
  3. FeaturedProducts     → #destacados  · visor 3D NTS-02 + piezas destacadas
  4. MaterialsSection     → #materiales  · selector de maderas
  5. PhilosophySection    → #filosofia   · historia + stats
</main>
Footer
```

### Página de categoría (`/catalogo/[slug]`)

```
Navbar + WhatsAppBubble
Breadcrumb: Inicio → Colecciones → {Categoría}
CatalogSection(category)       → cabecera, pills, cita, producto héroe, grid, CTA
OtherCategories                → chips a las demás colecciones
Footer
```

`generateMetadata` crea `title` = `"{title} {titleAccent} — KESAMA"` y `description` = `category.description` por cada categoría.

### Navegación entre secciones
- Navbar y Footer leen las categorías de `catalog.ts` → cualquier cambio de datos se refleja solo.
- Los enlaces del Footer a `#filosofia` / `#materiales`: si estás en `/` hace scroll; si no, `router.push('/#hash')` y `ScrollToHash` hace el scroll suave tras 300 ms.

---

## 4. Módulos (componentes) en detalle

### `Navbar.tsx` (client)
- Fija, `backdrop-blur-xl`, cambia sombra al pasar 40 px de scroll.
- Logo = botón: en `/` sube arriba, en otra ruta vuelve a `/`.
- Links: "Inicio" + una entrada por categoría (`getVisibleCategories({ move_materials_to_end: true })`) → `/catalogo/{slug}`.
- Móvil: overlay a pantalla completa con fade; se cierra al cambiar de ruta.
- Icono de búsqueda: decorativo (sin funcionalidad).

### `WhatsAppBubble.tsx`
Enlace fijo `bottom-8 left-8` con icono y texto "WhatsApp · Asistente Digital" → `getWhatsappGeneralUrl()`.

### `HeroSection.tsx` (client)
- Imagen remota (lh3.googleusercontent) a `85vh` (min 600, max 900 px), gradiente oscuro inferior.
- Título = `siteConfig.tagline`, subtítulo = `siteConfig.heroSubtitle`.
- Animación de entrada escalonada (300 ms + 180 ms por elemento) con estilos inline.
- Indicador vertical "Scroll".

### `CategoriesGrid.tsx` (client) — `#categorias`
- Grid 1 / 4 / 6 columnas (móvil / md / lg), `min-h-[900px]` en desktop.
- Tamaño de cada celda definido por slug en `bentoLayout` (p. ej. `cocinas` y `vestidores` ocupan 2×2); si falta, usa `defaultLayout`.
- Cada tarjeta: imagen (`heroImage` o la del producto héroe), overlay, título (`second_title ?? title` + `titleAccent` en color crema), "N modelos disponibles" y botón "Ver más" que aparece en hover → `/catalogo/{slug}`.

### `FeaturedProducts.tsx` (client) — `#destacados`
1. Cabecera "Selección Curada / Piezas de Autor".
2. **Bloque 3D** en 2 columnas:
   - Izquierda: `<NightstandViewer3D />`.
   - Derecha (fondo oscuro): "Pieza Estrella — Mesita de Noche Flotante NTS—02", descripción, 4 bullets (Roble/Nogal · 2 cajones · LED · vistas 360°) y botón WhatsApp específico.
3. Grid de `featuredProducts` con `featured: true` (hoy: Mesa Monolito y Vestidor Zen), el segundo desplazado (`md:mt-24`).
4. CTA "Ver Todas las Colecciones" → scroll a `#categorias`.

### `MaterialsSection.tsx` (client) — `#materiales`
- Lista de 4 maderas (`materials` de `products.ts`): Roble, Nogal, Fresno, Cedro, con descripción y "tono".
- Al seleccionar, hace crossfade (opacidad + escala) entre 4 imágenes superpuestas.

### `PhilosophySection.tsx` (client) — `#filosofia`
- Imagen de artesano + tarjeta de cita flotante ("La madera respira…").
- Dos párrafos de filosofía y 3 stats: `100% Sostenible`, `100% Calidad`, `∞ Durabilidad y Garantía`.

### `CatalogSection.tsx` (client) — plantilla de categoría
Sub-componentes internos:

| Sub-componente | Qué muestra |
|---|---|
| `WAIcon` | SVG de WhatsApp reutilizable |
| `Tag` | Etiqueta marrón ("Nuevo", "Más vendido"…) |
| `HeroProduct` | Tarjeta editorial 6/10 imagen + 4/10 ficha: nombre, subtítulo, descripción, tabla Material/Dimensiones/Acabado, lista de características y CTA WhatsApp |
| `ProductCard` | Tarjeta de grid: imagen 4:3, tag, descripción (3 líneas), chips rápidos (1ª palabra del material, 2 del acabado, dimensiones), **"Ver detalles" desplegable** con características y botón "Consultar" |
| `PillList` | Pills de "Maderas disponibles" y "Acabados" |

Estructura: badge + título gigante (título / acento) · descripción + pills · franja de cita (`heroDescription`) · `HeroProduct` · "Más de la colección (N modelos)" en grid 1/2/3 columnas · banda CTA "¿Tienes un proyecto en mente?" → WhatsApp "proyecto de {categoría}".
Fondo alterno: `comedores`, `puertas`, `materiales` usan `#f5f3f0`; el resto `#fbf9f6`.

### `Footer.tsx` (client)
4 columnas: marca + Instagram · **Colecciones** (dinámico) · **Compañía** (Filosofía, Materiales, Sostenibilidad → `#filosofia`, Contacto → WhatsApp) · **Newsletter** (solo estado local: muestra "¡Gracias por suscribirte!", no envía nada). Barra inferior con © año actual y enlaces de Privacidad/Términos (texto sin destino).

### `ScrollToHash.tsx`
Lee `window.location.hash` al montar/cambiar de ruta y hace `scrollIntoView` suave tras 300 ms.

### Componentes/archivos sin uso
- `CategorySection.tsx` — versión anterior de la plantilla de categoría (reemplazada por `CatalogSection`).
- `lib/useScrollAnimation.ts` — cada componente implementa su propio `IntersectionObserver`.
- `types/spline.d.ts` — tipos del antiguo `<spline-viewer>`.
- `products.ts → categories` — reemplazado por `catalog.ts`.
- `vite.config.js` — importa `@vitejs/plugin-react`, que no está instalado.

---

## 5. Capa de datos

### `lib/config.ts` — configuración global

```ts
siteConfig = {
  whatsappNumber: '573102099929',
  whatsappDefaultMessage: '¡Hola! Me gustaría conocer más sobre los productos KESAMA.',
  companyName: 'KESAMA',
  tagline: 'Artesanía que define espacios',
  heroSubtitle: 'Diseño atemporal concebido desde la nobleza de la madera y la precisión técnica.',
  contactEmail: 'hola@kesama.co',
  socialLinks: { instagram: 'https://instagram.com/kesama', facebook: '', pinterest: '' },
}
```

| Función | URL generada |
|---|---|
| `getWhatsappGeneralUrl()` | `wa.me/{n}?text={mensaje por defecto}` |
| `getWhatsappProductUrl(nombre, categoría)` | `wa.me/{n}?text=¡Hola KESAMA! Me interesa el producto: *{nombre}* ({categoría}). ¿Podrían darme más información?` |

### `data/catalog.ts` — catálogo completo (fuente de verdad)

**Modelo de datos**

```ts
interface CatalogProduct {
  id, name, subtitle, material: string
  dimensions?, weight?, finish?, price?: string
  description: string
  features: string[]
  image: string
  tag?: string          // "Nuevo", "Más vendido", "Edición limitada"...
  visible?: boolean     // pensado para ocultar el producto
}

interface CatalogCategory {
  id, slug, title: string
  second_title?: string // título alternativo en grid/menú móvil (p. ej. "Muebles de")
  titleAccent: string   // segunda línea en color
  badge, description, heroDescription, heroImage: string
  heroProduct: CatalogProduct
  products: CatalogProduct[]
  materials: string[]   // pills "Maderas disponibles"
  finishes: string[]    // pills "Acabados"
  visible?: boolean     // false = oculta la categoría en todo el sitio
  order?: number        // menor = primero
}
```

**Categorías actuales**

| order | slug | Título | Producto héroe | Productos extra |
|---|---|---|---|---|
| 1 | `cocinas` | Cocinas Integrales | Cocina Obsidiana | Alba, Terra, Muro |
| 2 | `comedores` | Comedores Monumentales | Mesa Basalto 01 | Monolito, Arc, Teca Recuperada, Tulip |
| 3 | `escritorios` | Escritorios de Precisión | Escritorio Meridian | Atlas, Bruma, Línea L, Viga, Plano |
| 4 | `puertas` | Puertas Pivotantes | Puerta Basalto | Horizontal, Nordic, Transparencia |
| 5 | `materiales` | Materiales Nobles | Roble Europeo FSC | Nogal, Fresno, Cedro, Teca |
| 6 | `vestidores` | Vestidores a Medida | Vestidor Zen | Lineal, con Isla, Cápsula |
| 7 | `bano` | Muebles de Baño | Vanity Obsidian | Vanity Alba, Gabinete Espejo, Estantería de Baño (+2 comentados: Torre Toallero, Banco de Baño) |
| 8 | `mesitas-de-noche` | Mesitas de Noche | Mesita Etérea | Monke, Oscura, Cerezo, Suspendida |

Todas están `visible: true`. El tono de los textos es editorial/premium (maderas FSC, ensambles espiga-mortaja, herrajes Blum, etc.) y los precios son "Consultar" o "A medida".

**Helpers**
- `allCategoriesList` — arreglo maestro (agregar una categoría = crearla y añadirla aquí).
- `getVisibleCategories({ move_materials_to_end })` — filtra `visible !== false` y ordena por `order`. Con `move_materials_to_end: true` (lo usa la Navbar) mueve "Materiales" al final.
- `getCategoryBySlug(slug)` — usado por la ruta dinámica.
- `allCategories` — export legacy por clave.

### `data/products.ts` — datos de la home
- `featuredProducts`: 4 piezas (Monolito ✔, Vestidor Zen ✔, Meridian ✘, Puerta Basalto ✘ — ✔ = `featured`).
- `materials`: 4 maderas para `MaterialsSection`.
- `categories`: legacy, sin uso.

---

## 6. El modelo 3D — Mesita flotante NTS-02

### 6.1 Enfoque

El mueble **no es un archivo GLB/Blender ni una escena de Spline**: está **modelado 100 % por código** con primitivas de Three.js. Todo (geometría, veta de madera, entorno de iluminación) se genera en el navegador; el visor no descarga modelos ni texturas. Sustituyó a una implementación anterior con Spline (`@splinetool/*` fueron eliminados).

Está dividido en dos capas:

```
FeaturedProducts.tsx
  └── NightstandViewer3D.tsx        (React: estado, botones, accesibilidad)
        │  import() dinámico, solo en cliente
        └── lib/nightstandScene.ts  (Three.js puro: escena, modelo, cámara, animación)
              └── devuelve ViewerAPI { toggleDrawer, setView, setLED, setFinish, zoom, reset, dispose }
```

La separación permite testear el motor sin React y mantener Three.js fuera del bundle inicial (se carga con `import('@/lib/nightstandScene')` dentro de `useEffect`).

### 6.2 Contrato entre React y el motor

```ts
type ViewName = 'Perspectiva' | 'Frontal' | 'Lateral' | 'Superior' | 'Trasera'

interface ViewerAPI {
  toggleDrawer(index: 0 | 1): void
  setView(view: ViewName): void
  setLED(on: boolean): void
  setFinish(name: 'Roble' | 'Nogal'): void
  zoom(factor: number): void   // <1 acerca, >1 aleja
  reset(): void
  dispose(): void
}

// Callbacks del motor hacia React
onDrawer(index, open)  // sincroniza los botones cuando se hace clic en el cajón 3D
onOrbit()              // el usuario arrastró → la vista pasa a "Libre"
onError()              // WebGL perdido/no disponible
```

### 6.3 Renderer, cámara y controles

| Elemento | Configuración |
|---|---|
| `WebGLRenderer` | antialias, fondo transparente, `powerPreference: 'low-power'`, pixel ratio máx. **1.75** |
| Sombras | `PCFSoftShadowMap`, mapa 1024² |
| Tone mapping | ACES Filmic, exposición 1.05 |
| Cámara | `PerspectiveCamera` FOV 38°, near 0.05, far 30 |
| `OrbitControls` | damping 0.10, **sin pan**, distancia 1.25–4.2 m, ángulo polar 0.015 → 0.77π (no se puede mirar desde abajo del suelo) |
| Objetivo | `(0, -0.015, 0.07)` |

### 6.4 Iluminación y entorno

- **Entorno IBL**: `RoomEnvironment` procesado con `PMREMGenerator` → `scene.environment` (intensidad 0.55). Da reflejos de "estudio" sin HDRI externo.
- `HemisphereLight` cálida (#fff9ef / #8c7963, 1.5).
- **Key light** direccional (#fff5e4, 3) desde arriba-izquierda-frente, proyecta sombras.
- **Fill light** fría (#d9e7ff, 1.1) desde atrás-derecha.
- **LED inferior**: una tira emisiva (1.08 m) + 3 `PointLight` cálidas (#ffd18a, 0.35) bajo el mueble.
- Suelo de estudio: caja 200 × 200 m color #ded6c8 a −0.65 m (recibe sombras; no hay pared para no tapar la vista trasera).

### 6.5 Materiales

| Material | Uso | Parámetros |
|---|---|---|
| `wood` | Cubierta y frentes | `CanvasTexture` procedural + bumpMap, roughness 0.46 |
| `inner` | Interior de cajones | misma veta tintada #ddd1b3, roughness 0.7 |
| `white` | Cuerpo (carcasa) | #f2eee5 mate, roughness 0.34 |
| `steel` | Correderas, tornillos | metalness 0.85, roughness 0.25 |
| `black` | Soporte trasero, topes | #242522, metalness 0.55 |
| `ledMaterial` | Tira LED | emissive #ffcf76, intensidad 3 |

**Veta procedural (`woodTexture()`)**: canvas de 1024×512 generado píxel a píxel con un PRNG con semilla fija (LCG, seed 90210) → siempre la misma veta. Combina ondas senoidales (anillos/bandas), un término elevado a la 16 para simular poros, y ruido. Base RGB (188,149,102) = roble. Se usa `RepeatWrapping`, anisotropía hasta 8 y una copia sin espacio de color como bump map.

**Acabados**: `setFinish('Nogal')` multiplica el color del material por #80604b (oscurece la misma textura); `'Roble'` vuelve a blanco (#ffffff = textura original).

### 6.6 Geometría (unidades en metros)

Constantes editables al inicio de `nightstandScene.ts`:

```ts
WIDTH = 1.20   HEIGHT = 0.30   DEPTH = 0.40   BOARD = 0.022   // 120 × 30 × 40 cm, tablero 22 mm
DRAWER_TRAVEL = 0.29                                          // recorrido de 29 cm
```

Helper `box(parent, size, pos, material, radius)` → `RoundedBoxGeometry` con cantos redondeados (2 mm por defecto) que proyecta y recibe sombra; registra geometrías para liberarlas luego.

Piezas del modelo (`Group` "NTS-02"):

1. **Carcasa abierta** (blanco): base, techo, 2 laterales + 1 divisor central, fondo de 14 mm. No hay un bloque macizo detrás de los frentes → al abrir se ve el interior real.
2. **Cubierta de madera** de 6 mm sobre el techo.
3. **Soporte de montaje trasero** (negro): placa 38×12 cm + 2 pletinas verticales + 8 tornillos (cilindro de acero + ranura), visibles en la vista "Trasera".
4. **Dos cajones** (`Group` "Cajon_izquierdo" en x=−0.293 y "Cajon_derecho" en x=+0.293), cada uno con:
   - **Frente** de 56.3 × 24.5 cm hecho con `ExtrudeGeometry` sobre un `Shape` que incluye un **rebaje real para el dedo** (tirador tipo uñero con curvas cuadráticas), 19 mm de espesor, bisel de 1.5 mm. Las UVs se recalculan para que la veta sea continua en toda la cara.
   - Caja interior: fondo, 2 laterales y trasera en material `inner`.
   - **Correderas telescópicas de 3 etapas**: riel fijo (en el cuerpo), riel intermedio (se mueve a la **mitad** del recorrido del cajón) y riel móvil (va con el cajón) + topes negros.
5. **Tira LED** bajo el mueble + 3 luces puntuales.

### 6.7 Interacción

| Acción | Cómo funciona |
|---|---|
| **Abrir/cerrar cajón** | `toggleDrawer(i)` cambia `targets[i]` entre 0 y 0.29; en cada frame `position.z` se interpola exponencialmente (`1 − e^(−10·dt)`), y los rieles intermedios siguen a `z × 0.5`. |
| **Clic/tap en un cajón** | En `pointerup`, si el puntero se movió ≤ 5 px, no hubo multitouch y no fue `pointercancel` → raycast contra **todo el modelo** (así un cajón no se puede "clicar a través" de la carcasa) y se sube por los padres hasta encontrar un grupo con `userData.drawerIndex`. Arrastrar para girar **no** abre cajones. |
| **Vistas** | 5 presets en `VIEWS`. `setView` hace un tween de 850 ms en **coordenadas esféricas** (radio, φ, θ) con easing smoothstep, eligiendo el camino angular más corto. En pantallas verticales aumenta el radio (`× max(1, 0.95/aspect)`) para que el mueble quepa. |
| **Zoom** | Botones +/− (factor 0.87 / 1.15) o rueda/pellizco (OrbitControls), siempre limitado a 1.25–4.2 m. |
| **LED** | Emisivo 3 ↔ 0 y luces puntuales 0.35 ↔ 0. |
| **Restablecer** | Cierra cajones, Roble, LED encendido y vista Perspectiva. |
| **Rotación libre** | Arrastre; cancela cualquier tween y React muestra la vista como "Libre". |

### 6.8 Rendimiento

- **Render bajo demanda**: no hay bucle infinito. `requestRender()` concede 90 frames de "presupuesto" y el bucle se detiene al agotarse (salvo tween de cámara activo). Se evita programar RAFs duplicados (`frame = -1` durante el render).
- **Pausa automática** con `IntersectionObserver` (visor fuera de pantalla) y `visibilitychange` (pestaña oculta).
- `ResizeObserver` ajusta aspecto y tamaño del canvas.
- `dt` limitado a 50 ms para evitar saltos.
- `prefers-reduced-motion`: cajones y cámara saltan directo al destino, sin animación.
- **`dispose()`** completo: cancela RAF, desconecta observers y listeners, libera controles, geometrías, materiales, texturas, entorno PMREM, mapa de sombras, renderer y elimina el canvas (evita fugas en navegación/HMR).

### 6.9 Manejo de errores

- Si falla el `import()` o la creación de la escena (sin WebGL) → estado `error`.
- `webglcontextlost` → detiene el render y llama `onError`.
- Overlay: "El visor 3D no pudo iniciarse" + botón **Reintentar** (incrementa `attempt`, lo que re-ejecuta el `useEffect` y reconstruye la escena). El resto del catálogo sigue funcionando.

### 6.10 UI del visor (`NightstandViewer3D.tsx` + CSS Module)

- **Escenario** de 440 px (330 px en móvil) con degradado radial crema, badge "NTS—02 · ESTUDIO INTERACTIVO" y pista "Arrastra para girar · Pellizca para acercar · Toca un cajón".
- Overlay de carga: "Preparando tu pieza…".
- `<fieldset>` de controles (deshabilitado hasta `ready`):
  - Fila de vistas: Perspectiva · Frontal · Lateral · Superior · Trasera.
  - Abrir/Cerrar izquierdo · Abrir/Cerrar derecho · LED encendido/apagado.
  - Acabado Roble/Nogal con muestra de color · − · + · Restablecer.
  - Nota: "Modelo conceptual basado en referencia visual. Proporciones y herrajes aproximados."
- **Accesibilidad**: canvas con `role="img"` y `aria-label` descriptivo; todos los botones con `aria-pressed`; región `aria-live="polite"` que anuncia el estado de los cajones; `focus-visible` con contorno marcado; `touch-action: none` en el canvas.

### 6.11 Tests (`tests/nightstand.test.cjs`)

Pruebas **en CPU** (Node, sin navegador): transpilan `nightstandScene.ts` con TypeScript y lo ejecutan en un `vm` con `WebGLRenderer`, `OrbitControls`, `PMREMGenerator`, `RoomEnvironment`, `document`, `requestAnimationFrame` y observers simulados. Se usa el `RoundedBoxGeometry` real.

1. **Geometría**: el modelo y ambos cajones existen; ningún atributo `position/normal/uv` tiene NaN/Infinity; ancho total ≈ 1.20 m, fondo < 0.5 m.
2. **Cajones**: abren a 0.29 m de forma independiente, cierran, índice inválido (8) se ignora, y los callbacks son exactamente `[[0,true],[1,true],[0,false]]`.
3. **Cámara/materiales/reset**: las 5 vistas dan posiciones finitas (Trasera con z<0, Superior con y>2), zoom respeta 1.25 y 4.2 m, Nogal cambia el color, LED apaga las 3 luces, reset restaura todo, y `dispose()` deja 0 frames pendientes y quita el canvas. Además se verifica que nunca haya más de un RAF programado.

> Limitación reconocida: **no validan el render WebGL real** (apariencia, rendimiento en dispositivos). Ver la lista de prueba manual en `INSTRUCCIONES-3D.md`.

### 6.12 Fidelidad

Modelo conceptual aproximado a una foto de referencia, no un plano de fabricación. Herrajes simplificados, sin lámpara ni planta, madera procedural (no PBR fotográfico). Para calidad de catálogo habría que usar texturas PBR reales y medidas del producto final.

---

## 7. Imágenes y assets

- **Casi todo el sitio usa imágenes remotas** de `lh3.googleusercontent.com/aida-public/...` (placeholders generados), muchas **repetidas** entre productos (p. ej. todos los escritorios y todas las mesitas comparten la misma foto).
- Solo la categoría **Baño** usa imágenes locales (`/images/bano/*.png`).
- En `public/images/` hay fotos locales ya organizadas pero **aún no conectadas** al catálogo:

| Carpeta | Archivos |
|---|---|
| `armario/` | 12 (closet, nicho, almacenamiento 14–23) |
| `bano/` | 6 (4 en uso) |
| `cocina/` | 2 |
| `escritorio/` | 2 (en L, recto) |
| `estante/` | 3 (estante, mueble auxiliar, estantería) |
| `mesita_de_noche/` | 2 (abierta, iluminada) |
| `extra_photos/` | ~37 fotos reales (JPG/WhatsApp) + `fotos.zip` — **sin trackear en git** |

- También hay dos ZIP sin trackear (`kesama-13-imagenes.zip`, `kesama-imagenes-parte-2.zip`) en `public/`, que se publicarían en el deploy si se suben.
- Se usa `<img>` nativo, no `next/image`, así que `remotePatterns` de `next.config.ts` no tiene efecto real y no hay optimización automática.

---

## 8. Sistema de diseño — "The Digital Atelier"

Minimalismo editorial para artesanía premium.

- **Tipografía**: Manrope (200–800) en todo el sitio; iconos Material Symbols Outlined (peso 300).
- **Paleta** (tokens Material 3 en `tailwind.config.ts`, aunque los componentes usan mayormente los hex directos `bg-[#...]`):

| Token | Hex | Uso |
|---|---|---|
| `background` / `surface` | `#fbf9f6` | Fondo principal |
| `surface-container-low` | `#f5f3f0` | Secciones alternas |
| `surface-container` | `#efeeeb` | Materiales, footer |
| `on-surface` | `#1b1c1a` | Texto / bloques oscuros |
| `on-surface-variant` | `#4e453e` | Texto secundario |
| `primary` | `#535353` | CTAs neutros |
| `secondary` | `#715a3e` | **Madera** — acento principal, WhatsApp, tags |
| `secondary-container` | `#fdddb9` | Crema — acentos de títulos, citas, selección |
| `outline` | `#80756d` | Labels |

- **Radios muy pequeños** (0.125–0.75 rem) → estética afilada.
- **Tipografía display**: títulos `tracking-tighter`, `leading-none`/`0.88`, hasta `text-8xl`; labels en MAYÚSCULAS `tracking-widest` de 10–12 px.
- **Microinteracciones**: zoom de imagen en hover (700–1000 ms), escala de grises que se quita en hover, botones `active:scale-95`, reveal al hacer scroll (`.animate-on-scroll` → `.visible`, fade + 28 px), scrollbar de 4 px, selección de texto crema.
- **Responsive**: móvil primero; breakpoints `md` y `lg`; menú móvil a pantalla completa; el visor 3D reduce altura y tamaños de botón bajo 640 px.

---

## 9. Cómo editar contenido (guía rápida)

| Quiero… | Dónde |
|---|---|
| Cambiar número/mensaje de WhatsApp, tagline, redes | `src/lib/config.ts` |
| Agregar/editar un producto de una categoría | `src/data/catalog.ts` → array `products` de la categoría |
| Crear una categoría | Nuevo `CatalogCategory` en `catalog.ts` + añadirlo a `allCategoriesList` (+ opcional entrada en `bentoLayout` de `CategoriesGrid.tsx`) |
| Ocultar una categoría | `visible: false` |
| Cambiar el orden | campo `order` |
| Cambiar destacados de la home | `src/data/products.ts` → `featured: true` |
| Usar imagen local | ponerla en `public/images/...` y usar `'/images/...'` |
| Cambiar medidas del mueble 3D | constantes `WIDTH/HEIGHT/DEPTH/BOARD/DRAWER_TRAVEL` en `nightstandScene.ts` |
| Cambiar vistas de cámara | objeto `VIEWS` en `nightstandScene.ts` |
| Cambiar colores de madera/cuerpo | materiales `wood`, `white`, `setFinish()` y `woodTexture()` |

---

## 10. Hallazgos y pendientes detectados

**Posibles bugs**
1. `getVisibleCategories({ move_materials_to_end: true })` **retorna antes de filtrar y ordenar**: la Navbar muestra categorías ocultas (`visible: false`) y en el orden del arreglo, no por `order`.
2. El campo `visible` de **productos** no se aplica en ningún sitio: `CatalogSection` y el contador del grid usan `category.products` completo.
3. IDs duplicados en la home: `page.tsx` envuelve en `<div id="materiales">` / `<div id="filosofia">` componentes cuyas `<section>` ya tienen ese mismo `id`.
4. `MaterialsSection` alinea `materialImages[i]` con `materials[i]` por índice: si se agrega un material sin imagen, no aparece foto.

**Funcionalidad incompleta**
- Búsqueda (icono sin acción), newsletter (no envía datos), Privacidad/Términos (texto sin enlace), Facebook/Pinterest vacíos.
- Imágenes placeholder repetidas; fotos reales en `public/images` aún sin conectar.
- Metadata sin `og:image` ni `metadataBase`; favicon no definido.

**Limpieza técnica**
- Borrar o archivar: `CategorySection.tsx`, `useScrollAnimation.ts`, `types/spline.d.ts`, `products.ts → categories`, `vite.config.js`.
- Fuentes de Google cargadas dos veces (`layout.tsx` y `@import` en `globals.css`).
- Los tokens de Tailwind existen pero los componentes usan hex directos → conviene migrar a `bg-secondary`, `text-on-surface`, etc.
- Lógica de `IntersectionObserver` duplicada en 5 componentes (podría usar el hook existente).
- SVG de WhatsApp copiado en 4 archivos → extraer un componente único.
- Añadir `.zip` de `public/` al `.gitignore` o moverlos fuera de `public`.
- `README.md` desactualizado (menciona editar productos en `page.tsx` y un número de WhatsApp de ejemplo).
- Considerar `next/image` para optimizar las fotos.
