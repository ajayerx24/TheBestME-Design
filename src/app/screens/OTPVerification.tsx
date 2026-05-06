export function OTPVerification() {
  return (
    <div className="w-full h-full flex flex-col px-6 py-12 items-center" style={{ background: 'white' }}>
      {/* Illustration */}
      <div className="mb-8">
        <div className="w-32 h-32 rounded-3xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #EDE7FF 0%, #F3EEFF 100%)' }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <rect x="8" y="22" width="48" height="34" rx="6" fill="#6C3FE8" opacity="0.12"/>
            <rect x="8" y="22" width="48" height="34" rx="6" stroke="#6C3FE8" strokeWidth="2"/>
            <path d="M8 28L32 42L56 28" stroke="#6C3FE8" strokeWidth="2" fill="none"/>
            <circle cx="49" cy="20" r="10" fill="#3FC49A"/>
            <path d="M44 20l3.5 3.5L54 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <h1 className="text-center mb-3"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '26px', color: '#16143A' }}>
        Check Your Email
      </h1>
      <p className="text-center mb-2 max-w-xs"
        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '15px', color: '#8B86A8', lineHeight: 1.7 }}>
        We sent a 6-digit code to
      </p>
      <p className="mb-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>
        aisha@example.com
      </p>

      {/* OTP input boxes */}
      <div className="flex gap-3 mb-4">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <input
            key={i}
            type="text"
            maxLength={1}
            className="text-center transition-all"
            style={{
              width: '46px',
              height: '56px',
              borderRadius: '12px',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '22px',
              fontWeight: 700,
              outline: 'none',
              color: '#16143A',
              background: i === 1 ? '#EDE7FF' : '#F7F5FC',
              border: i === 1 ? '2px solid #6C3FE8' : '1.5px solid rgba(108,63,232,0.12)',
            }}
          />
        ))}
      </div>

      <p className="text-center mb-10" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#8B86A8' }}>
        Code expires in{' '}
        <span style={{ color: '#F97566', fontWeight: 700 }}>0:28</span>
      </p>

      <div className="flex-1" />

      <button className="w-full text-white py-4 mb-5"
        style={{ borderRadius: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)' }}>
        Verify Code
      </button>

      <p className="text-center" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
        <span style={{ color: '#8B86A8' }}>Didn't receive it? </span>
        <button style={{ color: '#6C3FE8', fontWeight: 700 }}>Resend</button>
      </p>
    </div>
  );
}
