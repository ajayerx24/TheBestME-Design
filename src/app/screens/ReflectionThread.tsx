import { ArrowLeft, Heart, Send, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

export function ReflectionThread() {
  const [liked, setLiked] = useState<Record<number, boolean>>({});

  const comments = [
    { name: 'Sarah M.', initials: 'SM', time: '2h ago', text: "For me, it's usually when I'm in crowded spaces. I've started using the breathing techniques from Day 2 and they really help.", likes: 12, verified: true, color: '#6C3FE8' },
    { name: 'Alex P.', initials: 'AP', time: '4h ago', text: "Social situations trigger mine the most. I've been working on recognizing the physical signs earlier so I can take a break before it gets overwhelming.", likes: 8, verified: false, color: '#3FC49A' },
    { name: 'Jamie L.', initials: 'JL', time: '5h ago', text: "Realizing that uncertainty is a big trigger for me was eye-opening. Now I'm learning to sit with that discomfort instead of trying to control everything.", likes: 15, verified: true, color: '#F97566' },
  ];

  return (
    <div className="w-full h-full flex flex-col" style={{ background: 'white' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-3" style={{ borderBottom: '1px solid rgba(108,63,232,0.08)' }}>
        <button className="mb-3 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
          <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
        </button>
        <div className="flex items-center justify-between">
          <div>
            <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '17px', color: '#16143A' }}>
              Anxiety Support Circle
            </h1>
            <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>
              127 members · 8 online
            </p>
          </div>
          <button className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
            <MoreHorizontal style={{ color: '#8B86A8', width: '18px', height: '18px' }} />
          </button>
        </div>
      </div>

      {/* Prompt */}
      <div className="px-5 py-4"
        style={{ background: 'linear-gradient(135deg, #EDE7FF 0%, #F3EEFF 100%)', borderBottom: '1px solid rgba(108,63,232,0.08)' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, color: '#6C3FE8', fontFamily: 'Inter, sans-serif', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '5px' }}>
          Today's Reflection
        </p>
        <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#16143A', lineHeight: 1.4 }}>
          What triggers your anxiety the most?
        </p>
      </div>

      {/* Comments */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 py-4 space-y-5">
        {comments.map((comment, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 text-white text-sm font-bold"
              style={{ background: `linear-gradient(135deg, ${comment.color} 0%, ${comment.color}BB 100%)`, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', fontWeight: 800 }}>
              {comment.initials}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '13px', color: '#16143A' }}>
                  {comment.name}
                </p>
                {comment.verified && (
                  <span className="px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(63,196,154,0.12)', fontSize: '10px', fontWeight: 700, color: '#3FC49A', fontFamily: 'Inter, sans-serif' }}>
                    Verified
                  </span>
                )}
                <span style={{ fontSize: '11px', color: '#C5BBE8', fontFamily: 'Inter, sans-serif' }}>{comment.time}</span>
              </div>

              <div className="p-3 mb-2"
                style={{ borderRadius: '12px', background: '#F7F5FC', border: '1px solid rgba(108,63,232,0.06)' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#574E7E', lineHeight: 1.7 }}>
                  {comment.text}
                </p>
              </div>

              <button className="flex items-center gap-1.5" onClick={() => setLiked(l => ({ ...l, [i]: !l[i] }))}>
                <Heart style={{
                  color: liked[i] ? '#F97566' : '#C5BBE8', width: '14px', height: '14px',
                  fill: liked[i] ? '#F97566' : 'none'
                }} />
                <span style={{ fontSize: '12px', color: liked[i] ? '#F97566' : '#C5BBE8', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  {comment.likes + (liked[i] ? 1 : 0)}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="px-4 py-3" style={{ borderTop: '1px solid rgba(108,63,232,0.08)', background: 'white' }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 text-white text-sm font-bold"
            style={{ background: 'linear-gradient(135deg, #6C3FE8, #9B6FFF)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', fontWeight: 800 }}>
            A
          </div>

          <input type="text" placeholder="Share your reflection..."
            className="flex-1 px-4 py-2.5"
            style={{ borderRadius: '999px', fontFamily: 'Inter, sans-serif', fontSize: '13px', background: '#F7F5FC', border: '1.5px solid rgba(108,63,232,0.1)', outline: 'none', color: '#16143A' }} />

          <button className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #6C3FE8, #9B6FFF)', boxShadow: '0px 4px 12px rgba(108,63,232,0.3)' }}>
            <Send style={{ color: 'white', width: '16px', height: '16px' }} />
          </button>
        </div>
      </div>
    </div>
  );
}
