import { ArrowLeft, Bell, Trophy, Calendar, Heart, Zap, CheckCheck } from 'lucide-react';
import { useState } from 'react';

type NotifType = 'achievement' | 'reminder' | 'session' | 'love' | 'streak';

interface Notification {
  id: number;
  type: NotifType;
  title: string;
  body: string;
  time: string;
  read: boolean;
}

const notifications: { group: string; items: Notification[] }[] = [
  {
    group: 'Today',
    items: [
      { id: 1, type: 'achievement', title: 'Badge Unlocked! 🏆', body: 'You earned the "7-Day Streak" badge. Keep it up!', time: '2h ago', read: false },
      { id: 2, type: 'reminder', title: 'Daily Session Reminder', body: 'Your Overcoming Anxiety session is waiting for you today.', time: '9:00 AM', read: false },
      { id: 3, type: 'session', title: 'New Session Available', body: 'Day 5 of Overcoming Anxiety has been unlocked.', time: '6:00 AM', read: true },
    ],
  },
  {
    group: 'Yesterday',
    items: [
      { id: 4, type: 'love', title: 'Reflection Liked ❤️', body: 'Sarah K. liked your reflection in the community feed.', time: 'Yesterday', read: true },
      { id: 5, type: 'streak', title: 'Streak at Risk! 🔥', body: 'You haven\'t completed today\'s session yet. Don\'t break your streak!', time: 'Yesterday', read: true },
    ],
  },
  {
    group: 'Earlier',
    items: [
      { id: 6, type: 'session', title: 'Plan Suggestion', body: 'Based on your mood, try "Better Sleep" plan tonight.', time: 'May 4', read: true },
      { id: 7, type: 'achievement', title: 'First Entry! ⭐', body: 'You wrote your first journal entry. Amazing start!', time: 'May 3', read: true },
      { id: 8, type: 'reminder', title: 'Weekly Check-in', body: 'How was your week? Log your mood to see your progress.', time: 'May 2', read: true },
    ],
  },
];

const typeConfig: Record<NotifType, { icon: React.ComponentType<{ style?: React.CSSProperties }>, color: string, bg: string }> = {
  achievement: { icon: Trophy, color: '#F5A74D', bg: 'rgba(245,167,77,0.12)' },
  reminder: { icon: Calendar, color: '#6C3FE8', bg: 'rgba(108,63,232,0.1)' },
  session: { icon: Zap, color: '#3FC49A', bg: 'rgba(63,196,154,0.1)' },
  love: { icon: Heart, color: '#F97566', bg: 'rgba(249,117,102,0.1)' },
  streak: { icon: Bell, color: '#FF8A65', bg: 'rgba(255,138,101,0.1)' },
};

export function NotificationsInbox() {
  const [notifs, setNotifs] = useState(notifications);
  const unreadCount = notifications.flatMap(g => g.items).filter(n => !n.read).length;

  const markAllRead = () => {
    setNotifs(notifs.map(group => ({
      ...group,
      items: group.items.map(item => ({ ...item, read: true })),
    })));
  };

  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-4" style={{ background: 'white', boxShadow: '0px 1px 0px rgba(108,63,232,0.07)' }}>
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
              <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
            </button>
            <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: '#16143A' }}>
              Notifications
            </h1>
          </div>
          <div className="flex items-center gap-2">
            {unreadCount > 0 && (
              <span className="px-2.5 py-1 rounded-full"
                style={{ background: 'linear-gradient(135deg, #6C3FE8, #9B6FFF)', fontSize: '11px', fontWeight: 700, color: 'white', fontFamily: 'Inter, sans-serif' }}>
                {unreadCount} new
              </span>
            )}
            <button onClick={markAllRead} className="flex items-center gap-1.5 px-3 py-1.5"
              style={{ borderRadius: '20px', background: 'rgba(108,63,232,0.08)', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#6C3FE8' }}>
              <CheckCheck style={{ width: '13px', height: '13px' }} />
              All read
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pt-4 pb-6">
        {notifs.map((group) => (
          <div key={group.group} className="mb-5">
            <p className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: '#8B86A8', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
              {group.group}
            </p>

            <div className="space-y-2.5">
              {group.items.map((notif) => {
                const config = typeConfig[notif.type];
                const Icon = config.icon;

                return (
                  <div key={notif.id}
                    className="p-4 flex items-start gap-3"
                    style={{
                      borderRadius: '16px',
                      background: notif.read ? 'white' : '#FDFBFF',
                      boxShadow: '0px 2px 10px rgba(0,0,0,0.05)',
                      border: notif.read ? 'none' : '1.5px solid rgba(108,63,232,0.12)',
                    }}>
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: config.bg }}>
                      <Icon style={{ color: config.color, width: '20px', height: '20px' }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: notif.read ? 600 : 700, fontSize: '14px', color: '#16143A' }}>
                          {notif.title}
                        </p>
                        {!notif.read && (
                          <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: '#6C3FE8' }} />
                        )}
                      </div>
                      <p className="mt-0.5" style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>
                        {notif.body}
                      </p>
                      <p className="mt-1.5" style={{ fontSize: '11px', color: '#C5BBE8', fontFamily: 'Inter, sans-serif' }}>
                        {notif.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Empty state for bottom */}
        <div className="flex flex-col items-center pt-2 pb-4">
          <p style={{ fontSize: '13px', color: '#C5BBE8', fontFamily: 'Inter, sans-serif' }}>You're all caught up! 🎉</p>
        </div>
      </div>
    </div>
  );
}
