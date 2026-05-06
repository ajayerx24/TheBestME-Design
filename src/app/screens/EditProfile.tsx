import { ArrowLeft, Camera } from 'lucide-react';
import { useState } from 'react';

export function EditProfile() {
  const [selectedGoals, setSelectedGoals] = useState(['Anxiety', 'Self-Love']);
  const goals = [
    { label: 'Anxiety', emoji: '🌿' },
    { label: 'Stress', emoji: '💆' },
    { label: 'Relationships', emoji: '💞' },
    { label: 'Self-Love', emoji: '💜' },
    { label: 'Grief', emoji: '🕊️' },
    { label: 'Confidence', emoji: '⭐' },
  ];

  const toggle = (g: string) => {
    setSelectedGoals(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]);
  };

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto no-scrollbar" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="flex items-center gap-4 px-5 pt-12 pb-4" style={{ background: 'white' }}>
        <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
          <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
        </button>
        <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: '#16143A' }}>
          Edit Profile
        </h1>
      </div>

      <div className="px-5 pt-6">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108,63,232,0.35)' }}>
              <span style={{ fontSize: '40px' }}>👤</span>
            </div>
            <button className="absolute -bottom-1 -right-1 w-9 h-9 rounded-2xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #6C3FE8, #9B6FFF)', boxShadow: '0px 4px 12px rgba(108,63,232,0.4)', border: '2px solid white' }}>
              <Camera style={{ color: 'white', width: '16px', height: '16px' }} />
            </button>
          </div>
        </div>

        {/* Form fields */}
        {[
          { label: 'Full Name', type: 'text', value: 'Aisha Patel', disabled: false },
          { label: 'Email', type: 'email', value: 'aisha@example.com', disabled: true },
          { label: 'Date of Birth', type: 'date', value: '', disabled: false },
        ].map(field => (
          <div key={field.label} className="mb-4">
            <label className="block mb-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, color: '#574E7E' }}>
              {field.label}
            </label>
            <input type={field.type} defaultValue={field.value} disabled={field.disabled}
              className="w-full px-4 py-3"
              style={{
                borderRadius: '12px', fontFamily: 'Inter, sans-serif', fontSize: '14px',
                background: field.disabled ? '#F0EEF9' : 'white',
                border: '1.5px solid rgba(108,63,232,0.12)',
                outline: 'none', color: field.disabled ? '#8B86A8' : '#16143A',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.04)',
              }} />
          </div>
        ))}

        {/* Bio */}
        <div className="mb-5">
          <label className="block mb-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, color: '#574E7E' }}>
            Bio <span style={{ fontWeight: 400, color: '#C5BBE8' }}>(Optional)</span>
          </label>
          <textarea placeholder="Tell us about yourself..."
            className="w-full resize-none"
            style={{
              minHeight: '80px', borderRadius: '12px', fontFamily: 'Inter, sans-serif', fontSize: '14px',
              padding: '12px 16px', background: 'white', border: '1.5px solid rgba(108,63,232,0.12)',
              outline: 'none', color: '#16143A', lineHeight: 1.6, boxShadow: '0px 2px 8px rgba(0,0,0,0.04)',
            }} />
        </div>

        {/* Goals */}
        <h3 className="mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: '#16143A' }}>
          My Goals
        </h3>
        <div className="grid grid-cols-2 gap-2.5 mb-8">
          {goals.map(goal => {
            const isSelected = selectedGoals.includes(goal.label);
            return (
              <button key={goal.label} onClick={() => toggle(goal.label)}
                className="flex items-center gap-2.5 px-4 py-3 transition-all"
                style={{
                  borderRadius: '12px',
                  background: isSelected ? 'linear-gradient(135deg, #6C3FE8, #9B6FFF)' : 'white',
                  border: isSelected ? 'none' : '1.5px solid rgba(108,63,232,0.12)',
                  boxShadow: isSelected ? '0px 6px 16px rgba(108,63,232,0.3)' : '0px 2px 8px rgba(0,0,0,0.04)',
                  fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px',
                  color: isSelected ? 'white' : '#16143A',
                }}>
                <span style={{ fontSize: '16px' }}>{goal.emoji}</span>
                {goal.label}
              </button>
            );
          })}
        </div>

        <button className="w-full text-white py-4 mb-6"
          style={{ borderRadius: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)' }}>
          Save Changes
        </button>
      </div>
    </div>
  );
}
