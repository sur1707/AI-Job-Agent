import type { Job, JobSource } from '@/types';
import { generateCanonicalFingerprint } from '@/lib/utils';

export interface RawJobInput {
  title: string;
  company: string;
  location: string;
  remote_policy?: string;
  posted_date?: string;
  job_description: string;
  apply_url: string;
  source: JobSource;
}

export function normalizeJob(raw: RawJobInput, userId: string): Omit<Job, 'id' | 'created_at' | 'updated_at'> {
  return {
    user_id: userId,
    title: normalizeTitle(raw.title),
    company: normalizeCompany(raw.company),
    location: normalizeLocation(raw.location),
    remote_policy: normalizeRemotePolicy(raw.remote_policy) as 'remote' | 'hybrid' | 'onsite',
    posted_date: raw.posted_date || new Date().toISOString().split('T')[0],
    job_description: raw.job_description,
    apply_url: raw.apply_url,
    canonical_fingerprint: generateCanonicalFingerprint(
      normalizeCompany(raw.company),
      normalizeTitle(raw.title),
      normalizeLocation(raw.location)
    ),
    sources: [raw.source],
    discovered_date: new Date().toISOString(),
    status: 'discovered',
    notes: undefined,
  };
}

export function normalizeTitle(title: string): string {
  return title
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[Mm]anager/, 'Manager')
    .replace(/[Ss]enior/g, 'Senior')
    .replace(/[Jj]unior/g, 'Junior');
}

export function normalizeCompany(company: string): string {
  return company
    .trim()
    .replace(/,? (Inc|Ltd|LLC|Corp|PLC|GmbH|AG)\.?$/i, '')
    .replace(/\s+/g, ' ');
}

export function normalizeLocation(location: string): string {
  const lower = location.toLowerCase().trim();

  // India cities
  if (lower.includes('bangalore') || lower.includes('bengaluru')) return 'Bengaluru';
  if (lower.includes('hyderabad')) return 'Hyderabad';
  if (lower.includes('chennai')) return 'Chennai';
  if (lower.includes('delhi') || lower.includes('gurgaon') || lower.includes('gurugram')) return 'Delhi/NCR';
  if (lower.includes('mumbai')) return 'Mumbai';
  if (lower.includes('pune')) return 'Pune';

  // Remote/Hybrid
  if (lower.includes('remote')) return 'Remote';
  if (lower.includes('hybrid')) return 'Hybrid';

  // Default
  return location.trim();
}

export function normalizeRemotePolicy(policy?: string): 'remote' | 'hybrid' | 'onsite' {
  if (!policy) return 'onsite';
  const lower = policy.toLowerCase();
  if (lower.includes('remote')) return 'remote';
  if (lower.includes('hybrid')) return 'hybrid';
  return 'onsite';
}

export interface DeduplicationResult {
  isDuplicate: boolean;
  matchingJobId?: string;
  similarityScore?: number;
  reason?: string;
}

export function checkForDuplicate(
  newJob: Omit<Job, 'id' | 'created_at' | 'updated_at'>,
  existingJobs: Job[]
): DeduplicationResult {
  // Primary: canonical fingerprint
  for (const existing of existingJobs) {
    if (existing.canonical_fingerprint === newJob.canonical_fingerprint) {
      return {
        isDuplicate: true,
        matchingJobId: existing.id,
        similarityScore: 100,
        reason: 'Exact match: company + role + location',
      };
    }
  }

  // Secondary: similar URL or ATS ID
  for (const existing of existingJobs) {
    if (
      existing.apply_url &&
      newJob.apply_url &&
      (existing.apply_url === newJob.apply_url ||
        extractAtsId(existing.apply_url) === extractAtsId(newJob.apply_url))
    ) {
      return {
        isDuplicate: true,
        matchingJobId: existing.id,
        similarityScore: 95,
        reason: 'Same application URL or ATS ID',
      };
    }
  }

  // No duplicate found
  return { isDuplicate: false };
}

function extractAtsId(url: string): string | null {
  const match = url.match(/[?&](?:id|job_id|vacancy_id)=([^&]+)/i);
  return match ? match[1] : null;
}
