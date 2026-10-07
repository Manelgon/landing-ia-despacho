-- Por qué curso pregunta cada solicitud · catálogo y cursos sueltos
-- Pegar en Supabase → SQL Editor ANTES de publicar la versión de la web que
-- tiene formulario en la portada y en las páginas de curso. Si se publica
-- antes, Supabase rechaza esos formularios (el de IA para el Despacho sigue
-- funcionando, porque no manda estas columnas).
--
-- · curso:    código del curso (P1, N1, S8, A7…) o 'sin-decidir' si viene de
--             la portada y no lo sabe. Las solicitudes de antes son todas de
--             IA para el Despacho: por eso el valor por defecto es 'P1'.
-- · personas: para cuántas personas del despacho sería (solo / 2-3 / 4-10 / más de 10).
-- · origen:   ya existía. Ahora puede ser también 'automatiza-catalogo' o 'automatiza-curso'.

alter table public.solicitudes_despacho
  add column if not exists curso text default 'P1',
  add column if not exists personas text;

alter table public.solicitudes_despacho
  drop constraint if exists solicitudes_despacho_curso_largo,
  add constraint solicitudes_despacho_curso_largo
    check (curso is null or char_length(curso) <= 20),
  drop constraint if exists solicitudes_despacho_personas_largo,
  add constraint solicitudes_despacho_personas_largo
    check (personas is null or char_length(personas) <= 40);

create index if not exists solicitudes_despacho_curso_idx
  on public.solicitudes_despacho (curso);

comment on column public.solicitudes_despacho.curso is
  'Código del curso por el que pregunta (P1, N1, S8, A7…) o sin-decidir. Lo pone la página del curso o lo elige la persona en la portada.';

-- Para ver cuántas solicitudes trae cada curso:
--   select curso, origen, count(*) as solicitudes,
--          count(*) filter (where estado = 'matriculada') as matriculas
--   from public.solicitudes_despacho
--   group by 1, 2 order by 3 desc;
