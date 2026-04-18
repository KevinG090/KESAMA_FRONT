# KESAMA — Landing Page Next.js

Landing page premium para **KESAMA**, empresa de muebles en madera de alta gama.  
Construida con **Next.js 15**, **Tailwind CSS** y lista para desplegar en **Vercel**.

---

## 🚀 Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## ⚙️ Configuración principal

Todo lo parametrizable está en **`src/lib/config.ts`**:

```ts
export const siteConfig = {
  // 👇 CAMBIA ESTE NÚMERO (solo dígitos, con código de país)
  whatsappNumber: '573102099929',   // Ejemplo: Colombia +57 300 123 4567

  // Mensaje de la burbuja flotante de WhatsApp (esquina inferior izquierda)
  whatsappDefaultMessage: '¡Hola! Me gustaría conocer más sobre los productos KESAMA.',

  companyName: 'KESAMA',
  tagline: 'Artesanía que define espacios',
  heroSubtitle: 'Diseño atemporal concebido desde la nobleza de la madera...',
  contactEmail: 'hola@kesama.co',

  socialLinks: {
    instagram: 'https://instagram.com/kesama',
    facebook: '',
    pinterest: '',
  },
}
```

### ¿Cómo funciona el WhatsApp?

| Acción del usuario | URL generada |
|---|---|
| Burbuja flotante (esquina) | `wa.me/NUMERO?text=mensaje+general` |
| Botón en producto | `wa.me/NUMERO?text=...interesa+*Nombre Producto*+(Categoría)` |

---

## 📦 Estructura del proyecto

```
src/
├── app/
│   ├── globals.css          # Fuentes, variables, animaciones
│   ├── layout.tsx           # HTML raíz + metadata SEO
│   └── page.tsx             # Página principal (compone todo)
├── components/
│   ├── Navbar.tsx           # Navegación glassmorphism + mobile
│   ├── WhatsAppBubble.tsx   # Burbuja flotante WhatsApp
│   ├── HeroSection.tsx      # Hero con imagen y CTA
│   ├── CategoriesGrid.tsx   # Bento grid de categorías
│   ├── FeaturedProducts.tsx # Piezas destacadas con WhatsApp
│   ├── CategorySection.tsx  # Sección reutilizable por categoría
│   ├── MaterialsSection.tsx # Catálogo interactivo de materiales
│   ├── PhilosophySection.tsx# Sección filosofía + estadísticas
│   └── Footer.tsx           # Footer con newsletter
├── data/
│   └── products.ts          # Datos de productos y categorías
└── lib/
    ├── config.ts            # ⭐ Configuración global (WhatsApp, etc.)
    └── useScrollAnimation.ts# Hook de animación al scroll
```

---

## 🌐 Deploy en Vercel

### Opción 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Opción 2: GitHub + Vercel Dashboard
1. Sube el proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com) → "New Project"
3. Conecta tu repositorio
4. Vercel detecta Next.js automáticamente → **Deploy**

No se necesitan variables de entorno para el funcionamiento básico.

---

## ✏️ Personalización de contenido

### Agregar / editar productos
Edita `src/app/page.tsx` — cada categoría tiene su objeto de datos:

```ts
const escritoriosData = {
  id: 'escritorios',
  title: 'Escritorios',
  heroProduct: {
    name: 'Mi Escritorio',
    material: 'Roble Macizo',
    dimensions: '180 × 80 cm',
    price: 'Consultar',
    image: 'URL_DE_TU_IMAGEN',
  },
  products: [
    { id: 'e1', name: 'Modelo 1', subtitle: 'Material', material: '...', image: 'URL' },
    // más productos...
  ],
}
```

### Cambiar imágenes
Reemplaza las URLs de imagen directamente en `src/app/page.tsx` o `src/data/products.ts`.  
Para imágenes propias, colócalas en `/public/` y usa rutas relativas como `/mi-imagen.jpg`.

---

## 🎨 Sistema de diseño

Basado en **"The Digital Atelier"** — minimalismo táctico para artesanía premium.

| Token | Valor | Uso |
|---|---|---|
| `primary` | `#535353` | Texto principal, botones CTA |
| `secondary` | `#715a3e` | Madera cálida, WhatsApp, acentos |
| `background` | `#fbf9f6` | Fondo principal |
| `surface-container-low` | `#f5f3f0` | Secciones alternas |
| Fuente | **Manrope** | Todo el sitio |

---

## 📋 Requisitos

- Node.js 18+
- npm 9+

---

© 2024 KESAMA
