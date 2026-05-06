import { ArrowLeft, Home, BookOpen, Calendar, TrendingUp, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, ReferenceLine } from 'recharts';

const moods = [
  { emoji: '😢', value: 1, color: '#E8414A' },
  { emoji: '😕', value: 2, color: '#F97566' },
  { emoji: '😐', value: 3, color: '#F5A74D' },
  { emoji: '😊', value: 4, color: '#3FC49A' },
  { emoji: '😄', value: 5, color: '#6C3FE8' },
];

// Mock month data (42 cells for a 6-row calendar)
const calendarData: Record<number, { score: number; emoji: string }> = {
  1: { score: 4, emoji: '😊' }, 2: { score: 3, emoji: '😐' }, 3: { score: 5, emoji: '😄' },
  4: { score: 4, emoji: '😊' }, 5: { score: 2, emoji: '😕' }, 6: { score: 3, emoji: '😐' },
  7: { score: 4, emoji: '😊' }, 8: { score: 5, emoji: '😄' }, 9: { score: 4, emoji: '😊' },
  10: { score: 3, emoji: '😐' }, 11: { score: 4, emoji: '😊' }, 12: { score: 5, emoji: '😄' },
  13: { score: 4, emoji: '😊' }, 14: { score: 3, emoji: '😐' }, 15: { score: 2, emoji: '😕' },
  16: { score: 4, emoji: '😊' }, 17: { score: 5, emoji: '😄' }, 18: { score: 4, emoji: '😊' },
  19: { score: 4, emoji: '😊' }, 20: { score: 3, emoji: '😐' }, 21: { score: 5, emoji: '😄' },
  22: { score: 4, emoji: '😊' }, 23: { score: 3, emoji: '😐' }, 24: { score: 4, emoji: '😊' },
  25: { score: 5, emoji: '😄' }, 26: { score: 4, emoji: '😊' }, 27: { score: 4, emoji: '😊' },
  28: { score: 3, emoji: '😐' }, 29: { score: 5, emoji: '😄' }, 30: { score: 4, emoji: '😊' },
};

const moodColors: Record<number, string> = { 1: '#E8414A', 2: '#F97566', 3: '#F5A74D', 4: '#3FC49A', 5: '#6C3FE8' };

const lineData = [
  { week: 'W1', avg: 3.7 }, { week: 'W2', avg: 4.1 }, { week: 'W3', avg: 3.5 },
  { week: 'W4', avg: 4.3 }, { week: 'W5', avg: 4.0 },
];

const insights = [
  { emoji: '📈', text: 'Your mood improved by +18% this month', color: '#3FC49A' },
  { emoji: '🌞', text: 'You feel best on Fridays and weekends', color: '#F5A74D' },
  { emoji: '🌙', text: 'Mood dips mid-week — try evening meditation', color: '#6C3FE8' },
];

export function MoodHistoryAnalytics() {
  const [month, setMonth] = useState('May 2026');
  const daysInMonth = 30;
  const startDayOffset = 4; // May starts on Friday (offset 4 for Mon-first calendar)

  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#F7F5FC' }}>
      <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
        {/* Header */}
        <div className="px-5 pt-12 pb-4" style={{ background: 'white' }}>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
              <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
            </button>
            <div>
              <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: '#16143A' }}>
                Mood History
              </h1>
              <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>Analytics & trends</p>
            </div>
          </div>
        </div>

        <div className="px-5 pt-4">
          {/* Month summary card */}
          <div className="p-5 mb-4 flex items-center gap-4"
            style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 10px 28px rgba(108,63,232,0.35)' }}>
            <div className="flex flex-col">
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>Avg. Mood Score</p>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '36px', color: 'white', lineHeight: 1 }}>4.1</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>out of 5.0</p>
            </div>
            <div className="flex-1" />
            <div className="flex flex-col gap-1.5">
              {[
                { label: 'Great days', count: 12, color: '#9B6FFF' },
                { label: 'Good days', count: 11, color: 'rgba(255,255,255,0.5)' },
                { label: 'Low days', count: 7, color: 'rgba(255,255,255,0.3)' },
              ].map(s => (
                <div key={s.label} className="flex items-center justify-between gap-3">
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter, sans-serif' }}>{s.label}</span>
                  <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '13px', color: 'white' }}>{s.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trend chart */}
          <div className="p-4 mb-4" style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
            <div className="flex items-center justify-between mb-3">
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>Weekly Trend</p>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#3FC49A', fontFamily: 'Inter, sans-serif' }}>↑ +0.4 this month</span>
            </div>
            <ResponsiveContainer width="100%" height={110}>
              <LineChart data={lineData}>
                <XAxis dataKey="week" axisLine={false} tickLine={false}
                  tick={{ fontSize: 11, fill: '#8B86A8', fontFamily: 'Inter, sans-serif', fontWeight: 600 }} />
                <YAxis domain={[1, 5]} hide />
                <Tooltip
                  contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0px 4px 16px rgba(0,0,0,0.12)', fontFamily: 'Inter, sans-serif', fontSize: '12px' }}
                  formatter={(v: number) => [`${v}/5`, 'Avg Mood']}
                />
                <ReferenceLine y={3} stroke="rgba(108,63,232,0.1)" strokeDasharray="4 4" />
                <Line type="monotone" dataKey="avg" stroke="#6C3FE8" strokeWidth={3} dot={{ fill: '#6C3FE8', r: 5, strokeWidth: 0 }} activeDot={{ r: 7 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Calendar heatmap */}
          <div className="p-4 mb-4" style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
            <div className="flex items-center justify-between mb-3">
              <button style={{ color: '#8B86A8' }}>
                <ChevronLeft style={{ width: '18px', height: '18px' }} />
              </button>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>{month}</p>
              <button style={{ color: '#8B86A8' }}>
                <ChevronRight style={{ width: '18px', height: '18px' }} />
              </button>
            </div>

            {/* Day labels */}
            <div className="grid grid-cols-7 mb-1">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <div key={i} className="flex items-center justify-center">
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#C5BBE8', fontFamily: 'Inter, sans-serif' }}>{d}</span>
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* Offset cells */}
              {Array.from({ length: startDayOffset }, (_, i) => (
                <div key={`offset-${i}`} className="aspect-square" />
              ))}
              {/* Day cells */}
              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1;
                const data = calendarData[day];
                return (
                  <div key={day}
                    className="aspect-square rounded-lg flex items-center justify-center"
                    style={{
                      background: data ? `${moodColors[data.score]}20` : 'rgba(108,63,232,0.04)',
                      border: data ? `1.5px solid ${moodColors[data.score]}40` : '1.5px solid rgba(108,63,232,0.06)',
                    }}>
                    {data
                      ? <span style={{ fontSize: '13px' }}>{data.emoji}</span>
                      : <span style={{ fontSize: '11px', fontWeight: 600, color: '#C5BBE8', fontFamily: 'Inter, sans-serif' }}>{day}</span>
                    }
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-3 mt-3">
              {moods.map(m => (
                <div key={m.value} className="flex items-center gap-1">
                  <span style={{ fontSize: '14px' }}>{m.emoji}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <p className="mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: '#16143A' }}>
            Insights ✨
          </p>
          <div className="space-y-2.5 pb-4">
            {insights.map((insight, i) => (
              <div key={i} className="p-4 flex items-start gap-3"
                style={{ borderRadius: '14px', background: 'white', boxShadow: '0px 2px 10px rgba(0,0,0,0.05)', borderLeft: `3px solid ${insight.color}` }}>
                <span style={{ fontSize: '20px', flexShrink: 0 }}>{insight.emoji}</span>
                <p style={{ fontSize: '13px', color: '#574E7E', fontFamily: 'Inter, sans-serif', lineHeight: 1.5, fontWeight: 500 }}>{insight.text}</p>
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
