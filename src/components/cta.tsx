import { CONVERSION, SIN_DECIDIR, destinoBoton, textoBoton } from '@/config/conversion'

/**
 * Botón principal. No sabe cómo se vende el curso: lo lee de config/conversion.ts.
 * Mientras el modo sea 'pendiente' o falte el precio, no enlaza a ninguna parte.
 */
export function Cta({
  variante = 'solido',
  tamano = 'normal',
}: {
  variante?: 'solido' | 'fantasma'
  tamano?: 'normal' | 'compacto'
}) {
  const destino = destinoBoton()
  const texto = textoBoton()

  const medidas =
    tamano === 'compacto' ? 'px-5 py-2.5 text-[13.5px]' : 'px-7 py-3.5 text-[15px]'
  const base = `inline-block rounded-lg font-bold no-underline transition-all duration-200 active:scale-[0.98] ${medidas}`
  const estilo =
    variante === 'fantasma'
      ? 'border border-white/35 text-white hover:bg-white/10'
      : 'bg-amber text-white hover:bg-amber-hover'

  if (!destino) {
    return (
      <span
        className={`${base} ${estilo} cursor-not-allowed opacity-55`}
        aria-disabled="true"
        title="Falta decidir el destino del botón en src/config/conversion.ts"
      >
        {texto}
      </span>
    )
  }

  const externo = destino.startsWith('http')

  return (
    <a
      href={destino}
      className={`${base} ${estilo}`}
      {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {texto}
    </a>
  )
}

/**
 * Aviso visible en pantalla mientras la página no se pueda publicar.
 * Desaparece solo en cuanto se elige modo y se pone precio.
 */
export function AvisoPendiente() {
  if (!SIN_DECIDIR) return null

  const faltan: string[] = []
  if (CONVERSION.modo === 'pendiente')
    faltan.push('decidir qué hace el botón (Stripe, formulario o enlace externo)')
  if (CONVERSION.precio === null) faltan.push('poner el precio')

  return (
    <div
      role="status"
      className="border-b border-aviso-borde/30 bg-aviso-fondo px-5 py-2.5 text-center font-mono text-[12px] tracking-[0.02em] text-aviso-texto"
    >
      <strong className="font-semibold">Todavía no se puede publicar.</strong> Falta {faltan.join(' y ')}.
      Se hace en <code>src/config/conversion.ts</code>.
    </div>
  )
}
