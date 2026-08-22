import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">InterviewOS</h1>
          <p className="mt-2 text-slate-600">Sign in to your account</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          <Button className="w-full">Sign In</Button>
        </div>

        <p className="text-center text-sm text-slate-600">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="font-medium text-slate-900 hover:underline">
            Sign up
          </Link>
        </p>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-sm text-blue-900">
            <strong>Demo mode:</strong> Authentication is mocked in demo. Use any email/password.
          </p>
        </div>
      </div>
    </div>
  );
}
