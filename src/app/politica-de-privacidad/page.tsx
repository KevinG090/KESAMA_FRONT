import type { Metadata } from 'next'
import Link from 'next/link'
import LegalLayout, { LegalSection } from '@/components/LegalLayout'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Política de Tratamiento de Datos Personales — KESAMA',
  description:
    'Política de tratamiento de datos personales de KESAMA conforme a la Ley 1581 de 2012 (Habeas Data) y su decreto reglamentario.',
}

const UPDATED = '23 de septiembre de 2026'

const sections = [
  { id: 'responsable', title: '1. Responsable del tratamiento' },
  { id: 'marco', title: '2. Marco normativo' },
  { id: 'datos', title: '3. Datos que recolectamos' },
  { id: 'finalidades', title: '4. Finalidades del tratamiento' },
  { id: 'autorizacion', title: '5. Autorización del titular' },
  { id: 'contacto-comercial', title: '6. Horarios y frecuencia de contacto comercial' },
  { id: 'derechos', title: '7. Sus derechos como titular' },
  { id: 'procedimiento', title: '8. Cómo ejercer sus derechos' },
  { id: 'terceros', title: '9. Transferencia a terceros' },
  { id: 'seguridad', title: '10. Seguridad de la información' },
  { id: 'menores', title: '11. Menores de edad' },
  { id: 'cookies', title: '12. Cookies y tecnologías de rastreo' },
  { id: 'vigencia', title: '13. Vigencia y modificaciones' },
  { id: 'autoridad', title: '14. Autoridad de control' },
]

export default function PoliticaDePrivacidadPage() {
  return (
    <LegalLayout
      title="Política de Tratamiento de Datos Personales"
      badge="Legal · Habeas Data"
      intro="Esta política explica qué datos personales recolecta KESAMA a través de este sitio web, para qué los usa y cómo puede usted ejercer sus derechos sobre ellos."
      updated={UPDATED}
      sections={sections}
    >
      <LegalSection id="responsable" title="1. Responsable del tratamiento">
        <p>
          <strong>{siteConfig.legalName}</strong>
          {siteConfig.nit ? (
            <>
              , identificada con NIT <strong>{siteConfig.nit}</strong>
            </>
          ) : (
            <> (NIT pendiente de registro)</>
          )}
          , con domicilio en <strong>{siteConfig.legalCity}</strong>, es la responsable del tratamiento de los datos
          personales que se recolectan a través de este sitio web.
        </p>
        <ul>
          <li>
            Correo electrónico: <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          </li>
          <li>WhatsApp: +{siteConfig.whatsappNumber}</li>
        </ul>
      </LegalSection>

      <LegalSection id="marco" title="2. Marco normativo">
        <p>
          Esta política se expide en cumplimiento del artículo 15 de la Constitución Política de Colombia, la Ley
          Estatutaria 1581 de 2012 (&ldquo;Ley de Habeas Data&rdquo;), su decreto reglamentario 1377 de 2013
          (compilado en el Decreto 1074 de 2015, Título 2) y demás normas que las modifiquen o complementen.
        </p>
      </LegalSection>

      <LegalSection id="datos" title="3. Datos que recolectamos">
        <p>
          {siteConfig.companyName} puede recolectar los siguientes datos personales, únicamente cuando usted decide
          compartirlos voluntariamente a través del sitio:
        </p>
        <ul>
          <li>
            <strong>Correo electrónico</strong>: si nos escribe a {siteConfig.contactEmail}, los datos que incluya en
            su mensaje (nombre, correo y lo que decida contarnos).
          </li>
          <li>
            <strong>Botón y burbuja de WhatsApp</strong>: al hacer clic, se abre una conversación de WhatsApp con
            nuestro número de contacto; los datos que usted comparta allí (nombre, número de teléfono, foto de
            perfil, mensajes) quedan sujetos también a las políticas de privacidad de WhatsApp/Meta Platforms, Inc.,
            que le recomendamos revisar.
          </li>
        </ul>
        <p>Este sitio no incluye formularios de registro de usuario, pagos en línea ni recolección de datos sensibles.</p>
      </LegalSection>

      <LegalSection id="finalidades" title="4. Finalidades del tratamiento">
        <p>Los datos recolectados se usan para:</p>
        <ul>
          <li>Responder consultas, cotizaciones y solicitudes de información sobre productos;</li>
          <li>
            Enviar información comercial sobre productos y proyectos, solo si usted lo autoriza expresamente y dentro
            de los horarios y la frecuencia descritos en la sección 6;
          </li>
          <li>Gestionar la atención al cliente y dar trámite a peticiones, quejas y reclamos (PQR);</li>
          <li>Mejorar el catálogo y la experiencia del sitio.</li>
        </ul>
        <p>No usamos sus datos personales para fines distintos a los aquí descritos sin su autorización previa.</p>
      </LegalSection>

      <LegalSection id="autorizacion" title="5. Autorización del titular">
        <p>
          El tratamiento de sus datos personales requiere su autorización previa, expresa e informada. Al iniciar
          una conversación de WhatsApp o escribirnos por correo desde este sitio, usted autoriza a{' '}
          {siteConfig.companyName} a tratar los datos que voluntariamente comparta para atender su solicitud. El envío
          de información comercial requiere una autorización adicional y expresa, que le pediremos por el mismo canal.
        </p>
      </LegalSection>

      <LegalSection id="contacto-comercial" title="6. Horarios y frecuencia de contacto comercial">
        <p>
          Cuando le enviemos mensajes con fines comerciales o publicitarios (por WhatsApp, llamada, mensaje de texto
          o correo electrónico), cumplimos la <strong>Ley 2300 de 2023</strong>:
        </p>
        <ul>
          <li>Solo lo contactaremos con ese fin si usted nos autorizó expresamente.</li>
          <li>
            <strong>Horario:</strong> lunes a viernes de 7:00 a.m. a 7:00 p.m. y sábados de 8:00 a.m. a 3:00 p.m.
            Nunca los domingos ni los días festivos.
          </li>
          <li>
            <strong>Frecuencia:</strong> como máximo una vez por semana por un mismo canal.
          </li>
          <li>
            Puede pedirnos en cualquier momento que dejemos de enviarle información comercial, escribiendo a{' '}
            <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> o por WhatsApp al +
            {siteConfig.whatsappNumber}, y dejaremos de hacerlo.
          </li>
        </ul>
        <p>
          Las respuestas a las consultas que usted inicie, como una solicitud de cotización, hacen parte de la
          atención de su solicitud.
        </p>
      </LegalSection>

      <LegalSection id="derechos" title="7. Sus derechos como titular">
        <p>Como titular de los datos, usted tiene derecho a:</p>
        <ul>
          <li>Conocer, actualizar y rectificar sus datos personales;</li>
          <li>Solicitar prueba de la autorización otorgada;</li>
          <li>
            Ser informado sobre el uso que se le ha dado a sus datos, previa solicitud;
          </li>
          <li>Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la ley;</li>
          <li>Revocar la autorización y/o solicitar la supresión del dato, cuando no exista un deber legal o contractual que impida eliminarlo;</li>
          <li>Acceder de forma gratuita a sus datos personales.</li>
        </ul>
      </LegalSection>

      <LegalSection id="procedimiento" title="8. Cómo ejercer sus derechos">
        <p>
          Puede ejercer sus derechos escribiendo a{' '}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> o por WhatsApp al +
          {siteConfig.whatsappNumber}, indicando su solicitud de forma clara. Atenderemos las consultas en un plazo
          máximo de <strong>10 días hábiles</strong> desde su recepción y los reclamos en un plazo máximo de{' '}
          <strong>15 días hábiles</strong>, prorrogables conforme a lo establecido en la Ley 1581 de 2012 cuando no
          sea posible atenderlos dentro de dicho término.
        </p>
      </LegalSection>

      <LegalSection id="terceros" title="9. Transferencia a terceros">
        <p>
          {siteConfig.companyName} no vende ni cede sus datos personales a terceros con fines comerciales distintos a
          los descritos en esta política. Cuando usted nos escribe por WhatsApp, la plataforma de mensajería
          (WhatsApp/Meta Platforms, Inc.) actúa como canal tecnológico de esa comunicación, conforme a sus propias
          políticas de privacidad.
        </p>
      </LegalSection>

      <LegalSection id="seguridad" title="10. Seguridad de la información">
        <p>
          Adoptamos medidas técnicas y administrativas razonables para proteger los datos personales que
          recolectamos, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado.
        </p>
      </LegalSection>

      <LegalSection id="menores" title="11. Menores de edad">
        <p>
          Este sitio no está dirigido a menores de edad. No recolectamos intencionalmente datos personales de
          menores sin la autorización de sus padres, madres o representantes legales.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="12. Cookies y tecnologías de rastreo">
        <p>
          Al momento de publicación de esta política, este sitio <strong>no utiliza cookies de analítica,
          publicidad o seguimiento de terceros</strong>. Si en el futuro se incorporan herramientas de este tipo,
          actualizaremos esta sección e implementaremos un aviso de cookies que le permitirá aceptar o rechazar su
          instalación, conforme a la Ley 1581 de 2012.
        </p>
      </LegalSection>

      <LegalSection id="vigencia" title="13. Vigencia y modificaciones">
        <p>
          Las bases de datos se conservarán mientras sean necesarias para las finalidades descritas o hasta que
          usted solicite su supresión. Podemos actualizar esta política en cualquier momento; la versión vigente
          será siempre la publicada en esta página, junto con su fecha de última actualización. Consulte también
          nuestros <Link href="/terminos-y-condiciones">Términos y Condiciones</Link>.
        </p>
      </LegalSection>

      <LegalSection id="autoridad" title="14. Autoridad de control">
        <p>
          Si considera que sus derechos como titular de datos personales han sido vulnerados, puede presentar una
          queja ante la <strong>Superintendencia de Industria y Comercio (SIC)</strong> — Delegatura para la
          Protección de Datos Personales, una vez haya agotado el trámite de consulta o reclamo directamente con
          nosotros.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
