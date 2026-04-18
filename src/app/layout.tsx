import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KESAMA · Artesanía en Madera de Alta Gama',
  description:
    'Diseño atemporal concebido desde la nobleza de la madera y la precisión técnica. Escritorios, comedores, vestidores, puertas y más.',
  keywords: ['muebles de madera', 'artesanía', 'diseño de interiores', 'kesama', 'madera maciza'],
  openGraph: {
    title: 'KESAMA · Artesanía en Madera de Alta Gama',
    description: 'Artesanía que define espacios. Diseño atemporal en madera noble.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface antialiased">{children}</body>
    </html>
  )
}
