import { ArrowLeft, Download, Trash2, HardDrive, CheckCircle, ChevronRight, Wifi, WifiOff } from 'lucide-react';
import { useState } from 'react';

interface DownloadItem {
  id: number;
  name: string;
  type: string;
  emoji: string;
  color: string;
  size: string;
  status: 'downloaded' | 'downloading' | 'available';
  progress?: number;
}

const initialDownloads: DownloadItem[] = [
  { id: 1, name: 'Overcoming Anxiety', type: 'Plan · Days 1–5', emoji: '🧠', color: '#EDE7FF', size: '42 MB', status: 'downloaded' },
  { id: 2, name: 'Mindful Mornings', type: 'Plan · All Sessions', emoji: '🌅', color: '#FFF0EE', size: '28 MB', status: 'downloaded' },
  { id: 3, name: 'Sleep Meditation Pack', type: 'Audio · 7 sessions', emoji: '😴', color: '#E8F8F3', size: '64 MB', status: 'downloaded' },
  { id: 4, name: 'My Journal Entries', type: 'Data · 18 entries', emoji: '📖', color: '#F3EEFF', size: '2 MB', status: 'downloaded' },
  { id: 5, name: 'Better Sleep', type: 'Plan · Days 1–3', emoji: '🌙', color: '#E8EAF6', size: '19 MB', status: 'downloading', progress: 65 },
];

const available = [
  { name: 'Self Love Journey', type: '14-Day Plan', emoji: '💜', color: '#F3EEFF', size: '35 MB' },
  { name: 'Grief & Loss', type: '28-Day Plan', emoji: '🌊', color: '#E3F2FD', size: '58 MB' },
];

export function OfflineDownloads() {
  const [downloads, setDownloads] = useState(initialDownloads);
  const [isOnline, setIsOnline] = useState(true);

  const downloadedItems = downloads.filter(d => d.status === 'downloaded');
  const downloadingItems = downloads.filter(d => d.status === 'downloading');
  const totalMB = downloadedItems.reduce((acc, d) => acc + parseFloat(d.size), 0);
  const maxMB = 500;

  const deleteItem = (id: number) => {
    setDownloads(prev => prev.filter(d => d.id !== id));
  };

  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-4" style={{ background: 'white', boxShadow: '0px 1px 0px rgba(108,63,232,0.07)' }}>
        <div className="flex items-center gap-3 mb-1">
          <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
            <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
          </button>
          <div>
            <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: '#16143A' }}>
              Offline Downloads
            </h1>
            <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
              Access content without internet
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pt-4 pb-6">
        {/* Online/offline toggle */}
        <button
          onClick={() => setIsOnline(!isOnline)}
          className="w-full p-4 mb-5 flex items-center gap-3"
          style={{
            borderRadius: '14px',
            background: isOnline ? 'rgba(63,196,154,0.08)' : 'rgba(249,117,102,0.08)',
            border: `1.5px solid ${isOnline ? 'rgba(63,196,154,0.25)' : 'rgba(249,117,102,0.25)'}`,
          }}>
          {isOnline
            ? <Wifi style={{ color: '#3FC49A', width: '20px', height: '20px' }} />
            : <WifiOff style={{ color: '#F97566', width: '20px', height: '20px' }} />}
          <div className="flex-1 text-left">
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>
              {isOnline ? 'Connected' : 'Offline Mode'}
            </p>
            <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
              {isOnline ? 'Tap to simulate offline mode' : 'Tap to go back online'}
            </p>
          </div>
          <div className="w-12 h-6 rounded-full flex items-center px-1"
            style={{ background: isOnline ? '#3FC49A' : '#E0D9F4' }}>
            <div className="w-4 h-4 rounded-full bg-white transition-all"
              style={{ marginLeft: isOnline ? '24px' : '0', transition: 'margin 0.2s ease' }} />
          </div>
        </button>

        {/* Storage usage */}
        <div className="p-4 mb-5"
          style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 12px rgba(0,0,0,0.05)' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: '#EDE7FF' }}>
              <HardDrive style={{ color: '#6C3FE8', width: '18px', height: '18px' }} />
            </div>
            <div className="flex-1">
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>
                Storage Used
              </p>
              <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
                {totalMB.toFixed(0)} MB of {maxMB} MB
              </p>
            </div>
            <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: '#6C3FE8' }}>
              {Math.round((totalMB / maxMB) * 100)}%
            </span>
          </div>
          <div className="h-2.5 rounded-full overflow-hidden" style={{ background: '#F7F5FC' }}>
            <div className="h-full rounded-full"
              style={{ width: `${(totalMB / maxMB) * 100}%`, background: 'linear-gradient(90deg, #6C3FE8, #9B6FFF)' }} />
          </div>
        </div>

        {/* Downloading */}
        {downloadingItems.length > 0 && (
          <>
            <p className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: '#8B86A8', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
              Downloading
            </p>
            {downloadingItems.map(item => (
              <div key={item.id} className="p-4 mb-3"
                style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 10px rgba(0,0,0,0.05)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: item.color }}>
                    <span style={{ fontSize: '22px' }}>{item.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>{item.name}</p>
                    <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>{item.type} · {item.size}</p>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#6C3FE8', fontFamily: 'Inter, sans-serif' }}>{item.progress}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(108,63,232,0.1)' }}>
                  <div className="h-full rounded-full"
                    style={{ width: `${item.progress}%`, background: 'linear-gradient(90deg, #6C3FE8, #9B6FFF)', transition: 'width 0.3s ease' }} />
                </div>
              </div>
            ))}
          </>
        )}

        {/* Downloaded */}
        <p className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: '#8B86A8', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
          Downloaded ({downloadedItems.length})
        </p>
        <div className="space-y-2.5 mb-5">
          {downloadedItems.map(item => (
            <div key={item.id} className="p-4 flex items-center gap-3"
              style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 10px rgba(0,0,0,0.05)' }}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: item.color }}>
                <span style={{ fontSize: '22px' }}>{item.emoji}</span>
              </div>
              <div className="flex-1">
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>{item.name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <CheckCircle style={{ color: '#3FC49A', width: '12px', height: '12px' }} />
                  <p style={{ fontSize: '12px', color: '#3FC49A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Available offline · {item.size}</p>
                </div>
              </div>
              <button onClick={() => deleteItem(item.id)}
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(249,117,102,0.08)' }}>
                <Trash2 style={{ color: '#F97566', width: '16px', height: '16px' }} />
              </button>
            </div>
          ))}
        </div>

        {/* Available to download */}
        {isOnline && (
          <>
            <p className="mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: '#8B86A8', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
              Available to Download
            </p>
            <div className="space-y-2.5">
              {available.map(item => (
                <div key={item.name} className="p-4 flex items-center gap-3"
                  style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 10px rgba(0,0,0,0.05)' }}>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: item.color }}>
                    <span style={{ fontSize: '22px' }}>{item.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>{item.name}</p>
                    <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>{item.type} · {item.size}</p>
                  </div>
                  <button className="flex items-center gap-1.5 px-3 py-2"
                    style={{ borderRadius: '10px', background: 'rgba(108,63,232,0.1)', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px', color: '#6C3FE8' }}>
                    <Download style={{ width: '14px', height: '14px' }} />
                    Save
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {!isOnline && (
          <div className="flex flex-col items-center py-6">
            <WifiOff style={{ color: '#C5BBE8', width: '32px', height: '32px', marginBottom: '12px' }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#C5BBE8', textAlign: 'center' }}>
              Connect to the internet to download more content
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
