import { ArrowLeft, Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';

export function DailySession() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto no-scrollbar" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-12 pb-4" style={{ background: 'white' }}>
        <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
          <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
        </button>
        <span className="px-3 py-1.5 rounded-full"
          style={{ background: 'rgba(108,63,232,0.1)', fontSize: '12px', fontWeight: 700, color: '#6C3FE8', fontFamily: 'Inter, sans-serif' }}>
          Day 4 of 21
        </span>
        <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
          <Volume2 style={{ color: '#8B86A8', width: '18px', height: '18px' }} />
        </button>
      </div>

      <div className="px-5 pt-5">
        {/* Title */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#8B86A8', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          Today's Session
        </p>
        <h1 className="mt-1 mb-5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '22px', color: '#16143A', lineHeight: 1.3 }}>
          Understanding Your Triggers
        </h1>

        {/* Audio Player Card */}
        <div className="p-5 mb-5"
          style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #4A25C9 0%, #6C3FE8 60%, #9B6FFF 100%)', boxShadow: '0px 12px 32px rgba(108,63,232,0.4)' }}>

          {/* Waveform visualization */}
          <div className="flex items-center justify-center gap-1 mb-5 h-12">
            {[4, 6, 10, 14, 18, 22, 16, 20, 24, 18, 14, 10, 16, 22, 18, 14, 12, 8, 6, 10, 16, 20, 24, 18, 14, 8, 6, 10, 14, 8].map((h, i) => (
              <div key={i} className="rounded-full flex-shrink-0 transition-all"
                style={{
                  width: '3px',
                  height: `${h}px`,
                  background: i < 15 ? 'white' : 'rgba(255,255,255,0.35)',
                }} />
            ))}
          </div>

          {/* Progress bar */}
          <div className="h-1 rounded-full mb-2" style={{ background: 'rgba(255,255,255,0.3)' }}>
            <div className="h-full rounded-full relative" style={{ width: '51%', background: 'white' }}>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white" style={{ boxShadow: '0 0 0 3px rgba(255,255,255,0.3)' }} />
            </div>
          </div>

          <div className="flex justify-between mb-5" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
            <span>02:45</span>
            <span>05:20</span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8">
            <button>
              <SkipBack style={{ color: 'rgba(255,255,255,0.75)', width: '22px', height: '22px', fill: 'rgba(255,255,255,0.75)' }} />
            </button>
            <button className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: 'white', boxShadow: '0px 4px 20px rgba(0,0,0,0.2)' }}>
              <Play style={{ color: '#6C3FE8', width: '28px', height: '28px', fill: '#6C3FE8', marginLeft: '3px' }} />
            </button>
            <button>
              <SkipForward style={{ color: 'rgba(255,255,255,0.75)', width: '22px', height: '22px', fill: 'rgba(255,255,255,0.75)' }} />
            </button>
          </div>
        </div>

        {/* Today's Lesson */}
        <div className="p-4 mb-4" style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: '#6C3FE8', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Today's Lesson
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#574E7E', lineHeight: 1.7 }}>
            Understanding what triggers your anxiety is the first step to managing it. Today, we explore common anxiety triggers and help you identify your personal patterns.
          </p>
        </div>

        {/* Affirmation */}
        <div className="p-5 mb-6"
          style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #F3EEFF 0%, #EDE7FF 100%)', border: '1px solid rgba(108,63,232,0.15)' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: '#6C3FE8', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Today's Affirmation
          </p>
          <p className="text-center italic" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '16px', fontWeight: 700, color: '#6C3FE8', lineHeight: 1.6 }}>
            "I am calm. I am safe.<br />I choose peace."
          </p>
        </div>

        <button className="w-full text-white py-4 mb-6"
          style={{ borderRadius: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)' }}>
          Mark as Complete ✓
        </button>
      </div>
    </div>
  );
}
