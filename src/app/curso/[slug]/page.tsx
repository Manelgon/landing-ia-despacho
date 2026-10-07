import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PaginaCurso } from '@/components/curso-suelto'
import { CURSOS_SUELTOS } from '@/content/cursos'

/**
 * /curso/<slug> · la página de cada curso suelto. Los cursos están en
 * src/content/cursos/index.ts. IA para el Despacho tiene su propia carpeta
 * (/curso/ia-para-el-despacho) y no pasa por aquí.
 *
 * Se regenera cada hora para que el precio de lanzamiento caduque solo.
 */
export const revalidate = 3600
export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(CURSOS_SUELTOS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const curso = CURSOS_SUELTOS[(await params).slug]
  if (!curso) return {}
  return {
    title: curso.meta.titulo,
    description: curso.meta.descripcion,
    openGraph: {
      title: curso.meta.titulo,
      description: curso.meta.descripcion,
      images: ['/open-graph-catalogo-1200x630.jpg'],
      url: `https://automatiza.afcademia.com/curso/${curso.slug}`,
      siteName: 'AFCademIA',
      locale: 'es_ES',
      type: 'website',
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const curso = CURSOS_SUELTOS[(await params).slug]
  if (!curso) notFound()
  return <PaginaCurso curso={curso} />
}
