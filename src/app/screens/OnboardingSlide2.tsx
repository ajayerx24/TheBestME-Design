export function OnboardingSlide2() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: 'linear-gradient(160deg, #E8F8F3 0%, #F7F5FC 60%)' }}>
      <div className="flex justify-end px-6 pt-14">
        <button style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '14px', color: '#8B86A8' }}>
          Skip
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-8">
        <div className="relative">
          <div className="w-72 h-72 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(63, 196, 154, 0.08)', border: '1px solid rgba(63,196,154,0.2)' }}>
            <div className="w-52 h-52 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(63, 196, 154, 0.12)', border: '1px solid rgba(63,196,154,0.25)' }}>
              <div className="w-36 h-36 rounded-3xl flex items-center justify-center shadow-xl"
                style={{ background: 'linear-gradient(135deg, #3FC49A 0%, #2AA87E 100%)' }}>
                {/* Plan/clipboard icon */}
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <rect x="12" y="10" width="36" height="42" rx="6" fill="white" opacity="0.9" />
                  <rect x="18" y="20" width="24" height="3" rx="1.5" fill="#3FC49A" />
                  <rect x="18" y="27" width="18" height="3" rx="1.5" fill="#3FC49A" />
                  <rect x="18" y="34" width="21" height="3" rx="1.5" fill="#3FC49A" />
                  <rect x="22" y="6" width="16" height="8" rx="4" fill="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute top-6 left-4 w-4 h-4 rounded-full" style={{ background: '#6C3FE8' }} />
          <div className="absolute bottom-6 right-4 w-3 h-3 rounded-full" style={{ background: '#F97566' }} />
          <div className="absolute top-1/3 -left-3 w-2.5 h-2.5 rounded-full" style={{ background: '#F5A74D' }} />
        </div>
      </div>

      <div className="bg-white px-6 pb-10 pt-8" style={{ borderRadius: '28px 28px 0 0' }}>
        <h2 className="text-center mb-3"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '24px', color: '#16143A', lineHeight: 1.3 }}>
          Guided Healing Plans
        </h2>
        <p className="text-center mb-8 mx-auto max-w-xs"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '15px', color: '#8B86A8', lineHeight: 1.7 }}>
          Expert-designed plans for anxiety, stress, relationships and so much more.
        </p>

        <div className="flex justify-center gap-2 mb-8">
          <div className="h-2 w-2 rounded-full" style={{ background: '#DDD8F5' }} />
          <div className="h-2 rounded-full" style={{ width: '24px', background: '#6C3FE8' }} />
          <div className="h-2 w-2 rounded-full" style={{ background: '#DDD8F5' }} />
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
          Next →
        </button>
      </div>
    </div>
  );
}
