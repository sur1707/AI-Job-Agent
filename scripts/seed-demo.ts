import type { Job } from '@/types';

export const DEMO_JOBS: Omit<Job, 'id' | 'created_at' | 'updated_at'>[] = [
  {
    user_id: 'demo-user',
    title: 'Partner Marketing Manager',
    company: 'TechCorp India',
    location: 'Bengaluru',
    remote_policy: 'hybrid',
    posted_date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    job_description: `We're looking for a strategic Partner Marketing Manager to lead our channel and partner ecosystem strategy. You'll work closely with our VP of Sales to build co-marketing programs, manage partner enablement, and drive pipeline through our partner network.

    Requirements:
    - 7+ years of B2B marketing experience
    - 3+ years in partner/channel marketing
    - Experience with partner campaigns and co-marketing
    - Strong project management skills
    - APAC experience preferred
    - Familiarity with partner portals and MDF tracking
    `,
    apply_url: 'https://techcorp.example.com/careers/partner-marketing-manager',
    canonical_fingerprint: 'techcorp india|partner marketing manager|bengaluru',
    sources: [
      {
        source: 'employer',
        url: 'https://techcorp.example.com/careers/partner-marketing-manager',
        discovered_date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ],
    discovered_date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'qualifying',
    notes: 'Demo job - excellent fit',
  },

  {
    user_id: 'demo-user',
    title: 'Channel Marketing Manager',
    company: 'GlobalTech Solutions',
    location: 'Remote',
    remote_policy: 'remote',
    posted_date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    job_description: `Join GlobalTech as Channel Marketing Manager to drive go-to-market success through our partner channel. Lead integrated channel campaigns, partner enablement, and co-marketing initiatives.

    About You:
    - 6+ years of B2B SaaS marketing
    - Proven channel/partner marketing track record
    - Experience with integrated campaigns
    - Strong analytical skills
    `,
    apply_url: 'https://globaltechsolutions.example.com/apply/channel-marketing',
    canonical_fingerprint: 'globaltech solutions|channel marketing manager|remote',
    sources: [
      {
        source: 'linkedin',
        url: 'https://linkedin.com/jobs/view/12345678',
        discovered_date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ],
    discovered_date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'review',
    notes: undefined,
  },

  {
    user_id: 'demo-user',
    title: 'Brand Marketing Manager',
    company: 'ABC Corporation',
    location: 'San Francisco',
    remote_policy: 'onsite',
    posted_date: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    job_description: `ABC Corporation seeks Brand Marketing Manager for corporate branding initiatives. Role is based in San Francisco office with core hours 9 AM–6 PM PST.`,
    apply_url: 'https://abc-corp.example.com/jobs/brand-marketing',
    canonical_fingerprint: 'abc corporation|brand marketing manager|san francisco',
    sources: [
      {
        source: 'indeed',
        url: 'https://indeed.com/viewjob?jk=abcdef123456',
        discovered_date: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ],
    discovered_date: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'archived',
    notes: 'Too old + onsite + PST timezone conflict',
  },

  {
    user_id: 'demo-user',
    title: 'Field Marketing Manager',
    company: 'Hyderabad Solutions',
    location: 'Hyderabad',
    remote_policy: 'hybrid',
    posted_date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    job_description: `Hyderabad Solutions is hiring a Field Marketing Manager to run regional marketing programs, events, and campaigns. You'll be part of our India marketing team.

    What you bring:
    - 5+ years in field or regional marketing
    - Event marketing experience
    - Budget management
    - Ability to work independently
    `,
    apply_url: 'https://hyderabadsolutions.example.com/apply?role=field-marketing',
    canonical_fingerprint: 'hyderabad solutions|field marketing manager|hyderabad',
    sources: [
      {
        source: 'naukri',
        url: 'https://naukri.example.com/job/abcdef123',
        discovered_date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ],
    discovered_date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'qualifying',
    notes: undefined,
  },

  {
    user_id: 'demo-user',
    title: 'Demand Generation Manager',
    company: 'Growth.io',
    location: 'Remote',
    remote_policy: 'remote',
    posted_date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    job_description: `Growth.io is scaling our demand gen function and looking for a strategic Demand Generation Manager to lead ABM, integrated campaigns, and pipeline generation programs.

    You'll own:
    - ABM program strategy and execution
    - Integrated multi-channel campaigns
    - Pipeline metrics and optimization
    - Team collaboration with sales
    - Marketing automation platform management

    We're looking for:
    - 7+ years of B2B marketing, 3+ in demand gen or ABM
    - Strong analytical mindset
    - Experience with Marketo, HubSpot, or similar
    - APAC or global market experience
    `,
    apply_url: 'https://growth.io/careers/demand-gen-manager',
    canonical_fingerprint: 'growth.io|demand generation manager|remote',
    sources: [
      {
        source: 'linkedin',
        url: 'https://linkedin.com/jobs/view/99999999',
        discovered_date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        source: 'employer',
        url: 'https://growth.io/careers/demand-gen-manager',
        discovered_date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ],
    discovered_date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'high_priority',
    notes: 'Excellent fit - fresh posting',
  },

  {
    user_id: 'demo-user',
    title: 'Marketing Communications Manager',
    company: 'InfoTech Global',
    location: 'Remote',
    remote_policy: 'remote',
    posted_date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    job_description: `InfoTech Global seeks a MarCom Manager to lead internal and external marketing communications. You'll oversee messaging, content strategy, and brand voice.`,
    apply_url: 'https://infotech.example.com/jobs/marcom-manager',
    canonical_fingerprint: 'infotech global|marketing communications manager|remote',
    sources: [
      {
        source: 'email_alert',
        url: 'https://foundit.example.com/search?q=marcom',
        discovered_date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ],
    discovered_date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'qualifying',
    notes: undefined,
  },

  {
    user_id: 'demo-user',
    title: 'Integrated Campaign Manager',
    company: 'SaaS Innovators',
    location: 'Bengaluru',
    remote_policy: 'hybrid',
    posted_date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    job_description: `SaaS Innovators is hiring an Integrated Campaign Manager to run end-to-end B2B marketing campaigns. You'll coordinate across channels, manage budgets, and drive results.`,
    apply_url: 'https://saasinn.example.com/careers/campaign-manager',
    canonical_fingerprint: 'saas innovators|integrated campaign manager|bengaluru',
    sources: [
      {
        source: 'linkedin',
        url: 'https://linkedin.com/jobs/view/88888888',
        discovered_date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ],
    discovered_date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'review',
    notes: undefined,
  },

  {
    user_id: 'demo-user',
    title: 'ABM Marketing Manager',
    company: 'Enterprise Cloud',
    location: 'Remote',
    remote_policy: 'remote',
    posted_date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    job_description: `Enterprise Cloud seeks ABM Marketing Manager to scale account-based marketing programs and drive enterprise pipeline.`,
    apply_url: 'https://enterprisecloud.example.com/careers/abm-manager',
    canonical_fingerprint: 'enterprise cloud|abm marketing manager|remote',
    sources: [
      {
        source: 'indeed',
        url: 'https://indeed.com/viewjob?jk=xyz123',
        discovered_date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ],
    discovered_date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'review',
    notes: undefined,
  },

  {
    user_id: 'demo-user',
    title: 'Regional Marketing Manager - South Asia',
    company: 'Acme Global',
    location: 'Chennai',
    remote_policy: 'hybrid',
    posted_date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    job_description: `Acme Global is hiring a Regional Marketing Manager to oversee South Asia go-to-market strategy. Based in Chennai with some travel.`,
    apply_url: 'https://acme.example.com/jobs/regional-marketing',
    canonical_fingerprint: 'acme global|regional marketing manager - south asia|chennai',
    sources: [
      {
        source: 'naukri',
        url: 'https://naukri.example.com/job/pqrstu456',
        discovered_date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ],
    discovered_date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'qualifying',
    notes: undefined,
  },

  {
    user_id: 'demo-user',
    title: 'Events & Partnership Marketing Manager',
    company: 'TechPartners Inc',
    location: 'Remote',
    remote_policy: 'remote',
    posted_date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    job_description: `TechPartners is hiring for Events & Partnership Marketing. You'll manage conference programs, partner events, and co-marketing initiatives.`,
    apply_url: 'https://techpartners.example.com/apply?role=events-partnerships',
    canonical_fingerprint: 'techpartners inc|events & partnership marketing manager|remote',
    sources: [
      {
        source: 'wellfound',
        url: 'https://wellfound.example.com/jobs/12345',
        discovered_date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ],
    discovered_date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'review',
    notes: undefined,
  },

  {
    user_id: 'demo-user',
    title: 'Senior B2B Marketing Manager',
    company: 'Premium Software',
    location: 'Bengaluru',
    remote_policy: 'remote',
    posted_date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    job_description: `Premium Software seeks a Senior B2B Marketing Manager to lead our India expansion. You'll develop GTM strategy, manage campaigns, and build the India marketing function.`,
    apply_url: 'https://premiumsoftware.example.com/careers/senior-marketing',
    canonical_fingerprint: 'premium software|senior b2b marketing manager|bengaluru',
    sources: [
      {
        source: 'linkedin',
        url: 'https://linkedin.com/jobs/view/77777777',
        discovered_date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ],
    discovered_date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'high_priority',
    notes: 'Strong fit for full-stack role',
  },

  {
    user_id: 'demo-user',
    title: 'Content & Demand Gen Manager',
    company: 'Digital Leaders',
    location: 'Remote',
    remote_policy: 'remote',
    posted_date: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    job_description: `Digital Leaders is hiring a Content & Demand Gen Manager to create content assets and drive qualified pipeline through integrated campaigns.`,
    apply_url: 'https://digitalleaders.example.com/apply?job=content-demand-gen',
    canonical_fingerprint: 'digital leaders|content & demand gen manager|remote',
    sources: [
      {
        source: 'indeed',
        url: 'https://indeed.com/viewjob?jk=abc789',
        discovered_date: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ],
    discovered_date: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'qualifying',
    notes: undefined,
  },
];
