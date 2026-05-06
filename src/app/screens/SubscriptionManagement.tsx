import { ArrowLeft, ChevronRight, TrendingUp, RefreshCw, PauseCircle, XCircle } from 'lucide-react';

export function SubscriptionManagement() {
  const options = [
    { icon: TrendingUp, label: 'Upgrade Plan', color: '#6C3FE8', danger: false },
    { icon: RefreshCw, label: 'Change Billing Cycle', color: '#6C3FE8', danger: false },
    { icon: PauseCircle, label: 'Pause Subscription', color: '#6C3FE8', danger: false },
    { icon: XCircle, label: 'Cancel Subscription', color: '#E8414A', danger: true },
  ];

  return (
    <div className="w-full h-full flex flex-col px-5 py-8" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'white' }}>
          <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
        </button>
        <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: '#16143A' }}>
          My Subscription
        </h1>
      </div>

      {/* Current Plan Card */}
      <div className="p-5 mb-6"
        style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 12px 32px rgba(108,63,232,0.35)' }}>
        <div className="flex items-start justify-between mb-3">
          <div>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '18px', color: 'white' }}>
              Yearly Plan
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-block px-3 py-1 rounded-full" style={{ background: 'rgba(63,196,154,0.25)', fontSize: '12px', fontWeight: 700, color: '#A8FFE4', fontFamily: 'Inter, sans-serif' }}>
                ● Active
              </span>
            </div>
          </div>
          <div className="text-right">
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '24px', color: 'white' }}>₹6,999</p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>/year</p>
          </div>
        </div>

        <div className="h-px mb-3" style={{ background: 'rgba(255,255,255,0.2)' }} />

        <div className="flex items-center justify-between">
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
            Next renewal
          </p>
          <p style={{ fontSize: '13px', fontWeight: 600, color: 'white', fontFamily: 'Inter, sans-serif' }}>
            May 6, 2027
          </p>
        </div>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-1" style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
        {options.map((option, i) => (
          <div key={option.label}>
            <button className="w-full flex items-center justify-between px-4 py-4 transition-all"
              style={{ background: 'white' }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: option.danger ? 'rgba(232,65,74,0.1)' : 'rgba(108,63,232,0.1)' }}>
                  <option.icon style={{ color: option.color, width: '18px', height: '18px' }} />
                </div>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600, color: option.danger ? '#E8414A' : '#16143A' }}>
                  {option.label}
                </span>
              </div>
              <ChevronRight style={{ color: '#C5BBE8', width: '18px', height: '18px' }} />
            </button>
            {i < options.length - 1 && <div className="mx-4 h-px" style={{ background: 'rgba(108,63,232,0.06)' }} />}
          </div>
        ))}
      </div>
    </div>
  );
}
