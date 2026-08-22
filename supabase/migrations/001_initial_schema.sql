-- Enable required extensions
create extension if not exists "uuid-ossp";

-- Candidate Profile
create table if not exists candidate_profiles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  full_name text not null,
  professional_headline text,
  total_experience_years int,
  current_location text,
  preferred_locations text[] default array[]::text[],
  work_authorization text,
  notice_period_days int,
  preferred_work_arrangement text check (preferred_work_arrangement in ('remote', 'hybrid', 'onsite')),
  timezone text default 'Asia/Kolkata',
  portfolio_url text,
  linkedin_url text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  constraint candidate_profiles_user_id_fk foreign key (user_id) references auth.users (id) on delete cascade
);

-- Career Positions
create table if not exists career_positions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  company text not null,
  title text not null,
  start_date date not null,
  end_date date,
  location text,
  description text,
  current boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  constraint career_positions_user_id_fk foreign key (user_id) references auth.users (id) on delete cascade
);

-- Career Facts
create table if not exists career_facts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  employer text not null,
  related_role text,
  factual_statement text not null,
  marketing_function text,
  market text,
  metric text,
  metric_value numeric,
  metric_unit text,
  tags text[] default array[]::text[],
  approved_for_resume boolean default false,
  verified boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  constraint career_facts_user_id_fk foreign key (user_id) references auth.users (id) on delete cascade
);

-- Resume Bases
create table if not exists resume_bases (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  family text not null check (family in ('partner-channel', 'brand-comms', 'field-events', 'demand-gen', 'full-stack')),
  original_file_path text,
  original_file_type text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  constraint resume_bases_user_id_fk foreign key (user_id) references auth.users (id) on delete cascade
);

-- Resume Versions
create table if not exists resume_versions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  resume_base_id uuid not null,
  target_job_id uuid,
  generated_timestamp timestamp with time zone default now(),
  jd_match_score numeric,
  keywords_inserted text[] default array[]::text[],
  career_facts_used uuid[] default array[]::uuid[],
  factual_validation_status text default 'pending' check (factual_validation_status in ('passed', 'failed', 'pending', 'skipped')),
  status text default 'draft' check (status in ('draft', 'ready', 'applied')),
  pdf_path text,
  docx_path text,
  content jsonb,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  constraint resume_versions_user_id_fk foreign key (user_id) references auth.users (id) on delete cascade,
  constraint resume_versions_resume_base_fk foreign key (resume_base_id) references resume_bases (id) on delete cascade
);

-- Jobs
create table if not exists jobs (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  title text not null,
  company text not null,
  location text,
  remote_policy text check (remote_policy in ('remote', 'hybrid', 'onsite')),
  posted_date date,
  job_description text,
  apply_url text,
  canonical_fingerprint text unique,
  sources jsonb default '[]'::jsonb,
  discovered_date timestamp with time zone default now(),
  status text default 'discovered' check (status in ('discovered', 'qualifying', 'review', 'high_priority', 'resume_ready', 'referral_search', 'ready_to_apply', 'applied', 'recruiter_contact', 'screening', 'interview', 'offer', 'rejected', 'withdrawn', 'archived')),
  notes text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  constraint jobs_user_id_fk foreign key (user_id) references auth.users (id) on delete cascade
);

-- Job Requirements
create table if not exists job_requirements (
  id uuid primary key default uuid_generate_v4(),
  job_id uuid not null,
  requirement text not null,
  category text check (category in ('must_have', 'preferred')),
  match_status text check (match_status in ('matched', 'partially_matched', 'not_found', 'unknown')),
  created_at timestamp with time zone default now(),
  constraint job_requirements_job_id_fk foreign key (job_id) references jobs (id) on delete cascade
);

-- Job Analyses
create table if not exists job_analyses (
  id uuid primary key default uuid_generate_v4(),
  job_id uuid not null,
  user_id uuid not null,
  eligibility_result jsonb,
  fit_analysis jsonb,
  culture_analysis jsonb,
  resume_routing jsonb,
  interview_potential_score numeric,
  score_breakdown jsonb,
  recommendation text check (recommendation in ('attack', 'apply', 'review', 'skip')),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  constraint job_analyses_job_id_fk foreign key (job_id) references jobs (id) on delete cascade,
  constraint job_analyses_user_id_fk foreign key (user_id) references auth.users (id) on delete cascade
);

-- Companies (for culture tracking)
create table if not exists companies (
  id uuid primary key default uuid_generate_v4(),
  canonical_name text unique not null,
  website_url text,
  industry text,
  company_size text,
  locations text[],
  recent_sentiment numeric,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Company Evidence
create table if not exists company_evidence (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid not null,
  category text not null,
  signal text not null,
  source text,
  source_url text,
  publication_date date,
  sentiment text check (sentiment in ('positive', 'negative', 'neutral')),
  confidence numeric,
  created_at timestamp with time zone default now(),
  constraint company_evidence_company_id_fk foreign key (company_id) references companies (id) on delete cascade
);

-- Contacts
create table if not exists contacts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  name text not null,
  company text,
  title text,
  email text,
  profile_url text,
  relationship text check (relationship in ('direct', 'colleague', 'weak', 'unknown')),
  relationship_strength numeric default 0,
  tags text[] default array[]::text[],
  notes text,
  last_contacted timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  constraint contacts_user_id_fk foreign key (user_id) references auth.users (id) on delete cascade
);

-- Referral Candidates
create table if not exists referral_candidates (
  id uuid primary key default uuid_generate_v4(),
  job_id uuid not null,
  contact_id uuid not null,
  confidence text check (confidence in ('high', 'medium', 'low')),
  rank int,
  reason text,
  priority_level int check (priority_level between 1 and 8),
  message_draft text,
  status text default 'identified' check (status in ('identified', 'drafted', 'approved', 'sent')),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  constraint referral_candidates_job_id_fk foreign key (job_id) references jobs (id) on delete cascade,
  constraint referral_candidates_contact_id_fk foreign key (contact_id) references contacts (id) on delete cascade
);

-- Applications
create table if not exists applications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  job_id uuid not null,
  resume_version_id uuid not null,
  status text default 'draft' check (status in ('draft', 'ready', 'submitted', 'in_progress', 'rejected', 'offer')),
  applied_date timestamp with time zone,
  screening_answers jsonb default '{}'::jsonb,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  constraint applications_user_id_fk foreign key (user_id) references auth.users (id) on delete cascade,
  constraint applications_job_id_fk foreign key (job_id) references jobs (id) on delete cascade,
  constraint applications_resume_version_fk foreign key (resume_version_id) references resume_versions (id) on delete cascade
);

-- Target Roles
create table if not exists target_roles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  title text not null,
  family text,
  priority int,
  enabled boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  constraint target_roles_user_id_fk foreign key (user_id) references auth.users (id) on delete cascade
);

-- User Preferences
create table if not exists user_preferences (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null unique,
  target_locations text[] default array[]::text[],
  remote_policy text check (remote_policy in ('remote', 'hybrid', 'onsite', 'flexible')),
  work_hours_start text default '08:00',
  work_hours_end text default '21:30',
  timezone text default 'Asia/Kolkata',
  job_freshness_days_min int default 1,
  job_freshness_days_max int default 15,
  resume_tailor_threshold int default 78,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  constraint user_preferences_user_id_fk foreign key (user_id) references auth.users (id) on delete cascade
);

-- Integration Connections (for OAuth tokens etc)
create table if not exists integration_connections (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  provider text not null,
  provider_account_id text,
  access_token_encrypted text,
  refresh_token_encrypted text,
  token_expires_at timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  constraint integration_connections_user_id_fk foreign key (user_id) references auth.users (id) on delete cascade,
  unique (user_id, provider)
);

-- Activity Events
create table if not exists activity_events (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  entity_type text,
  entity_id uuid,
  action text,
  details jsonb,
  created_at timestamp with time zone default now(),
  constraint activity_events_user_id_fk foreign key (user_id) references auth.users (id) on delete cascade
);

-- Analytics Events
create table if not exists analytics_events (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null,
  event_type text not null,
  event_data jsonb,
  created_at timestamp with time zone default now(),
  constraint analytics_events_user_id_fk foreign key (user_id) references auth.users (id) on delete cascade
);

-- Enable RLS
alter table candidate_profiles enable row level security;
alter table career_positions enable row level security;
alter table career_facts enable row level security;
alter table resume_bases enable row level security;
alter table resume_versions enable row level security;
alter table jobs enable row level security;
alter table job_requirements enable row level security;
alter table job_analyses enable row level security;
alter table contacts enable row level security;
alter table referral_candidates enable row level security;
alter table applications enable row level security;
alter table target_roles enable row level security;
alter table user_preferences enable row level security;
alter table integration_connections enable row level security;
alter table activity_events enable row level security;
alter table analytics_events enable row level security;

-- RLS Policies
create policy "Users can view their own candidate profile" on candidate_profiles for select using (auth.uid() = user_id);
create policy "Users can update their own candidate profile" on candidate_profiles for update using (auth.uid() = user_id);
create policy "Users can insert their own candidate profile" on candidate_profiles for insert with check (auth.uid() = user_id);

create policy "Users can view their own career positions" on career_positions for select using (auth.uid() = user_id);
create policy "Users can insert their own career positions" on career_positions for insert with check (auth.uid() = user_id);
create policy "Users can update their own career positions" on career_positions for update using (auth.uid() = user_id);

create policy "Users can view their own career facts" on career_facts for select using (auth.uid() = user_id);
create policy "Users can insert their own career facts" on career_facts for insert with check (auth.uid() = user_id);
create policy "Users can update their own career facts" on career_facts for update using (auth.uid() = user_id);

create policy "Users can view their own resume bases" on resume_bases for select using (auth.uid() = user_id);
create policy "Users can insert their own resume bases" on resume_bases for insert with check (auth.uid() = user_id);

create policy "Users can view their own resume versions" on resume_versions for select using (auth.uid() = user_id);
create policy "Users can insert their own resume versions" on resume_versions for insert with check (auth.uid() = user_id);

create policy "Users can view their own jobs" on jobs for select using (auth.uid() = user_id);
create policy "Users can insert their own jobs" on jobs for insert with check (auth.uid() = user_id);
create policy "Users can update their own jobs" on jobs for update using (auth.uid() = user_id);

create policy "Users can view their own job requirements" on job_requirements for select
  using (job_id in (select id from jobs where user_id = auth.uid()));
create policy "Users can insert their own job requirements" on job_requirements for insert
  with check (job_id in (select id from jobs where user_id = auth.uid()));

create policy "Users can view their own job analyses" on job_analyses for select using (auth.uid() = user_id);
create policy "Users can insert their own job analyses" on job_analyses for insert with check (auth.uid() = user_id);

create policy "Users can view their own contacts" on contacts for select using (auth.uid() = user_id);
create policy "Users can insert their own contacts" on contacts for insert with check (auth.uid() = user_id);
create policy "Users can update their own contacts" on contacts for update using (auth.uid() = user_id);

create policy "Users can view their own referral candidates" on referral_candidates for select
  using (job_id in (select id from jobs where user_id = auth.uid()));
create policy "Users can insert their own referral candidates" on referral_candidates for insert
  with check (job_id in (select id from jobs where user_id = auth.uid()));
create policy "Users can update their own referral candidates" on referral_candidates for update
  using (job_id in (select id from jobs where user_id = auth.uid()));

create policy "Users can view their own applications" on applications for select using (auth.uid() = user_id);
create policy "Users can insert their own applications" on applications for insert with check (auth.uid() = user_id);
create policy "Users can update their own applications" on applications for update using (auth.uid() = user_id);

create policy "Users can view their own target roles" on target_roles for select using (auth.uid() = user_id);
create policy "Users can insert their own target roles" on target_roles for insert with check (auth.uid() = user_id);
create policy "Users can update their own target roles" on target_roles for update using (auth.uid() = user_id);

create policy "Users can view their own preferences" on user_preferences for select using (auth.uid() = user_id);
create policy "Users can update their own preferences" on user_preferences for update using (auth.uid() = user_id);

create policy "Users can view their own integrations" on integration_connections for select using (auth.uid() = user_id);
create policy "Users can insert their own integrations" on integration_connections for insert with check (auth.uid() = user_id);

create policy "Users can view their own activity" on activity_events for select using (auth.uid() = user_id);
create policy "Users can view their own analytics" on analytics_events for select using (auth.uid() = user_id);

-- Indexes
create index idx_jobs_user_id on jobs(user_id);
create index idx_jobs_status on jobs(status);
create index idx_jobs_discovered_date on jobs(discovered_date);
create index idx_job_analyses_user_id on job_analyses(user_id);
create index idx_contacts_user_id on contacts(user_id);
create index idx_applications_user_id on applications(user_id);
create index idx_applications_job_id on applications(job_id);
create index idx_resume_versions_user_id on resume_versions(user_id);
