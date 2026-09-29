-- Clasificación con IA de las solicitudes de diagnóstico
-- Pegar en Supabase → SQL Editor DESPUÉS de solicitudes.sql.
--
-- La IA no toca el campo «estado»: ese lo cambiáis vosotros al decidir.
-- Solo rellena estas columnas para que sepáis a quién llamar primero.

alter table public.solicitudes_despacho
  add column if not exists prioridad       text
    check (prioridad in ('alta','media','descartada','sin_clasificar')),
  add column if not exists resumen_ia      text,
  add column if not exists enfoque_ia      text,
  add column if not exists alertas_ia      text,
  add column if not exists clasificada_en  timestamptz;

comment on column public.solicitudes_despacho.prioridad is
  'La pone n8n con las reglas acordadas el 29-09-2026: fuera de 20-500 comunidades = descartada; dentro, decide él o con socio y lo quiere en tres meses = alta; resto = media. Es una sugerencia: el estado lo decide el equipo.';

create index if not exists solicitudes_despacho_prioridad_idx
  on public.solicitudes_despacho (prioridad);
