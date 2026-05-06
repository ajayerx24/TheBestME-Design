import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useState } from 'react';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto no-scrollbar" style={{ background: 'white' }}>
      {/* Top gradient header */}
      <div className="px-6 pt-14 pb-8" style={{ background: 'linear-gradient(160deg, #F3EEFF 0%, #FAF9FD 100%)' }}>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
          style={{ background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)' }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M13 3C8 3 4 7.5 4 12c0 3 1.5 5.5 3.5 7l5.5 6 5.5-6c2-1.5 3.5-4 3.5-7 0-4.5-4-9-9-9z" fill="white" opacity="0.9"/>
            <circle cx="13" cy="11.5" r="3.5" fill="white"/>
          </svg>
        </div>
        <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '26px', color: '#16143A' }}>
          Welcome Back!
        </h1>
        <p className="mt-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#8B86A8' }}>
          Log in to continue your journey
        </p>
      </div>

      <div className="px-6 py-6 flex flex-col flex-1">
        {/* Email input */}
        <div className="mb-4">
          <label className="block mb-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#574E7E' }}>
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5" style={{ color: '#8B86A8', width: '17px', height: '17px' }} />
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full py-3.5 pr-4 text-sm transition-all"
              style={{
                paddingLeft: '44px',
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                background: '#F7F5FC',
                border: '1.5px solid rgba(108,63,232,0.12)',
                outline: 'none',
                color: '#16143A',
              }}
            />
          </div>
        </div>

        {/* Password input */}
        <div className="mb-3">
          <label className="block mb-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#574E7E' }}>
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#8B86A8', width: '17px', height: '17px' }} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              className="w-full py-3.5 transition-all"
              style={{
                paddingLeft: '44px',
                paddingRight: '44px',
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                background: '#F7F5FC',
                border: '1.5px solid rgba(108,63,232,0.12)',
                outline: 'none',
                color: '#16143A',
              }}
            />
            <button onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2">
              {showPassword
                ? <EyeOff style={{ color: '#8B86A8', width: '17px', height: '17px' }} />
                : <Eye style={{ color: '#8B86A8', width: '17px', height: '17px' }} />}
            </button>
          </div>
        </div>

        {/* Forgot password */}
        <div className="text-right mb-6">
          <button style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px', color: '#6C3FE8' }}>
            Forgot Password?
          </button>
        </div>

        {/* Login button */}
        <button
          className="w-full text-white py-4 mb-6"
          style={{
            borderRadius: '14px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 700,
            fontSize: '15px',
            background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)',
            boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)',
          }}>
          Log In
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ background: 'rgba(108,63,232,0.1)' }} />
          <span style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>or continue with</span>
          <div className="flex-1 h-px" style={{ background: 'rgba(108,63,232,0.1)' }} />
        </div>

        {/* Social buttons */}
        <div className="flex gap-3 mb-8">
          <button
            className="flex-1 py-3.5 flex items-center justify-center gap-2 transition-all"
            style={{ borderRadius: '12px', border: '1.5px solid rgba(0,0,0,0.1)', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#16143A', background: 'white' }}>
            <svg width="18" height="18" viewBox="0 0 18 18"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/><path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/><path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/></svg>
            Google
          </button>
          <button
            className="flex-1 py-3.5 flex items-center justify-center gap-2 transition-all"
            style={{ borderRadius: '12px', border: 'none', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: 'white', background: '#000' }}>
            <svg width="16" height="18" viewBox="0 0 16 18" fill="white"><path d="M13.22 9.73c-.02-2.18 1.78-3.24 1.86-3.29-1.01-1.48-2.58-1.68-3.14-1.71-1.34-.14-2.62.79-3.3.79-.68 0-1.73-.77-2.85-.75-1.47.02-2.83.86-3.58 2.18-1.53 2.65-.39 6.58 1.1 8.73.73 1.05 1.6 2.23 2.74 2.19 1.1-.05 1.52-.71 2.85-.71 1.33 0 1.71.71 2.88.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.31-3.53z"/><path d="M11.08 3.22C11.65 2.52 12.04 1.55 11.93.57c-.86.05-1.9.57-2.51 1.27-.55.62-.97 1.61-.85 2.56.95.07 1.92-.48 2.51-1.18z"/></svg>
            Apple
          </button>
        </div>

        {/* Sign up link */}
        <p className="text-center" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
          <span style={{ color: '#8B86A8' }}>Don't have an account? </span>
          <button style={{ color: '#6C3FE8', fontWeight: 700 }}>Sign Up</button>
        </p>
      </div>
    </div>
  );
}
