import { CheckCircle, ArrowRight, Download, Home } from 'lucide-react';

export function PurchaseConfirmation() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto no-scrollbar" style={{ background: '#F7F5FC' }}>
      {/* Success Hero */}
      <div className="flex flex-col items-center pt-16 pb-8 px-6"
        style={{ background: 'linear-gradient(160deg, #F3EEFF 0%, #FAF9FD 100%)' }}>
        {/* Animated checkmark ring */}
        <div className="relative mb-5">
          <div className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #6C3FE8, #9B6FFF)', boxShadow: '0px 16px 40px rgba(108,63,232,0.45)' }}>
            <CheckCircle style={{ color: 'white', width: '44px', height: '44px' }} />
          </div>
          {/* Outer ring */}
          <div className="absolute -inset-3 rounded-full" style={{ border: '2px solid rgba(108,63,232,0.15)' }} />
          <div className="absolute -inset-6 rounded-full" style={{ border: '1px solid rgba(108,63,232,0.08)' }} />
          {/* Sparkles */}
          <span className="absolute -top-1 right-0 text-xl">✨</span>
          <span className="absolute bottom-0 -left-1 text-lg">🎉</span>
        </div>

        <h1 className="text-center mb-2"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '26px', color: '#16143A' }}>
          Payment Successful!
        </h1>
        <p className="text-center"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#8B86A8', lineHeight: 1.6 }}>
          Welcome to thebestME Premium.<br />Your healing journey begins now.
        </p>
      </div>

      <div className="px-5 pt-5">
        {/* Order Card */}
        <div className="p-5 mb-4"
          style={{ borderRadius: '20px', background: 'white', boxShadow: '0px 2px 16px rgba(0,0,0,0.06)' }}>
          <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: '#8B86A8', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
            Order Summary
          </p>
          {[
            { label: 'Plan', value: 'Yearly Premium' },
            { label: 'Amount', value: '₹6,999 / year' },
            { label: 'Trial Ends', value: 'May 13, 2026' },
            { label: 'Next Billing', value: 'May 13, 2027' },
            { label: 'Order ID', value: '#TBM-2026-00812' },
          ].map((row, i, arr) => (
            <div key={row.label}
              className="flex items-center justify-between py-3"
              style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(108,63,232,0.07)' : 'none' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#8B86A8' }}>{row.label}</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px', color: '#16143A' }}>{row.value}</span>
            </div>
          ))}
        </div>

        {/* What's unlocked */}
        <div className="p-5 mb-5"
          style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 10px 28px rgba(108,63,232,0.35)' }}>
          <p className="mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: 'white' }}>
            🎁 You've unlocked:
          </p>
          <div className="space-y-2.5">
            {['100+ Premium Plans', 'Audio Meditations', 'Journal Export', 'Priority Support', 'Offline Downloads'].map(item => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.25)' }}>
                  <span style={{ fontSize: '10px', color: 'white', fontWeight: 800 }}>✓</span>
                </div>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.92)', fontFamily: 'Inter, sans-serif' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <button className="w-full text-white py-4 mb-3 flex items-center justify-center gap-2"
          style={{ borderRadius: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)' }}>
          Start My Journey <ArrowRight style={{ width: '16px', height: '16px' }} />
        </button>

        <div className="flex gap-3 pb-8">
          <button className="flex-1 py-3.5 flex items-center justify-center gap-2"
            style={{ borderRadius: '12px', background: 'white', border: '1.5px solid rgba(108,63,232,0.15)', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px', color: '#6C3FE8' }}>
            <Download style={{ width: '15px', height: '15px' }} />
            Receipt
          </button>
          <button className="flex-1 py-3.5 flex items-center justify-center gap-2"
            style={{ borderRadius: '12px', background: 'white', border: '1.5px solid rgba(108,63,232,0.15)', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px', color: '#574E7E' }}>
            <Home style={{ width: '15px', height: '15px' }} />
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
