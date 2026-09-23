import { PARTIDA, INTENTOS, CIRCUITOS, REGLA, BLOQUES, ESTUDIO, REQUISITOS } from '@/content/curso'
import { Seccion, Titulo } from './ui'

const iconosFlujo = ['correo', 'llamadas', 'documentos', 'facturas', 'archivo']
const iconosBloque = ['fundamentos', 'conexiones', 'correo', 'llamadas', 'documentos', 'vivir-con-esto', 'gestor-documental']

/** Retraso en cascada para las listas. Nunca se monta todo a la vez. */
const cascada = (i: number, paso = 70) => ({ '--reveal-delay': `${i * paso}ms` }) as React.CSSProperties

export function Problema() {
  return (
    <section className="bg-paper py-24 sm:py-28">
      <div className="mx-auto w-full max-w-[1060px] px-5 sm:px-8">
        {/* Titular a la izquierda, los tres casos a la derecha. El titular se
            queda quieto mientras se leen. */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="reveal lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-amber uppercase">
              El punto de partida
            </p>
            <h2 className="mt-5 max-w-[18ch] text-[clamp(28px,4.2vw,42px)] leading-[1.08] font-extrabold tracking-[-0.025em] text-ink">
              {PARTIDA.titulo}
            </h2>
            <p className="mt-8 max-w-[28ch] border-t border-line pt-7 text-[clamp(18px,2.2vw,22px)] leading-[1.3] font-extrabold tracking-[-0.02em] text-navy">
              {PARTIDA.cierre}
            </p>
          </div>

          <ol className="grid list-none">
            {PARTIDA.casos.map((c, i) => (
              <li
                key={c}
                style={cascada(i, 90)}
                className="reveal flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-line py-6 first:border-t-0 first:pt-0 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="w-[2.5ch] shrink-0 font-mono text-[clamp(20px,2.6vw,28px)] leading-none font-bold text-amber tabular-nums"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="max-w-[52ch] flex-1 text-[clamp(16px,1.9vw,19px)] leading-[1.5] text-body">
                  {c}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Lo que ya se ha probado: en apunte, para que no compita con el
            problema. */}
        <div className="reveal mt-16 rounded-xl border border-line bg-card px-7 py-7 sm:px-9">
          <h3 className="font-mono text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
            {INTENTOS.titulo}
          </h3>
          <ul className="mt-5 grid list-none gap-x-10 gap-y-3.5 lg:grid-cols-3">
            {INTENTOS.lista.map((t) => (
              <li key={t.titulo} className="flex gap-3 text-[14.5px] leading-[1.5]">
                <span aria-hidden="true" className="mt-px shrink-0 font-mono text-amber">
                  ✕
                </span>
                <span className="text-muted">
                  <b className="font-bold text-ink">{t.titulo}.</b> {t.texto}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/**
 * Bento asimétrico: el primer flujo ocupa el doble y marca la jerarquía.
 * Cinco tarjetas idénticas en fila estaban prohibidas por DESIGN.md.
 */
export function Flujos() {
  return (
    <section id="flujos" className="scroll-mt-20 border-y border-line-soft bg-card py-24 sm:py-28">
      {/* Cabecera y regla van en el contenedor; el mosaico, a sangre. */}
      <div className="mx-auto w-full max-w-[1060px] px-5 sm:px-8">
        <Titulo
          eyebrow="Lo que te llevas montado"
          sub="No cinco demostraciones vistas: cinco flujos funcionando en tus cuentas, con tus comunidades, tus categorías y tus plantillas."
        >
          Cinco flujos, no cinco demostraciones
        </Titulo>

        <ul className="mt-16 grid list-none grid-cols-1 overflow-hidden rounded-[10px] sm:grid-cols-2 lg:grid-cols-6">
        {CIRCUITOS.map((c, i) => {
          const ancha = i >= 3
          const n = String(i + 1).padStart(2, '0')
          return (
            <li
              key={c.n}
              style={cascada(i)}
              className={`reveal relative flex min-h-[340px] flex-col justify-center overflow-hidden ${
                ancha ? 'lg:col-span-3' : 'lg:col-span-2'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-right"
                style={{ backgroundImage: `url('/circuitos/circuito-${n}-${iconosFlujo[i]}-fondo.webp')` }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-linear-to-r from-paper from-30% via-paper/92 to-paper/25"
                aria-hidden="true"
              />

              <div className="relative p-7 sm:p-8">
                <p className="font-mono text-[10.5px] font-semibold tracking-[0.16em] text-amber uppercase">
                  Flujo {n}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <img
                    src={`/recursos-web/iconos/${iconosFlujo[i]}.svg`}
                    alt=""
                    width="28"
                    height="28"
                    aria-hidden="true"
                    className="shrink-0"
                  />
                  <h3
                    className={`font-extrabold tracking-[-0.02em] text-navy ${ancha ? 'text-[clamp(23px,2.7vw,28px)]' : 'text-[22px]'}`}
                  >
                    {c.titulo}
                  </h3>
                </div>

                <p className={`mt-3 text-[15px] leading-[1.6] ${ancha ? 'max-w-[42ch]' : 'max-w-[32ch]'}`}>
                  {c.texto}
                </p>

                <p className="mt-5 font-mono text-[10.5px] leading-snug tracking-[0.06em] text-aviso-texto uppercase">
                  {c.para}
                </p>
              </div>
            </li>
          )
        })}
        </ul>

        {/* La regla es la coda de los cinco flujos, no una sección aparte. */}
        <aside className="reveal mt-12 grid gap-5 border-l-2 border-amber pl-5 sm:pl-7 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-12">
          <div>
            <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-amber uppercase">
              {REGLA.titulo}
            </p>
            <p className="mt-3 text-[clamp(21px,2.8vw,28px)] leading-[1.2] font-extrabold tracking-[-0.02em] text-navy">
              {REGLA.frase}
            </p>
          </div>
          <p className="max-w-[58ch] text-[15.5px] leading-[1.65] text-body">{REGLA.texto}</p>
        </aside>
      </div>
    </section>
  )
}

/** Acordeón sin caja: los bloques se separan solo con una línea. */
export function Temario() {
  return (
    <Seccion id="temario" alterna>
      <Titulo
        eyebrow="El temario"
        sub="30 unidades en siete bloques. El orden importa: cada unidad da por montado lo de la anterior. Pincha en cada bloque para ver las unidades."
      >
        Treinta unidades que se cursan en orden
      </Titulo>

      <div className="mt-16 border-t border-line-soft">
        {BLOQUES.map((b, i) => (
          <details key={b.rango} style={cascada(i, 50)} className="reveal group border-b border-line-soft">
            <summary className="flex cursor-pointer flex-wrap items-baseline gap-x-6 gap-y-2 py-6 transition-colors hover:text-navy">
              <span className="w-[68px] shrink-0 font-mono text-[11.5px] tracking-[0.1em] text-amber tabular-nums">
                {b.rango}
              </span>
              <img src={`/recursos-web/iconos/${iconosBloque[i]}.svg`} alt="" width="26" height="26" aria-hidden="true" className="hidden shrink-0 sm:block" />
              <h3 className="flex-[1_1_200px] text-[clamp(18px,2.2vw,22px)] font-bold tracking-[-0.015em] text-navy">
                {b.titulo}
              </h3>
              <span className="shrink-0 font-mono text-[12.5px] text-muted">{b.horas}</span>
              <span aria-hidden="true" className="shrink-0 font-mono text-[18px] text-amber">
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">&minus;</span>
              </span>
            </summary>
            <div className="pb-8 sm:pl-[92px]">
              <p className="max-w-[62ch] text-[15px] text-muted">{b.texto}</p>
              <ol className="mt-4 ml-5 max-w-[62ch] list-decimal text-[15px] marker:font-mono marker:text-muted">
                {b.unidades.map((u) => (
                  <li key={u} className="mb-1.5 pl-1">
                    {u}
                  </li>
                ))}
              </ol>
            </div>
          </details>
        ))}
      </div>

      {/* Cómo se estudia y qué hace falta: dos preguntas del mismo sitio que
          el temario, así que se contestan aquí en vez de en su sección. */}
      <div className="reveal mt-14 border-t border-line pt-9">
        <h3 className="text-[clamp(18px,2.1vw,22px)] font-extrabold tracking-[-0.02em] text-navy">
          Cómo se estudia
        </h3>
        <ul className="mt-6 grid list-none gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {ESTUDIO.map((e, i) => (
            <li key={e.titulo} style={cascada(i, 70)} className="reveal border-l-2 border-amber pl-4">
              <b className="block text-[14.5px] font-bold text-ink">{e.titulo}</b>
              <span className="mt-1 block text-[13.5px] leading-[1.5] text-muted">{e.dato}</span>
            </li>
          ))}
        </ul>

        {/* Lo que hace falta va debajo del formato y sin titular propio: es
            la misma respuesta, cómo se estudia esto y con qué. */}
        <p className="reveal mt-9 max-w-[86ch] border-t border-line pt-7 text-[15px] leading-[1.65] text-body">
          {REQUISITOS.texto}
        </p>
      </div>
    </Seccion>
  )
}
