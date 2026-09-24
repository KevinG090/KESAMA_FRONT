import type { Metadata } from 'next'
import Link from 'next/link'
import LegalLayout, { LegalSection } from '@/components/LegalLayout'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Términos y Condiciones — KESAMA',
  description:
    'Términos y condiciones de uso del sitio web de KESAMA, incluyendo la política de propiedad intelectual y derechos de autor, conforme a la legislación colombiana.',
}

const UPDATED = '23 de septiembre de 2026'

const sections = [
  { id: 'aceptacion', title: '1. Aceptación de los términos' },
  { id: 'responsable', title: '2. Identificación del responsable' },
  { id: 'objeto', title: '3. Objeto del sitio web' },
  { id: 'precios', title: '4. Precios, disponibilidad y cotizaciones' },
  { id: 'imagenes', title: '5. Imágenes y visualizaciones del catálogo' },
  { id: 'compra', title: '6. Naturaleza de la relación de consumo' },
  { id: 'uso', title: '7. Uso permitido del sitio' },
  { id: 'propiedad', title: '8. Propiedad intelectual y derechos de autor' },
  { id: 'enlaces', title: '9. Enlaces y servicios de terceros' },
  { id: 'responsabilidad', title: '10. Limitación de responsabilidad' },
  { id: 'modificaciones', title: '11. Modificaciones de estos términos' },
  { id: 'ley', title: '12. Ley aplicable y jurisdicción' },
  { id: 'contacto', title: '13. Contacto y PQR' },
]

export default function TerminosYCondicionesPage() {
  return (
    <LegalLayout
      title="Términos y Condiciones"
      badge="Legal"
      intro="Estas condiciones regulan el acceso y uso del sitio web de KESAMA. Al navegar por este sitio, usted acepta lo aquí dispuesto."
      updated={UPDATED}
      sections={sections}
    >
      <LegalSection id="aceptacion" title="1. Aceptación de los términos">
        <p>
          Este documento (los &ldquo;Términos y Condiciones&rdquo;) regula el acceso y uso del sitio web de{' '}
          {siteConfig.companyName} (en adelante, &ldquo;el sitio&rdquo; o &ldquo;KESAMA&rdquo;). El simple acceso y
          navegación por el sitio implica la aceptación plena de estos términos. Si usted no está de acuerdo con
          alguna de estas condiciones, le pedimos abstenerse de usar el sitio.
        </p>
        <p>
          Este documento se rige por la legislación colombiana, en particular por la Ley 1480 de 2011 (Estatuto del
          Consumidor), la Ley 1581 de 2012 y su normativa reglamentaria en materia de protección de datos personales,
          la Ley 527 de 1999 sobre comercio electrónico y mensajes de datos, y la Ley 23 de 1982 sobre derechos de
          autor, modificada por la Ley 1915 de 2018.
        </p>
      </LegalSection>

      <LegalSection id="responsable" title="2. Identificación del responsable">
        <p>
          El presente sitio web es operado por <strong>{siteConfig.legalName}</strong>
          {siteConfig.nit ? (
            <>
              , identificada con NIT <strong>{siteConfig.nit}</strong>
            </>
          ) : (
            <> (NIT pendiente de registro)</>
          )}
          , con domicilio en <strong>{siteConfig.legalCity}</strong>. Puede contactarnos a través de:
        </p>
        <ul>
          <li>
            Correo electrónico: <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          </li>
          <li>WhatsApp: +{siteConfig.whatsappNumber}</li>
        </ul>
      </LegalSection>

      <LegalSection id="objeto" title="3. Objeto del sitio web">
        <p>
          El sitio web de {siteConfig.companyName} tiene una finalidad principalmente{' '}
          <strong>informativa y de exhibición de catálogo</strong>: presenta colecciones y piezas de mobiliario en
          madera para que el usuario conozca materiales, acabados, dimensiones referenciales y características de
          los productos.
        </p>
        <p>
          El sitio <strong>no cuenta con una plataforma de pago ni carrito de compras en línea</strong>. Toda
          cotización, personalización, negociación de precio final, forma de pago, tiempos de entrega e instalación
          se gestiona directamente con un asesor a través de WhatsApp u otros canales de contacto indicados en el
          sitio. Ninguna solicitud enviada por WhatsApp constituye, por sí sola, una compra en firme: la venta se
          perfecciona cuando ambas partes acuerdan expresamente sus condiciones.
        </p>
      </LegalSection>

      <LegalSection id="precios" title="4. Precios, disponibilidad y cotizaciones">
        <p>
          Los precios mostrados como <strong>&ldquo;Consultar&rdquo;</strong> o <strong>&ldquo;A medida&rdquo;</strong> son
          indicativos y no constituyen una oferta comercial vinculante en firme: el precio final, impuestos, costos
          de fabricación, envío e instalación se confirman siempre con un asesor antes de cualquier compra, conforme
          al artículo 50 de la Ley 1480 de 2011. Las dimensiones, materiales y acabados descritos son referenciales;
          al tratarse de piezas en madera natural y procesos en parte artesanales, pueden existir variaciones
          razonables entre unidades.
        </p>
      </LegalSection>

      <LegalSection id="imagenes" title="5. Imágenes y visualizaciones del catálogo">
        <p>
          Para presentar el catálogo, {siteConfig.companyName} utiliza dos tipos de contenido visual:
        </p>
        <ul>
          <li>
            <strong>Fotografías</strong> de piezas y proyectos realizados, y
          </li>
          <li>
            <strong>Visualizaciones conceptuales</strong>, incluyendo imágenes generadas con herramientas de
            inteligencia artificial, que ilustran posibles diseños, combinaciones de materiales o acabados.
          </li>
        </ul>
        <p>
          Las visualizaciones conceptuales <strong>no son fotografías de trabajos entregados</strong> y se ofrecen
          únicamente con fines ilustrativos; el resultado final de un proyecto a medida puede diferir de estas
          imágenes. En el catálogo se identifican con la etiqueta{' '}
          <strong>&ldquo;Visualización conceptual&rdquo;</strong>. En cumplimiento del deber de información veraz y suficiente del Estatuto del Consumidor, ante
          cualquier duda sobre si una imagen corresponde a una fotografía real o a una visualización conceptual, el
          usuario puede solicitar aclaración a través de los canales de contacto del sitio antes de tomar una
          decisión de compra.
        </p>
      </LegalSection>

      <LegalSection id="compra" title="6. Naturaleza de la relación de consumo">
        <p>
          Cuando una compra se perfecciona por fuera del sitio (por ejemplo, mediante acuerdo directo con un asesor),
          esa relación de consumo se rige por lo pactado entre las partes y, en lo pertinente, por la Ley 1480 de
          2011, incluyendo el derecho del consumidor a la <strong>garantía legal mínima</strong> de los productos, el
          derecho a recibir información veraz y completa, y el derecho a presentar peticiones, quejas y reclamos.
        </p>
      </LegalSection>

      <LegalSection id="uso" title="7. Uso permitido del sitio">
        <p>El usuario se compromete a utilizar el sitio de forma lícita y a no:</p>
        <ul>
          <li>Emplear el sitio con fines fraudulentos o contrarios a la ley colombiana;</li>
          <li>
            Extraer, copiar o reutilizar de forma masiva y automatizada (scraping) el contenido del catálogo, precios
            o imágenes;
          </li>
          <li>Intentar vulnerar la seguridad, disponibilidad o integridad del sitio o sus servidores;</li>
          <li>
            Suplantar la identidad de {siteConfig.companyName} o hacerse pasar por un representante de la marca.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="propiedad" title="8. Propiedad intelectual y derechos de autor">
        <p>
          Todo el contenido de este sitio —incluyendo textos, fotografías, visualizaciones e imágenes conceptuales,
          ilustraciones, el nombre y logotipo &ldquo;{siteConfig.companyName}&rdquo;, la estructura, el diseño visual
          y el código fuente— es titularidad de {siteConfig.legalName} o se utiliza con la debida autorización de sus
          respectivos titulares, y está protegido por la <strong>Ley 23 de 1982 sobre derechos de autor</strong>,
          modificada por la Ley 1915 de 2018, así como por las normas comunitarias andinas (Decisión 351 de 1993) y
          los tratados internacionales de los que Colombia es parte.
        </p>
        <p>
          Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otro uso
          total o parcial de los contenidos del sitio con fines comerciales, sin la autorización previa y escrita de{' '}
          {siteConfig.companyName}. Se permite la visualización y el uso personal, no comercial, del contenido con
          fines de consulta del catálogo.
        </p>
        <p>
          El nombre &ldquo;{siteConfig.companyName}&rdquo; y su logotipo son signos distintivos de la marca; su uso
          no autorizado por terceros puede constituir una infracción a la normativa de propiedad industrial vigente.
        </p>
        <p>© {new Date().getFullYear()} {siteConfig.companyName}. Todos los derechos reservados.</p>
      </LegalSection>

      <LegalSection id="enlaces" title="9. Enlaces y servicios de terceros">
        <p>
          El sitio incluye enlaces a servicios de terceros, como WhatsApp (operado por WhatsApp Inc. / Meta
          Platforms, Inc.) y redes sociales. {siteConfig.companyName} no controla ni se hace responsable del
          contenido, disponibilidad o políticas de privacidad de estos servicios externos; su uso está sujeto a los
          términos y políticas propios de cada plataforma.
        </p>
      </LegalSection>

      <LegalSection id="responsabilidad" title="10. Limitación de responsabilidad">
        <p>
          El sitio se ofrece en el estado en que se encuentra disponible. {siteConfig.companyName} no garantiza el
          acceso ininterrumpido o libre de errores al sitio y no será responsable por daños derivados del mal uso del
          mismo, de fallas técnicas ajenas a su control razonable, o de decisiones tomadas exclusivamente con base en
          las visualizaciones conceptuales descritas en la sección 5, sin haber confirmado la información con un
          asesor.
        </p>
      </LegalSection>

      <LegalSection id="modificaciones" title="11. Modificaciones de estos términos">
        <p>
          {siteConfig.companyName} podrá actualizar estos Términos y Condiciones en cualquier momento para reflejar
          cambios en el sitio, en el catálogo o en la normativa aplicable. La versión vigente será siempre la
          publicada en esta página, junto con su fecha de última actualización.
        </p>
      </LegalSection>

      <LegalSection id="ley" title="12. Ley aplicable y jurisdicción">
        <p>
          Estos Términos y Condiciones se interpretan conforme a las leyes de la República de Colombia. Para efectos
          de protección al consumidor, el usuario puede acudir a la Superintendencia de Industria y Comercio (SIC) o
          a la jurisdicción ordinaria colombiana competente.
        </p>
      </LegalSection>

      <LegalSection id="contacto" title="13. Contacto y PQR">
        <p>
          Para preguntas, quejas o reclamos relacionados con estos términos, el catálogo o cualquier pieza de{' '}
          {siteConfig.companyName}, puede escribirnos a{' '}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> o por WhatsApp al +
          {siteConfig.whatsappNumber}. Consulte también nuestra{' '}
          <Link href="/politica-de-privacidad">Política de Tratamiento de Datos Personales</Link>.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
