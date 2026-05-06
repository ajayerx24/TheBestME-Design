import { ArrowLeft, Home, BookOpen, Calendar, TrendingUp, User, Trophy, Zap, Clock } from 'lucide-react';
import { useState } from 'react';

const tabs = ['Week', 'Month', 'All Time'];

// SVG-based circular progress
function CircularProgress({ percent, size = 160, strokeWidth = 14, color = '#6C3FE8' }: { percent: number; size?: number; strokeWidth?: number; color?: string }) {
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;
  const center = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={center} cy={center} r={r} fill="none" stroke="rgba(108,63,232,0.1)" strokeWidth={strokeWidth} />
      <circle
        cx={center} cy={center} r={r} fill="none"
        stroke={color} strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
      />
    </svg>
  );
}

export function ProgressDetailCircular() {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    { sessions: 5, total: 7, percent: 71, label: 'This Week', minutes: 87, streak: 7 },
    { sessions: 18, total: 30, percent: 60, label: 'This Month', minutes: 312, streak: 7 },
    { sessions: 42, total: 84, percent: 50, label: 'All Time', minutes: 780, streak: 14 },
  ];

  const current = tabData[activeTab];

  const weekDays = [
    { day: 'M', done: true },
    { day: 'T', done: true },
    { day: 'W', done: true },
    { day: 'T', done: false },
    { day: 'F', done: true },
    { day: 'S', done: true },
    { day: 'S', done: false, today: true },
  ];

  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#F7F5FC' }}>
      <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
        {/* Header */}
        <div className="px-5 pt-12 pb-5" style={{ background: 'white' }}>
          <div className="flex items-center gap-3 mb-1">
            <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
              <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
            </button>
            <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: '#16143A' }}>
              Progress Details
            </h1>
          </div>
        </div>

        <div className="px-5 pt-5">
          {/* Tab pills */}
          <div className="flex gap-2 mb-6 p-1"
            style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
            {tabs.map((tab, i) => (
              <button key={tab} onClick={() => setActiveTab(i)}
                className="flex-1 py-2.5 transition-all"
                style={{
                  borderRadius: '12px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 700,
                  background: activeTab === i ? 'linear-gradient(135deg, #6C3FE8, #9B6FFF)' : 'transparent',
                  color: activeTab === i ? 'white' : '#8B86A8',
                  boxShadow: activeTab === i ? '0px 4px 12px rgba(108,63,232,0.3)' : 'none',
                }}>
                {tab}
              </button>
            ))}
          </div>

          {/* Circular chart card */}
          <div className="p-6 mb-4 flex flex-col items-center"
            style={{ borderRadius: '24px', background: 'white', boxShadow: '0px 4px 20px rgba(0,0,0,0.06)' }}>
            {/* Ring chart */}
            <div className="relative mb-4">
              <CircularProgress percent={current.percent} size={180} strokeWidth={18} color="#6C3FE8" />
              {/* Inner content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '38px', color: '#16143A', lineHeight: 1 }}>
                  {current.percent}%
                </p>
                <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif', marginTop: '4px' }}>
                  Completed
                </p>
              </div>
            </div>

            {/* Sub stats */}
            <div className="flex gap-6">
              <div className="text-center">
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '22px', color: '#6C3FE8' }}>{current.sessions}</p>
                <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>Sessions</p>
              </div>
              <div className="w-px" style={{ background: 'rgba(108,63,232,0.12)' }} />
              <div className="text-center">
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '22px', color: '#3FC49A' }}>{current.minutes}m</p>
                <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>Practice</p>
              </div>
              <div className="w-px" style={{ background: 'rgba(108,63,232,0.12)' }} />
              <div className="text-center">
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '22px', color: '#F97566' }}>{current.streak}</p>
                <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>Streak</p>
              </div>
            </div>
          </div>

          {/* Weekly dots */}
          <div className="p-4 mb-4" style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
            <div className="flex items-center justify-between mb-3">
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>
                This Week
              </p>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#3FC49A', fontFamily: 'Inter, sans-serif' }}>5/7 days ✓</span>
            </div>
            <div className="flex justify-between">
              {weekDays.map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      background: d.done ? 'linear-gradient(135deg, #6C3FE8, #9B6FFF)' : d.today ? 'rgba(108,63,232,0.1)' : 'rgba(108,63,232,0.06)',
                      border: d.today && !d.done ? '2px dashed rgba(108,63,232,0.3)' : 'none',
                    }}>
                    {d.done && <span style={{ color: 'white', fontSize: '13px', fontWeight: 800 }}>✓</span>}
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: d.done ? '#6C3FE8' : '#C5BBE8', fontFamily: 'Inter, sans-serif' }}>{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Active plans progress */}
          <p className="mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: '#16143A' }}>
            Active Plans
          </p>
          {[
            { name: 'Overcoming Anxiety', emoji: '🧠', percent: 45, color: '#6C3FE8', days: '9/21' },
            { name: 'Mindful Mornings', emoji: '🌅', percent: 70, color: '#3FC49A', days: '7/10' },
          ].map(plan => (
            <div key={plan.name} className="p-4 mb-3"
              style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: '#F7F5FC' }}>
                  <span style={{ fontSize: '20px' }}>{plan.emoji}</span>
                </div>
                <div className="flex-1">
                  <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>{plan.name}</p>
                  <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>Day {plan.days}</p>
                </div>
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '16px', color: plan.color }}>{plan.percent}%</span>
              </div>
              <div className="h-2.5 rounded-full" style={{ background: 'rgba(108,63,232,0.08)' }}>
                <div className="h-full rounded-full" style={{ width: `${plan.percent}%`, background: `linear-gradient(90deg, ${plan.color}, ${plan.color}aa)` }} />
              </div>
            </div>
          ))}

          {/* Achievements */}
          <p className="mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: '#16143A' }}>
            Recent Badges
          </p>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {[
              { emoji: '🔥', label: '7-Day Streak', color: '#FFF0EE', unlocked: true },
              { emoji: '⭐', label: 'First Entry', color: '#EDE7FF', unlocked: true },
              { emoji: '🎯', label: 'Goal Setter', color: '#E8F8F3', unlocked: true },
              { emoji: '🏆', label: 'Halfway', color: '#F7F5FC', unlocked: false },
              { emoji: '💜', label: '21 Days', color: '#F7F5FC', unlocked: false },
            ].map(badge => (
              <div key={badge.label} className="flex-shrink-0 flex flex-col items-center gap-2 p-3"
                style={{ borderRadius: '16px', background: badge.unlocked ? 'white' : '#F7F5FC', boxShadow: badge.unlocked ? '0px 4px 16px rgba(0,0,0,0.08)' : 'none', border: badge.unlocked ? 'none' : '1.5px dashed rgba(108,63,232,0.15)', width: '80px', opacity: badge.unlocked ? 1 : 0.6 }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: badge.color }}>
                  <span style={{ fontSize: '22px' }}>{badge.emoji}</span>
                </div>
                <p className="text-center" style={{ fontSize: '10px', fontWeight: 600, color: badge.unlocked ? '#16143A' : '#C5BBE8', fontFamily: 'Inter, sans-serif' }}>{badge.label}</p>
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
