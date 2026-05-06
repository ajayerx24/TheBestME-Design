import { Check, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function SubscriptionPlans() {
  const [selected, setSelected] = useState<'yearly' | 'monthly'>('yearly');

  const features = [
    { icon: '📚', text: 'All Premium Plans' },
    { icon: '🎧', text: 'Audio Sessions' },
    { icon: '📋', text: 'Workbooks & Tools' },
    { icon: '📊', text: 'Mood Tracking' },
    { icon: '⚡', text: 'Priority Support' },
  ];

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto no-scrollbar" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="px-6 pt-14 pb-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
          style={{ background: 'linear-gradient(135deg, #6C3FE8, #9B6FFF)', boxShadow: '0px 4px 16px rgba(108,63,232,0.3)' }}>
          <Sparkles style={{ width: '14px', height: '14px', color: 'white' }} />
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'white', fontFamily: 'Inter, sans-serif', letterSpacing: '0.5px' }}>
            PREMIUM
          </span>
        </div>
        <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '26px', color: '#16143A', lineHeight: 1.3 }}>
          Choose Your Plan
        </h1>
        <p className="mt-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#8B86A8' }}>
          Unlock your full healing potential
        </p>
      </div>

      <div className="px-5 flex-1">
        {/* Yearly plan */}
        <button
          onClick={() => setSelected('yearly')}
          className="w-full text-left p-5 mb-4 relative transition-all"
          style={{
            borderRadius: '20px',
            background: selected === 'yearly' ? 'linear-gradient(135deg, #6C3FE8 0%, #8A5FFF 100%)' : 'white',
            border: selected === 'yearly' ? 'none' : '1.5px solid rgba(108,63,232,0.15)',
            boxShadow: selected === 'yearly' ? '0px 12px 32px rgba(108,63,232,0.4)' : '0px 2px 12px rgba(0,0,0,0.05)',
          }}>

          {/* Badge */}
          <div className="absolute -top-3 right-5 px-3 py-1 rounded-full"
            style={{ background: '#F97566', boxShadow: '0px 4px 12px rgba(249,117,102,0.4)' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'white', fontFamily: 'Inter, sans-serif' }}>
              ✦ BEST VALUE · SAVE 36%
            </span>
          </div>

          <div className="flex items-start justify-between mb-4">
            <div>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: selected === 'yearly' ? 'white' : '#16143A' }}>
                Yearly Plan
              </p>
              <p className="mt-0.5" style={{ fontSize: '13px', color: selected === 'yearly' ? 'rgba(255,255,255,0.7)' : '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
                Billed annually
              </p>
            </div>
            <div className="text-right">
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '26px', color: selected === 'yearly' ? 'white' : '#16143A' }}>
                ₹583
              </p>
              <p style={{ fontSize: '12px', color: selected === 'yearly' ? 'rgba(255,255,255,0.7)' : '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
                per month
              </p>
            </div>
          </div>

          <div className="space-y-2.5">
            {features.map(f => (
              <div key={f.text} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: selected === 'yearly' ? 'rgba(255,255,255,0.25)' : 'rgba(108,63,232,0.12)' }}>
                  <Check style={{ width: '11px', height: '11px', color: selected === 'yearly' ? 'white' : '#6C3FE8', strokeWidth: 3 }} />
                </div>
                <span style={{ fontSize: '13px', color: selected === 'yearly' ? 'rgba(255,255,255,0.9)' : '#574E7E', fontFamily: 'Inter, sans-serif' }}>
                  {f.text}
                </span>
              </div>
            ))}
          </div>
        </button>

        {/* Monthly plan */}
        <button
          onClick={() => setSelected('monthly')}
          className="w-full text-left p-5 mb-6 transition-all"
          style={{
            borderRadius: '20px',
            background: selected === 'monthly' ? 'linear-gradient(135deg, #6C3FE8 0%, #8A5FFF 100%)' : 'white',
            border: selected === 'monthly' ? 'none' : '1.5px solid rgba(108,63,232,0.15)',
            boxShadow: selected === 'monthly' ? '0px 12px 32px rgba(108,63,232,0.4)' : '0px 2px 12px rgba(0,0,0,0.05)',
          }}>
          <div className="flex items-start justify-between">
            <div>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: selected === 'monthly' ? 'white' : '#16143A' }}>
                Monthly Plan
              </p>
              <p className="mt-0.5" style={{ fontSize: '13px', color: selected === 'monthly' ? 'rgba(255,255,255,0.7)' : '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
                Cancel anytime
              </p>
            </div>
            <div className="text-right">
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '26px', color: selected === 'monthly' ? 'white' : '#16143A' }}>
                ₹899
              </p>
              <p style={{ fontSize: '12px', color: selected === 'monthly' ? 'rgba(255,255,255,0.7)' : '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
                per month
              </p>
            </div>
          </div>
        </button>
      </div>

      <div className="px-5 pb-8">
        <button className="w-full text-white py-4 mb-2"
          style={{ borderRadius: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)' }}>
          Start 7-Day Free Trial
        </button>
        <p className="text-center" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#8B86A8' }}>
          No credit card required · Cancel anytime
        </p>
      </div>
    </div>
  );
}
