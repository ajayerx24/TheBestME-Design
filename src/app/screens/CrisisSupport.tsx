import { ArrowLeft, ChevronRight, Phone, MessageCircle, MapPin } from 'lucide-react';

export function CrisisSupport() {
  const resources = [
    { icon: Phone, title: 'National Crisis Helpline', subtitle: 'iCall India — 9152987821', color: '#6C3FE8', bg: 'rgba(108,63,232,0.08)' },
    { icon: MessageCircle, title: 'Crisis Text Line', subtitle: 'Text HOME to 741741', color: '#3FC49A', bg: 'rgba(63,196,154,0.08)' },
    { icon: MapPin, title: 'Find a Therapist', subtitle: 'Near You', color: '#F5A74D', bg: 'rgba(245,167,77,0.08)' },
  ];

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto no-scrollbar" style={{ background: 'white' }}>
      {/* Back */}
      <div className="px-5 pt-12 pb-4">
        <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
          <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
        </button>
      </div>

      {/* Illustration */}
      <div className="flex justify-center mb-5">
        <div className="relative">
          <div className="w-28 h-28 rounded-3xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #EDE7FF 0%, #F3EEFF 100%)' }}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M30 8C18.4 8 9 17.4 9 29s9.4 21 21 21 21-9.4 21-21S41.6 8 30 8z" fill="#6C3FE8" opacity="0.15"/>
              <path d="M30 8C18.4 8 9 17.4 9 29s9.4 21 21 21 21-9.4 21-21S41.6 8 30 8z" stroke="#6C3FE8" strokeWidth="2"/>
              <path d="M22 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#6C3FE8" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <circle cx="30" cy="36" r="3" fill="#6C3FE8"/>
              <path d="M20 40c2.5 3.5 6 5.5 10 5.5s7.5-2 10-5.5" stroke="#6C3FE8" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-2xl flex items-center justify-center"
            style={{ background: '#3FC49A', boxShadow: '0px 4px 12px rgba(63,196,154,0.4)' }}>
            <span style={{ color: 'white', fontSize: '16px' }}>💚</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-6 text-center mb-5">
        <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '26px', color: '#16143A', lineHeight: 1.3 }}>
          You Are Not Alone.
        </h1>
        <p className="mt-2 max-w-xs mx-auto"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#8B86A8', lineHeight: 1.7 }}>
          If you're struggling, support is available right now. Reach out — you matter.
        </p>
      </div>

      {/* Primary CTA */}
      <div className="px-5 mb-5">
        <button className="w-full py-4 flex items-center justify-center gap-3"
          style={{
            borderRadius: '16px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: 'white',
            background: 'linear-gradient(135deg, #F97566 0%, #E84E3C 100%)',
            boxShadow: '0px 8px 24px rgba(249,117,102,0.45)',
          }}>
          <MessageCircle style={{ width: '20px', height: '20px' }} />
          Talk to Someone Now
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 px-5 mb-5">
        <div className="flex-1 h-px" style={{ background: 'rgba(108,63,232,0.1)' }} />
        <span style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>Resources</span>
        <div className="flex-1 h-px" style={{ background: 'rgba(108,63,232,0.1)' }} />
      </div>

      {/* Resources */}
      <div className="px-5 space-y-3 flex-1">
        {resources.map((resource, i) => (
          <button key={i} className="w-full flex items-center gap-4 p-4 text-left"
            style={{ borderRadius: '14px', background: resource.bg, border: `1px solid ${resource.color}20` }}>
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'white' }}>
              <resource.icon style={{ color: resource.color, width: '20px', height: '20px' }} />
            </div>
            <div className="flex-1">
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>
                {resource.title}
              </p>
              <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>
                {resource.subtitle}
              </p>
            </div>
            <ChevronRight style={{ color: '#C5BBE8', width: '16px', height: '16px' }} />
          </button>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-center px-6 pt-5 pb-8"
        style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#C5BBE8', lineHeight: 1.6 }}>
        thebestME is not a crisis service. If you are in immediate danger, please call emergency services.
      </p>
    </div>
  );
}
