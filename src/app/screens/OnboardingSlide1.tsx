export function OnboardingSlide1() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: 'linear-gradient(160deg, #EDE7FF 0%, #F7F5FC 60%)' }}>
      {/* Skip */}
      <div className="flex justify-end px-6 pt-14">
        <button style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '14px', color: '#8B86A8' }}>
          Skip
        </button>
      </div>

      {/* Illustration area */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-72 h-72 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(108, 63, 232, 0.08)', border: '1px solid rgba(108,63,232,0.15)' }}>
            {/* Inner ring */}
            <div className="w-52 h-52 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(108, 63, 232, 0.12)', border: '1px solid rgba(108,63,232,0.2)' }}>
              {/* Center card */}
              <div className="w-36 h-36 rounded-3xl flex items-center justify-center shadow-xl"
                style={{ background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)' }}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <path d="M32 10C21 10 12 19.5 12 30c0 5.5 2.5 10.5 6.5 14l13.5 13 13.5-13c4-3.5 6.5-8.5 6.5-14C52 19.5 43 10 32 10z" fill="white" opacity="0.9" />
                  <circle cx="32" cy="29" r="7" fill="white" />
                </svg>
              </div>
            </div>
          </div>
          {/* Decorative orbiting dots */}
          <div className="absolute top-4 right-6 w-4 h-4 rounded-full" style={{ background: '#F97566' }} />
          <div className="absolute bottom-8 left-4 w-3 h-3 rounded-full" style={{ background: '#3FC49A' }} />
          <div className="absolute top-1/2 -right-2 w-2.5 h-2.5 rounded-full" style={{ background: '#F5A74D' }} />
        </div>
      </div>

      {/* Bottom sheet */}
      <div className="bg-white px-6 pb-10 pt-8" style={{ borderRadius: '28px 28px 0 0' }}>
        <h2 className="text-center mb-3"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '24px', color: '#16143A', lineHeight: 1.3 }}>
          Welcome to thebestME.
        </h2>
        <p className="text-center mb-8 mx-auto max-w-xs"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '15px', color: '#8B86A8', lineHeight: 1.7 }}>
          Your journey to healing, growth, and a better you starts here.
        </p>

        {/* Pill dots */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="h-2 rounded-full" style={{ width: '24px', background: '#6C3FE8' }} />
          <div className="h-2 w-2 rounded-full" style={{ background: '#DDD8F5' }} />
          <div className="h-2 w-2 rounded-full" style={{ background: '#DDD8F5' }} />
        </div>

        <button className="w-full text-white py-4 font-semibold"
          style={{
            borderRadius: '14px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 700,
            fontSize: '15px',
            background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)',
            boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)',
          }}>
          Next →
        </button>
      </div>
    </div>
  );
}
