/**
 * Envío del formulario a Supabase.
 *
 * Se hace con fetch contra la API REST: para una sola inserción no compensa
 * cargar la librería entera en el navegador del visitante.
 *
 * La clave publicable va en el cliente a propósito: está pensada para eso.
 * Quien protege la tabla es la política RLS —solo permite insertar, nunca
 * leer— que está en supabase/solicitudes.sql
 */

const URL_BASE = process.env.NEXT_PUBLIC_SUPABASE_URL
const CLAVE = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export type Solicitud = Record<string, string | boolean | null>

export async function enviarSolicitud(datos: Solicitud): Promise<void> {
  if (!URL_BASE || !CLAVE) {
    throw new Error('Faltan las variables de Supabase. Ver .env.example')
  }

  const respuesta = await fetch(`${URL_BASE}/rest/v1/solicitudes_despacho`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Solo apikey. Las claves publicables nuevas (sb_publishable_…) no son
      // un JWT, así que mandarlas además en Authorization hace que Supabase
      // intente leerlas como token de sesión y responda 401.
      apikey: CLAVE,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(datos),
  })

  if (!respuesta.ok) {
    const cuerpo = await respuesta.text()
    // 23505 es la clave duplicada: ya envió el formulario hoy con ese correo
    if (respuesta.status === 409 || cuerpo.includes('23505')) {
      throw new Error('Ya hemos recibido una solicitud con ese correo hoy. Te escribimos en breve.')
    }
    throw new Error('No hemos podido enviar la solicitud. Inténtalo de nuevo en un momento.')
  }
}
