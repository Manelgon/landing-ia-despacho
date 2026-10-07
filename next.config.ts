import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // La página de fundadores se llamó /fundadores el primer día. Quien tenga
  // ese enlace llega igual. Temporal (307) para que ningún navegador lo
  // guarde para siempre si la ruta vuelve a cambiar.
  async redirects() {
    return [
      { source: '/fundadores', destination: '/alumnos-fundadores', permanent: false },
      // Hasta el 7 de octubre de 2026 la portada era la página de IA para el
      // Despacho, y el panel daba a los partners su enlace a la portada
      // (?ref=codigo). Esos enlaces siguen llevando al curso; Next pasa el
      // ?ref= tal cual y el formulario lo recoge.
      {
        source: '/',
        has: [{ type: 'query', key: 'ref' }],
        destination: '/curso/ia-para-el-despacho',
        permanent: false,
      },
      // /curso a secas no tiene página: va al catálogo.
      { source: '/curso', destination: '/', permanent: false },
    ]
  },
}

export default nextConfig
