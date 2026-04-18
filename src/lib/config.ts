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

  // Email para newsletter (placeholder)
  contactEmail: 'hola@kesama.co',

  // Redes sociales (opcional, dejar vacío para ocultar)
  socialLinks: {
    instagram: 'https://instagram.com/kesama',
    facebook: '',
    pinterest: '',
  },
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
