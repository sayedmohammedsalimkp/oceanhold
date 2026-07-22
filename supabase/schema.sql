-- Run in Supabase SQL Editor
create extension if not exists "pgcrypto";

create table if not exists contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  company text,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists contact_inquiries_created_at_idx
  on contact_inquiries (created_at desc);
