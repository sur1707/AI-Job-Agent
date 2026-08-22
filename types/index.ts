// Career Brain Types
export interface CandidateProfile {
  id: string;
  user_id: string;
  full_name: string;
  professional_headline: string;
  total_experience_years: number;
  current_location: string;
  preferred_locations: string[];
  work_authorization: string;
  notice_period_days: number;
  preferred_work_arrangement: 'remote' | 'hybrid' | 'onsite';
  timezone: string;
  portfolio_url?: string;
  linkedin_url?: string;
  created_at: string;
  updated_at: string;
}

export interface CareerPosition {
  id: string;
  user_id: string;
  company: string;
  title: string;
  start_date: string;
  end_date?: string;
  location: string;
  description: string;
  current: boolean;
  created_at: string;
  updated_at: string;
}

export interface CareerFact {
  id: string;
  user_id: string;
  employer: string;
  related_role?: string;
  factual_statement: string;
  marketing_function?: string;
  market?: string;
  metric?: string;
  metric_value?: number;
  metric_unit?: string;
  tags: string[];
  approved_for_resume: boolean;
  verified: boolean;
  created_at: string;
  updated_at: string;
}

// Resume Types
export type ResumeFamilyType = 'partner-channel' | 'brand-comms' | 'field-events' | 'demand-gen' | 'full-stack';

export interface ResumeBase {
  id: string;
  user_id: string;
  family: ResumeFamilyType;
  original_file_path?: string;
  original_file_type?: string;
  created_at: string;
  updated_at: string;
}

export interface ResumeVersion {
  id: string;
  user_id: string;
  resume_base_id: string;
  target_job_id?: string;
  generated_timestamp: string;
  jd_match_score?: number;
  keywords_inserted: string[];
  career_facts_used: string[];
  factual_validation_status: 'passed' | 'failed' | 'pending' | 'skipped';
  status: 'draft' | 'ready' | 'applied';
  pdf_path?: string;
  docx_path?: string;
  created_at: string;
  updated_at: string;
}

// Job Types
export interface Job {
  id: string;
  user_id: string;
  title: string;
  company: string;
  location: string;
  remote_policy: 'remote' | 'hybrid' | 'onsite';
  posted_date: string;
  job_description: string;
  apply_url: string;
  canonical_fingerprint: string;
  sources: JobSource[];
  discovered_date: string;
  status: 'discovered' | 'qualifying' | 'review' | 'high_priority' | 'resume_ready' | 'referral_search' | 'ready_to_apply' | 'applied' | 'recruiter_contact' | 'screening' | 'interview' | 'offer' | 'rejected' | 'withdrawn' | 'archived';
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface JobSource {
  source: 'linkedin' | 'naukri' | 'indeed' | 'foundit' | 'instahyre' | 'wellfound' | 'employer' | 'manual' | 'email_alert';
  url: string;
  ats_job_id?: string;
  discovered_date: string;
}

export interface JobRequirement {
  id: string;
  job_id: string;
  requirement: string;
  category: 'must_have' | 'preferred';
  match_status: 'matched' | 'partially_matched' | 'not_found' | 'unknown';
  created_at: string;
}

export interface JobAnalysis {
  id: string;
  job_id: string;
  user_id: string;
  eligibility_result: EligibilityResult;
  fit_analysis: FitAnalysis;
  culture_analysis: CultureAnalysis;
  resume_routing: ResumeRoutingResult;
  interview_potential_score: number;
  score_breakdown: {
    role_function_match: number;
    jd_skill_match: number;
    b2b_experience: number;
    seniority_match: number;
    culture_quality: number;
    work_arrangement: number;
    timezone_compatibility: number;
    company_stability: number;
    freshness: number;
  };
  recommendation: 'attack' | 'apply' | 'review' | 'skip';
  created_at: string;
  updated_at: string;
}

export interface EligibilityResult {
  status: 'pass' | 'review' | 'fail';
  reasons: string[];
}

export interface FitAnalysis {
  jd_match_score: number;
  matched_requirements: string[];
  partially_matched: string[];
  missing_requirements: string[];
  unknown_requirements: string[];
  strengths: string[];
  gaps: string[];
}

export interface CultureAnalysis {
  culture_score: number;
  confidence: 'high' | 'medium' | 'low';
  evidence: CultureEvidence[];
  red_flags: string[];
  positive_signals: string[];
  concerns: string[];
}

export interface CultureEvidence {
  category: string;
  signal: string;
  source: string;
  url?: string;
  date: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  confidence: number;
}

export interface ResumeRoutingResult {
  recommended_family: ResumeFamilyType;
  confidence: number;
  reason: string;
}

// Contact Types
export interface Contact {
  id: string;
  user_id: string;
  name: string;
  company: string;
  title: string;
  email?: string;
  profile_url?: string;
  relationship: 'direct' | 'colleague' | 'weak' | 'unknown';
  relationship_strength: number;
  tags: string[];
  notes?: string;
  last_contacted?: string;
  created_at: string;
  updated_at: string;
}

export interface ReferralCandidate {
  id: string;
  job_id: string;
  contact_id: string;
  confidence: 'high' | 'medium' | 'low';
  rank: number;
  reason: string;
  priority_level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  message_draft?: string;
  status: 'identified' | 'drafted' | 'approved' | 'sent';
  created_at: string;
  updated_at: string;
}

// Application Types
export interface Application {
  id: string;
  user_id: string;
  job_id: string;
  resume_version_id: string;
  status: 'draft' | 'ready' | 'submitted' | 'in_progress' | 'rejected' | 'offer';
  applied_date?: string;
  screening_answers: Record<string, string>;
  created_at: string;
  updated_at: string;
}

export interface TargetRole {
  id: string;
  user_id: string;
  title: string;
  family: string;
  priority: number;
  enabled: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserPreferences {
  id: string;
  user_id: string;
  target_locations: string[];
  remote_policy: 'remote' | 'hybrid' | 'onsite' | 'flexible';
  work_hours_start: string;
  work_hours_end: string;
  timezone: string;
  job_freshness_days_min: number;
  job_freshness_days_max: number;
  resume_tailor_threshold: number;
  created_at: string;
  updated_at: string;
}
