/**
 * Piezas comunes de composición. El ritmo vertical de la página se decide
 * aquí y en ningún otro sitio: si hay que dar más o menos aire, se toca
 * Seccion y cambia la página entera.
 */

export function Seccion({
  id,
  alterna = false,
  children,
}: {
  id?: string
  alterna?: boolean
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={
        alterna
          ? 'scroll-mt-20 border-y border-line-soft bg-card py-24 sm:py-28'
          : 'scroll-mt-20 py-24 sm:py-28'
      }
    >
      <div className="mx-auto w-full max-w-[1060px] px-5 sm:px-8">{children}</div>
    </section>
  )
}

/** Etiqueta de sección. Mono, mayúsculas, muy espaciada. Ver DESIGN.md. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-amber uppercase">
      {children}
    </p>
  )
}

/**
 * Cabecera de sección. El titular ocupa todo el contraste tipográfico que
 * puede; el subtítulo se queda en medida de lectura y en gris.
 */
/**
 * Resalta en naranja un trozo del titular, como «10 horas a la semana» en el
 * hero. Si el trozo no está en el texto, se pinta el texto tal cual.
 */
export function Destaca({ texto, parte }: { texto: string; parte: string }) {
  const i = texto.indexOf(parte)
  if (i < 0) return <>{texto}</>
  return (
    <>
      {texto.slice(0, i)}
      <span className="text-amber">{parte}</span>
      {texto.slice(i + parte.length)}
    </>
  )
}

export function Titulo({
  children,
  sub,
  eyebrow,
}: {
  children: React.ReactNode
  sub?: string
  eyebrow?: string
}) {
  return (
    // Cada pieza lleva su propia medida. Ponerla en el contenedor no vale:
    // 1ch son los 16 px del div, no los 44 px del titular, y el titular se
    // partía en tres líneas.
    <div className="reveal">
      {eyebrow ? <div className="mb-5">{<Eyebrow>{eyebrow}</Eyebrow>}</div> : null}
      <h2 className="max-w-[26ch] text-[clamp(28px,4.4vw,44px)] font-extrabold tracking-[-0.025em]">
        {children}
      </h2>
      {sub ? (
        <p className="mt-5 max-w-[56ch] text-[clamp(16px,1.9vw,18.5px)] leading-[1.65] text-muted">
          {sub}
        </p>
      ) : null}
    </div>
  )
}

/** Regla fina de separación dentro de una sección. */
export function Filete() {
  return <hr className="my-14 border-0 border-t border-line-soft" aria-hidden="true" />
}
