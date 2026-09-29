-- De dónde viene cada solicitud: partner y red social
-- Pegar en Supabase → SQL Editor ANTES de publicar la versión de la landing
-- que envía «partner». Si se publica antes, Supabase rechaza el formulario.
--
-- · partner: el código del colaborador (?ref=juan en el enlace, o escrito a mano).
-- · utm:     la columna ya existía; ahora la rellena la landing (?utm_source=linkedin).

alter table public.solicitudes_despacho
  add column if not exists partner text;

-- Límites para que nadie meta basura desde el formulario público
alter table public.solicitudes_despacho
  drop constraint if exists solicitudes_despacho_partner_largo,
  add constraint solicitudes_despacho_partner_largo
    check (partner is null or char_length(partner) <= 40),
  drop constraint if exists solicitudes_despacho_utm_tamano,
  add constraint solicitudes_despacho_utm_tamano
    check (utm is null or pg_column_size(utm) <= 2000);

create index if not exists solicitudes_despacho_partner_idx
  on public.solicitudes_despacho (partner);

comment on column public.solicitudes_despacho.partner is
  'Código del partner que recomendó. Lo rellena el enlace ?ref= o la persona a mano. Sirve para calcular comisiones: revisar a mano antes de pagar.';

-- Para ver cuántas solicitudes trae cada partner y cada red:
--   select coalesce(partner, '(sin partner)') as partner,
--          coalesce(utm->>'utm_source', '(directo)') as red,
--          count(*) as solicitudes,
--          count(*) filter (where estado = 'matriculada') as matriculas
--   from public.solicitudes_despacho
--   group by 1, 2 order by 3 desc;
