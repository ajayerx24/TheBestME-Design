import { useState } from 'react';

const goalIcons: Record<string, string> = {
  'Anxiety': '🌿',
  'Stress': '💆',
  'Relationships': '💞',
  'Self-Love': '💜',
  'Grief': '🕊️',
  'Confidence': '⭐',
  'Sleep': '🌙',
  'Mindfulness': '🧘',
  'Trauma': '🌱',
  'Anger Management': '🌊',
};

export function GoalSelection() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>(['Anxiety', 'Self-Love']);

  const goals = ['Anxiety', 'Stress', 'Relationships', 'Self-Love', 'Grief', 'Confidence', 'Sleep', 'Mindfulness', 'Trauma', 'Anger Management'];

  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(g => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  return (
    <div className="w-full h-full flex flex-col px-5 py-0" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="pt-12 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
          style={{ background: 'rgba(108,63,232,0.1)' }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#6C3FE8', fontFamily: 'Inter, sans-serif' }}>
            STEP 1 OF 1
          </span>
        </div>
        <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '24px', color: '#16143A', lineHeight: 1.3 }}>
          What would you like<br />to work on?
        </h1>
        <p className="mt-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#8B86A8' }}>
          Select all that apply — we'll personalize your journey.
        </p>
      </div>

      {/* Goals grid */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="grid grid-cols-2 gap-3 pb-4">
          {goals.map(goal => {
            const isSelected = selectedGoals.includes(goal);
            return (
              <button
                key={goal}
                onClick={() => toggleGoal(goal)}
                className="flex items-center gap-3 px-4 py-3.5 transition-all text-left"
                style={{
                  borderRadius: '14px',
                  background: isSelected
                    ? 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)'
                    : 'white',
                  border: isSelected ? 'none' : '1.5px solid rgba(108,63,232,0.12)',
                  boxShadow: isSelected
                    ? '0px 6px 20px rgba(108,63,232,0.3)'
                    : '0px 2px 8px rgba(0,0,0,0.04)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '13px',
                  color: isSelected ? 'white' : '#16143A',
                }}>
                <span style={{ fontSize: '18px' }}>{goalIcons[goal]}</span>
                <span>{goal}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Continue button */}
      <div className="pt-4 pb-8">
        <p className="text-center mb-4" style={{ fontSize: '13px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
          {selectedGoals.length} goal{selectedGoals.length !== 1 ? 's' : ''} selected
        </p>
        <button
          className="w-full text-white py-4"
          style={{
            borderRadius: '14px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 700,
            fontSize: '15px',
            background: selectedGoals.length > 0
              ? 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)'
              : '#C5BBE8',
            boxShadow: selectedGoals.length > 0 ? '0px 8px 24px rgba(108, 63, 232, 0.35)' : 'none',
          }}>
          Continue
        </button>
      </div>
    </div>
  );
}
