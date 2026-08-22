import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume Library - InterviewOS',
};

export default function ResumePage() {
  const resumes = [
    {
      id: '1',
      family: 'Partner/Channel Marketing',
      versions: 2,
      created_at: '2 weeks ago',
    },
    {
      id: '2',
      family: 'Demand Generation',
      versions: 1,
      created_at: '1 week ago',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Resume Library</h1>
            <p className="text-sm text-slate-600">Manage your base resumes and versions</p>
          </div>
          <Button>+ Upload Resume</Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Career Brain Section */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900">Career Brain</h2>
              <Link href="/career-brain">
                <Button variant="outline">Manage Facts</Button>
              </Link>
            </div>
            <p className="text-slate-600">
              Your career facts — the source of truth for truthful resume generation. Never fabricated.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
              <div>
                <div className="text-2xl font-bold text-slate-900">8</div>
                <div className="text-sm text-slate-600">Career Positions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">42</div>
                <div className="text-sm text-slate-600">Approved Facts</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">18</div>
                <div className="text-sm text-slate-600">Pending Review</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">0</div>
                <div className="text-sm text-slate-600">Flagged</div>
              </div>
            </div>
          </div>

          {/* Base Resumes */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Base Resumes</h2>
            {resumes.map((resume) => (
              <div key={resume.id} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{resume.family}</h3>
                    <p className="text-sm text-slate-600">
                      {resume.versions} version{resume.versions !== 1 ? 's' : ''} · Created {resume.created_at}
                    </p>
                  </div>
                  <Button variant="outline">View Versions</Button>
                </div>

                <div className="space-y-2 text-sm text-slate-600">
                  <div>✓ Original PDF preserved</div>
                  <div>✓ {resume.versions} tailored version(s) generated</div>
                  <div>✓ All claims validated against Career Brain</div>
                </div>
              </div>
            ))}
          </div>

          {/* Upload New */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Add New Resume</h2>
            <p className="text-slate-600">Upload a PDF, DOCX, or paste text. We'll extract and organize your career facts.</p>
            <div className="flex gap-3">
              <Button>Upload File</Button>
              <Button variant="outline">Paste Text</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
