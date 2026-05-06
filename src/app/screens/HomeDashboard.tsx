import { Bell, Home, BookOpen, Calendar, TrendingUp, User, Flame, Smile, ArrowRight } from 'lucide-react';

export function HomeDashboard() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#F7F5FC' }}>
      <div className="flex-1 overflow-y-auto no-scrollbar pb-20">

        {/* Header */}
        <div className="px-5 pt-14 pb-5" style={{ background: 'white' }}>
          <div className="flex items-center justify-between">
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: '#8B86A8' }}>
                Good morning 🌤
              </p>
              <h1 className="mt-0.5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '22px', color: '#16143A' }}>
                Aisha ✨
              </h1>
            </div>
            <button className="w-11 h-11 rounded-2xl flex items-center justify-center relative"
              style={{ background: '#F7F5FC' }}>
              <Bell style={{ color: '#6C3FE8', width: '20px', height: '20px' }} />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full" style={{ background: '#F97566' }} />
            </button>
          </div>
        </div>

        <div className="px-5 pt-5">
          {/* Continue Plan Card */}
          <div className="p-5 mb-5 relative overflow-hidden"
            style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #4A25C9 0%, #6C3FE8 60%, #9B6FFF 100%)', boxShadow: '0px 12px 32px rgba(108,63,232,0.4)' }}>
            {/* decorative circles */}
            <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
            <div className="absolute -right-4 top-12 w-20 h-20 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />

            <div className="flex items-start justify-between relative z-10">
              <div className="flex-1 pr-4">
                <span className="inline-block px-2.5 py-1 rounded-full mb-3"
                  style={{ background: 'rgba(255,255,255,0.2)', fontSize: '11px', fontWeight: 700, color: 'white', fontFamily: 'Inter, sans-serif' }}>
                  DAY 4 OF 21
                </span>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '17px', color: 'white', lineHeight: 1.3 }}>
                  Overcoming Anxiety
                </p>
                <p className="mt-1 mb-4" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif' }}>
                  Today's session is waiting
                </p>

                {/* Progress bar */}
                <div className="mb-4">
                  <div className="h-1.5 rounded-full mb-1" style={{ background: 'rgba(255,255,255,0.25)' }}>
                    <div className="h-full rounded-full" style={{ width: '19%', background: 'white' }} />
                  </div>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>19% complete</p>
                </div>

                <button className="flex items-center gap-2 px-5 py-2.5"
                  style={{ borderRadius: '999px', background: 'white', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '13px', color: '#6C3FE8' }}>
                  Continue <ArrowRight style={{ width: '14px', height: '14px' }} />
                </button>
              </div>

              <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.15)' }}>
                <span style={{ fontSize: '36px' }}>🧠</span>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-4" style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
              <div className="flex items-center justify-between mb-2">
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#8B86A8', fontFamily: 'Inter, sans-serif', letterSpacing: '0.5px' }}>STREAK</span>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: '#FFF5EC' }}>
                  <Flame style={{ color: '#F97566', width: '16px', height: '16px' }} />
                </div>
              </div>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '24px', color: '#16143A' }}>7</p>
              <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>days in a row</p>
            </div>

            <div className="p-4" style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
              <div className="flex items-center justify-between mb-2">
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#8B86A8', fontFamily: 'Inter, sans-serif', letterSpacing: '0.5px' }}>MOOD</span>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: '#EDE7FF' }}>
                  <Smile style={{ color: '#6C3FE8', width: '16px', height: '16px' }} />
                </div>
              </div>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '24px', color: '#16143A' }}>Good</p>
              <p style={{ fontSize: '12px', color: '#3FC49A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>↑ Better than yesterday</p>
            </div>
          </div>

          {/* Recommended Section */}
          <div className="flex items-center justify-between mb-4">
            <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '17px', color: '#16143A' }}>
              Recommended For You
            </h2>
            <button style={{ fontSize: '13px', fontWeight: 600, color: '#6C3FE8', fontFamily: 'Inter, sans-serif' }}>
              View All
            </button>
          </div>

          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {[
              { name: 'Self Love Journey', duration: '14 Days', badge: 'Free', emoji: '💜', color: '#EDE7FF' },
              { name: 'Better Sleep', duration: '7 Days', badge: 'Premium', emoji: '😴', color: '#E8F8F3' },
              { name: 'Mindful Mornings', duration: '10 Days', badge: 'Free', emoji: '🌅', color: '#FFF0EE' },
            ].map(plan => (
              <div key={plan.name} className="flex-shrink-0" style={{ width: '160px' }}>
                <div className="p-4" style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
                  <div className="w-full h-24 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: plan.color }}>
                    <span style={{ fontSize: '36px' }}>{plan.emoji}</span>
                  </div>
                  <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '13px', color: '#16143A', lineHeight: 1.3 }}>
                    {plan.name}
                  </p>
                  <p className="mt-1 mb-2" style={{ fontSize: '11px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
                    {plan.duration}
                  </p>
                  <span className="inline-block px-2 py-0.5 rounded-full"
                    style={{
                      fontSize: '10px', fontWeight: 700,
                      background: plan.badge === 'Free' ? 'rgba(63,196,154,0.12)' : 'rgba(245,167,77,0.12)',
                      color: plan.badge === 'Free' ? '#3FC49A' : '#F5A74D',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                    {plan.badge}
                  </span>
                </div>
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
            { icon: Home, label: 'Home', active: true },
            { icon: BookOpen, label: 'Plans', active: false },
            { icon: Calendar, label: 'Journal', active: false },
            { icon: TrendingUp, label: 'Progress', active: false },
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
