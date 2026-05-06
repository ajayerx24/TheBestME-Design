import { useState } from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';

const moods = [
  { emoji: '😢', label: 'Very Bad', value: 1, color: '#E8414A' },
  { emoji: '😕', label: 'Bad', value: 2, color: '#F97566' },
  { emoji: '😐', label: 'Okay', value: 3, color: '#F5A74D' },
  { emoji: '😊', label: 'Good', value: 4, color: '#3FC49A' },
  { emoji: '😄', label: 'Great', value: 5, color: '#6C3FE8' },
];

const weekData = [
  { day: 'Mon', score: 3 },
  { day: 'Tue', score: 2 },
  { day: 'Wed', score: 4 },
  { day: 'Thu', score: 3 },
  { day: 'Fri', score: 5 },
  { day: 'Sat', score: 4 },
  { day: 'Sun', score: 4 },
];

export function MoodTracking() {
  const [selectedMood, setSelectedMood] = useState(3);

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto no-scrollbar" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="px-5 pt-14 pb-5" style={{ background: 'white' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#8B86A8', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          Today · May 6, 2026
        </p>
        <h1 className="mt-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '24px', color: '#16143A' }}>
          How are you feeling?
        </h1>
      </div>

      <div className="px-5 pt-5">
        {/* Mood selector */}
        <div className="flex justify-between mb-6">
          {moods.map((mood, i) => {
            const isSelected = selectedMood === i;
            return (
              <button key={mood.label} onClick={() => setSelectedMood(i)}
                className="flex flex-col items-center gap-2 transition-all"
                style={{ transform: isSelected ? 'scale(1.12)' : 'scale(1)' }}>
                <div className="flex items-center justify-center transition-all"
                  style={{
                    width: isSelected ? '64px' : '56px',
                    height: isSelected ? '64px' : '56px',
                    borderRadius: '50%',
                    background: isSelected ? `${mood.color === '#E8414A' ? 'rgba(232, 65, 74, 0.15)' : 
                                  mood.color === '#F97566' ? 'rgba(249, 117, 102, 0.15)' :
                                  mood.color === '#F5A74D' ? 'rgba(245, 167, 77, 0.15)' :
                                  mood.color === '#3FC49A' ? 'rgba(63, 196, 154, 0.15)' :
                                  'rgba(108, 63, 232, 0.15)'}` : 'white',
                    border: isSelected ? `2px solid ${mood.color}` : '1.5px solid rgba(108,63,232,0.08)',
                    boxShadow: isSelected ? `0px 8px 20px ${mood.color === '#E8414A' ? 'rgba(232, 65, 74, 0.3)' : 
                                          mood.color === '#F97566' ? 'rgba(249, 117, 102, 0.3)' :
                                          mood.color === '#F5A74D' ? 'rgba(245, 167, 77, 0.3)' :
                                          mood.color === '#3FC49A' ? 'rgba(63, 196, 154, 0.3)' :
                                          'rgba(108, 63, 232, 0.3)'}` : '0px 2px 8px rgba(0,0,0,0.05)',
                  }}>
                  <span style={{ fontSize: isSelected ? '32px' : '26px' }}>{mood.emoji}</span>
                </div>
                <span style={{ fontSize: '10px', fontWeight: isSelected ? 700 : 500, color: isSelected ? mood.color : '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
                  {mood.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected mood info */}
        {selectedMood >= 0 && (
          <div className="p-4 mb-5"
            style={{ 
              borderRadius: '14px', 
              background: `${moods[selectedMood].color === '#E8414A' ? 'rgba(232, 65, 74, 0.1)' : 
                          moods[selectedMood].color === '#F97566' ? 'rgba(249, 117, 102, 0.1)' :
                          moods[selectedMood].color === '#F5A74D' ? 'rgba(245, 167, 77, 0.1)' :
                          moods[selectedMood].color === '#3FC49A' ? 'rgba(63, 196, 154, 0.1)' :
                          'rgba(108, 63, 232, 0.1)'}`, 
              border: `1.5px solid ${moods[selectedMood].color === '#E8414A' ? 'rgba(232, 65, 74, 0.3)' : 
                              moods[selectedMood].color === '#F97566' ? 'rgba(249, 117, 102, 0.3)' :
                              moods[selectedMood].color === '#F5A74D' ? 'rgba(245, 167, 77, 0.3)' :
                              moods[selectedMood].color === '#3FC49A' ? 'rgba(63, 196, 154, 0.3)' :
                              'rgba(108, 63, 232, 0.3)'}` 
            }}>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', color: '#16143A' }}>
              Feeling {moods[selectedMood].label} today
            </p>
            <p className="mt-0.5" style={{ fontSize: '13px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
              {selectedMood >= 3 ? "That's great — keep it up!" : selectedMood === 2 ? "That's okay, tomorrow is a new day." : "It's okay to feel this way. You're not alone."}
            </p>
          </div>
        )}

        {/* Note input */}
        <div className="mb-5">
          <label className="block mb-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, color: '#574E7E' }}>
            Add a Note <span style={{ color: '#C5BBE8', fontWeight: 400 }}>(Optional)</span>
          </label>
          <textarea
            placeholder="I felt a lot more calm today..."
            className="w-full resize-none"
            style={{
              minHeight: '110px',
              borderRadius: '14px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              padding: '14px 16px',
              background: 'white',
              border: '1.5px solid rgba(108,63,232,0.1)',
              outline: 'none',
              lineHeight: 1.7,
              color: '#16143A',
              boxShadow: '0px 2px 12px rgba(0,0,0,0.04)',
            }}
          />
        </div>

        <button className="w-full text-white py-4 mb-6"
          style={{ borderRadius: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)' }}>
          Save Mood
        </button>

        {/* Weekly chart */}
        <div className="flex items-center justify-between mb-3">
          <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '17px', color: '#16143A' }}>
            This Week
          </h2>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#6C3FE8', fontFamily: 'Inter, sans-serif' }}>Avg: 3.6/5</span>
        </div>

        <div className="p-4 mb-4" style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={weekData} barSize={28} barCategoryGap="20%">
              <XAxis dataKey="day" axisLine={false} tickLine={false}
                tick={{ fontSize: 11, fill: '#8B86A8', fontFamily: 'Inter, sans-serif', fontWeight: 600 }} />
              <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                {weekData.map((entry, i) => (
                  <Cell key={i} fill={entry.day === 'Fri' ? '#6C3FE8' : 'rgba(108,63,232,0.2)'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
