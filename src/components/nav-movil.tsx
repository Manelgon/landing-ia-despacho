"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Menú del móvil y la tablet (por debajo de 1280 px): el icono de tres rayas abre un panel desde la derecha con
 * los mismos enlaces que la barra de escritorio y el botón principal.
 * Se cierra con la X, tocando fuera, eligiendo un enlace o con Escape.
 */
export function NavMovil({
  enlaces,
  cta,
}: {
  enlaces: { href: string; texto: string }[];
  cta: React.ReactNode;
}) {
  const [abierto, setAbierto] = useState(false);
  // El panel se pinta en <body>: dentro de la barra, su backdrop-blur lo
  // encerraría y el position: fixed dejaría de ser respecto a la pantalla.
  const [montado, setMontado] = useState(false);
  useEffect(() => setMontado(true), []);
  const boton = useRef<HTMLButtonElement>(null);
  const cerrar = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!abierto) return;
    const alPulsar = (e: KeyboardEvent) =>
      e.key === "Escape" && setAbierto(false);
    document.addEventListener("keydown", alPulsar);
    // Con el panel abierto, la página de debajo no se mueve
    const antes = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    cerrar.current?.focus();
    return () => {
      document.removeEventListener("keydown", alPulsar);
      document.body.style.overflow = antes;
      boton.current?.focus({ preventScroll: true });
    };
  }, [abierto]);

  return (
    <div className="xl:hidden">
      <button
        ref={boton}
        type="button"
        onClick={() => setAbierto(true)}
        aria-expanded={abierto}
        aria-controls="menu-movil"
        aria-label="Abrir el menú"
        className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {montado
        ? createPortal(
            <>
              {/* Fondo oscuro: tocarlo cierra */}
              <div
                onClick={() => setAbierto(false)}
                aria-hidden="true"
                className={`fixed inset-0 z-50 bg-navy-deep/60 backdrop-blur-[2px] transition-opacity duration-300 ${
                  abierto ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              />

              <div
                id="menu-movil"
                role="dialog"
                aria-modal="true"
                aria-label="Menú"
                inert={!abierto}
                className={`fixed top-0 right-0 z-50 flex h-dvh w-[min(82vw,340px)] flex-col bg-navy-deep px-6 pt-5 pb-8 shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
                  abierto ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="flex justify-end">
                  <button
                    ref={cerrar}
                    type="button"
                    onClick={() => setAbierto(false)}
                    aria-label="Cerrar el menú"
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 6l12 12M18 6L6 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>

                <ul className="mt-6 list-none">
                  {enlaces.map((e) => (
                    <li key={e.href} className="border-b border-white/10">
                      <a
                        href={e.href}
                        onClick={() => setAbierto(false)}
                        className="block py-4 font-mono text-[13px] tracking-[0.12em] text-white/85 uppercase no-underline transition-colors hover:text-white"
                      >
                        {e.texto}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Al pulsar el botón también se cierra: el ancla lleva al formulario */}
                <div className="mt-8" onClick={() => setAbierto(false)}>
                  {cta}
                </div>
              </div>
            </>,
            document.body,
          )
        : null}
    </div>
  );
}
