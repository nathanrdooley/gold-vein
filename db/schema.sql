-- Gold Vein backend database schema
-- Target: Supabase Postgres
-- Run this in the Supabase SQL editor for the project that backs the Gold Vein Vercel app.

create extension if not exists pgcrypto;

create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  display_name text not null,
  email text,
  phone text,
  avatar_initials text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists adventure_categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists trails (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references adventure_categories(id) on delete set null,
  slug text not null unique,
  title text not null,
  subtitle text,
  scripture_map text,
  summary text not null,
  place_type text not null default 'anywhere',
  difficulty text,
  estimated_minutes text,
  treasure_type text not null default 'spiritual',
  is_published boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists trail_steps (
  id uuid primary key default gen_random_uuid(),
  trail_id uuid not null references trails(id) on delete cascade,
  step_order integer not null,
  step_label text not null,
  instruction text not null,
  attention text,
  unlock_label text,
  unlock_type text not null default 'manual',
  unlock_config jsonb not null default '{}'::jsonb,
  next_trail_id uuid references trails(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (trail_id, step_order)
);

create table if not exists journey_groups (
  id uuid primary key default gen_random_uuid(),
  trail_id uuid not null references trails(id) on delete cascade,
  invite_code text not null unique,
  title text not null,
  created_by_profile_id uuid references profiles(id) on delete set null,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists journey_members (
  id uuid primary key default gen_random_uuid(),
  journey_group_id uuid not null references journey_groups(id) on delete cascade,
  profile_id uuid references profiles(id) on delete set null,
  display_name text not null,
  role text not null default 'traveler',
  joined_at timestamptz not null default now(),
  last_seen_at timestamptz,
  unique (journey_group_id, profile_id)
);

create table if not exists traveler_progress (
  id uuid primary key default gen_random_uuid(),
  journey_group_id uuid not null references journey_groups(id) on delete cascade,
  trail_id uuid not null references trails(id) on delete cascade,
  journey_member_id uuid references journey_members(id) on delete cascade,
  traveler_name text not null,
  current_step integer not null default 0,
  status text not null default 'in_progress',
  location_label text,
  latitude numeric(10, 7),
  longitude numeric(10, 7),
  updated_at timestamptz not null default now(),
  unique (journey_group_id, journey_member_id, trail_id)
);

create table if not exists journey_messages (
  id uuid primary key default gen_random_uuid(),
  journey_group_id uuid not null references journey_groups(id) on delete cascade,
  journey_member_id uuid references journey_members(id) on delete set null,
  display_name text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists field_notes (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles(id) on delete set null,
  journey_group_id uuid references journey_groups(id) on delete set null,
  trail_id uuid references trails(id) on delete set null,
  trail_title text not null,
  place text,
  weather text,
  scripture text,
  treasure text,
  next_step text,
  note_date date,
  note_time time,
  created_at timestamptz not null default now()
);

create table if not exists support_notes (
  id uuid primary key default gen_random_uuid(),
  support_type text not null,
  amount_cents integer not null,
  purpose text,
  contact_note text,
  payment_provider text not null default 'venmo',
  payment_status text not null default 'manual',
  created_at timestamptz not null default now()
);

create table if not exists treasure_redemptions (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  trail_id uuid references trails(id) on delete set null,
  journey_group_id uuid references journey_groups(id) on delete set null,
  treasure_label text not null,
  status text not null default 'available',
  redeemed_by_name text,
  redeemed_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists idx_trails_category_id on trails(category_id);
create index if not exists idx_trail_steps_trail_id on trail_steps(trail_id);
create index if not exists idx_journey_groups_trail_id on journey_groups(trail_id);
create index if not exists idx_journey_groups_invite_code on journey_groups(invite_code);
create index if not exists idx_journey_members_group_id on journey_members(journey_group_id);
create index if not exists idx_traveler_progress_group_id on traveler_progress(journey_group_id);
create index if not exists idx_journey_messages_group_id on journey_messages(journey_group_id);
create index if not exists idx_field_notes_profile_id on field_notes(profile_id);
create index if not exists idx_treasure_redemptions_code on treasure_redemptions(code);

insert into adventure_categories (slug, title, summary, sort_order)
values
  ('gospel-adventure', 'Gospel Adventure', 'Trails for hearing the gospel, receiving the Word, responding in faith, and being connected to follow-up.', 10),
  ('disciple-maker-adventure', 'Disciple-Maker Adventure', 'Trails for believers learning to walk with others, teach Scripture, pray, serve, follow up, and make disciples.', 20),
  ('freedom-adventure', 'Freedom Adventure', 'Trails for confession, repentance, addiction recovery, renewed obedience, accountability, and hope in Christ.', 30),
  ('prepared-gift-adventure', 'Prepared Gift Adventure', 'Trails where real-world treasures point toward grace received and given.', 40)
on conflict (slug) do update set
  title = excluded.title,
  summary = excluded.summary,
  sort_order = excluded.sort_order,
  updated_at = now();

insert into trails (category_id, slug, title, subtitle, scripture_map, summary, place_type, difficulty, estimated_minutes, treasure_type, is_published, sort_order)
select adventure_categories.id, seed.slug, seed.title, seed.subtitle, seed.scripture_map, seed.summary, seed.place_type, seed.difficulty, seed.estimated_minutes, seed.treasure_type, true, seed.sort_order
from (
  values
    ('gospel-adventure', 'conversion-trail', 'Conversion Trail', 'Look honestly to Jesus Christ.', 'John 3:1-18', 'Hear the gospel, name an honest response, and connect with a believer for prayer, questions, and the next faithful step.', 'anywhere', 'Honest Response', '20-50 minutes', 'follow-up', 10),
    ('gospel-adventure', 'the-word-trail', 'The Word Trail', 'Receive the Scripture map.', '2 Timothy 3:14-17', 'Open the Word, notice what God reveals, and respond with faith and obedience.', 'anywhere', 'First Step', '15-35 minutes', 'spiritual', 20),
    ('disciple-maker-adventure', 'emmaus-road', 'Emmaus Road', 'Walk with Scripture and witness.', 'Luke 24:13-35', 'Take an intentional walk, notice where hope feels hidden, and return with witness to the risen Christ.', 'walkable', 'Reflective', '25-60 minutes', 'witness', 10),
    ('disciple-maker-adventure', 'nearby-neighbor', 'Nearby Neighbor', 'Mercy in a nearby place.', 'Luke 10:25-37', 'Go to a nearby public place, notice who is near, and give the treasure through mercy, prayer, encouragement, or service.', 'nearby', 'Anyone', '20-45 minutes', 'mercy', 20),
    ('freedom-adventure', 'home-peace-trail', 'Home Peace Trail', 'Welcome Christ into the ordinary room.', 'Luke 10:38-42', 'Begin where you live, receive peace, connect with someone, and give the treasure through presence and service.', 'home', 'At Home', '15-40 minutes', 'peace', 10),
    ('prepared-gift-adventure', 'coffee-shop-trail', 'Coffee Shop Trail', 'A prepared-gift partner-location concept.', '2 Peter 1:3-11', 'A future partner-location trail where a tangible gift points toward grace received and carried outward.', 'partner-location', 'First Step', '30-60 minutes', 'prepared-gift', 10)
) as seed(category_slug, slug, title, subtitle, scripture_map, summary, place_type, difficulty, estimated_minutes, treasure_type, sort_order)
join adventure_categories on adventure_categories.slug = seed.category_slug
on conflict (slug) do update set
  category_id = excluded.category_id,
  title = excluded.title,
  subtitle = excluded.subtitle,
  scripture_map = excluded.scripture_map,
  summary = excluded.summary,
  place_type = excluded.place_type,
  difficulty = excluded.difficulty,
  estimated_minutes = excluded.estimated_minutes,
  treasure_type = excluded.treasure_type,
  is_published = excluded.is_published,
  sort_order = excluded.sort_order,
  updated_at = now();

