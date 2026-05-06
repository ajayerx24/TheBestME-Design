import { ArrowLeft, Search, Star, Clock } from 'lucide-react';
import { useState } from 'react';

const categories = ['All', 'Anxiety', 'Sleep', 'Self-Love', 'Mindfulness', 'Grief', 'Focus'];

const plans = [
  { name: 'Overcoming Anxiety', days: 21, badge: 'Premium', emoji: '🧠', color: '#EDE7FF', category: 'Anxiety', rating: 4.9, enrolled: '12.4k' },
  { name: 'Self Love Journey', days: 14, badge: 'Free', emoji: '💜', color: '#F3EEFF', category: 'Self-Love', rating: 4.8, enrolled: '8.7k' },
  { name: 'Better Sleep', days: 7, badge: 'Premium', emoji: '😴', color: '#E8F8F3', category: 'Sleep', rating: 4.7, enrolled: '6.2k' },
  { name: 'Mindful Mornings', days: 10, badge: 'Free', emoji: '🌅', color: '#FFF0EE', category: 'Mindfulness', rating: 4.6, enrolled: '5.1k' },
  { name: 'Grief & Loss', days: 28, badge: 'Premium', emoji: '🌊', color: '#E3F2FD', category: 'Grief', rating: 4.9, enrolled: '4.8k' },
  { name: 'Deep Focus Mode', days: 5, badge: 'Free', emoji: '🎯', color: '#F0FFF4', category: 'Focus', rating: 4.5, enrolled: '9.3k' },
  { name: 'Confidence Boost', days: 14, badge: 'Premium', emoji: '⚡', color: '#FFFDE7', category: 'Self-Love', rating: 4.7, enrolled: '7.1k' },
  { name: 'Panic Relief Now', days: 3, badge: 'Free', emoji: '🫁', color: '#EDE7FF', category: 'Anxiety', rating: 4.8, enrolled: '11.2k' },
  { name: 'Sleep Hypnosis', days: 7, badge: 'Premium', emoji: '🌙', color: '#E8EAF6', category: 'Sleep', rating: 4.6, enrolled: '3.9k' },
];

export function RecommendationsViewAll() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filtered = plans.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-4" style={{ background: 'white' }}>
        <div className="flex items-center gap-3 mb-4">
          <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
            <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
          </button>
          <div>
            <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: '#16143A' }}>
              All Recommendations
            </h1>
            <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>{plans.length} plans available</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#8B86A8', width: '16px', height: '16px' }} />
          <input
            type="text"
            placeholder="Search plans..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full py-3"
            style={{ paddingLeft: '44px', paddingRight: '16px', borderRadius: '12px', fontFamily: 'Inter, sans-serif', fontSize: '14px', background: '#F7F5FC', border: '1.5px solid rgba(108,63,232,0.12)', outline: 'none', color: '#16143A' }}
          />
        </div>

        {/* Category chips */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className="flex-shrink-0 px-4 py-2 transition-all"
              style={{
                borderRadius: '20px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                background: activeCategory === cat ? 'linear-gradient(135deg, #6C3FE8, #9B6FFF)' : 'white',
                color: activeCategory === cat ? 'white' : '#574E7E',
                border: activeCategory === cat ? 'none' : '1.5px solid rgba(108,63,232,0.12)',
                boxShadow: activeCategory === cat ? '0px 4px 12px rgba(108,63,232,0.3)' : 'none',
              }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pt-4 pb-6">
        {/* Filter bar */}
        <div className="flex items-center justify-between mb-4">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#8B86A8' }}>
            <span style={{ fontWeight: 700, color: '#16143A' }}>{filtered.length}</span> results
          </p>
          <div className="flex gap-1">
            {(['grid', 'list'] as const).map(mode => (
              <button key={mode} onClick={() => setViewMode(mode)}
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: viewMode === mode ? 'rgba(108,63,232,0.1)' : 'transparent' }}>
                {mode === 'grid'
                  ? <svg width="14" height="14" viewBox="0 0 14 14" fill={viewMode === 'grid' ? '#6C3FE8' : '#C5BBE8'}><rect width="6" height="6" rx="1.5"/><rect x="8" width="6" height="6" rx="1.5"/><rect y="8" width="6" height="6" rx="1.5"/><rect x="8" y="8" width="6" height="6" rx="1.5"/></svg>
                  : <svg width="14" height="14" viewBox="0 0 14 14" fill={viewMode === 'list' ? '#6C3FE8' : '#C5BBE8'}><rect y="1" width="14" height="2.5" rx="1.25"/><rect y="5.75" width="14" height="2.5" rx="1.25"/><rect y="10.5" width="14" height="2.5" rx="1.25"/></svg>
                }
              </button>
            ))}
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 gap-3">
            {filtered.map(plan => (
              <div key={plan.name} className="p-4" style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
                <div className="w-full h-20 rounded-xl flex items-center justify-center mb-3" style={{ background: plan.color }}>
                  <span style={{ fontSize: '32px' }}>{plan.emoji}</span>
                </div>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '13px', color: '#16143A', lineHeight: 1.3 }}>{plan.name}</p>
                <p className="mt-0.5 mb-2" style={{ fontSize: '11px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>{plan.days} Days</p>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-full"
                    style={{ fontSize: '10px', fontWeight: 700, background: plan.badge === 'Free' ? 'rgba(63,196,154,0.12)' : 'rgba(245,167,77,0.12)', color: plan.badge === 'Free' ? '#3FC49A' : '#F5A74D', fontFamily: 'Inter, sans-serif' }}>
                    {plan.badge}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star style={{ width: '10px', height: '10px', color: '#F5A74D', fill: '#F5A74D' }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#16143A', fontFamily: 'Inter, sans-serif' }}>{plan.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map(plan => (
              <div key={plan.name} className="p-4 flex items-center gap-3"
                style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: plan.color }}>
                  <span style={{ fontSize: '28px' }}>{plan.emoji}</span>
                </div>
                <div className="flex-1">
                  <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>{plan.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Clock style={{ width: '11px', height: '11px', color: '#8B86A8' }} />
                    <span style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>{plan.days} Days</span>
                    <span style={{ fontSize: '12px', color: '#C5BBE8' }}>·</span>
                    <span style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>{plan.enrolled} enrolled</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="px-2.5 py-0.5 rounded-full"
                    style={{ fontSize: '10px', fontWeight: 700, background: plan.badge === 'Free' ? 'rgba(63,196,154,0.12)' : 'rgba(245,167,77,0.12)', color: plan.badge === 'Free' ? '#3FC49A' : '#F5A74D', fontFamily: 'Inter, sans-serif' }}>
                    {plan.badge}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star style={{ width: '10px', height: '10px', color: '#F5A74D', fill: '#F5A74D' }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#16143A', fontFamily: 'Inter, sans-serif' }}>{plan.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
