import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'InterviewOS — AI-Powered Interview Preparation',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-slate-900">InterviewOS</h1>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-slate-900">
              Find fewer jobs.<br />Find the right jobs.<br />Get more interviews.
            </h2>
            <p className="text-lg text-slate-600">
              AI-powered career agent for B2B marketing professionals
            </p>
          </div>

          <div className="space-y-3">
            <Link href="/auth/login" className="block">
              <Button className="w-full" size="lg">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup" className="block">
              <Button variant="outline" size="lg" className="w-full">
                Create Account
              </Button>
            </Link>
          </div>

          <p className="text-sm text-slate-500">
            Try with demo mode: <span className="font-mono text-xs">DEMO_MODE=true</span>
          </p>
        </div>
      </main>
    </div>
  );
}
