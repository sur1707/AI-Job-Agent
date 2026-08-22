import type { Job } from '@/types';

export interface ScoreBreakdown {
  role_function_match: number;
  jd_skill_match: number;
  b2b_experience: number;
  seniority_match: number;
  culture_quality: number;
  work_arrangement: number;
  timezone_compatibility: number;
  company_stability: number;
  freshness: number;
}

export interface InterviewPotentialScore {
  total: number;
  breakdown: ScoreBreakdown;
  recommendation: 'attack' | 'apply' | 'review' | 'skip';
  rationale: string[];
}

export function calculateInterviewPotential(
  job: Job,
  cultureScore: number = 75,
  fitScore: number = 75,
  freshness: number = 8
): InterviewPotentialScore {
  // Scoring: weights match specification in requirements
  const breakdown: ScoreBreakdown = {
    role_function_match: Math.min(100, fitScore + 5), // 20%
    jd_skill_match: Math.min(100, fitScore), // 20%
    b2b_experience: 85, // 15% - example value
    seniority_match: 80, // 10% - example value
    culture_quality: cultureScore, // 15%
    work_arrangement: inferWorkArrangementScore(job), // 7%
    timezone_compatibility: inferTimezoneScore(job), // 5%
    company_stability: cultureScore - 5, // 5% - derived from culture
    freshness: freshnessScore(freshness), // 3%
  };

  const total = Math.round(
    breakdown.role_function_match * 0.2 +
      breakdown.jd_skill_match * 0.2 +
      breakdown.b2b_experience * 0.15 +
      breakdown.seniority_match * 0.1 +
      breakdown.culture_quality * 0.15 +
      breakdown.work_arrangement * 0.07 +
      breakdown.timezone_compatibility * 0.05 +
      breakdown.company_stability * 0.05 +
      breakdown.freshness * 0.03
  );

  const recommendation = getRecommendation(total);
  const rationale = generateRationale(breakdown);

  return { total, breakdown, recommendation, rationale };
}

function inferWorkArrangementScore(job: Job): number {
  if (job.remote_policy === 'remote') return 100;
  if (job.remote_policy === 'hybrid') return 90;
  return 50;
}

function inferTimezoneScore(job: Job): number {
  const location = job.location?.toLowerCase() || '';
  if (location.includes('india') || location.includes('remote')) return 100;
  if (location.includes('europe') || location.includes('mea')) return 70;
  return 30;
}

function freshnessScore(ageDays: number): number {
  if (ageDays <= 3) return 100;
  if (ageDays <= 7) return 90;
  if (ageDays <= 15) return 75;
  return 50;
}

function getRecommendation(score: number): 'attack' | 'apply' | 'review' | 'skip' {
  if (score >= 85) return 'attack';
  if (score >= 78) return 'apply';
  if (score >= 70) return 'review';
  return 'skip';
}

function generateRationale(breakdown: ScoreBreakdown): string[] {
  const rationale: string[] = [];

  if (breakdown.role_function_match >= 85) {
    rationale.push('Strong role and function match');
  }
  if (breakdown.culture_quality >= 85) {
    rationale.push('Excellent company culture signals');
  }
  if (breakdown.work_arrangement >= 90) {
    rationale.push('Ideal work arrangement (remote/hybrid)');
  }
  if (breakdown.timezone_compatibility >= 80) {
    rationale.push('IST-friendly working hours');
  }
  if (breakdown.freshness >= 90) {
    rationale.push('Recently posted (high urgency)');
  }

  if (breakdown.role_function_match < 70) {
    rationale.push('Role fit has gaps — review carefully');
  }
  if (breakdown.culture_quality < 60) {
    rationale.push('Company culture concerns present');
  }
  if (breakdown.timezone_compatibility < 50) {
    rationale.push('Timezone may require late-night work');
  }

  return rationale;
}
