// ============================================================
// CONFIGURACIÓN GLOBAL DE KESAMA
// Edita este archivo para personalizar tu landing page
// ============================================================

export const siteConfig = {
  // Número de WhatsApp (solo dígitos, con código de país)
  // Ejemplo Colombia: 573102099929
  whatsappNumber: '573102099929',

  // Mensaje por defecto para la burbuja general de WhatsApp
  whatsappDefaultMessage: '¡Hola! Me gustaría conocer más sobre los productos KESAMA.',

  // Nombre de la empresa
  companyName: 'KESAMA',

  // Tagline
  tagline: 'Artesanía que define espacios',

  // Subtítulo hero
  heroSubtitle: 'Diseño atemporal concebido desde la nobleza de la madera y la precisión técnica.',

  // Email de contacto
  contactEmail: 'kesama090@gmail.com',

  // Redes sociales (opcional, dejar vacío para ocultar)
  socialLinks: {
    instagram: 'https://instagram.com/kesama',
    facebook: '',
    pinterest: '',
  },

  // ── Datos legales del responsable ──────────────────────────
  // Usados en /terminos-y-condiciones y /politica-de-privacidad.
  // Complétalos con tus datos reales antes de publicar: son
  // información obligatoria según el Estatuto del Consumidor
  // (Ley 1480 de 2011, art. 50) y la Ley de Habeas Data (1581 de 2012).
  legalName: 'KESAMA', // Razón social o nombre completo del responsable
  nit: '', // NIT o documento de identificación — pendiente de definir
  legalCity: 'Colombia', // Ciudad/domicilio para efectos de notificación
}

// Genera la URL de WhatsApp para un producto específico
export function getWhatsappProductUrl(productName: string, productCategory: string): string {
  const message = encodeURIComponent(
    `¡Hola KESAMA! Me interesa el producto: *${productName}* (${productCategory}). ¿Podrían darme más información?`
  )
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`
}

// Genera la URL de WhatsApp general (burbuja flotante)
export function getWhatsappGeneralUrl(): string {
  const message = encodeURIComponent(siteConfig.whatsappDefaultMessage)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`
}
