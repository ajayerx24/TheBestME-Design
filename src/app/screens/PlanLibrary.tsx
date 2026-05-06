import { Search, Home, BookOpen, Calendar, TrendingUp, User } from 'lucide-react';
import { useState } from 'react';

export function PlanLibrary() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Anxiety', 'Relationships', 'Self-Growth', 'Sleep', 'Mindfulness'];
  const plans = [
    { name: 'Overcoming Anxiety', duration: '21 Days', badge: 'Premium', emoji: '🧠', color: '#EDE7FF', progress: 45 },
    { name: 'Healing from Trauma', duration: '30 Days', badge: 'Premium', emoji: '💙', color: '#EBF4FF', progress: 0 },
    { name: 'Self Love Journey', duration: '14 Days', badge: 'Free', emoji: '💜', color: '#F3EEFF', progress: 0 },
    { name: 'Building Better Habits', duration: '7 Days', badge: 'Premium', emoji: '✨', color: '#FFFBEB', progress: 0 },
  ];

  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#F7F5FC' }}>
      <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
        {/* Header */}
        <div className="px-5 pt-14 pb-4" style={{ background: 'white' }}>
          <h1 className="mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '24px', color: '#16143A' }}>
            Plans
          </h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#8B86A8', width: '17px', height: '17px' }} />
            <input type="text" placeholder="Search plans..."
              className="w-full py-3 pr-4"
              style={{ paddingLeft: '44px', borderRadius: '12px', fontFamily: 'Inter, sans-serif', fontSize: '14px', background: '#F7F5FC', border: '1.5px solid rgba(108,63,232,0.1)', outline: 'none', color: '#16143A' }} />
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar px-5 py-4">
          {filters.map(filter => (
            <button key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-4 py-2 whitespace-nowrap transition-all"
              style={{
                borderRadius: '999px',
                fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px',
                background: activeFilter === filter ? 'linear-gradient(135deg, #6C3FE8, #9B6FFF)' : 'white',
                color: activeFilter === filter ? 'white' : '#574E7E',
                border: activeFilter === filter ? 'none' : '1.5px solid rgba(108,63,232,0.12)',
                boxShadow: activeFilter === filter ? '0px 4px 12px rgba(108,63,232,0.3)' : 'none',
              }}>
              {filter}
            </button>
          ))}
        </div>

        {/* Plans list */}
        <div className="px-5 space-y-3">
          {plans.map(plan => (
            <div key={plan.name} className="p-4 flex gap-4"
              style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
              <div className="w-[68px] h-[68px] flex items-center justify-center flex-shrink-0"
                style={{ borderRadius: '14px', background: plan.color }}>
                <span style={{ fontSize: '30px' }}>{plan.emoji}</span>
              </div>

              <div className="flex-1">
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#16143A', lineHeight: 1.3 }}>
                  {plan.name}
                </p>
                <p className="mt-0.5 mb-2" style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
                  {plan.duration}
                </p>

                {plan.progress > 0 ? (
                  <div>
                    <div className="flex justify-between mb-1">
                      <span style={{ fontSize: '11px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>Progress</span>
                      <span style={{ fontSize: '11px', color: '#6C3FE8', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>{plan.progress}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#EDE7FF' }}>
                      <div className="h-full rounded-full" style={{ width: `${plan.progress}%`, background: 'linear-gradient(90deg, #6C3FE8, #9B6FFF)' }} />
                    </div>
                  </div>
                ) : (
                  <span className="inline-block px-2.5 py-1 rounded-full"
                    style={{
                      fontSize: '11px', fontWeight: 700,
                      background: plan.badge === 'Free' ? 'rgba(63,196,154,0.1)' : 'rgba(245,167,77,0.1)',
                      color: plan.badge === 'Free' ? '#3FC49A' : '#F5A74D',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                    {plan.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 px-5 py-3"
        style={{ background: 'white', boxShadow: '0px -2px 20px rgba(108,63,232,0.08)', height: '72px' }}>
        <div className="flex items-center justify-between">
          {[
            { icon: Home, label: 'Home', active: false },
            { icon: BookOpen, label: 'Plans', active: true },
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
