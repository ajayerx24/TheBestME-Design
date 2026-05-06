import { ChevronRight, Home, BookOpen, Calendar, TrendingUp, User, Settings, Bell, Shield, Star, HelpCircle, LogOut } from 'lucide-react';

const menuSections = [
  {
    title: 'ACCOUNT',
    items: [
      { icon: User, label: 'Edit Profile', chevron: true },
      { icon: Shield, label: 'Change Password', chevron: true },
    ]
  },
  {
    title: 'PREFERENCES',
    items: [
      { icon: Bell, label: 'Notification Settings', chevron: true },
      { icon: Settings, label: 'My Goals', chevron: true },
    ]
  },
  {
    title: 'SUBSCRIPTION',
    items: [
      { icon: Star, label: 'Manage Plan', chevron: true, badge: 'Premium', badgeColor: '#F5A74D' },
    ]
  },
  {
    title: 'SUPPORT',
    items: [
      { icon: HelpCircle, label: 'Help & FAQ', chevron: true },
      { icon: Shield, label: 'Privacy Policy', chevron: true },
      { icon: Shield, label: 'Terms of Use', chevron: true },
      { icon: Star, label: 'Rate the App', chevron: true },
    ]
  },
];

export function ProfileSettings() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#F7F5FC' }}>
      <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
        {/* Profile Header */}
        <div className="px-5 pt-14 pb-6" style={{ background: 'white' }}>
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)' }}>
                <span style={{ fontSize: '28px' }}>👤</span>
              </div>
              {/* Online indicator */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white"
                style={{ background: '#3FC49A' }} />
            </div>
            <div className="flex-1">
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '18px', color: '#16143A' }}>
                Aisha Patel
              </p>
              <p className="mt-0.5" style={{ fontSize: '13px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
                aisha@example.com
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full"
                  style={{ background: 'rgba(245,167,77,0.15)', fontSize: '11px', fontWeight: 700, color: '#F5A74D', fontFamily: 'Inter, sans-serif' }}>
                  ✦ Premium
                </span>
                <span style={{ fontSize: '11px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>7-day streak 🔥</span>
              </div>
            </div>
            <button className="px-4 py-2" style={{ borderRadius: '10px', border: '1.5px solid rgba(108,63,232,0.2)', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px', color: '#6C3FE8' }}>
              Edit
            </button>
          </div>
        </div>

        <div className="px-5 pt-5 space-y-5">
          {menuSections.map(section => (
            <div key={section.title}>
              <p className="mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '11px', color: '#8B86A8', letterSpacing: '1px' }}>
                {section.title}
              </p>
              <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
                {section.items.map((item, i) => (
                  <div key={item.label}>
                    <button className="w-full flex items-center justify-between px-4 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                          style={{ background: 'rgba(108,63,232,0.07)' }}>
                          <item.icon style={{ color: '#6C3FE8', width: '15px', height: '15px' }} />
                        </div>
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#16143A' }}>
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded-full"
                            style={{ background: `${item.badgeColor}15`, fontSize: '11px', fontWeight: 700, color: item.badgeColor, fontFamily: 'Inter, sans-serif' }}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ChevronRight style={{ color: '#C5BBE8', width: '16px', height: '16px' }} />
                    </button>
                    {i < section.items.length - 1 && (
                      <div className="mx-4 h-px" style={{ background: 'rgba(108,63,232,0.06)' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Logout */}
          <button className="w-full py-4 flex items-center justify-center gap-2"
            style={{ borderRadius: '14px', background: 'rgba(232,65,74,0.06)', border: '1.5px solid rgba(232,65,74,0.12)' }}>
            <LogOut style={{ color: '#E8414A', width: '18px', height: '18px' }} />
            <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#E8414A' }}>
              Log Out
            </span>
          </button>
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
            { icon: User, label: 'Profile', active: true },
          ].map(tab => (
            <button key={tab.label} className="flex flex-col items-center gap-1">
              {tab.active
                ? <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6C3FE8, #9B6FFF)' }}>
                    <tab.icon style={{ color: 'white', width: '18px', height: '18px' }} />
                  </div>
                : <tab.icon style={{ color: '#C5BBE8', width: '22px', height: '22px' }} />}
              <span style={{ fontSize: '10px', fontWeight: tab.active ? 700 : 500, color: tab.active ? '#6C3FE8' : '#C5BBE8', fontFamily: 'Inter, sans-serif' }}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
