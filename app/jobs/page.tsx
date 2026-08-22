import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jobs - InterviewOS',
};

const demoJobs = [
  {
    id: '1',
    title: 'Partner Marketing Manager',
    company: 'TechCorp India',
    location: 'Bengaluru',
    remote_policy: 'hybrid',
    age: 2,
    interview_potential: 91,
    culture_score: 87,
    timezone: 'GREEN',
    resume: 'Partner/Channel',
    referral_available: true,
    referral_count: 2,
    status: 'review',
  },
  {
    id: '2',
    title: 'Channel Marketing Manager',
    company: 'GlobalTech Solutions',
    location: 'Remote India',
    remote_policy: 'remote',
    age: 4,
    interview_potential: 88,
    culture_score: 85,
    timezone: 'GREEN',
    resume: 'Partner/Channel',
    referral_available: true,
    referral_count: 1,
    status: 'qualifying',
  },
  {
    id: '3',
    title: 'Brand Marketing Manager',
    company: 'ABC Corporation',
    location: 'San Francisco',
    remote_policy: 'onsite',
    age: 12,
    interview_potential: 45,
    culture_score: 60,
    timezone: 'RED',
    resume: 'Brand/Communications',
    referral_available: false,
    referral_count: 0,
    status: 'archived',
  },
  {
    id: '4',
    title: 'Field Marketing Manager',
    company: 'Hyderabad Solutions',
    location: 'Hyderabad',
    remote_policy: 'hybrid',
    age: 6,
    interview_potential: 78,
    culture_score: 82,
    timezone: 'GREEN',
    resume: 'Field/Events',
    referral_available: false,
    referral_count: 0,
    status: 'review',
  },
  {
    id: '5',
    title: 'Demand Generation Manager',
    company: 'Growth.io',
    location: 'Remote India',
    remote_policy: 'remote',
    age: 1,
    interview_potential: 95,
    culture_score: 91,
    timezone: 'GREEN',
    resume: 'Demand Gen',
    referral_available: true,
    referral_count: 3,
    status: 'high_priority',
  },
];

function getScoreColor(score: number): string {
  if (score >= 85) return 'text-red-600 bg-red-50';
  if (score >= 78) return 'text-blue-600 bg-blue-50';
  if (score >= 70) return 'text-amber-600 bg-amber-50';
  return 'text-slate-600 bg-slate-50';
}

function getStatusBadge(status: string): React.ReactNode {
  const badges: Record<string, { text: string; bg: string }> = {
    review: { text: '🟡 Review', bg: 'bg-amber-100' },
    high_priority: { text: '🔥 Attack', bg: 'bg-red-100' },
    qualifying: { text: '🟢 Apply', bg: 'bg-green-100' },
    archived: { text: '⚪ Archived', bg: 'bg-slate-100' },
  };
  const badge = badges[status] || badges.review;
  return <span className={`${badge.bg} text-xs font-medium px-2 py-1 rounded`}>{badge.text}</span>;
}

function getTimezoneIndicator(tz: string): string {
  if (tz === 'GREEN') return '🟢 IST Friendly';
  if (tz === 'AMBER') return '🟡 Some Overlap';
  return '🔴 Late Night Work';
}

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">InterviewOS</h1>
            <p className="text-sm text-slate-600">Jobs</p>
          </div>
          <div className="space-x-3">
            <Button variant="outline">Filter</Button>
            <Link href="/jobs/add">
              <Button>+ Add Job</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          {demoJobs.map((job) => (
            <Link key={job.id} href={`/jobs/${job.id}`}>
              <div className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-400 cursor-pointer transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                    <p className="text-slate-600">
                      {job.company} · {job.location} · {job.remote_policy}
                    </p>
                  </div>
                  <div className="text-right">{getStatusBadge(job.status)}</div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <div className="text-slate-600">Posted</div>
                    <div className="font-medium text-slate-900">{job.age}d ago</div>
                  </div>
                  <div>
                    <div className="text-slate-600">Potential</div>
                    <div className={`font-bold ${getScoreColor(job.interview_potential)}`}>
                      {job.interview_potential}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-600">Culture</div>
                    <div className={`font-bold ${getScoreColor(job.culture_score)}`}>
                      {job.culture_score}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-600">Hours</div>
                    <div className="font-medium text-slate-900">{getTimezoneIndicator(job.timezone)}</div>
                  </div>
                  <div>
                    <div className="text-slate-600">Referral</div>
                    <div className="font-medium text-slate-900">
                      {job.referral_available ? `${job.referral_count} contacts` : 'None'}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  {job.interview_potential >= 78 && (
                    <Button size="sm">Apply</Button>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
