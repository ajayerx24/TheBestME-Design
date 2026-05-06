import { Search, ChevronRight } from 'lucide-react';

export function JournalHistory() {
  const entries = [
    { day: '06', month: 'MAY', plan: 'Overcoming Anxiety', preview: 'Today I noticed that crowded places really trigger my anxiety. I felt my heart racing when...', mood: '😊' },
    { day: '05', month: 'MAY', plan: 'Overcoming Anxiety', preview: 'Morning meditation helped me feel more grounded. I practiced the breathing technique and...', mood: '😐' },
    { day: '04', month: 'MAY', plan: 'Overcoming Anxiety', preview: 'Reflecting on my progress, I can see small improvements in how I respond to stress...', mood: '😊' },
  ];

  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="px-5 pt-14 pb-4" style={{ background: 'white' }}>
        <div className="flex items-center justify-between mb-4">
          <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '24px', color: '#16143A' }}>
            My Journal
          </h1>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#6C3FE8', fontFamily: 'Inter, sans-serif' }}>
            3 entries
          </span>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#8B86A8', width: '17px', height: '17px' }} />
          <input type="text" placeholder="Search entries..."
            className="w-full py-3 pr-4"
            style={{ paddingLeft: '44px', borderRadius: '12px', fontFamily: 'Inter, sans-serif', fontSize: '14px', background: '#F7F5FC', border: '1.5px solid rgba(108,63,232,0.1)', outline: 'none', color: '#16143A' }} />
        </div>
      </div>

      {/* Timeline */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 py-5">
        <div className="flex items-center gap-2 mb-4">
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '12px', color: '#8B86A8', letterSpacing: '1px' }}>MAY 2026</span>
          <div className="flex-1 h-px" style={{ background: 'rgba(108,63,232,0.1)' }} />
        </div>

        <div className="space-y-3">
          {entries.map((entry, i) => (
            <div key={i} className="flex gap-3">
              {/* Date column */}
              <div className="flex-shrink-0 text-center pt-1">
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '22px', color: '#16143A', lineHeight: 1 }}>
                  {entry.day}
                </p>
                <p style={{ fontSize: '10px', fontWeight: 700, color: '#6C3FE8', fontFamily: 'Inter, sans-serif', letterSpacing: '0.5px' }}>
                  {entry.month}
                </p>
              </div>

              {/* Entry card */}
              <button className="flex-1 p-4 text-left"
                style={{ borderRadius: '14px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full"
                    style={{ background: 'rgba(108,63,232,0.1)', fontSize: '11px', fontWeight: 700, color: '#6C3FE8', fontFamily: 'Inter, sans-serif' }}>
                    {entry.plan}
                  </span>
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: '16px' }}>{entry.mood}</span>
                    <ChevronRight style={{ color: '#C5BBE8', width: '16px', height: '16px' }} />
                  </div>
                </div>
                <p style={{ fontSize: '13px', color: '#574E7E', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>
                  {entry.preview}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
