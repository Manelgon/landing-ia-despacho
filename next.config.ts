import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // La página de fundadores se llamó /fundadores el primer día. Quien tenga
  // ese enlace llega igual. Temporal (307) para que ningún navegador lo
  // guarde para siempre si la ruta vuelve a cambiar.
  async redirects() {
    return [{ source: '/fundadores', destination: '/alumnos-fundadores', permanent: false }]
  },
}

export default nextConfig
