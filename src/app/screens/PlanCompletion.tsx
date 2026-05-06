import { Share2, Trophy, Star, ArrowRight, Home } from 'lucide-react';

export function PlanCompletion() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto no-scrollbar" style={{ background: '#F7F5FC' }}>
      {/* Celebration hero */}
      <div className="flex flex-col items-center pt-14 pb-8 px-6 text-center"
        style={{ background: 'linear-gradient(160deg, #F3EEFF 0%, #FAF9FD 100%)' }}>
        {/* Big emoji & badge */}
        <div className="relative mb-4">
          <div className="w-28 h-28 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #6C3FE8, #9B6FFF)', boxShadow: '0px 20px 50px rgba(108,63,232,0.5)' }}>
            <span style={{ fontSize: '56px' }}>🏆</span>
          </div>
          <div className="absolute -inset-3 rounded-full" style={{ border: '2.5px solid rgba(108,63,232,0.2)' }} />
          <div className="absolute -inset-6 rounded-full" style={{ border: '1px solid rgba(108,63,232,0.1)' }} />
          <span className="absolute -top-1 -right-2 text-2xl">🎉</span>
          <span className="absolute top-2 -left-4 text-xl">✨</span>
          <span className="absolute -bottom-1 right-0 text-xl">🌟</span>
        </div>

        <div className="px-4 py-1.5 rounded-full mb-3"
          style={{ background: 'linear-gradient(135deg, #F5A74D, #FFD080)', boxShadow: '0px 4px 16px rgba(245,167,77,0.4)' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'white', fontFamily: 'Inter, sans-serif', letterSpacing: '0.8px' }}>
            🎯 PLAN COMPLETED
          </span>
        </div>

        <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '26px', color: '#16143A', lineHeight: 1.3 }}>
          Congratulations,<br />Aisha! 🎊
        </h1>
        <p className="mt-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#8B86A8', lineHeight: 1.6 }}>
          You've completed the full<br /><strong style={{ color: '#6C3FE8' }}>Overcoming Anxiety</strong> · 21-Day Program
        </p>
      </div>

      <div className="px-5 pt-5">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { value: '21', label: 'Days\nCompleted', emoji: '📅', color: '#EDE7FF' },
            { value: '7', label: 'Day\nStreak', emoji: '🔥', color: '#FFF0EE' },
            { value: '98%', label: 'Sessions\nDone', emoji: '⚡', color: '#E8F8F3' },
          ].map(stat => (
            <div key={stat.label} className="p-4 flex flex-col items-center"
              style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-2" style={{ background: stat.color }}>
                <span style={{ fontSize: '18px' }}>{stat.emoji}</span>
              </div>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '20px', color: '#16143A' }}>{stat.value}</p>
              <p className="text-center" style={{ fontSize: '11px', color: '#8B86A8', fontFamily: 'Inter, sans-serif', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Certificate card */}
        <div className="p-5 mb-5 relative overflow-hidden"
          style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #4A25C9 0%, #6C3FE8 60%, #9B6FFF 100%)', boxShadow: '0px 12px 32px rgba(108,63,232,0.4)' }}>
          <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
          <div className="absolute right-8 bottom-0 w-20 h-20 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }} />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Trophy style={{ color: '#FFD080', width: '18px', height: '18px' }} />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                Certificate of Completion
              </p>
            </div>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: 'white', lineHeight: 1.3 }}>
              Overcoming Anxiety
            </p>
            <p className="mt-0.5" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
              Awarded to Aisha Patel · May 6, 2026
            </p>
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} style={{ width: '14px', height: '14px', color: '#FFD080', fill: '#FFD080' }} />
              ))}
              <span className="ml-1" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Mastery Level
              </span>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="p-5 mb-5"
          style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
          <p className="mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#16143A' }}>
            Your Journey Insights
          </p>
          {[
            { icon: '💜', text: 'Mood improved by 40% over 21 days' },
            { icon: '✍️', text: '18 journal entries written' },
            { icon: '🧘', text: '6.3 hours of mindfulness practice' },
            { icon: '📈', text: 'Anxiety score reduced from 7/10 to 3/10' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-2.5"
              style={{ borderBottom: i < 3 ? '1px solid rgba(108,63,232,0.07)' : 'none' }}>
              <span style={{ fontSize: '18px' }}>{item.icon}</span>
              <p style={{ fontSize: '13px', color: '#574E7E', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Next suggested plan */}
        <div className="p-4 mb-5 flex items-center gap-4"
          style={{ borderRadius: '16px', background: 'white', border: '1.5px solid rgba(108,63,232,0.12)', boxShadow: '0px 2px 10px rgba(0,0,0,0.04)' }}>
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: '#E8F8F3' }}>
            <span style={{ fontSize: '28px' }}>😴</span>
          </div>
          <div className="flex-1">
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#3FC49A', fontFamily: 'Inter, sans-serif', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Next Step
            </p>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#16143A' }}>
              Better Sleep — 7 Days
            </p>
            <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>Recommended for you</p>
          </div>
          <ArrowRight style={{ color: '#6C3FE8', width: '18px', height: '18px' }} />
        </div>

        {/* Actions */}
        <button className="w-full text-white py-4 mb-3 flex items-center justify-center gap-2"
          style={{ borderRadius: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)' }}>
          Start Next Plan <ArrowRight style={{ width: '16px', height: '16px' }} />
        </button>

        <div className="flex gap-3 pb-8">
          <button className="flex-1 py-3.5 flex items-center justify-center gap-2"
            style={{ borderRadius: '12px', background: 'white', border: '1.5px solid rgba(108,63,232,0.15)', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px', color: '#6C3FE8' }}>
            <Share2 style={{ width: '14px', height: '14px' }} />
            Share
          </button>
          <button className="flex-1 py-3.5 flex items-center justify-center gap-2"
            style={{ borderRadius: '12px', background: 'white', border: '1.5px solid rgba(108,63,232,0.15)', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px', color: '#574E7E' }}>
            <Home style={{ width: '14px', height: '14px' }} />
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
