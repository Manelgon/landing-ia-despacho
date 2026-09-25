-- Solicitudes de diagnóstico · Landing «IA para el Despacho»
-- Pegar en Supabase → SQL Editor y ejecutar.
--
-- La landing escribe aquí desde el navegador con la clave publicable (anon).
-- Por eso la política solo permite INSERTAR: nadie que no esté autenticado
-- puede leer lo que han enviado otros.

create table if not exists public.solicitudes_despacho (
  id            uuid primary key default gen_random_uuid(),
  creada_en     timestamptz not null default now(),

  -- Identificación
  nombre        text not null,
  despacho      text,
  email         text not null,
  telefono      text,

  -- Las siete preguntas del filtro
  comunidades   text,   -- menos de 10 · 10-20 · 20-60 · 60-120 · 120-500 · más de 500
  horas_tareas  text,   -- lo que le lleva hoy la tarea que más le pesa
  software      text,   -- Gesfincas · Netfincas · TAAF · otro · hojas de cálculo
  intentos      text,   -- qué ha probado ya y qué pasó (texto libre)
  mayor_reto    text,   -- correo · llamadas · documentos · facturas · archivo
  plazo         text,   -- para cuándo lo quiere resuelto
  decide        text,   -- decide él, con un socio, o decide otra persona

  -- Consentimiento y procedencia
  consentimiento  boolean not null default false,
  origen          text default 'landing-ia-despacho',
  utm             jsonb,

  -- Seguimiento interno
  estado        text not null default 'nueva'
                check (estado in ('nueva','contactada','aprobada','descartada','matriculada')),
  notas         text
);

comment on table public.solicitudes_despacho is
  'Solicitudes del filtro previo de la landing IA para el Despacho. Las inserta el formulario con la clave anon; solo se leen desde el panel o con service_role.';

create index if not exists solicitudes_despacho_creada_idx
  on public.solicitudes_despacho (creada_en desc);
create index if not exists solicitudes_despacho_estado_idx
  on public.solicitudes_despacho (estado);

-- El correo no puede repetirse el mismo día: evita duplicados por doble clic.
-- La fecha se fija a UTC porque date() sobre un timestamptz depende de la zona
-- horaria de la sesión, y PostgreSQL no admite eso dentro de un índice.
create unique index if not exists solicitudes_despacho_email_dia_idx
  on public.solicitudes_despacho (email, ((creada_en at time zone 'UTC')::date));

alter table public.solicitudes_despacho enable row level security;

-- Cualquiera puede enviar el formulario...
drop policy if exists "enviar solicitud" on public.solicitudes_despacho;
create policy "enviar solicitud"
  on public.solicitudes_despacho
  for insert to anon
  with check (
    consentimiento = true
    and char_length(nombre) between 2 and 120
    and email like '%_@_%.__%'
  );

-- ...pero nadie anónimo puede leerlas, modificarlas ni borrarlas.
-- (Al no crear políticas de select/update/delete para anon, quedan denegadas.)
