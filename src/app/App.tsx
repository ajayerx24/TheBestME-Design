import { useState } from 'react';
import { ChevronRight, ChevronDown, Search, X, Smartphone } from 'lucide-react';

// ── Group 1: Onboarding ──────────────────────────────────────────────
import { Splash } from '../app/screens/Splash';
import { OnboardingSlide1 } from '../app/screens/OnboardingSlide1';
import { OnboardingSlide2 } from '../app/screens/OnboardingSlide2';
import { OnboardingSlide3 } from '../app/screens/OnboardingSlide3';
import { GoalSelection } from '../app/screens/GoalSelection';

// ── Group 2: Authentication ──────────────────────────────────────────
import { Login } from '../app/screens/Login';
import { SignUp } from '../app/screens/SignUp';
import { OTPVerification } from '../app/screens/OTPVerification';
import { ForgotPassword } from '../app/screens/ForgotPassword';

// ── Group 3: Home ────────────────────────────────────────────────────
import { HomeDashboard } from '../app/screens/HomeDashboard';

// ── Group 4: Plans ───────────────────────────────────────────────────
import { PlanLibrary } from '../app/screens/PlanLibrary';
import { PlanDetails } from '../app/screens/PlanDetails';
import { DailySession } from '../app/screens/DailySession';
import { LockedSession } from '../app/screens/LockedSession';
import { PlanCompletion } from '../app/screens/PlanCompletion';

// ── Group 5: Discovery ───────────────────────────────────────────────
import { RecommendationsViewAll } from '../app/screens/RecommendationsViewAll';
import { Favorites } from '../app/screens/Favorites';

// ── Group 6: Community ───────────────────────────────────────────────
import { CommunityFeed } from '../app/screens/CommunityFeed';
import { ReflectionThread } from '../app/screens/ReflectionThread';
import { GroupPlanDetail } from '../app/screens/GroupPlanDetail';

// ── Group 7: Payment ─────────────────────────────────────────────────
import { SubscriptionPlans } from '../app/screens/SubscriptionPlans';
import { SubscriptionManagement } from '../app/screens/SubscriptionManagement';
import { PaymentCheckout } from '../app/screens/PaymentCheckout';
import { PurchaseConfirmation } from '../app/screens/PurchaseConfirmation';
import { BillingHistory } from '../app/screens/BillingHistory';

// ── Group 8: Journal ─────────────────────────────────────────────────
import { JournalEntry } from '../app/screens/JournalEntry';
import { JournalHistory } from '../app/screens/JournalHistory';
import { JournalExport } from '../app/screens/JournalExport';

// ── Group 9: Progress ────────────────────────────────────────────────
import { ProgressTracking } from '../app/screens/ProgressTracking';
import { ProgressDetailCircular } from '../app/screens/ProgressDetailCircular';

// ── Group 10: Mood & Analytics ───────────────────────────────────────
import { MoodTracking } from '../app/screens/MoodTracking';
import { MoodHistoryAnalytics } from '../app/screens/MoodHistoryAnalytics';

// ── Group 11: Settings & Utility ─────────────────────────────────────
import { ProfileSettings } from '../app/screens/ProfileSettings';
import { EditProfile } from '../app/screens/EditProfile';
import { NotificationSettings } from '../app/screens/NotificationSettings';
import { NotificationsInbox } from '../app/screens/NotificationsInbox';
import { CrisisSupport } from '../app/screens/CrisisSupport';
import { PrivacyPolicy } from '../app/screens/PrivacyPolicy';
import { TermsOfUse } from '../app/screens/TermsOfUse';
import { OfflineState } from '../app/screens/OfflineState';
import { OfflineDownloads } from '../app/screens/OfflineDownloads';

// ─────────────────────────────────────────────────────────────────────

type ScreenId = string;

interface Screen {
  id: ScreenId;
  label: string;
  isNew?: boolean;
  component: React.ComponentType;
}

interface ScreenGroup {
  id: string;
  label: string;
  emoji: string;
  screens: Screen[];
}

const SCREEN_GROUPS: ScreenGroup[] = [
  {
    id: 'onboarding',
    label: 'Onboarding',
    emoji: '🚀',
    screens: [
      { id: 'splash', label: 'Splash Screen', component: Splash },
      { id: 'onboarding1', label: 'Onboarding — Slide 1', component: OnboardingSlide1 },
      { id: 'onboarding2', label: 'Onboarding — Slide 2', component: OnboardingSlide2 },
      { id: 'onboarding3', label: 'Onboarding — Slide 3', component: OnboardingSlide3 },
      { id: 'goals', label: 'Goal Selection', component: GoalSelection },
    ],
  },
  {
    id: 'auth',
    label: 'Authentication',
    emoji: '🔐',
    screens: [
      { id: 'login', label: 'Login', component: Login },
      { id: 'signup', label: 'Sign Up', component: SignUp },
      { id: 'otp', label: 'OTP Verification', component: OTPVerification },
      { id: 'forgotpw', label: 'Forgot Password', component: ForgotPassword },
    ],
  },
  {
    id: 'home',
    label: 'Home',
    emoji: '🏠',
    screens: [
      { id: 'home', label: 'Home Dashboard', component: HomeDashboard },
    ],
  },
  {
    id: 'plans',
    label: 'Plans',
    emoji: '📚',
    screens: [
      { id: 'planlibrary', label: 'Plan Library', component: PlanLibrary },
      { id: 'plandetails', label: 'Plan Details', component: PlanDetails },
      { id: 'dailysession', label: 'Daily Session', component: DailySession },
      { id: 'lockedsession', label: 'Locked Session State', component: LockedSession  },
      { id: 'plancompletion', label: 'Plan Completion / Congrats', component: PlanCompletion  },
    ],
  },
  {
    id: 'discovery',
    label: 'Discovery',
    emoji: '🔍',
    screens: [
      { id: 'recsviewall', label: 'Recommendations — View All', component: RecommendationsViewAll  },
      { id: 'favorites', label: 'Favorites', component: Favorites },
    ],
  },
  {
    id: 'community',
    label: 'Community',
    emoji: '👥',
    screens: [
      { id: 'community', label: 'Community Feed', component: CommunityFeed },
      { id: 'reflection', label: 'Reflection Thread', component: ReflectionThread },
      { id: 'groupplan', label: 'Group Plan Detail', component: GroupPlanDetail  },
    ],
  },
  {
    id: 'payment',
    label: 'Payment',
    emoji: '💳',
    screens: [
      { id: 'subplans', label: 'Subscription Plans', component: SubscriptionPlans },
      { id: 'submgmt', label: 'Subscription Management', component: SubscriptionManagement },
      { id: 'checkout', label: 'Payment Checkout', component: PaymentCheckout },
      { id: 'purchaseconfirm', label: 'Purchase Confirmation', component: PurchaseConfirmation  },
      { id: 'billing', label: 'Billing History', component: BillingHistory  },
    ],
  },
  {
    id: 'journal',
    label: 'Journal',
    emoji: '📖',
    screens: [
      { id: 'journalentry', label: 'Journal Entry', component: JournalEntry },
      { id: 'journalhistory', label: 'Journal History', component: JournalHistory },
      { id: 'journalexport', label: 'Journal Export', component: JournalExport },
    ],
  },
  {
    id: 'progress',
    label: 'Progress',
    emoji: '📈',
    screens: [
      { id: 'progress', label: 'Progress Tracking', component: ProgressTracking },
      { id: 'progressdetail', label: 'Progress Detail Circular', component: ProgressDetailCircular  },
    ],
  },
  {
    id: 'mood',
    label: 'Mood & Analytics',
    emoji: '😊',
    screens: [
      { id: 'moodtrack', label: 'Mood Tracking', component: MoodTracking },
      { id: 'moodhistory', label: 'Mood History & Analytics', component: MoodHistoryAnalytics  },
    ],
  },
  {
    id: 'settings',
    label: 'Settings & Utility',
    emoji: '⚙️',
    screens: [
      { id: 'profile', label: 'Profile Settings', component: ProfileSettings },
      { id: 'editprofile', label: 'Edit Profile', component: EditProfile },
      { id: 'notifSettings', label: 'Notification Settings', component: NotificationSettings },
      { id: 'notifInbox', label: 'Notifications Inbox', component: NotificationsInbox  },
      { id: 'crisis', label: 'Crisis Support', component: CrisisSupport },
      { id: 'privacy', label: 'Privacy Policy', component: PrivacyPolicy },
      { id: 'terms', label: 'Terms of Use', component: TermsOfUse },
      { id: 'offline', label: 'Offline / No Internet', component: OfflineState  },
      { id: 'downloads', label: 'Offline Downloads', component: OfflineDownloads  },
    ],
  },
];

const ALL_SCREENS = SCREEN_GROUPS.flatMap(g => g.screens);
const NEW_COUNT = ALL_SCREENS.filter(s => s.isNew).length;

export default function App() {
  const [currentScreenId, setCurrentScreenId] = useState<ScreenId>('home');
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    onboarding: false, auth: false, home: true, plans: false, discovery: false,
    community: false, payment: false, journal: false, progress: false, mood: false, settings: false,
  });
  const [search, setSearch] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNewOnly, setShowNewOnly] = useState(false);

  const currentScreen = ALL_SCREENS.find(s => s.id === currentScreenId) ?? ALL_SCREENS[0];
  const CurrentComponent = currentScreen.component;

  const toggleGroup = (id: string) => {
    setExpandedGroups(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const navigateTo = (id: ScreenId) => {
    setCurrentScreenId(id);
    // Auto-close sidebar on small screens (simulate)
  };

  const filteredGroups = SCREEN_GROUPS.map(group => ({
    ...group,
    screens: group.screens.filter(s => {
      const matchSearch = !search || s.label.toLowerCase().includes(search.toLowerCase());
      const matchNew = !showNewOnly || s.isNew;
      return matchSearch && matchNew;
    }),
  })).filter(g => g.screens.length > 0);

  // Find the group for current screen
  const currentGroup = SCREEN_GROUPS.find(g => g.screens.some(s => s.id === currentScreenId));

  return (
    <div className="w-full h-full flex overflow-hidden" style={{ background: '#0F0C1E', fontFamily: 'Inter, sans-serif' }}>
      {/* ──── SIDEBAR ──── */}
      <div
        className="flex-shrink-0 flex flex-col overflow-hidden transition-all"
        style={{
          width: sidebarOpen ? '280px' : '0px',
          minWidth: sidebarOpen ? '280px' : '0px',
          background: '#1A1530',
          borderRight: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {sidebarOpen && (
          <div className="flex flex-col h-full overflow-hidden">
            {/* Sidebar header */}
            <div className="px-4 pt-5 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #6C3FE8, #9B6FFF)' }}>
                      <span style={{ fontSize: '14px' }}>💜</span>
                    </div>
                    <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '15px', color: 'white' }}>
                      thebestME
                    </span>
                  </div>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '2px', marginLeft: '32px' }}>
                    42 screens · {NEW_COUNT} new
                  </p>
                </div>
                <button onClick={() => setSidebarOpen(false)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <X style={{ color: 'rgba(255,255,255,0.5)', width: '14px', height: '14px' }} />
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'rgba(255,255,255,0.3)', width: '13px', height: '13px' }} />
                <input
                  type="text"
                  placeholder="Search screens..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full py-2 text-sm"
                  style={{
                    paddingLeft: '32px', paddingRight: '12px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    color: 'white',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                  }}
                />
              </div>

              {/* New filter toggle */}
              <button
                onClick={() => setShowNewOnly(!showNewOnly)}
                className="mt-2 w-full py-1.5 flex items-center justify-center gap-2"
                style={{
                  borderRadius: '8px',
                  background: showNewOnly ? 'linear-gradient(135deg, rgba(108,63,232,0.4), rgba(155,111,255,0.4))' : 'rgba(255,255,255,0.04)',
                  border: showNewOnly ? '1px solid rgba(108,63,232,0.5)' : '1px solid rgba(255,255,255,0.06)',
                  fontSize: '11px', fontWeight: 700, fontFamily: 'Inter, sans-serif',
                  color: showNewOnly ? '#C8A8FF' : 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.5px',
                }}>
                ✨ {showNewOnly ? 'Showing new only' : 'Show new screens only'}
              </button>
            </div>

            {/* Screen list */}
            <div className="flex-1 overflow-y-auto py-2" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}>
              {filteredGroups.map((group) => (
                <div key={group.id} className="mb-1">
                  {/* Group header */}
                  <button
                    onClick={() => toggleGroup(group.id)}
                    className="w-full flex items-center justify-between px-4 py-2.5"
                    style={{ color: 'rgba(255,255,255,0.5)' }}>
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: '13px' }}>{group.emoji}</span>
                      <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.6px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                        {group.label}
                      </span>
                      <span className="px-1.5 py-0.5 rounded"
                        style={{ background: 'rgba(255,255,255,0.06)', fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>
                        {group.screens.length}
                      </span>
                    </div>
                    <ChevronDown style={{
                      width: '13px', height: '13px',
                      transform: expandedGroups[group.id] ? 'rotate(0deg)' : 'rotate(-90deg)',
                      transition: 'transform 0.2s',
                    }} />
                  </button>

                  {/* Screen items */}
                  {(expandedGroups[group.id] || search || showNewOnly) && (
                    <div className="pb-1">
                      {group.screens.map(screen => {
                        const isActive = screen.id === currentScreenId;
                        return (
                          <button
                            key={screen.id}
                            onClick={() => navigateTo(screen.id)}
                            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-left transition-all"
                            style={{
                              background: isActive ? 'linear-gradient(135deg, rgba(108,63,232,0.25), rgba(155,111,255,0.15))' : 'transparent',
                              borderRight: isActive ? '2px solid #6C3FE8' : '2px solid transparent',
                            }}>
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: isActive ? '#9B6FFF' : 'rgba(255,255,255,0.15)' }} />
                            <span style={{
                              fontSize: '12.5px',
                              fontWeight: isActive ? 600 : 400,
                              color: isActive ? '#D4BAFF' : 'rgba(255,255,255,0.5)',
                              flex: 1,
                              lineHeight: 1.3,
                            }}>
                              {screen.label}
                            </span>
                            {screen.isNew && (
                              <span className="px-1.5 py-0.5 rounded flex-shrink-0"
                                style={{ background: 'rgba(108,63,232,0.3)', fontSize: '9px', fontWeight: 800, color: '#C8A8FF', fontFamily: 'Inter, sans-serif', letterSpacing: '0.3px' }}>
                                NEW
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
                30 existing + 12 new = 42 screens
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ──── MAIN AREA ──── */}
      <div className="flex-1 flex flex-col items-center justify-center overflow-hidden">
        {/* Top bar */}
        <div className="w-full px-5 py-3 flex items-center justify-between flex-shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="flex items-center gap-3">
            {!sidebarOpen && (
              <button onClick={() => setSidebarOpen(true)}
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Smartphone style={{ color: 'rgba(255,255,255,0.5)', width: '14px', height: '14px' }} />
              </button>
            )}
            <div className="flex items-center gap-2">
              {currentGroup && (
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}>
                  {currentGroup.emoji} {currentGroup.label}
                </span>
              )}
              {currentGroup && (
                <ChevronRight style={{ color: 'rgba(255,255,255,0.2)', width: '14px', height: '14px' }} />
              )}
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                {currentScreen.label}
              </span>
              {currentScreen.isNew && (
                <span className="px-2 py-0.5 rounded"
                  style={{ background: 'rgba(108,63,232,0.4)', fontSize: '10px', fontWeight: 800, color: '#C8A8FF', fontFamily: 'Inter, sans-serif' }}>
                  NEW
                </span>
              )}
            </div>
          </div>

          {/* Screen counter */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {/* Prev/Next navigation */}
              {(() => {
                const idx = ALL_SCREENS.findIndex(s => s.id === currentScreenId);
                const prev = ALL_SCREENS[idx - 1];
                const next = ALL_SCREENS[idx + 1];
                return (
                  <>
                    <button
                      onClick={() => prev && navigateTo(prev.id)}
                      disabled={!prev}
                      className="px-3 py-1.5 rounded-lg flex items-center gap-1"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        fontSize: '11px', fontWeight: 600,
                        color: prev ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)',
                        fontFamily: 'Inter, sans-serif',
                      }}>
                      ← Prev
                    </button>
                    <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', alignSelf: 'center', fontFamily: 'Inter, sans-serif' }}>
                      {ALL_SCREENS.findIndex(s => s.id === currentScreenId) + 1}/{ALL_SCREENS.length}
                    </span>
                    <button
                      onClick={() => next && navigateTo(next.id)}
                      disabled={!next}
                      className="px-3 py-1.5 rounded-lg flex items-center gap-1"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        fontSize: '11px', fontWeight: 600,
                        color: next ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)',
                        fontFamily: 'Inter, sans-serif',
                      }}>
                      Next →
                    </button>
                  </>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Phone frame */}
        <div className="flex-1 flex items-center justify-center overflow-hidden py-6">
          <div className="relative flex-shrink-0"
            style={{
              width: '390px',
              height: '844px',
              maxHeight: 'calc(100vh - 120px)',
              borderRadius: '44px',
              overflow: 'hidden',
              boxShadow: '0px 0px 0px 12px #1A1530, 0px 0px 0px 14px rgba(255,255,255,0.08), 0px 32px 80px rgba(0,0,0,0.6), 0px 0px 60px rgba(108,63,232,0.2)',
            }}>
            {/* Phone notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50"
              style={{ width: '120px', height: '34px', background: '#0A0815', borderRadius: '0 0 20px 20px' }} />

            {/* Screen content */}
            <div className="w-full h-full relative overflow-hidden" style={{ background: '#F8F7FC' }}>
              <CurrentComponent />
            </div>
          </div>
        </div>

        {/* Quick group jump */}
        <div className="flex-shrink-0 pb-4">
          <div className="flex gap-2 overflow-x-auto px-4" style={{ scrollbarWidth: 'none' }}>
            {SCREEN_GROUPS.map(group => (
              <button
                key={group.id}
                onClick={() => {
                  navigateTo(group.screens[0].id);
                  setExpandedGroups(prev => ({ ...prev, [group.id]: true }));
                }}
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 transition-all"
                style={{
                  borderRadius: '20px',
                  background: currentGroup?.id === group.id ? 'rgba(108,63,232,0.3)' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${currentGroup?.id === group.id ? 'rgba(108,63,232,0.5)' : 'rgba(255,255,255,0.07)'}`,
                  fontSize: '11px',
                  fontWeight: 600,
                  color: currentGroup?.id === group.id ? '#C8A8FF' : 'rgba(255,255,255,0.35)',
                  fontFamily: 'Inter, sans-serif',
                }}>
                <span style={{ fontSize: '12px' }}>{group.emoji}</span>
                {group.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
