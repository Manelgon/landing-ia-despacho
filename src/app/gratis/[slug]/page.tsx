import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PaginaGratis } from '@/components/pagina-gratis'
import { GRATIS } from '@/content/gratis'

/**
 * /gratis/<slug> · la página de cada clase gratuita. Las clases están en
 * src/content/gratis.ts. Se regenera cada hora por el precio de lanzamiento
 * del curso al que lleva.
 */
export const revalidate = 3600
export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(GRATIS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const clase = GRATIS[(await params).slug]
  if (!clase) return {}
  return {
    title: clase.meta.titulo,
    description: clase.meta.descripcion,
    openGraph: {
      title: clase.meta.titulo,
      description: clase.meta.descripcion,
      images: [clase.video.portada],
      url: `https://automatiza.afcademia.com/gratis/${clase.slug}`,
      siteName: 'AFCademIA',
      locale: 'es_ES',
      type: 'website',
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const clase = GRATIS[(await params).slug]
  if (!clase) notFound()
  return <PaginaGratis clase={clase} />
}
