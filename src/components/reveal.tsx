'use client'

import { useEffect } from 'react'

/**
 * Un único observador para toda la página.
 *
 * Los componentes de servidor no necesitan saber nada de esto: basta con que
 * pongan className="reveal" en lo que deba entrar al hacer scroll, y un
 * style={{ '--reveal-delay': '80ms' }} si va en cascada detrás de otro.
 *
 * Se hace con IntersectionObserver, nunca escuchando el evento scroll.
 */
export function RevealObserver() {
  useEffect(() => {
    const elementos = document.querySelectorAll<HTMLElement>('.reveal')
    if (elementos.length === 0) return

    // Si el sistema pide menos movimiento, se enseña todo y no se observa nada.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elementos.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return
          entrada.target.classList.add('is-visible')
          observador.unobserve(entrada.target)
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    )

    elementos.forEach((el) => observador.observe(el))
    return () => observador.disconnect()
  }, [])

  return null
}
