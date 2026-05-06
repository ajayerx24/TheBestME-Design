import { ArrowLeft, FileText, Mail, Download } from 'lucide-react';
import { useState } from 'react';

export function JournalExport() {
  const [selected, setSelected] = useState<'pdf' | 'email'>('pdf');

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto no-scrollbar" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="flex items-center gap-4 px-5 pt-12 pb-4" style={{ background: 'white' }}>
        <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
          <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
        </button>
        <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: '#16143A' }}>
          Export Journal
        </h1>
      </div>

      <div className="px-5 pt-5">
        {/* Export format options */}
        <p className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, color: '#574E7E', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          Export Format
        </p>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button onClick={() => setSelected('pdf')}
            className="p-5 flex flex-col items-center gap-3 transition-all"
            style={{
              borderRadius: '16px',
              background: selected === 'pdf' ? 'linear-gradient(135deg, #EDE7FF 0%, #F3EEFF 100%)' : 'white',
              border: selected === 'pdf' ? '2px solid #6C3FE8' : '1.5px solid rgba(108,63,232,0.12)',
              boxShadow: selected === 'pdf' ? '0px 6px 20px rgba(108,63,232,0.2)' : '0px 2px 8px rgba(0,0,0,0.04)',
            }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: selected === 'pdf' ? 'rgba(108,63,232,0.15)' : '#F7F5FC' }}>
              <FileText style={{ color: '#6C3FE8', width: '22px', height: '22px' }} />
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px', color: '#16143A' }}>
              Export as PDF
            </span>
          </button>

          <button onClick={() => setSelected('email')}
            className="p-5 flex flex-col items-center gap-3 transition-all"
            style={{
              borderRadius: '16px',
              background: selected === 'email' ? 'linear-gradient(135deg, #EDE7FF 0%, #F3EEFF 100%)' : 'white',
              border: selected === 'email' ? '2px solid #6C3FE8' : '1.5px solid rgba(108,63,232,0.12)',
              boxShadow: selected === 'email' ? '0px 6px 20px rgba(108,63,232,0.2)' : '0px 2px 8px rgba(0,0,0,0.04)',
            }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: selected === 'email' ? 'rgba(108,63,232,0.15)' : '#F7F5FC' }}>
              <Mail style={{ color: '#6C3FE8', width: '22px', height: '22px' }} />
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px', color: '#16143A' }}>
              Send to Email
            </span>
          </button>
        </div>

        {/* Date Range */}
        <p className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, color: '#574E7E', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          Date Range
        </p>
        <div className="flex gap-3 mb-6">
          <div className="flex-1">
            <label className="block mb-1" style={{ fontSize: '11px', fontWeight: 600, color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>FROM</label>
            <input type="date" className="w-full px-4 py-3"
              style={{ borderRadius: '12px', fontFamily: 'Inter, sans-serif', fontSize: '13px', background: 'white', border: '1.5px solid rgba(108,63,232,0.12)', outline: 'none', color: '#16143A' }} />
          </div>
          <div className="flex-1">
            <label className="block mb-1" style={{ fontSize: '11px', fontWeight: 600, color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>TO</label>
            <input type="date" className="w-full px-4 py-3"
              style={{ borderRadius: '12px', fontFamily: 'Inter, sans-serif', fontSize: '13px', background: 'white', border: '1.5px solid rgba(108,63,232,0.12)', outline: 'none', color: '#16143A' }} />
          </div>
        </div>

        {/* Filter */}
        <p className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, color: '#574E7E', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          Filter by Plan
        </p>
        <select className="w-full px-4 py-3 mb-8 appearance-none"
          style={{ borderRadius: '12px', fontFamily: 'Inter, sans-serif', fontSize: '14px', background: 'white', border: '1.5px solid rgba(108,63,232,0.12)', outline: 'none', color: '#16143A' }}>
          <option>All Plans</option>
          <option>Overcoming Anxiety</option>
          <option>Self Love Journey</option>
        </select>

        {/* Summary */}
        <div className="flex items-center justify-between p-4 mb-6"
          style={{ borderRadius: '14px', background: 'rgba(108,63,232,0.06)', border: '1px solid rgba(108,63,232,0.1)' }}>
          <div>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>3 entries ready</p>
            <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>May 4 – May 6, 2026</p>
          </div>
          <Download style={{ color: '#6C3FE8', width: '20px', height: '20px' }} />
        </div>

        <button className="w-full text-white py-4 mb-4"
          style={{ borderRadius: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '15px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108, 63, 232, 0.35)' }}>
          Export Now
        </button>
      </div>
    </div>
  );
}
