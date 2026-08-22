import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateCanonicalFingerprint(
  company: string,
  title: string,
  location: string
): string {
  const normalized = [
    company.toLowerCase().trim(),
    title.toLowerCase().trim(),
    location.toLowerCase().trim(),
  ]
    .join('|')
    .replace(/[^\w|\s]/g, '')
    .replace(/\s+/g, ' ');
  return normalized;
}

export function calculateJobAge(postedDate: string): number {
  const posted = new Date(postedDate);
  const now = new Date();
  const diffMs = now.getTime() - posted.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

export function classifyJobPriority(age: number): 'P1' | 'P2' | 'P3' | 'ARCHIVED' {
  if (age <= 3) return 'P1';
  if (age <= 7) return 'P2';
  if (age <= 15) return 'P3';
  return 'ARCHIVED';
}

export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function timeAgo(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const seconds = Math.floor((now.getTime() - d.getTime()) / 1000);

  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  return formatDate(d);
}
