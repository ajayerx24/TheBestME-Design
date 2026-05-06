import { ArrowLeft, Bookmark } from 'lucide-react';

export function JournalEntry() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto no-scrollbar" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-12 pb-4" style={{ background: 'white' }}>
        <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
          <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
        </button>
        <div className="text-center">
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: '#16143A' }}>
            Day 4 — Journal
          </p>
          <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>May 6, 2026</p>
        </div>
        <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
          <Bookmark style={{ color: '#8B86A8', width: '18px', height: '18px' }} />
        </button>
      </div>

      <div className="px-5 pt-5">
        {/* Prompt */}
        <div className="p-4 mb-5"
          style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #EDE7FF 0%, #F3EEFF 100%)', border: '1px solid rgba(108,63,232,0.12)' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, color: '#6C3FE8', fontFamily: 'Inter, sans-serif', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '6px' }}>
            Today's Prompt
          </p>
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: '#16143A', lineHeight: 1.4 }}>
            What triggers your anxiety?
          </p>
        </div>

        {/* Textarea */}
        <div className="mb-2 relative">
          <textarea
            placeholder="Write your thoughts here... Let it all out."
            className="w-full resize-none"
            style={{
              minHeight: '200px',
              borderRadius: '14px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              padding: '16px',
              background: 'white',
              border: '1.5px solid rgba(108,63,232,0.1)',
              outline: 'none',
              lineHeight: 1.8,
              color: '#16143A',
              boxShadow: '0px 2px 12px rgba(0,0,0,0.04)',
            }}
          />
        </div>
        <div className="flex justify-end mb-5">
          <span style={{ fontSize: '12px', color: '#C5BBE8', fontFamily: 'Inter, sans-serif' }}>0 / 500</span>
        </div>

        <button className="w-full text-white py-4 mb-8"
          style={{ borderRadius: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)' }}>
          Save Entry
        </button>

        {/* Previous Entries */}
        <div className="flex items-center justify-between mb-4">
          <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '17px', color: '#16143A' }}>
            Previous Entries
          </h2>
          <span style={{ fontSize: '12px', color: '#6C3FE8', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>2 entries</span>
        </div>

        <div className="space-y-3 pb-4">
          {[
            { date: 'May 5, 2026', plan: 'Overcoming Anxiety', preview: 'Today I noticed that crowded places really trigger my anxiety. I felt my heart racing when...' },
            { date: 'May 4, 2026', plan: 'Overcoming Anxiety', preview: 'Morning meditation helped me feel more grounded. I practiced the breathing technique and...' },
          ].map((entry, i) => (
            <div key={i} className="p-4"
              style={{ borderRadius: '14px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
              <div className="flex items-center gap-2 mb-2">
                <span style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>{entry.date}</span>
                <span className="inline-block px-2.5 py-0.5 rounded-full"
                  style={{ background: 'rgba(108,63,232,0.1)', fontSize: '11px', fontWeight: 700, color: '#6C3FE8', fontFamily: 'Inter, sans-serif' }}>
                  {entry.plan}
                </span>
              </div>
              <p style={{ fontSize: '13px', color: '#574E7E', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>{entry.preview}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
