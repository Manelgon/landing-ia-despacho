/**
 * Página de registro de fundadores: /alumnos-fundadores (y /fundadores redirige ahí)
 *
 * No está enlazada desde ningún sitio y lleva noindex. Solo entra quien tenga
 * el enlace. El registro es gratis y termina en matrícula en Evolcampus.
 *
 * El recorrido, igual que el de la clase gratuita:
 *   1. Se registra aquí → se guarda en Supabase (registros_fundadores).
 *   2. Supabase avisa a n8n → n8n le manda un correo pidiendo la palabra clave.
 *   3. Responde al correo con la palabra → n8n lo matricula en Evolcampus.
 *   4. Evolcampus le manda sus credenciales.
 *
 * «Fundadores» es un nombre provisional. Si cambia, se cambia en NOMBRE y en
 * los textos de abajo; la ruta /alumnos-fundadores es la carpeta src/app/alumnos-fundadores.
 *
 * LA PALABRA CLAVE está en tres sitios que tienen que coincidir:
 *   - aquí (PALABRA_CLAVE), que es lo que ve el alumno en la página,
 *   - el nodo «⚙️ Config alta» del flujo de n8n (va en el correo),
 *   - el nodo «⚙️ Config respuesta» del flujo de n8n (la que se comprueba).
 * No puede ser «IA»: esa es la de la clase gratuita.
 */

import { FAQ } from './curso'

export const NOMBRE = 'fundadores'

export const PALABRA_CLAVE = 'ALTA'

export const FUNDADORES = {
  /**
   * Es el mismo itinerario que se vende en la landing principal, gratis para
   * fundadores (lo confirmó Manel el 28 de septiembre de 2026). Por eso la
   * página reutiliza las secciones de la landing: lo que montas, el temario,
   * el docente y las preguntas. No lleva precio ni el filtro de «para quién es».
   */
  eyebrow: 'Acceso fundadores · IA para el Despacho',
  titular: {
    antes: 'El itinerario completo, ',
    destacado: 'gratis',
    despues: ' para fundadores',
  },
  entradilla:
    'El mismo curso de IA para el Despacho, con todo su temario. Te registras, confirmas tu correo y entras al campus. No pagas nada en ningún paso.',
  /** El botón del hero y de la barra de arriba. Llevan al formulario, al final. */
  cta: 'Reservar mi plaza',
  bajoTitular: 'Sin plazos · tutoría por correo con el docente · certificado al superarlo',

  /**
   * Qué recibe un fundador además del curso. PENDIENTE: no está decidido y
   * no se inventa. Mientras sea una lista vacía, no aparece.
   */
  incluye: [] as string[],

  formulario: {
    titulo: 'Regístrate',
    entradilla: 'Un minuto. Después te llega un correo para confirmar.',
    boton: 'Registrarme gratis',
    enviando: 'Enviando…',
  },

  exito: {
    titulo: 'Revisa tu correo',
    texto: `Te acabamos de enviar un correo. Respóndelo con la palabra ${PALABRA_CLAVE} y te matriculamos. Si no lo ves en unos minutos, mira en la carpeta de spam o de promociones.`,
  },

  /** El bloque del formulario, al final de la página. */
  cierre: {
    eyebrow: 'Último paso',
    titulo: 'Reserva tu plaza de fundador',
    texto: 'Un minuto para registrarte y otro para confirmar el correo. Después, el campus te manda tu acceso.',
  },

  pasos: {
    eyebrow: 'Cómo funciona',
    titulo: 'Cuatro pasos y estás dentro',
    lista: [
      { cuando: 'Ahora', titulo: 'Te registras', texto: 'Nombre, correo y teléfono. Nada más.' },
      {
        cuando: 'En un minuto',
        titulo: 'Te llega un correo',
        texto: 'Es para comprobar que el correo es tuyo y que está bien escrito.',
      },
      {
        cuando: 'Cuando lo leas',
        titulo: `Respondes con ${PALABRA_CLAVE}`,
        texto: 'Solo esa palabra. Así sabemos que hay una persona al otro lado.',
      },
      {
        cuando: 'Al momento',
        titulo: 'Recibes tu acceso',
        texto: 'El campus te manda por correo el usuario y la contraseña para entrar.',
      },
    ],
  },
}

/**
 * Primera capa de protección de datos. Mismo formato que la cláusula que
 * Prodat aprobó para afcademia.com (007. Adecuación legal web), con la
 * finalidad adaptada a este formulario, que termina en matrícula.
 *
 * PENDIENTE: que Prodat revise la finalidad y la duración de esta versión.
 */
export const CLAUSULA_FUNDADORES = {
  politica: 'https://afcademia.com/politica-de-privacidad/',
  capa: [
    { dato: 'Responsable', texto: 'AFcademIA 2025 S.L.' },
    {
      dato: 'Finalidad',
      texto: 'Gestionar tu registro, confirmar tu correo y darte de alta en el campus de formación.',
    },
    {
      dato: 'Legitimación',
      texto: 'Tu consentimiento expreso y la ejecución de la matrícula que solicitas.',
    },
    {
      dato: 'Duración',
      texto: 'Mientras mantengas tu matrícula. Si no confirmas el correo, los datos se eliminan.',
    },
    { dato: 'Destinatarios', texto: 'No cedemos tus datos a nadie.' },
  ],
}

/**
 * Las preguntas de la landing, sin la de FUNDAE: en un curso gratis no hay
 * nada que bonificar.
 */
export const FAQ_FUNDADORES = FAQ.filter((f) => !f.p.includes('FUNDAE'))
