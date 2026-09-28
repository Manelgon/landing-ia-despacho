-- Registros de fundadores · página /fundadores
-- Pegar en Supabase → SQL Editor y ejecutar. Es el mismo proyecto que usa
-- n8n con la credencial POSTGRESAFCADEMIA.
--
-- ANTES DE EJECUTAR, cambiar las dos líneas marcadas con «CAMBIAR» (abajo,
-- en la función notify_n8n_fundador).
--
-- Recorrido del campo «estado»:
--   registrado      → acaba de enviar el formulario
--   correo_enviado  → n8n le ha mandado el correo con la palabra clave
--   matriculado     → respondió con la palabra y Evolcampus lo ha dado de alta
--   error           → Evolcampus no lo matriculó; llega un aviso a cursos@

create table if not exists public.registros_fundadores (
  id              uuid primary key default gen_random_uuid(),
  creado_en       timestamptz not null default now(),

  nombre          text not null,
  apellidos       text not null,
  despacho        text,
  email           text not null,
  telefono        text not null,

  consentimiento  boolean not null default false,
  origen          text default 'landing-fundadores',

  estado          text not null default 'registrado'
                  check (estado in ('registrado','correo_enviado','matriculado','error')),
  correo_enviado_en  timestamptz,
  confirmado_en      timestamptz,
  matriculado_en     timestamptz,
  evolcampus_userid       integer,
  evolcampus_enrollmentid integer,
  notas           text
);

comment on table public.registros_fundadores is
  'Registro de la página /fundadores. Lo inserta el formulario con la clave anon; n8n lo lee y lo actualiza con la credencial de Postgres.';

-- Un registro por persona, para siempre. Si repite, la página le dice que
-- busque el correo de confirmación.
create unique index if not exists registros_fundadores_email_idx
  on public.registros_fundadores (lower(email));

create index if not exists registros_fundadores_estado_idx
  on public.registros_fundadores (estado);

alter table public.registros_fundadores enable row level security;

-- Cualquiera puede registrarse, pero solo con estado «registrado»: nadie
-- puede colarse como «matriculado» desde el navegador.
drop policy if exists "registrarse" on public.registros_fundadores;
create policy "registrarse"
  on public.registros_fundadores
  for insert to anon
  with check (
    consentimiento = true
    and estado = 'registrado'
    and char_length(nombre) between 2 and 120
    and char_length(apellidos) between 2 and 120
    and email like '%_@_%.__%'
    and char_length(telefono) between 9 and 17
  );
-- Sin políticas de select/update/delete para anon: quedan denegadas.


-- ─── Aviso a n8n al entrar un registro ──────────────────────────────────────
-- Mismo patrón que webhook-n8n.sql. La cabecera X-Firma la comprueba el
-- Webhook de n8n con una credencial «Header Auth» (nombre: X-Firma).

create extension if not exists pg_net with schema extensions;

create or replace function public.notify_n8n_fundador()
returns trigger
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  destino text := 'https://CAMBIAR.app.n8n.cloud/webhook/fundadores-alta';  -- CAMBIAR
  secreto text := 'CAMBIAR-POR-UNA-CADENA-LARGA-Y-ALEATORIA';                 -- CAMBIAR
begin
  perform net.http_post(
    url     := destino,
    headers := jsonb_build_object(
                 'Content-Type', 'application/json',
                 'X-Firma',      secreto
               ),
    body    := jsonb_build_object(
                 'id',        new.id,
                 'nombre',    new.nombre,
                 'apellidos', new.apellidos,
                 'despacho',  new.despacho,
                 'email',     new.email,
                 'telefono',  new.telefono
               ),
    timeout_milliseconds := 5000
  );
  return new;
end;
$$;

drop trigger if exists fundador_notify_n8n on public.registros_fundadores;
create trigger fundador_notify_n8n
  after insert on public.registros_fundadores
  for each row
  execute function public.notify_n8n_fundador();

-- Para comprobar que las llamadas salen:
--   select id, status_code, created from net._http_response order by created desc limit 10;
--
-- Para ver cómo va cada fundador:
--   select nombre, apellidos, email, estado, creado_en, matriculado_en
--   from public.registros_fundadores order by creado_en desc;
