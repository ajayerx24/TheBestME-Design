export function OnboardingSlide3() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: 'linear-gradient(160deg, #FFF0EE 0%, #F7F5FC 60%)' }}>
      <div className="flex justify-end px-6 pt-14">
        <button style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '14px', color: '#8B86A8' }}>
          Skip
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-8">
        <div className="relative">
          <div className="w-72 h-72 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(249, 117, 102, 0.08)', border: '1px solid rgba(249,117,102,0.18)' }}>
            <div className="w-52 h-52 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(249, 117, 102, 0.12)', border: '1px solid rgba(249,117,102,0.22)' }}>
              <div className="w-36 h-36 rounded-3xl flex items-center justify-center shadow-xl"
                style={{ background: 'linear-gradient(135deg, #F97566 0%, #E84E3C 100%)' }}>
                {/* Writing/journal icon */}
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <rect x="12" y="10" width="32" height="40" rx="5" fill="white" opacity="0.9" />
                  <path d="M38 8 L44 14 L26 32 L20 32 L20 26 Z" fill="white" />
                  <rect x="18" y="18" width="20" height="2.5" rx="1.25" fill="#F97566" />
                  <rect x="18" y="24" width="15" height="2.5" rx="1.25" fill="#F97566" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-8 w-4 h-4 rounded-full" style={{ background: '#6C3FE8' }} />
          <div className="absolute bottom-10 left-6 w-3 h-3 rounded-full" style={{ background: '#3FC49A' }} />
          <div className="absolute top-1/2 -right-3 w-2.5 h-2.5 rounded-full" style={{ background: '#F5A74D' }} />
        </div>
      </div>

      <div className="bg-white px-6 pb-10 pt-8" style={{ borderRadius: '28px 28px 0 0' }}>
        <h2 className="text-center mb-3"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '24px', color: '#16143A', lineHeight: 1.3 }}>
          Track. Reflect. Grow.
        </h2>
        <p className="text-center mb-8 mx-auto max-w-xs"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '15px', color: '#8B86A8', lineHeight: 1.7 }}>
          Track your mood, write your thoughts, and build healthy habits every single day.
        </p>

        <div className="flex justify-center gap-2 mb-8">
          <div className="h-2 w-2 rounded-full" style={{ background: '#DDD8F5' }} />
          <div className="h-2 w-2 rounded-full" style={{ background: '#DDD8F5' }} />
          <div className="h-2 rounded-full" style={{ width: '24px', background: '#6C3FE8' }} />
        </div>

        <button className="w-full text-white py-4"
          style={{
            borderRadius: '14px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 700,
            fontSize: '15px',
            background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)',
            boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)',
          }}>
          Get Started
        </button>
      </div>
    </div>
  );
}
