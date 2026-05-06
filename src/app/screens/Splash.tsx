export function Splash() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #4A25C9 0%, #6C3FE8 45%, #9B6FFF 100%)' }}>

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }} />
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #C9B8FF 0%, transparent 70%)' }} />
      <div className="absolute bottom-32 right-8 w-32 h-32 rounded-full opacity-10 border-2 border-white" />
      <div className="absolute top-32 left-8 w-20 h-20 rounded-full opacity-15 border border-white" />

      {/* Lotus mandala */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center opacity-10 pb-8">
        <svg width="340" height="200" viewBox="0 0 340 200" fill="none">
          <ellipse cx="170" cy="200" rx="160" ry="80" fill="white" />
          <ellipse cx="170" cy="180" rx="120" ry="60" fill="white" />
          <ellipse cx="170" cy="160" rx="80" ry="40" fill="white" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <ellipse key={i} cx={170 + 70 * Math.cos((angle * Math.PI) / 180)}
              cy={100 + 40 * Math.sin((angle * Math.PI) / 180)}
              rx="30" ry="12"
              transform={`rotate(${angle}, ${170 + 70 * Math.cos((angle * Math.PI) / 180)}, ${100 + 40 * Math.sin((angle * Math.PI) / 180)})`}
              fill="white" />
          ))}
        </svg>
      </div>

      {/* Logo glyph */}
      <div className="relative z-10 mb-8">
        <div className="w-20 h-20 rounded-3xl flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(12px)', border: '1.5px solid rgba(255,255,255,0.35)' }}>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <path d="M22 6C14 6 8 13 8 20c0 4 2 7.5 5 10l9 9 9-9c3-2.5 5-6 5-10 0-7-6-14-14-14z" fill="white" opacity="0.9" />
            <circle cx="22" cy="19" r="5" fill="white" />
          </svg>
        </div>
      </div>

      {/* App name */}
      <h1 className="text-white text-center z-10 mb-3 tracking-tight"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '36px', letterSpacing: '-0.5px' }}>
        thebestME.
      </h1>

      {/* Tagline */}
      <p className="text-center z-10"
        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.3px' }}>
        Healing Today, Stronger Tomorrow.
      </p>

      {/* Loading dots */}
      <div className="absolute bottom-16 flex gap-2 z-10">
        {[0, 1, 2].map(i => (
          <div key={i} className="rounded-full bg-white"
            style={{ width: i === 1 ? '24px' : '8px', height: '8px', opacity: i === 1 ? 1 : 0.4 }} />
        ))}
      </div>
    </div>
  );
}
