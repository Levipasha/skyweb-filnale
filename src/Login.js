import React from 'react';

function Login() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-50 via-white to-sky-100 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <svg 
            className="w-32 h-32 mx-auto text-slate-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-2">
          This feature will be available soon
        </p>
        <p className="text-slate-500">
          We're building a secure authentication system for you. Stay tuned!
        </p>
      </div>
    </div>
  );
}

export default Login;

