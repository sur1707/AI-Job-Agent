# InterviewOS

**Find fewer jobs. Find the right jobs. Get more interviews.**

An AI-powered career agent for mid-career B2B marketing professionals seeking manager-level opportunities.

---

## What is InterviewOS?

InterviewOS is a job search intelligence system designed specifically for marketing professionals. Unlike traditional job boards, InterviewOS:

✅ **Optimizes for interviews, not applications** — fewer, higher-quality opportunities  
✅ **Analyzes role fit deeply** — JD matching, culture signals, timezone compatibility  
✅ **Leverages your network** — referral ranking with drafting  
✅ **Tailors truthfully** — ATS-optimized resumes based on your verified career facts  
✅ **Tracks progress intelligently** — from discovery to offer  

### Core Features

- **Career Brain**: Your factual career history (positions, achievements, quantified results)
- **Multi-source job ingestion**: Gmail alerts, direct URLs, ATS feeds (Greenhouse, Lever)
- **Interview Potential Scoring**: 0–100 score accounting for fit, culture, work arrangement, timezone, freshness
- **Resume Router**: Automatically recommends the best base resume for each role
- **ATS-Safe Resume Tailoring**: Rewrites your resume truthfully for each job without inventing claims
- **Referral Engine**: Ranks your contacts by relevance, drafts personalized outreach
- **Culture Intelligence**: Gathers public evidence on company stability, work-life balance, leadership
- **Application Workflow**: Ready-to-apply screens, tracking, follow-up reminders
- **Analytics**: Understand which roles, sources, and strategies convert to interviews

---

## Getting Started — 10 Steps

### Step 1: Install Node.js

If you don't have Node.js, download it from [nodejs.org](https://nodejs.org). Choose the LTS version.

Verify:
```bash
node --version
npm --version
```

### Step 2: Clone the Repository

```bash
git clone https://github.com/sur1707/AI-Job-Agent.git
cd AI-Job-Agent
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Copy Environment Variables

```bash
cp .env.example .env.local
```

### Step 5: Add Supabase Credentials

Create a free Supabase account at [supabase.com](https://supabase.com).

1. Create a new project
2. Go to Settings → API
3. Copy the **Project URL** and **Anon Key** into your `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

(Find service role key in the same Settings → API section)

### Step 6: Add OpenAI API Key

1. Get an API key from [platform.openai.com](https://platform.openai.com/account/api-keys)
2. Add to `.env.local`:

```
OPENAI_API_KEY=sk-...
OPENAI_AGENT_MODEL=gpt-4o
```

### Step 7: Run Database Migrations

```bash
npm run seed-db
```

This creates the database schema in your Supabase project.

### Step 8: Load Demo Data (Optional but Recommended)

To see the app in action immediately with 12 realistic demo jobs:

```bash
npm run seed-demo
```

### Step 9: Run Locally

```bash
npm run dev
```

Visit http://localhost:3000 in your browser.

### Step 10: Create Your Account & Explore

1. Sign up with any email (authentication is mocked in demo mode)
2. Complete the onboarding wizard
3. Upload a resume or add career facts manually
4. Explore demo jobs, see scoring, try referral ranking

---

## Demo Mode

To run **without** external integrations:

```bash
DEMO_MODE=true npm run dev
```

Demo mode includes:
- 12 seeded B2B marketing jobs (realistic scenarios)
- Mocked authentication
- In-memory database
- All scoring and analysis fully functional
- Referral engine and message drafting
- Resume routing and tailoring

Perfect for exploring the product without setup.

---

## Optional: Gmail Integration

To connect Gmail for automatic job alert ingestion:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable the Gmail API
4. Create OAuth 2.0 credentials (Desktop application)
5. Copy Client ID and Secret to `.env.local`:

```
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
```

6. In the app Settings, click "Connect Gmail"

(Without Gmail, you can still add jobs manually or paste URLs)

---

## Project Structure

```
app/                      # Next.js pages & routes
  /auth                   # Login/signup
  /dashboard              # Main "Today" view
  /jobs                   # Job listing & detail
  /resume                 # Resume management
  /settings               # Preferences

components/               # React components
  /ui                     # Reusable UI library

lib/                      # Business logic
  /agents                 # AI agents
  /scoring                # Interview Potential, culture scoring
  /jobs                   # Job normalization, deduplication
  /integrations           # Gmail, ATS adapters
  /resumes                # Resume generation, routing
  /referrals              # Contact ranking, outreach

types/                    # TypeScript type definitions

supabase/                 # Database migrations & seed scripts

scripts/                  # Utilities
  /seed-demo.ts           # Demo data generator
```

---

## How Interview Potential Scoring Works

InterviewOS scores each job 0–100 across nine dimensions:

| Factor | Weight | Example |
|--------|--------|---------|
| Role/function match | 20% | Partner campaigns experience |
| JD skill match | 20% | Your skills vs. job requirements |
| B2B/global experience | 15% | APAC market exposure |
| Seniority match | 10% | Manager-level fit |
| Culture quality | 15% | Company stability, WLB signals |
| Work arrangement | 7% | Remote/hybrid vs. your preference |
| Timezone | 5% | IST-friendly working hours |
| Company stability | 5% | Funding, growth trajectory |
| Freshness | 3% | Posted within last 15 days |

**Score Thresholds:**
- **85–100**: 🔥 ATTACK ROLE (apply immediately with referral)
- **78–84**: 🟢 APPLY (strong match, worth pursuing)
- **70–77**: 🟡 REVIEW (selective; review carefully)
- **<70**: ⚪ SKIP (low priority)

---

## Resume Management

InterviewOS stores 5 base resume types:

1. **Partner & Channel Marketing** — Co-marketing, partner campaigns, MDF
2. **Brand & Marketing Communications** — Branding, corporate messaging, communications
3. **Field, Regional & Events Marketing** — Regional programs, events, field campaigns
4. **Demand Generation & ABM** — Pipeline, ABM, integrated campaigns, marketing automation
5. **Full-stack / Integrated B2B Marketing** — GTM, multi-channel, leadership

For each job, the Resume Router recommends the best fit. You can then:
- Generate a tailored, ATS-safe resume for that specific job
- Review claimed achievements (all verified against Career Brain)
- Download as PDF or DOCX
- Track which resume/job combination got you interviews

**Critical**: All resume claims are validated against your Career Brain facts. Unsupported claims are flagged, never published.

---

## Referral Engine

When you find a high-potential role, InterviewOS:

1. **Identifies relevant contacts** in your network (LinkedIn CSV import, manual contacts, Google Contacts)
2. **Ranks by relevance**:
   - Former colleagues at target company
   - Direct personal connections
   - People in target marketing function
   - Recruiters/hiring managers
3. **Drafts personalized outreach**:
   - Context (how you know them)
   - Role details
   - Relevant experience points
4. **Creates Gmail draft** (optional) for your review before sending

No automated messages; you always approve before sending.

---

## Analytics & Learning

InterviewOS tracks outcomes:

- Which resume families convert best
- Which job sources yield interviews
- Optimal score bands for your situation
- Impact of referrals vs. cold applications
- Which culture signals predict good fits

Example insight:  
*"Channel Marketing roles with Interview Potential >85 and a warm referral resulted in 3 interviews from 4 applications."*

---

## FAQ

**Q: Can InterviewOS submit applications automatically?**  
A: No. The app prepares everything (resume, answers, referral draft), but you approve each application before submission. We believe human judgment matters.

**Q: Does InterviewOS scrape LinkedIn?**  
A: No. We only use LinkedIn job alert emails and user-provided URLs. No unauthorized scraping or automation.

**Q: What if I don't have an OpenAI API key?**  
A: The app can still function for basic job tracking, but AI-powered analysis (fit, culture, resume tailoring) will be unavailable. Set `DEMO_MODE=true` to explore without it.

**Q: Can I import my existing resume?**  
A: Yes. Upload a PDF, DOCX, or paste text. We extract career facts and let you review/edit them.

**Q: Is my data private?**  
A: Yes. All data is stored in your Supabase project (which you control). Row-level security ensures only you can access your jobs, resumes, and contacts.

**Q: Can my team use this?**  
A: The MVP is single-user. Multi-user/team features are out of scope for now.

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push your changes to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables (Settings → Environment Variables)
5. Deploy

### Set Up Cron Job for Daily Discovery

InterviewOS can run a daily job to ingest Gmail alerts and identify high-priority opportunities.

1. In your Vercel project, go to Cron Jobs
2. Create a new cron job:
   - **Path**: `/api/cron/daily-digest`
   - **Schedule**: `0 8 * * *` (8 AM UTC; adjust for IST: use 2:30 AM UTC for 8 AM IST)
   - **Secret**: Use the `CRON_SECRET` from your env vars

---

## Testing

```bash
npm run type-check    # TypeScript check
npm run lint          # Linting
npm run build         # Production build
npm run dev           # Local development
```

---

## Architecture Decisions

### Why Next.js?

- Full-stack TypeScript
- Server-side rendering (faster, more secure)
- Built-in API routes for cron jobs
- Excellent for SaaS applications

### Why Supabase?

- Open-source PostgreSQL backend
- Built-in row-level security
- Free tier sufficient for MVP
- No vendor lock-in

### Why OpenAI?

- State-of-the-art reasoning for JD analysis and culture synthesis
- Structured outputs via function calling
- Stable API

### Why no LinkedIn integration?

Automated LinkedIn interaction violates their Terms of Service. We support:
- User-exported LinkedIn connections (CSV upload)
- Job alert emails from LinkedIn
- Pasting job URLs

This respects the platform while preserving utility.

---

## Important Limitations

### What InterviewOS Does NOT Do

❌ Submit applications automatically  
❌ Scrape LinkedIn profiles  
❌ Send automatic LinkedIn messages  
❌ Make guarantees about interview conversion  
❌ Invent resume achievements  
❌ Support team collaboration (MVP is single-user)  

### What InterviewOS DOES

✅ Intelligently filter and score jobs  
✅ Analyze role fit and company culture  
✅ Tailor resumes truthfully  
✅ Rank referral contacts  
✅ Draft personalized outreach  
✅ Track outcomes and learn patterns  
✅ Reduce noise, surface signal  

---

## Future Roadmap

Out of scope for MVP but planned:
- Team/family collaboration modes
- LinkedIn integration (via official API if available)
- Interview coaching and prep
- Salary negotiation guidance
- Multi-language resume generation
- Mobile-native app
- Integration with other ATS platforms

---

## Support & Feedback

- **Questions?** Check the [AGENTS.md](./AGENTS.md) for technical architecture
- **Bugs?** Open an issue on GitHub
- **Feature requests?** Create a discussion

---

## License

ISC

---

**Built with ❤️ for career professionals who value quality over noise.**
