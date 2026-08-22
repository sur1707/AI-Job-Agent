import type { Job, UserPreferences } from '@/types';

export interface EligibilityCheckResult {
  status: 'pass' | 'review' | 'fail';
  reasons: string[];
}

export function checkEligibility(
  job: Job,
  preferences: UserPreferences
): EligibilityCheckResult {
  const reasons: string[] = [];
  let status: 'pass' | 'review' | 'fail' = 'pass';

  // Check location/work arrangement
  if (job.remote_policy === 'onsite' && !preferences.target_locations.includes(job.location || '')) {
    if (!preferences.target_locations.some((loc) => loc.toLowerCase().includes('remote'))) {
      reasons.push(`Role is onsite in ${job.location}, which is not in your preferred locations`);
      status = 'fail';
    }
  }

  // Check job freshness (soft gate)
  const age = calculateJobAge(job.posted_date || new Date().toISOString());
  if (age > preferences.job_freshness_days_max) {
    reasons.push(`Job is ${age} days old (exceeds max of ${preferences.job_freshness_days_max})`);
    status = 'review';
  }

  // Check timezone compatibility (if relevant)
  const timezone = inferTimezoneFromLocation(job.location || '');
  if (timezone === 'RED') {
    reasons.push('Role likely requires working outside IST-friendly hours');
    status = 'review';
  }

  if (reasons.length === 0) {
    reasons.push('Job meets all hard eligibility gates');
  }

  return { status, reasons };
}

function calculateJobAge(postedDate: string): number {
  const posted = new Date(postedDate);
  const now = new Date();
  const diffMs = now.getTime() - posted.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

function inferTimezoneFromLocation(location: string): 'GREEN' | 'AMBER' | 'RED' {
  const lower = location.toLowerCase();
  if (lower.includes('india') || lower.includes('bengaluru') || lower.includes('hyderabad') || lower.includes('remote')) {
    return 'GREEN';
  }
  if (lower.includes('europe') || lower.includes('mea')) {
    return 'AMBER';
  }
  return 'RED';
}
