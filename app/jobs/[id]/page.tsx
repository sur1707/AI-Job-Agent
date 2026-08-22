import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Job Detail - InterviewOS',
};

export default function JobDetailPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <Link href="/jobs" className="text-sm text-slate-600 hover:text-slate-900">
              ← Back to Jobs
            </Link>
          </div>
          <div className="space-x-3">
            <Button variant="outline">Skip</Button>
            <Button>Ready to Apply</Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Overview */}
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Demand Generation Manager</h1>
                <p className="text-xl text-slate-600 mt-2">Growth.io · Remote India</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                <div>
                  <div className="text-sm text-slate-600">Posted</div>
                  <div className="font-bold text-lg text-slate-900">1 day ago</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600">Interview Potential</div>
                  <div className="font-bold text-lg text-red-600">95 🔥</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600">Culture Score</div>
                  <div className="font-bold text-lg text-slate-900">91</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600">Work Hours</div>
                  <div className="font-bold text-lg text-green-600">🟢 IST-Friendly</div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-slate-700 leading-relaxed">
                  We're looking for a Demand Generation Manager to lead ABM and integrated campaign strategy. You'll
                  work with marketing and sales to build a world-class demand gen function for enterprise B2B SaaS.
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-slate-200">
            <div className="flex space-x-8">
              <button className="py-3 px-1 border-b-2 border-slate-900 text-slate-900 font-medium">
                Overview
              </button>
              <button className="py-3 px-1 border-b-2 border-transparent text-slate-600 font-medium hover:text-slate-900">
                Match Analysis
              </button>
              <button className="py-3 px-1 border-b-2 border-transparent text-slate-600 font-medium hover:text-slate-900">
                Culture
              </button>
              <button className="py-3 px-1 border-b-2 border-transparent text-slate-600 font-medium hover:text-slate-900">
                Resume
              </button>
              <button className="py-3 px-1 border-b-2 border-transparent text-slate-600 font-medium hover:text-slate-900">
                Referrals
              </button>
            </div>
          </div>

          {/* Match Analysis */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6">
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-4">Why This Job</h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Strong demand gen experience match (8+ years)</li>
                <li>✓ APAC / India market exposure (Chennai, Bengaluru)</li>
                <li>✓ ABM and integrated campaigns core responsibility</li>
                <li>✓ Remote India with IST-friendly hours</li>
                <li>✓ Company: strong growth trajectory, stable funding</li>
              </ul>
            </div>

            <div className="pt-4 border-t">
              <h3 className="font-bold text-lg text-slate-900 mb-4">What We Can't Confirm</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Explicit portfolio management responsibility (MDF tracking)</li>
                <li>• How much channel co-marketing vs. direct demand gen</li>
              </ul>
            </div>
          </div>

          {/* Culture Insights */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
            <h3 className="font-bold text-lg text-slate-900">Company Culture & Intelligence</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded">
                <div className="font-medium text-green-900">✓ Positive Signal</div>
                <div className="text-sm text-green-800 mt-1">
                  Recent hiring spree in India + expansion of marketing team (last 6 months)
                </div>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded">
                <div className="font-medium text-green-900">✓ Positive Signal</div>
                <div className="text-sm text-green-800 mt-1">
                  Work-life balance mentioned positively across 15+ recent reviews
                </div>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                <div className="font-medium text-yellow-900">⚠ Watch</div>
                <div className="text-sm text-yellow-800 mt-1">
                  One restructure in 2022 (marketing team reorganized). Resolved — team stable since.
                </div>
              </div>
            </div>
          </div>

          {/* Referral Opportunities */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
            <h3 className="font-bold text-lg text-slate-900">Referral Opportunities</h3>
            <p className="text-slate-600">You have 3 possible connections at Growth.io</p>

            <div className="space-y-3">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded space-y-2">
                <div className="font-medium text-slate-900">Priya Sharma</div>
                <div className="text-sm text-slate-600">Director of Marketing · Growth.io</div>
                <div className="text-xs text-slate-500">Direct connection · Worked together at TechCorp 2019-2021</div>
                <Button size="sm" className="mt-2">
                  Draft Referral Message
                </Button>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded space-y-2">
                <div className="font-medium text-slate-900">Rajesh Kumar</div>
                <div className="text-sm text-slate-600">VP Sales · Growth.io</div>
                <div className="text-xs text-slate-500">Alumni connection · IIT Delhi network</div>
                <Button size="sm" className="mt-2">
                  Draft Message
                </Button>
              </div>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
            <h3 className="font-bold text-lg text-slate-900">Resume Match</h3>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded space-y-2">
              <div className="font-medium text-blue-900">Demand Generation Resume (Recommended)</div>
              <div className="text-sm text-blue-800 mt-1">
                Tailored for this role. Will emphasize: ABM, integrated campaigns, pipeline metrics, APAC markets.
              </div>
              <div className="mt-3 flex gap-2">
                <Button size="sm" variant="outline">
                  Preview
                </Button>
                <Button size="sm">Generate Tailored Resume</Button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-slate-900">Ready to Apply?</h3>
              <p className="text-slate-600">
                You have a strong background for this role. We recommend applying with a referral.
              </p>
              <div className="flex gap-3">
                <Button>Generate Application Package</Button>
                <Button variant="outline">Mark as Applied</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
