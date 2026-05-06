import { ArrowLeft, Lock, CreditCard } from 'lucide-react';

export function PaymentCheckout() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto no-scrollbar" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="flex items-center gap-4 px-5 pt-12 pb-4">
        <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'white' }}>
          <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
        </button>
        <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: '#16143A' }}>
          Complete Purchase
        </h1>
      </div>

      <div className="px-5">
        {/* Order summary */}
        <div className="p-4 mb-5"
          style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108,63,232,0.3)' }}>
          <div className="flex items-center justify-between">
            <div>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: 'white' }}>
                Yearly Plan
              </p>
              <p className="mt-0.5" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
                7-day free trial included
              </p>
            </div>
            <div className="text-right">
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '22px', color: 'white' }}>
                ₹6,999
              </p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
                per year
              </p>
            </div>
          </div>
        </div>

        {/* Card payment section */}
        <div className="p-5 mb-4" style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
          <div className="flex items-center gap-2 mb-4">
            <CreditCard style={{ color: '#6C3FE8', width: '18px', height: '18px' }} />
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#16143A' }}>
              Pay with Card
            </p>
          </div>

          <div className="mb-3">
            <label className="block mb-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#574E7E' }}>CARD NUMBER</label>
            <input type="text" placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-3"
              style={{ borderRadius: '10px', fontFamily: 'Inter, sans-serif', fontSize: '14px', background: '#F7F5FC', border: '1.5px solid rgba(108,63,232,0.12)', outline: 'none', color: '#16143A' }} />
          </div>

          <div className="flex gap-3 mb-3">
            <div className="flex-1">
              <label className="block mb-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#574E7E' }}>EXPIRY</label>
              <input type="text" placeholder="MM / YY"
                className="w-full px-4 py-3"
                style={{ borderRadius: '10px', fontFamily: 'Inter, sans-serif', fontSize: '14px', background: '#F7F5FC', border: '1.5px solid rgba(108,63,232,0.12)', outline: 'none', color: '#16143A' }} />
            </div>
            <div className="flex-1">
              <label className="block mb-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#574E7E' }}>CVV</label>
              <input type="text" placeholder="•••"
                className="w-full px-4 py-3"
                style={{ borderRadius: '10px', fontFamily: 'Inter, sans-serif', fontSize: '14px', background: '#F7F5FC', border: '1.5px solid rgba(108,63,232,0.12)', outline: 'none', color: '#16143A' }} />
            </div>
          </div>

          <div>
            <label className="block mb-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#574E7E' }}>CARDHOLDER NAME</label>
            <input type="text" placeholder="Aisha Patel"
              className="w-full px-4 py-3"
              style={{ borderRadius: '10px', fontFamily: 'Inter, sans-serif', fontSize: '14px', background: '#F7F5FC', border: '1.5px solid rgba(108,63,232,0.12)', outline: 'none', color: '#16143A' }} />
          </div>
        </div>

        {/* Or divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px" style={{ background: 'rgba(108,63,232,0.1)' }} />
          <span style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>or pay with</span>
          <div className="flex-1 h-px" style={{ background: 'rgba(108,63,232,0.1)' }} />
        </div>

        <div className="flex gap-3 mb-6">
          <button className="flex-1 py-3.5 flex items-center justify-center gap-2"
            style={{ borderRadius: '12px', background: '#000', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: 'white' }}>
            <svg width="16" height="18" viewBox="0 0 16 18" fill="white"><path d="M13.22 9.73c-.02-2.18 1.78-3.24 1.86-3.29-1.01-1.48-2.58-1.68-3.14-1.71-1.34-.14-2.62.79-3.3.79-.68 0-1.73-.77-2.85-.75-1.47.02-2.83.86-3.58 2.18-1.53 2.65-.39 6.58 1.1 8.73.73 1.05 1.6 2.23 2.74 2.19 1.1-.05 1.52-.71 2.85-.71 1.33 0 1.71.71 2.88.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.31-3.53z"/></svg>
            Apple Pay
          </button>
          <button className="flex-1 py-3.5 flex items-center justify-center gap-2"
            style={{ borderRadius: '12px', background: 'white', border: '1.5px solid rgba(0,0,0,0.1)', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#16143A' }}>
            <span style={{ fontWeight: 800, fontSize: '16px', color: '#4285F4' }}>G</span>
            Google Pay
          </button>
        </div>

        <button className="w-full text-white py-4 mb-3"
          style={{ borderRadius: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)' }}>
          Confirm & Subscribe
        </button>

        <div className="flex items-center justify-center gap-2 pb-6">
          <Lock style={{ color: '#3FC49A', width: '14px', height: '14px' }} />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#8B86A8' }}>
            256-bit encrypted · Secure payment
          </p>
        </div>
      </div>
    </div>
  );
}
