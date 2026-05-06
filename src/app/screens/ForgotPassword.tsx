import { ArrowLeft, Mail } from 'lucide-react';

export function ForgotPassword() {
  return (
    <div className="w-full h-full flex flex-col px-6 py-8" style={{ background: 'white' }}>
      <button className="self-start mb-8 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: '#F7F5FC' }}>
        <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
      </button>

      {/* Illustration */}
      <div className="flex justify-center mb-8">
        <div className="w-28 h-28 rounded-3xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #EDE7FF 0%, #F3EEFF 100%)' }}>
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect x="8" y="18" width="40" height="28" rx="5" fill="#6C3FE8" opacity="0.15"/>
            <rect x="8" y="18" width="40" height="28" rx="5" stroke="#6C3FE8" strokeWidth="2"/>
            <path d="M8 22 L28 34 L48 22" stroke="#6C3FE8" strokeWidth="2" fill="none"/>
            <circle cx="42" cy="16" r="9" fill="#F97566"/>
            <path d="M42 12v5M42 19v1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      <h1 className="text-center mb-3"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '26px', color: '#16143A' }}>
        Forgot Password?
      </h1>
      <p className="text-center mb-8 max-w-xs mx-auto"
        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '15px', color: '#8B86A8', lineHeight: 1.7 }}>
        No worries! Enter your email and we'll send you a reset link.
      </p>

      {/* Email input */}
      <div className="mb-6">
        <label className="block mb-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#574E7E' }}>
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#8B86A8', width: '17px', height: '17px' }} />
          <input type="email" placeholder="you@example.com"
            className="w-full py-3.5 pr-4"
            style={{ paddingLeft: '44px', borderRadius: '12px', fontFamily: 'Inter, sans-serif', fontSize: '14px', background: '#F7F5FC', border: '1.5px solid rgba(108,63,232,0.12)', outline: 'none', color: '#16143A' }} />
        </div>
      </div>

      <div className="flex-1" />

      <button className="w-full text-white py-4 mb-4"
        style={{ borderRadius: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)' }}>
        Send Reset Link
      </button>

      <button className="text-center"
        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '14px', color: '#8B86A8' }}>
        ← Back to Login
      </button>
    </div>
  );
}
