import { ArrowLeft, Lock, Clock, Headphones, Sparkles, ChevronRight } from 'lucide-react';

export function LockedSession() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto no-scrollbar" style={{ background: '#F7F5FC' }}>
      {/* Header banner */}
      <div className="relative overflow-hidden"
        style={{ height: '220px', background: 'linear-gradient(135deg, #4A25C9 0%, #6C3FE8 60%, #9B6FFF 100%)' }}>
        <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        <div className="absolute -left-8 bottom-0 w-32 h-32 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }} />

        <button className="absolute top-12 left-5 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)' }}>
          <ArrowLeft style={{ color: 'white', width: '18px', height: '18px' }} />
        </button>

        {/* Lock overlay icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '2px solid rgba(255,255,255,0.3)' }}>
              <Lock style={{ color: 'white', width: '32px', height: '32px' }} />
            </div>
            <span className="px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.2)', fontSize: '12px', fontWeight: 700, color: 'white', fontFamily: 'Inter, sans-serif', letterSpacing: '0.5px' }}>
              ✨ PREMIUM SESSION
            </span>
          </div>
        </div>

        <div className="absolute -bottom-5 left-0 right-0 h-10 bg-white" style={{ borderRadius: '20px 20px 0 0' }} />
      </div>

      <div className="px-5 pb-8">
        {/* Session title */}
        <div className="mb-4">
          <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '22px', color: '#16143A', lineHeight: 1.3 }}>
            Day 5: Deep Breathing & Grounding
          </h1>
          <p className="mt-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#8B86A8' }}>
            Overcoming Anxiety · Part of 21-Day Program
          </p>
        </div>

        {/* Blurred content preview */}
        <div className="relative mb-5 overflow-hidden" style={{ borderRadius: '16px' }}>
          {/* Actual content - blurred */}
          <div className="p-5" style={{ background: 'white', filter: 'blur(3px)', userSelect: 'none', pointerEvents: 'none' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#574E7E', lineHeight: 1.8 }}>
              Welcome to Day 5. Today we'll explore the 4-7-8 breathing technique combined with the 5-4-3-2-1 grounding method to help anchor you in the present moment and release anxious thoughts...
            </p>
            <div className="mt-4 p-3 rounded-xl" style={{ background: '#F7F5FC' }}>
              <p style={{ fontSize: '13px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>Today's Exercise: Breathe in for 4 counts, hold for 7, exhale for 8...</p>
            </div>
          </div>

          {/* Lock overlay */}
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'linear-gradient(to bottom, rgba(247,245,252,0.2), rgba(247,245,252,0.85))' }}>
            <div className="flex flex-col items-center gap-2">
              <Lock style={{ color: '#6C3FE8', width: '24px', height: '24px' }} />
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>
                Premium Content
              </p>
            </div>
          </div>
        </div>

        {/* Session stats */}
        <div className="flex gap-3 mb-5">
          {[
            { icon: Clock, label: '18 min', sub: 'Session' },
            { icon: Headphones, label: 'Audio', sub: 'Guided' },
            { icon: Lock, label: 'Day 5', sub: 'Locked' },
          ].map(stat => (
            <div key={stat.label} className="flex-1 p-3 flex flex-col items-center gap-1"
              style={{ borderRadius: '14px', background: 'white', boxShadow: '0px 2px 10px rgba(0,0,0,0.05)' }}>
              <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(108,63,232,0.1)' }}>
                <stat.icon style={{ color: '#6C3FE8', width: '15px', height: '15px' }} />
              </div>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '12px', color: '#16143A' }}>{stat.label}</p>
              <p style={{ fontSize: '10px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Upgrade CTA */}
        <div className="p-5 mb-5"
          style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 12px 32px rgba(108,63,232,0.4)' }}>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles style={{ color: 'rgba(255,255,255,0.9)', width: '18px', height: '18px' }} />
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: 'white' }}>
              Unlock Premium
            </p>
          </div>
          <p className="mb-4" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>
            Access 100+ premium sessions, audio guides, and your complete healing journey.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '22px', color: 'white' }}>₹583<span style={{ fontSize: '14px', fontWeight: 500 }}>/mo</span></p>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>Billed annually</p>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5"
              style={{ borderRadius: '12px', background: 'white', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '13px', color: '#6C3FE8' }}>
              Upgrade <ChevronRight style={{ width: '14px', height: '14px' }} />
            </button>
          </div>
        </div>

        {/* Other sessions in this plan */}
        <p className="mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#16143A' }}>
          Free Sessions in This Plan
        </p>
        {[
          { day: 1, title: 'Understanding Anxiety', done: true },
          { day: 2, title: 'The Anxiety Cycle', done: true },
          { day: 3, title: 'Identifying Triggers', done: true },
          { day: 4, title: 'Cognitive Reframing', done: true },
        ].map(s => (
          <div key={s.day} className="flex items-center gap-3 p-3.5 mb-2"
            style={{ borderRadius: '12px', background: 'white', boxShadow: '0px 1px 6px rgba(0,0,0,0.04)' }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: s.done ? 'linear-gradient(135deg, #6C3FE8, #9B6FFF)' : 'rgba(108,63,232,0.08)' }}>
              {s.done
                ? <span style={{ color: 'white', fontSize: '12px', fontWeight: 800 }}>✓</span>
                : <span style={{ color: '#C5BBE8', fontSize: '11px', fontWeight: 700 }}>{s.day}</span>
              }
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px', color: '#16143A' }}>Day {s.day}: {s.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
