import { ArrowLeft, Heart, Check, Clock, Calendar, Headphones } from 'lucide-react';
import { useState } from 'react';

export function PlanDetails() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto no-scrollbar" style={{ background: 'white' }}>
      {/* Banner */}
      <div className="relative flex items-center justify-center overflow-hidden"
        style={{ height: '200px', background: 'linear-gradient(135deg, #4A25C9 0%, #6C3FE8 60%, #9B6FFF 100%)' }}>
        {/* Decorative */}
        <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        <div className="absolute -left-8 bottom-0 w-32 h-32 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }} />

        <span style={{ fontSize: '72px', position: 'relative', zIndex: 1 }}>🧠</span>

        <button className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)' }}>
          <ArrowLeft style={{ color: 'white', width: '18px', height: '18px' }} />
        </button>

        <button onClick={() => setSaved(!saved)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)' }}>
          <Heart style={{ color: saved ? '#F97566' : 'white', width: '18px', height: '18px', fill: saved ? '#F97566' : 'none' }} />
        </button>

        <div className="absolute -bottom-5 left-0 right-0 h-10 bg-white" style={{ borderRadius: '20px 20px 0 0' }} />
      </div>

      {/* Content */}
      <div className="px-5 pb-8">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '20px', color: '#16143A', lineHeight: 1.3 }}>
            Overcoming Anxiety
          </h1>
        </div>

        <p className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '14px', color: '#8B86A8' }}>
          21-Day Guided Program
        </p>

        <span className="inline-block px-3 py-1 rounded-full mb-4"
          style={{ background: 'rgba(108,63,232,0.1)', fontSize: '12px', fontWeight: 700, color: '#6C3FE8', fontFamily: 'Inter, sans-serif' }}>
          Anxiety
        </span>

        <p className="mb-5" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#574E7E', lineHeight: 1.8 }}>
          A comprehensive 21-day journey designed to help you understand, manage, and overcome anxiety through daily lessons, exercises, and mindfulness practices.
        </p>

        {/* Stats */}
        <div className="flex gap-4 mb-6 p-4" style={{ borderRadius: '14px', background: '#F7F5FC' }}>
          {[
            { icon: Calendar, label: '21 Days', sub: 'Duration' },
            { icon: Clock, label: '15 min', sub: 'Daily' },
            { icon: Headphones, label: 'Audio', sub: 'Guided' },
          ].map(stat => (
            <div key={stat.label} className="flex-1 flex flex-col items-center">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-1"
                style={{ background: 'rgba(108,63,232,0.1)' }}>
                <stat.icon style={{ color: '#6C3FE8', width: '15px', height: '15px' }} />
              </div>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '13px', color: '#16143A' }}>{stat.label}</p>
              <p style={{ fontSize: '11px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Plan Includes */}
        <h2 className="mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: '#16143A' }}>
          Plan Includes
        </h2>

        <div className="grid grid-cols-2 gap-2.5 mb-8">
          {['Daily Lessons', 'Journaling Prompts', 'Affirmations', 'Action Steps', 'Audio Meditations', 'Progress Tracking'].map(item => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(63,196,154,0.12)' }}>
                <Check style={{ color: '#3FC49A', width: '11px', height: '11px', strokeWidth: 3 }} />
              </div>
              <span style={{ fontSize: '13px', color: '#574E7E', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{item}</span>
            </div>
          ))}
        </div>

        <button className="w-full text-white py-4 mb-3"
          style={{ borderRadius: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)' }}>
          Start Plan
        </button>

        <button className="w-full py-4 flex items-center justify-center gap-2"
          style={{ borderRadius: '14px', border: '2px solid #6C3FE8', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#6C3FE8', background: 'transparent' }}>
          <Heart style={{ width: '16px', height: '16px' }} />
          Save Plan
        </button>
      </div>
    </div>
  );
}
