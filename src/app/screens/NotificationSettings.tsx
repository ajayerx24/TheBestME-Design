import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export function NotificationSettings() {
  const [settings, setSettings] = useState({
    daily: true,
    sessions: true,
    motivational: false,
    weekly: true,
  });

  const notifications = [
    { key: 'daily' as const, emoji: '⏰', title: 'Daily Reminder', description: 'Get reminded to complete your daily session', time: '08:00 AM' },
    { key: 'sessions' as const, emoji: '📋', title: 'Session Reminders', description: 'Reminders for incomplete sessions' },
    { key: 'motivational' as const, emoji: '💜', title: 'Motivational Messages', description: 'Daily encouragement to keep going' },
    { key: 'weekly' as const, emoji: '📊', title: 'Weekly Progress Summary', description: "Your weekly wrap-up, every Sunday" },
  ];

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto no-scrollbar" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="flex items-center gap-4 px-5 pt-12 pb-4" style={{ background: 'white' }}>
        <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
          <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
        </button>
        <div>
          <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: '#16143A' }}>
            Notifications
          </h1>
          <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>Manage your alerts</p>
        </div>
      </div>

      <div className="px-5 pt-5 space-y-4">
        {notifications.map(item => (
          <div key={item.key} className="p-4"
            style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: settings[item.key] ? 'rgba(108,63,232,0.1)' : '#F7F5FC' }}>
                {item.emoji}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>
                    {item.title}
                  </p>
                  {/* Toggle */}
                  <button
                    onClick={() => setSettings(s => ({ ...s, [item.key]: !s[item.key] }))}
                    className="relative flex-shrink-0 transition-all"
                    style={{
                      width: '48px', height: '26px', borderRadius: '999px',
                      background: settings[item.key] ? 'linear-gradient(135deg, #6C3FE8, #9B6FFF)' : '#DDD8F5',
                    }}>
                    <div className="absolute top-1 w-[18px] h-[18px] bg-white rounded-full transition-all"
                      style={{
                        left: settings[item.key] ? '27px' : '4px',
                        boxShadow: '0px 2px 6px rgba(0,0,0,0.15)',
                      }} />
                  </button>
                </div>
                <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>{item.description}</p>
                {item.time && settings[item.key] && (
                  <button className="mt-2 px-3 py-1 rounded-full"
                    style={{ background: 'rgba(108,63,232,0.1)', fontSize: '12px', fontWeight: 700, color: '#6C3FE8', fontFamily: 'Inter, sans-serif' }}>
                    {item.time} ✎
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Save button */}
        <button className="w-full text-white py-4"
          style={{ borderRadius: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)' }}>
          Save Preferences
        </button>
      </div>
    </div>
  );
}
