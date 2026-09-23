-- Aviso a n8n cuando entra una solicitud nueva
-- Pegar en Supabase → SQL Editor DESPUÉS de haber creado la tabla.
--
-- Hay dos formas de hacer esto:
--   a) Database → Webhooks en el panel. Más rápido, pero no deja añadir una
--      cabecera secreta, así que cualquiera que adivine la URL de n8n podría
--      lanzar ejecuciones falsas.
--   b) Este trigger, que es el mismo patrón de fundae_notify_n8n y sí permite
--      firmar la llamada.
--
-- ANTES DE EJECUTAR, cambiar las dos líneas marcadas con «CAMBIAR».

create extension if not exists pg_net with schema extensions;

create or replace function public.notify_n8n_solicitud()
returns trigger
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  destino text := 'https://CAMBIAR.app.n8n.cloud/webhook/solicitud-despacho';  -- CAMBIAR
  secreto text := 'CAMBIAR-POR-UNA-CADENA-LARGA-Y-ALEATORIA';                  -- CAMBIAR
begin
  perform net.http_post(
    url     := destino,
    headers := jsonb_build_object(
                 'Content-Type',  'application/json',
                 'X-Origen',      'supabase-solicitudes-despacho',
                 'X-Firma',       secreto
               ),
    body    := jsonb_build_object(
                 'id',           new.id,
                 'creada_en',    new.creada_en,
                 'nombre',       new.nombre,
                 'despacho',     new.despacho,
                 'email',        new.email,
                 'telefono',     new.telefono,
                 'comunidades',  new.comunidades,
                 'mayor_reto',   new.mayor_reto,
                 'horas_tareas', new.horas_tareas,
                 'software',     new.software,
                 'intentos',     new.intentos,
                 'plazo',        new.plazo,
                 'decide',       new.decide,
                 'origen',       new.origen
               ),
    timeout_milliseconds := 5000
  );
  return new;
end;
$$;

comment on function public.notify_n8n_solicitud is
  'Avisa a n8n de cada solicitud nueva del filtro de la landing. La cabecera X-Firma permite que n8n rechace llamadas que no vengan de aquí.';

drop trigger if exists solicitud_notify_n8n on public.solicitudes_despacho;
create trigger solicitud_notify_n8n
  after insert on public.solicitudes_despacho
  for each row
  execute function public.notify_n8n_solicitud();

-- Para comprobar que las llamadas salen:
--   select id, url, status_code, created
--   from net._http_response
--   order by created desc limit 10;
