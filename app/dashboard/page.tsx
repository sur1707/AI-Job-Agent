'use client';

import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated (mock auth)
    const user = localStorage.getItem('demo-user');
    if (!user) {
      router.push('/auth/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading...</div>;
  }

  const stats = [
    { label: 'Jobs Discovered', value: '12', color: 'bg-slate-100' },
    { label: 'High Priority', value: '3', color: 'bg-red-100' },
    { label: 'Worth Applying', value: '2', color: 'bg-blue-100' },
    { label: 'Referral Opps', value: '1', color: 'bg-green-100' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">InterviewOS</h1>
          <div className="space-x-3">
            <Link href="/jobs">
              <Button variant="outline">Jobs</Button>
            </Link>
            <Link href="/resume">
              <Button variant="outline">Resume</Button>
            </Link>
            <Link href="/settings">
              <Button variant="outline">Settings</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-slate-900">Good morning.</h2>
            <p className="text-xl text-slate-600">Here are the opportunities worth your time today.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className={`${stat.color} rounded-lg p-6`}>
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-red-200 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🔥</span>
                <h3 className="font-bold text-slate-900">Attack Now</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">High-potential matches posted in last 3 days</p>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-medium text-slate-900">Senior Partner Marketing Manager</div>
                  <div className="text-sm text-slate-600">TechCorp · Bangalore</div>
                </div>
              </div>
              <Link href="/jobs">
                <Button className="w-full mt-4">View Opportunities</Button>
              </Link>
            </div>

            <div className="bg-white border border-blue-200 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🟢</span>
                <h3 className="font-bold text-slate-900">Apply Today</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">Ready-to-apply qualified roles</p>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-medium text-slate-900">Channel Marketing Manager</div>
                  <div className="text-sm text-slate-600">GlobalTech · Remote India</div>
                </div>
              </div>
              <Link href="/jobs">
                <Button className="w-full mt-4">Review Applications</Button>
              </Link>
            </div>

            <div className="bg-white border border-green-200 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">👥</span>
                <h3 className="font-bold text-slate-900">Referral Opportunities</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">You have warm connections for these roles</p>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-medium text-slate-900">Demand Generation Manager</div>
                  <div className="text-sm text-slate-600">2 possible connections</div>
                </div>
              </div>
              <Link href="/jobs">
                <Button className="w-full mt-4">Review Referrals</Button>
              </Link>
            </div>

            <div className="bg-white border border-amber-200 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">📨</span>
                <h3 className="font-bold text-slate-900">Follow-ups Due</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">Keep the conversation going</p>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-medium text-slate-900">Branded Marketing Manager</div>
                  <div className="text-sm text-slate-600">Sent referral request 3 days ago</div>
                </div>
              </div>
              <Button className="w-full mt-4" variant="outline">See Follow-ups</Button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🚫</span>
              <h3 className="font-bold text-slate-900">Jobs Avoided</h3>
            </div>
            <p className="text-slate-600 text-sm mb-4">You didn't apply to these for good reasons</p>
            <div className="space-y-2 text-sm">
              <div className="text-slate-700">
                <strong>Brand Marketing Manager — ABC Corp</strong>
                <p className="text-slate-600 mt-1">Recurring PST hours conflict with your work-time preference (08:00–21:30 IST)</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
