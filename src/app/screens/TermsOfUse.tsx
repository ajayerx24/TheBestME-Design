import { ArrowLeft } from 'lucide-react';

const sections = [
  { title: '1. Acceptance of Terms', content: 'By accessing and using thebestME application, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use this application.' },
  { title: '2. Use License', content: "Permission is granted to temporarily access the materials on thebestME's application for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title." },
  { title: '3. Disclaimer', content: "The materials on thebestME's application are provided on an 'as is' basis. thebestME makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties." },
  { title: '4. Limitations', content: "In no event shall thebestME or its suppliers be liable for any damages arising out of the use or inability to use the materials on thebestME's application." },
];

export function TermsOfUse() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-4" style={{ background: 'white' }}>
        <button className="mb-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
          <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
        </button>
        <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '24px', color: '#16143A' }}>
          Terms of Use
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-2 h-2 rounded-full" style={{ background: '#3FC49A' }} />
          <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
            Last updated: May 1, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 py-5">
        <div className="space-y-4">
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

      {/* Accept button */}
      <div className="px-5 py-4" style={{ background: 'white', borderTop: '1px solid rgba(108,63,232,0.08)' }}>
        <button className="w-full text-white py-4"
          style={{ borderRadius: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)' }}>
          Accept & Continue
        </button>
      </div>
    </div>
  );
}
