import { Home, BookOpen, Calendar, TrendingUp, User, Flame, Trophy, Star, Target } from 'lucide-react';

export function ProgressTracking() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#F7F5FC' }}>
      <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
        {/* Header */}
        <div className="px-5 pt-14 pb-5" style={{ background: 'white' }}>
          <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '24px', color: '#16143A' }}>
            Your Progress
          </h1>
          <p className="mt-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#8B86A8' }}>
            Keep going — you're doing great!
          </p>
        </div>

        <div className="px-5 pt-5">
          {/* Streak banner */}
          <div className="p-5 mb-4 flex items-center gap-4"
            style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #FF8A50 0%, #F97566 100%)', boxShadow: '0px 8px 24px rgba(249,117,102,0.35)' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.25)' }}>
              <Flame style={{ color: 'white', width: '28px', height: '28px' }} />
            </div>
            <div>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '28px', color: 'white', lineHeight: 1 }}>
                7-Day Streak
              </p>
              <p className="mt-1" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter, sans-serif' }}>
                You're on fire! Keep it going 🔥
              </p>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="p-5 mb-4"
            style={{ borderRadius: '20px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: '#16143A' }}>
                  Overcoming Anxiety
                </p>
                <p className="mt-0.5" style={{ fontSize: '13px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
                  Day 9 of 21 completed
                </p>
              </div>
              <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '20px', color: '#6C3FE8' }}>45%</span>
            </div>
            <div className="h-3 rounded-full overflow-hidden" style={{ background: '#EDE7FF' }}>
              <div className="h-full rounded-full" style={{ width: '45%', background: 'linear-gradient(90deg, #6C3FE8, #9B6FFF)' }} />
            </div>
          </div>

          {/* Completed Days */}
          <div className="p-5 mb-4" style={{ borderRadius: '20px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
            <h3 className="mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#16143A' }}>
              Completed Days
            </h3>
            <div className="flex gap-2">
              {Array.from({ length: 21 }, (_, i) => i + 1).slice(0, 9).map((day) => (
                <div key={day} className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: day <= 9 ? 'linear-gradient(135deg, #6C3FE8, #9B6FFF)' : 'rgba(108,63,232,0.08)' }}>
                    {day <= 9
                      ? <span style={{ color: 'white', fontSize: '12px', fontWeight: 800 }}>✓</span>
                      : <span style={{ color: '#C5BBE8', fontSize: '11px', fontWeight: 600 }}>{day}</span>}
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-center px-2">
                <span style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>+12 more</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '17px', color: '#16143A' }}>
              Achievements
            </h3>
            <button style={{ fontSize: '13px', fontWeight: 600, color: '#6C3FE8', fontFamily: 'Inter, sans-serif' }}>
              View All
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { icon: Trophy, label: '7-Day Streak', unlocked: true, color: '#F5A74D' },
              { icon: Star, label: 'First Entry', unlocked: true, color: '#6C3FE8' },
              { icon: Target, label: 'Halfway There', unlocked: false, color: '#C5BBE8' },
            ].map((badge, i) => (
              <div key={i} className="p-4 flex flex-col items-center gap-2"
                style={{
                  borderRadius: '16px',
                  background: badge.unlocked ? 'white' : '#F7F5FC',
                  boxShadow: badge.unlocked ? '0px 4px 16px rgba(0,0,0,0.08)' : 'none',
                  border: badge.unlocked ? 'none' : '1.5px dashed rgba(108,63,232,0.15)',
                }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: badge.unlocked ? `${badge.color}15` : 'rgba(108,63,232,0.05)' }}>
                  <badge.icon style={{ color: badge.unlocked ? badge.color : '#C5BBE8', width: '24px', height: '24px' }} />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 600, color: badge.unlocked ? '#16143A' : '#C5BBE8', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 px-5 py-3"
        style={{ background: 'white', boxShadow: '0px -2px 20px rgba(108,63,232,0.08)', height: '72px' }}>
        <div className="flex items-center justify-between">
          {[
            { icon: Home, label: 'Home', active: false },
            { icon: BookOpen, label: 'Plans', active: false },
            { icon: Calendar, label: 'Journal', active: false },
            { icon: TrendingUp, label: 'Progress', active: true },
            { icon: User, label: 'Profile', active: false },
          ].map(tab => (
            <button key={tab.label} className="flex flex-col items-center gap-1">
              {tab.active
                ? <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6C3FE8, #9B6FFF)' }}>
                    <tab.icon style={{ color: 'white', width: '18px', height: '18px' }} />
                  </div>
                : <tab.icon style={{ color: '#C5BBE8', width: '22px', height: '22px' }} />}
              <span style={{ fontSize: '10px', fontWeight: tab.active ? 700 : 500, color: tab.active ? '#6C3FE8' : '#C5BBE8', fontFamily: 'Inter, sans-serif' }}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
