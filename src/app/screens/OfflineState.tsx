import { WifiOff, RefreshCw, Download, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function OfflineState() {
  const [retrying, setRetrying] = useState(false);

  const handleRetry = () => {
    setRetrying(true);
    setTimeout(() => setRetrying(false), 2000);
  };

  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-4" style={{ background: 'white' }}>
        <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: '#16143A' }}>
          thebestME
        </h1>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* Illustration */}
        <div className="relative mb-8">
          {/* Background circle */}
          <div className="w-44 h-44 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(108,63,232,0.07)' }}>
            <div className="w-32 h-32 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(108,63,232,0.1)' }}>
              <WifiOff style={{ color: '#8B86A8', width: '52px', height: '52px' }} />
            </div>
          </div>
          {/* Decorative dots */}
          <div className="absolute top-3 right-3 w-4 h-4 rounded-full" style={{ background: 'rgba(249,117,102,0.4)' }} />
          <div className="absolute top-8 right-0 w-2 h-2 rounded-full" style={{ background: 'rgba(245,167,77,0.4)' }} />
          <div className="absolute bottom-5 left-0 w-3 h-3 rounded-full" style={{ background: 'rgba(108,63,232,0.3)' }} />
        </div>

        <h2 className="text-center mb-2"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '24px', color: '#16143A' }}>
          No Internet Connection
        </h2>
        <p className="text-center mb-8"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#8B86A8', lineHeight: 1.7 }}>
          It looks like you're offline. Check your Wi-Fi or mobile data connection and try again.
        </p>

        {/* Retry button */}
        <button onClick={handleRetry}
          className="w-full py-4 mb-4 flex items-center justify-center gap-3"
          style={{ borderRadius: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', color: 'white', boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)' }}>
          <RefreshCw style={{ width: '18px', height: '18px', animation: retrying ? 'spin 1s linear infinite' : 'none' }} />
          {retrying ? 'Checking Connection...' : 'Try Again'}
        </button>

        {/* Offline content */}
        <button className="w-full py-4 flex items-center justify-center gap-3"
          style={{ borderRadius: '14px', background: 'white', border: '1.5px solid rgba(108,63,232,0.15)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#6C3FE8' }}>
          <Download style={{ width: '18px', height: '18px' }} />
          Access Downloaded Content
        </button>
      </div>

      {/* Downloaded content preview */}
      <div className="px-5 pb-8">
        <p className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 700, color: '#8B86A8', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
          Available Offline
        </p>

        <div className="space-y-2.5">
          {[
            { emoji: '🧠', name: 'Overcoming Anxiety', type: 'Plan · 4 sessions', color: '#EDE7FF' },
            { emoji: '📖', name: 'My Journal Entries', type: '3 entries saved', color: '#F3EEFF' },
            { emoji: '😊', name: 'Mood History', type: 'Last 30 days', color: '#E8F8F3' },
          ].map(item => (
            <div key={item.name}
              className="p-4 flex items-center gap-3"
              style={{ borderRadius: '14px', background: 'white', boxShadow: '0px 2px 8px rgba(0,0,0,0.05)' }}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: item.color }}>
                <span style={{ fontSize: '22px' }}>{item.emoji}</span>
              </div>
              <div className="flex-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>{item.name}</p>
                <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>{item.type}</p>
              </div>
              <ArrowRight style={{ color: '#C5BBE8', width: '16px', height: '16px' }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
