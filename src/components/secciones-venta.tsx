import { PARTIDA, INTENTOS, ANTES_DE_LOS_FLUJOS, PARA_QUE_DUREN, CIRCUITOS, REGLA, BLOQUES, ESTUDIO, REQUISITOS } from '@/content/curso'
import { Seccion, Titulo, Destaca } from './ui'

const iconosFlujo = ['correo', 'llamadas', 'documentos', 'facturas', 'archivo']
const iconosBloque = ['fundamentos', 'conexiones', 'correo', 'llamadas', 'documentos', 'vivir-con-esto', 'gestor-documental']

/** Retraso en cascada para las listas. Nunca se monta todo a la vez. */
const cascada = (i: number, paso = 70) => ({ '--reveal-delay': `${i * paso}ms` }) as React.CSSProperties

export function Problema() {
  return (
    <section id="partida" className="scroll-mt-20 bg-paper py-24 sm:py-28">
      <div className="mx-auto w-full max-w-[1060px] px-5 sm:px-8">
        {/* Titular a la izquierda, los tres casos a la derecha. El titular se
            queda quieto mientras se leen. */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="reveal lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-amber uppercase">
              Tu despacho hoy
            </p>
            <h2 className="mt-5 max-w-[18ch] text-[clamp(28px,4.2vw,42px)] leading-[1.08] font-extrabold tracking-[-0.025em] text-ink">
              <Destaca texto={PARTIDA.titulo} parte="un domingo por la noche" />
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

        {/* Lo que ya se ha probado: el título como los antetítulos naranjas y
            columnas con filete naranja, como «Cómo se estudia». */}
        <div className="reveal mt-16 border-t border-line pt-9">
          <h3 className="font-mono text-[11.5px] font-semibold tracking-[0.18em] text-amber uppercase">
            {INTENTOS.titulo}
          </h3>
          <ul className="mt-6 grid list-none gap-x-8 gap-y-5 sm:grid-cols-3">
            {INTENTOS.lista.map((t, i) => (
              <li key={t.titulo} style={cascada(i, 70)} className="reveal border-l-2 border-amber pl-4">
                <b className="block text-[14.5px] font-bold text-ink">{t.titulo}</b>
                <span className="mt-1 block text-[13.5px] leading-[1.5] text-muted">{t.texto}</span>
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
          eyebrow="Lo que montas"
          sub="No cinco demostraciones vistas: cinco flujos funcionando en tus cuentas, con tus comunidades, tus categorías y tus plantillas."
        >
          <span className="text-amber">Cinco flujos</span>, no cinco demostraciones
        </Titulo>

        {/* El mosaico recorre el temario entero y en su orden: unidades 1-5 y
            6-10, los cuatro primeros flujos, las unidades 22-24 y el gestor
            documental. Filas de 2, 3 y 3: las dos primeras, más anchas. */}
        <ul className="mt-16 grid list-none grid-cols-1 overflow-hidden rounded-[10px] sm:grid-cols-2 lg:grid-cols-6">
          {[
            ...ANTES_DE_LOS_FLUJOS.map((a) => ({ c: null, a, i: -1 })),
            ...CIRCUITOS.slice(0, 4).map((c, i) => ({ c, a: null, i })),
            { c: null, a: null, i: -1 },
            { c: CIRCUITOS[4], a: null, i: 4 },
          ].map(({ c, a, i }, pos) => {
            const n = String(i + 1).padStart(2, '0')
            const tarjeta = a
              ? {
                  clave: a.unidades,
                  etiqueta: `Unidades ${a.unidades.replace(' - ', '–')}`,
                  icono: a.icono,
                  imagen: a.imagen,
                  titulo: a.titulo,
                  texto: a.texto,
                  para: undefined,
                }
              : c
              ? {
                  clave: c.n,
                  etiqueta: `Flujo ${n} · Unidades ${c.unidades.replace(' - ', '–')}`,
                  icono: iconosFlujo[i],
                  imagen: `/circuitos/circuito-${n}-${iconosFlujo[i]}-fondo.webp`,
                  titulo: c.titulo,
                  texto: c.texto,
                  para: c.para as string | undefined,
                }
              : {
                  clave: 'vivir',
                  etiqueta: `Unidades ${PARA_QUE_DUREN.unidades.replace(' - ', '–')}`,
                  icono: PARA_QUE_DUREN.icono,
                  imagen: PARA_QUE_DUREN.imagen,
                  titulo: PARA_QUE_DUREN.titulo,
                  texto: PARA_QUE_DUREN.texto,
                  para: undefined,
                }
            const ancha = pos < 2
            return (
              <li
                key={tarjeta.clave}
                style={cascada(pos)}
                className={`reveal relative flex min-h-[340px] flex-col justify-center overflow-hidden bg-paper ${
                  ancha ? 'lg:col-span-3' : 'lg:col-span-2'
                }`}
              >
                {tarjeta.imagen ? (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-right"
                      style={{ backgroundImage: `url('${tarjeta.imagen}')` }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 bg-linear-to-r from-paper from-30% via-paper/92 to-paper/25"
                      aria-hidden="true"
                    />
                  </>
                ) : null}

                <div className="relative p-6 sm:p-7">
                  <p className="font-mono text-[10.5px] font-semibold tracking-[0.08em] whitespace-nowrap text-amber uppercase">
                    {tarjeta.etiqueta}
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <img
                      src={`/recursos-web/iconos/${tarjeta.icono}.svg`}
                      alt=""
                      width="28"
                      height="28"
                      aria-hidden="true"
                      className="shrink-0"
                    />
                    <h3
                      className={`leading-[1.2] font-extrabold tracking-[-0.02em] text-navy ${ancha ? 'text-[clamp(22px,2.6vw,26px)]' : 'text-[21px]'}`}
                    >
                      {tarjeta.titulo}
                    </h3>
                  </div>

                  <p className={`mt-3 text-[15px] leading-[1.6] ${ancha ? 'max-w-[42ch]' : 'max-w-[34ch]'}`}>{tarjeta.texto}</p>

                  {tarjeta.para ? (
                    <p className="mt-5 font-mono text-[10.5px] leading-snug tracking-[0.06em] text-aviso-texto uppercase">
                      {tarjeta.para}
                    </p>
                  ) : null}
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
            <p className="mt-3 text-[clamp(21px,2.8vw,28px)] leading-[1.2] font-extrabold tracking-[-0.02em] text-ink">
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
        eyebrow="Temario"
        sub="30 unidades en siete bloques. El orden importa: cada unidad da por montado lo de la anterior. Pincha en cada bloque para ver las unidades."
      >
        <span className="text-amber">Treinta unidades</span> que se cursan en orden
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
              <p className="w-full text-[15px] leading-[1.55] font-bold text-ink sm:pl-[92px]">
                <span className="mb-1 block font-mono text-[10.5px] font-semibold tracking-[0.16em] text-amber uppercase">
                  Al terminar
                </span>
                {b.resultado}
              </p>
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
              <span className="mt-1 block text-[13.5px] leading-[1.5] font-semibold text-navy">{e.dato}</span>
              <span className="mt-2 block text-[13.5px] leading-[1.55] text-muted">{e.texto}</span>
            </li>
          ))}
        </ul>

        {/* Lo que hace falta va debajo del formato y sin titular propio: es
            la misma respuesta, cómo se estudia esto y con qué. */}
        <p className="reveal mt-9 border-t border-line pt-7 text-center text-[15px] leading-[1.65] text-body">
          {REQUISITOS.lineas.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </p>
      </div>
    </Seccion>
  )
}
