import { Metadata } from 'next';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Settings - InterviewOS',
};

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
          <p className="text-sm text-slate-600">Manage your preferences and integrations</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Target Roles */}
          <section className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900">Target Roles</h2>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <div>✓ Partner Marketing Manager</div>
              <div>✓ Channel Marketing Manager</div>
              <div>✓ Brand Marketing Manager</div>
              <div>✓ Demand Generation Manager</div>
              <div>✓ Field Marketing Manager</div>
            </div>
          </section>

          {/* Geography */}
          <section className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900">Geography & Work Preferences</h2>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
            <div className="space-y-3 text-sm text-slate-700">
              <div>
                <div className="font-medium text-slate-900">Preferred Locations</div>
                <div>India, Bengaluru, Hyderabad, Chennai, Remote India</div>
              </div>
              <div>
                <div className="font-medium text-slate-900">Work Arrangement</div>
                <div>Remote or Hybrid</div>
              </div>
              <div>
                <div className="font-medium text-slate-900">Normal Working Hours</div>
                <div>08:00–21:30 IST</div>
              </div>
              <div>
                <div className="font-medium text-slate-900">Timezone</div>
                <div>Asia/Kolkata (IST)</div>
              </div>
            </div>
          </section>

          {/* Job Freshness */}
          <section className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900">Job Freshness</h2>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <div>
                <div className="font-medium text-slate-900">Preferred Window</div>
                <div>1–15 days old</div>
              </div>
              <div className="pt-2 border-t">
                <div className="font-medium text-slate-900">Priority Classification</div>
                <div className="mt-1 space-y-1 text-xs">
                  <div>🔥 P1 (URGENT): 0–3 days</div>
                  <div>🟢 P2 (HIGH): 4–7 days</div>
                  <div>🟡 P3 (SELECTIVE): 8–15 days</div>
                  <div>⚪ ARCHIVED: 15+ days</div>
                </div>
              </div>
            </div>
          </section>

          {/* Integrations */}
          <section className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Integrations</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 border border-slate-200 rounded">
                <div>
                  <div className="font-medium text-slate-900">Gmail</div>
                  <div className="text-sm text-slate-600">Import job alerts automatically</div>
                </div>
                <Button variant="outline" size="sm">
                  Connect
                </Button>
              </div>
              <div className="flex justify-between items-center p-3 border border-slate-200 rounded">
                <div>
                  <div className="font-medium text-slate-900">LinkedIn</div>
                  <div className="text-sm text-slate-600">Export your connections (CSV upload)</div>
                </div>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>
            </div>
          </section>

          {/* Scoring */}
          <section className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900">Scoring Preferences</h2>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <div>
                <div className="font-medium text-slate-900">Resume Tailor Threshold</div>
                <div>78 (only tailor resumes for jobs scoring 78+)</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
