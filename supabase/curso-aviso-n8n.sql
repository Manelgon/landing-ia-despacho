-- El aviso a n8n manda también el curso y para cuántas personas
-- Pegar en Supabase → SQL Editor DESPUÉS de curso.sql.
--
-- El trigger de webhook-n8n.sql manda a n8n una lista fija de campos, y ahí
-- no están «curso» ni «personas». Sin ellos el clasificador trata todas las
-- solicitudes como de IA para el Despacho.
--
-- No se reescribe la función a mano: se lee la que está en Supabase (con su
-- URL de n8n y su secreto de verdad), se le añaden los dos campos detrás de
-- «origen» y se vuelve a crear. Si ya los tiene, no hace nada. Si no encuentra
-- la línea de «origen» tal cual, avisa y no toca nada.

do $$
declare
  antes   text;
  despues text;
begin
  select pg_get_functiondef('public.notify_n8n_solicitud'::regproc) into antes;

  if position('''curso''' in antes) > 0 then
    raise notice 'La función ya manda el curso. No se toca.';
    return;
  end if;

  despues := regexp_replace(
    antes,
    '(''origen'',\s*new\.origen)',
    E'\\1,\n                 ''curso'',        new.curso,\n                 ''personas'',     new.personas'
  );

  if despues = antes then
    raise exception 'No se ha encontrado la línea de «origen» en notify_n8n_solicitud. No se ha cambiado nada.';
  end if;

  execute despues;
  raise notice 'Hecho: el aviso a n8n ya incluye curso y personas.';
end $$;

-- Para comprobarlo:
--   select pg_get_functiondef('public.notify_n8n_solicitud'::regproc);
