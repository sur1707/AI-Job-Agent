'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('sur17jul@gmail.com');
  const [password, setPassword] = useState('demo');
  const [error, setError] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    // Mock authentication - in demo mode, accept any email/password
    try {
      // Store in localStorage for demo
      localStorage.setItem('demo-user', JSON.stringify({ email, authenticated: true }));
      
      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err) {
      setError('Sign in failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">InterviewOS</h1>
          <p className="mt-2 text-slate-600">Sign in to your account</p>
        </div>

        <form onSubmit={handleSignIn} className="bg-white border border-slate-200 rounded-lg p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          {error && <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-sm rounded">{error}</div>}

          <Button type="submit" className="w-full">Sign In</Button>
        </form>

        <p className="text-center text-sm text-slate-600">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="font-medium text-slate-900 hover:underline">
            Sign up
          </Link>
        </p>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-sm text-blue-900">
            <strong>Demo mode:</strong> Authentication is mocked. Use any email/password.
          </p>
        </div>
      </div>
    </div>
  );
}
