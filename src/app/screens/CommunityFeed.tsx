import { Home, BookOpen, Calendar, TrendingUp, User, Users } from 'lucide-react';
import { useState } from 'react';

export function CommunityFeed() {
  const [activeTab, setActiveTab] = useState<'active' | 'discover'>('active');

  const groups = [
    { name: 'Anxiety Support Circle', members: 127, plan: 'Overcoming Anxiety', emoji: '🧠', color: '#EDE7FF', online: 8, joined: true },
    { name: 'Self-Love Warriors', members: 89, plan: 'Self Love Journey', emoji: '💜', color: '#F3EEFF', online: 5, joined: true },
    { name: 'Healing Together', members: 156, plan: 'Healing from Trauma', emoji: '💙', color: '#EBF4FF', online: 12, joined: false },
  ];

  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#F7F5FC' }}>
      <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
        {/* Header */}
        <div className="px-5 pt-14 pb-5" style={{ background: 'white' }}>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '24px', color: '#16143A' }}>
                Community
              </h1>
              <p className="mt-0.5" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#8B86A8' }}>
                Join others on their healing journey
              </p>
            </div>
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(108,63,232,0.1)' }}>
              <Users style={{ color: '#6C3FE8', width: '20px', height: '20px' }} />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-2xl" style={{ background: '#F7F5FC' }}>
            {[['active', 'Active Groups'], ['discover', 'Discover']] .map(([key, label]) => (
              <button key={key} onClick={() => setActiveTab(key as 'active' | 'discover')}
                className="flex-1 py-2.5 transition-all"
                style={{
                  borderRadius: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px',
                  background: activeTab === key ? 'white' : 'transparent',
                  color: activeTab === key ? '#16143A' : '#8B86A8',
                  boxShadow: activeTab === key ? '0px 2px 8px rgba(0,0,0,0.08)' : 'none',
                }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Groups */}
        <div className="px-5 pt-4 space-y-3">
          {groups.map(group => (
            <div key={group.name} className="p-4"
              style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
              <div className="flex gap-4">
                <div className="w-[62px] h-[62px] rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: group.color }}>
                  <span style={{ fontSize: '28px' }}>{group.emoji}</span>
                </div>

                <div className="flex-1">
                  <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A', lineHeight: 1.3 }}>
                    {group.name}
                  </p>
                  <div className="flex items-center gap-3 mt-1 mb-2">
                    <span style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
                      {group.members} members
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#3FC49A' }} />
                      <span style={{ fontSize: '11px', color: '#3FC49A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                        {group.online} online
                      </span>
                    </span>
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full"
                    style={{ background: 'rgba(108,63,232,0.1)', fontSize: '11px', fontWeight: 700, color: '#6C3FE8', fontFamily: 'Inter, sans-serif' }}>
                    {group.plan}
                  </span>
                </div>

                <button className="self-start px-4 py-2 transition-all"
                  style={{
                    borderRadius: '999px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '12px',
                    background: group.joined ? 'rgba(108,63,232,0.1)' : 'linear-gradient(135deg, #6C3FE8, #9B6FFF)',
                    color: group.joined ? '#6C3FE8' : 'white',
                    border: group.joined ? '1.5px solid rgba(108,63,232,0.2)' : 'none',
                    boxShadow: group.joined ? 'none' : '0px 4px 12px rgba(108,63,232,0.3)',
                  }}>
                  {group.joined ? 'Joined ✓' : 'Join'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 px-5 py-3"
        style={{ background: 'white', boxShadow: '0px -2px 20px rgba(108,63,232,0.08)', height: '72px' }}>
        <div className="flex items-center justify-between">
          {[
            { icon: Home, label: 'Home', active: false },
            { icon: BookOpen, label: 'Plans', active: false },
            { icon: Calendar, label: 'Journal', active: false },
            { icon: TrendingUp, label: 'Progress', active: false },
            { icon: User, label: 'Profile', active: false },
          ].map(tab => (
            <button key={tab.label} className="flex flex-col items-center gap-1">
              <tab.icon style={{ color: '#C5BBE8', width: '22px', height: '22px' }} />
              <span style={{ fontSize: '10px', fontWeight: 500, color: '#C5BBE8', fontFamily: 'Inter, sans-serif' }}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
