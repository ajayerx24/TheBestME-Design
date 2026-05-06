import { ArrowLeft, Users, MessageCircle, Heart, Share2, Crown, ChevronRight, Flame } from 'lucide-react';
import { useState } from 'react';

const members = [
  { name: 'Aisha P.', emoji: '👩🏽', progress: 45, streak: 7, you: true },
  { name: 'Priya M.', emoji: '👩🏾', progress: 62, streak: 14, you: false },
  { name: 'Rohan K.', emoji: '👨🏽', progress: 38, streak: 3, you: false },
  { name: 'Neha S.', emoji: '👩🏻', progress: 80, streak: 21, you: false },
  { name: 'Arjun T.', emoji: '👨🏾', progress: 25, streak: 5, you: false },
];

const activity = [
  { user: 'Neha S.', emoji: '👩🏻', action: 'completed Day 17 🎉', time: '5m ago', type: 'completion' },
  { user: 'Priya M.', emoji: '👩🏾', action: 'shared a reflection: "Finding it easier to..."', time: '1h ago', type: 'reflection' },
  { user: 'Rohan K.', emoji: '👨🏽', action: 'logged mood 😊 Good', time: '2h ago', type: 'mood' },
  { user: 'Aisha P.', emoji: '👩🏽', action: 'completed Day 9 ✓', time: '3h ago', type: 'completion' },
];

export function GroupPlanDetail() {
  const [joined, setJoined] = useState(true);

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto no-scrollbar" style={{ background: '#F7F5FC' }}>
      {/* Hero banner */}
      <div className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #4A25C9 0%, #6C3FE8 60%, #9B6FFF 100%)', paddingTop: '48px', paddingBottom: '32px', paddingLeft: '20px', paddingRight: '20px' }}>
        <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        <div className="absolute left-0 bottom-0 w-28 h-28 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }} />

        <button className="absolute top-12 left-5 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)' }}>
          <ArrowLeft style={{ color: 'white', width: '18px', height: '18px' }} />
        </button>

        <div className="relative z-10 mt-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.2)', fontSize: '11px', fontWeight: 700, color: 'white', fontFamily: 'Inter, sans-serif' }}>
              👥 GROUP PLAN
            </span>
          </div>
          <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '22px', color: 'white', lineHeight: 1.3 }}>
            Overcoming Anxiety<br />Together
          </h1>
          <p className="mt-1" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif' }}>
            21-Day Group Program · 5 members
          </p>

          {/* Member avatar row */}
          <div className="flex items-center gap-1 mt-4">
            {members.slice(0, 4).map((m, i) => (
              <div key={i} className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.2)', marginLeft: i > 0 ? '-8px' : 0, border: '2px solid rgba(108,63,232,0.5)', zIndex: 10 - i }}>
                <span style={{ fontSize: '16px' }}>{m.emoji}</span>
              </div>
            ))}
            <span className="ml-2" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              +1 more
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 pt-5">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { value: '5', label: 'Members', emoji: '👥' },
            { value: '50%', label: 'Avg. Done', emoji: '📊' },
            { value: '10d', label: 'Avg. Streak', emoji: '🔥' },
          ].map(s => (
            <div key={s.label} className="p-3 flex flex-col items-center"
              style={{ borderRadius: '14px', background: 'white', boxShadow: '0px 2px 10px rgba(0,0,0,0.05)' }}>
              <span style={{ fontSize: '20px', marginBottom: '4px' }}>{s.emoji}</span>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '18px', color: '#16143A' }}>{s.value}</p>
              <p style={{ fontSize: '11px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Leaderboard */}
        <div className="mb-5" style={{ borderRadius: '20px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
          <div className="px-4 pt-4 pb-3 flex items-center justify-between"
            style={{ borderBottom: '1px solid rgba(108,63,232,0.07)' }}>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#16143A' }}>
              🏆 Leaderboard
            </p>
            <span style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>By progress</span>
          </div>

          {[...members].sort((a, b) => b.progress - a.progress).map((member, i) => (
            <div key={member.name}
              className="px-4 py-3 flex items-center gap-3"
              style={{
                borderBottom: i < members.length - 1 ? '1px solid rgba(108,63,232,0.06)' : 'none',
                background: member.you ? 'rgba(108,63,232,0.04)' : 'transparent',
              }}>
              {/* Rank */}
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: i === 0 ? 'linear-gradient(135deg, #F5A74D, #FFD080)' : i === 1 ? 'rgba(108,63,232,0.12)' : 'rgba(108,63,232,0.06)',
                }}>
                {i === 0
                  ? <Crown style={{ color: 'white', width: '14px', height: '14px' }} />
                  : <span style={{ fontSize: '11px', fontWeight: 800, color: i === 1 ? '#6C3FE8' : '#8B86A8', fontFamily: 'Inter, sans-serif' }}>{i + 1}</span>
                }
              </div>

              {/* Avatar */}
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: '#EDE7FF', border: member.you ? '2px solid #6C3FE8' : 'none' }}>
                <span style={{ fontSize: '18px' }}>{member.emoji}</span>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px', color: '#16143A' }}>
                    {member.name}
                  </p>
                  {member.you && (
                    <span className="px-1.5 py-0.5 rounded"
                      style={{ background: 'rgba(108,63,232,0.1)', fontSize: '10px', fontWeight: 700, color: '#6C3FE8', fontFamily: 'Inter, sans-serif' }}>
                      You
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="flex-1 h-1.5 rounded-full" style={{ background: 'rgba(108,63,232,0.08)', maxWidth: '80px' }}>
                    <div className="h-full rounded-full" style={{ width: `${member.progress}%`, background: 'linear-gradient(90deg, #6C3FE8, #9B6FFF)' }} />
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#6C3FE8', fontFamily: 'Inter, sans-serif' }}>{member.progress}%</span>
                </div>
              </div>

              {/* Streak */}
              <div className="flex items-center gap-1">
                <Flame style={{ color: '#F97566', width: '13px', height: '13px' }} />
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#F97566', fontFamily: 'Inter, sans-serif' }}>{member.streak}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Feed */}
        <p className="mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: '#16143A' }}>
          Recent Activity
        </p>
        <div className="space-y-3 mb-5">
          {activity.map((item, i) => (
            <div key={i} className="p-4 flex items-start gap-3"
              style={{ borderRadius: '14px', background: 'white', boxShadow: '0px 2px 10px rgba(0,0,0,0.05)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: '#EDE7FF' }}>
                <span style={{ fontSize: '20px' }}>{item.emoji}</span>
              </div>
              <div className="flex-1">
                <p style={{ fontSize: '13px', color: '#16143A', fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 700 }}>{item.user}</span> {item.action}
                </p>
                <p className="mt-0.5" style={{ fontSize: '11px', color: '#C5BBE8', fontFamily: 'Inter, sans-serif' }}>{item.time}</p>
              </div>
              <button>
                <Heart style={{ color: '#C5BBE8', width: '16px', height: '16px' }} />
              </button>
            </div>
          ))}
        </div>

        {/* Actions */}
        <button className="w-full text-white py-4 mb-3 flex items-center justify-center gap-2"
          style={{ borderRadius: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)' }}>
          <MessageCircle style={{ width: '17px', height: '17px' }} />
          Post a Reflection
        </button>

        <div className="flex gap-3 pb-8">
          <button className="flex-1 py-3.5 flex items-center justify-center gap-2"
            style={{ borderRadius: '12px', background: 'white', border: '1.5px solid rgba(108,63,232,0.15)', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px', color: '#6C3FE8' }}>
            <Share2 style={{ width: '14px', height: '14px' }} />
            Invite
          </button>
          <button onClick={() => setJoined(!joined)}
            className="flex-1 py-3.5 flex items-center justify-center gap-2"
            style={{ borderRadius: '12px', background: joined ? 'rgba(249,117,102,0.08)' : 'white', border: `1.5px solid ${joined ? 'rgba(249,117,102,0.3)' : 'rgba(108,63,232,0.15)'}`, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px', color: joined ? '#F97566' : '#574E7E' }}>
            <Users style={{ width: '14px', height: '14px' }} />
            {joined ? 'Leave' : 'Join'}
          </button>
        </div>
      </div>
    </div>
  );
}
