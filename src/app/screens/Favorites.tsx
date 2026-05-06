import { Heart } from 'lucide-react';
import { useState } from 'react';

export function Favorites() {
  const [activeTab, setActiveTab] = useState<'plans' | 'sessions'>('plans');

  const plans = [
    { name: 'Self Love Journey', duration: '14 Days', badge: 'Free', emoji: '💜', color: '#F3EEFF' },
    { name: 'Better Sleep', duration: '7 Days', badge: 'Premium', emoji: '😴', color: '#EBF8F3' },
  ];

  const sessions = [
    { name: 'Morning Breathing', duration: '8 min', plan: 'Overcoming Anxiety', emoji: '🌬️', color: '#EDE7FF' },
    { name: "Evening Wind-Down", duration: '12 min', plan: 'Better Sleep', emoji: '🌙', color: '#EBF8F3' },
  ];

  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="px-5 pt-14 pb-0" style={{ background: 'white' }}>
        <div className="flex items-center justify-between mb-5">
          <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '24px', color: '#16143A' }}>
            Saved
          </h1>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#FFF0EE' }}>
            <Heart style={{ color: '#F97566', width: '18px', height: '18px', fill: '#F97566' }} />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 p-1 rounded-2xl mb-0" style={{ background: '#F7F5FC' }}>
          {(['plans', 'sessions'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className="flex-1 py-2.5 transition-all capitalize"
              style={{
                borderRadius: '14px',
                fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px',
                background: activeTab === tab ? 'white' : 'transparent',
                color: activeTab === tab ? '#16143A' : '#8B86A8',
                boxShadow: activeTab === tab ? '0px 2px 8px rgba(0,0,0,0.08)' : 'none',
              }}>
              Saved {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pt-5">
        {activeTab === 'plans' && (
          <div className="space-y-3">
            {plans.map(plan => (
              <div key={plan.name} className="p-4 flex gap-4"
                style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
                <div className="w-[68px] h-[68px] flex items-center justify-center flex-shrink-0"
                  style={{ borderRadius: '14px', background: plan.color }}>
                  <span style={{ fontSize: '28px' }}>{plan.emoji}</span>
                </div>
                <div className="flex-1">
                  <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#16143A' }}>
                    {plan.name}
                  </p>
                  <p className="mt-0.5 mb-2" style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
                    {plan.duration}
                  </p>
                  <span className="inline-block px-2.5 py-1 rounded-full"
                    style={{
                      fontSize: '11px', fontWeight: 700,
                      background: plan.badge === 'Free' ? 'rgba(63,196,154,0.1)' : 'rgba(245,167,77,0.1)',
                      color: plan.badge === 'Free' ? '#3FC49A' : '#F5A74D',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                    {plan.badge}
                  </span>
                </div>
                <button>
                  <Heart style={{ color: '#F97566', width: '20px', height: '20px', fill: '#F97566' }} />
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'sessions' && (
          <div className="space-y-3">
            {sessions.map(session => (
              <div key={session.name} className="p-4 flex gap-4"
                style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
                <div className="w-[68px] h-[68px] flex items-center justify-center flex-shrink-0"
                  style={{ borderRadius: '14px', background: session.color }}>
                  <span style={{ fontSize: '28px' }}>{session.emoji}</span>
                </div>
                <div className="flex-1">
                  <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#16143A' }}>
                    {session.name}
                  </p>
                  <p className="mt-0.5 mb-1" style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
                    {session.duration}
                  </p>
                  <span className="inline-block px-2.5 py-0.5 rounded-full"
                    style={{ background: 'rgba(108,63,232,0.1)', fontSize: '11px', fontWeight: 700, color: '#6C3FE8', fontFamily: 'Inter, sans-serif' }}>
                    {session.plan}
                  </span>
                </div>
                <button>
                  <Heart style={{ color: '#F97566', width: '20px', height: '20px', fill: '#F97566' }} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
