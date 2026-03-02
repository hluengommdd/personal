import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Plataforma Educativa · Colegio Madres Dominicas',
  description: 'Acceso central a observación de aula, dashboards directivos y cuestionarios institucionales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
