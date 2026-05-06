import { ArrowLeft, Shield } from 'lucide-react';

const sections = [
  { title: '1. Information We Collect', content: 'We collect information that you provide directly to us, including your name, email address, profile information, journal entries, mood tracking data, and usage information about your interaction with our application.' },
  { title: '2. How We Use Your Information', content: 'We use the information we collect to provide, maintain, and improve our services, to develop new features, to protect thebestME and our users, and to communicate with you.' },
  { title: '3. Information Sharing', content: 'We do not share your personal information with companies, organizations, or individuals outside of thebestME except in the following cases: with your consent, for legal reasons, or to protect rights and safety.' },
  { title: '4. Data Security', content: 'We work hard to protect thebestME and our users from unauthorized access. All data is encrypted in transit and at rest using industry-standard 256-bit encryption.' },
  { title: '5. Your Rights', content: 'You have the right to access, update, or delete your personal information at any time. You can also export your data or request that we delete your account and all associated data.' },
];

export function PrivacyPolicy() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-4" style={{ background: 'white' }}>
        <button className="mb-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
          <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
            style={{ background: 'rgba(63,196,154,0.1)' }}>
            <Shield style={{ color: '#3FC49A', width: '20px', height: '20px' }} />
          </div>
          <div>
            <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '22px', color: '#16143A' }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif', marginTop: '1px' }}>
              Last updated: May 1, 2026
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 py-5">
        {/* Shield banner */}
        <div className="p-4 mb-5 flex items-center gap-3"
          style={{ borderRadius: '14px', background: 'rgba(63,196,154,0.08)', border: '1px solid rgba(63,196,154,0.2)' }}>
          <Shield style={{ color: '#3FC49A', width: '20px', height: '20px', flexShrink: 0 }} />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#574E7E', lineHeight: 1.6 }}>
            Your data is private and encrypted. We never sell your personal information.
          </p>
        </div>

        <div className="space-y-3">
          {sections.map((section, i) => (
            <div key={i} className="p-4"
              style={{ borderRadius: '14px', background: 'white', boxShadow: '0px 2px 8px rgba(0,0,0,0.04)' }}>
              <h2 className="mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#16143A' }}>
                {section.title}
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#574E7E', lineHeight: 1.8 }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
