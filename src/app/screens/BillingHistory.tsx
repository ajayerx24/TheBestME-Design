import { ArrowLeft, Download, CheckCircle, XCircle, RefreshCw, ChevronRight } from 'lucide-react';

const transactions = [
  { id: '#TBM-2026-00812', plan: 'Yearly Premium', date: 'May 6, 2026', amount: '₹6,999', status: 'success', method: 'Visa •••• 4242' },
  { id: '#TBM-2025-00541', plan: 'Monthly Premium', date: 'Apr 6, 2026', amount: '₹899', status: 'success', method: 'Google Pay' },
  { id: '#TBM-2025-00390', plan: 'Monthly Premium', date: 'Mar 6, 2026', amount: '₹899', status: 'success', method: 'Google Pay' },
  { id: '#TBM-2025-00218', plan: 'Monthly Premium', date: 'Feb 6, 2026', amount: '₹899', status: 'refunded', method: 'Visa •••• 4242' },
  { id: '#TBM-2025-00100', plan: 'Monthly Premium', date: 'Jan 6, 2026', amount: '₹899', status: 'success', method: 'Apple Pay' },
  { id: '#TBM-2024-00887', plan: 'Monthly Premium', date: 'Dec 6, 2025', amount: '₹899', status: 'failed', method: 'Visa •••• 4242' },
];

export function BillingHistory() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#F7F5FC' }}>
      {/* Header */}
      <div className="flex items-center gap-4 px-5 pt-12 pb-4" style={{ background: 'white', boxShadow: '0px 1px 0px rgba(108,63,232,0.07)' }}>
        <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F7F5FC' }}>
          <ArrowLeft style={{ color: '#16143A', width: '20px', height: '20px' }} />
        </button>
        <div>
          <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '20px', color: '#16143A' }}>
            Billing History
          </h1>
          <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>6 transactions</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pt-5 pb-6">
        {/* Summary card */}
        <div className="p-4 mb-5 flex items-center gap-4"
          style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #6C3FE8 0%, #9B6FFF 100%)', boxShadow: '0px 8px 24px rgba(108,63,232,0.3)' }}>
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.2)' }}>
            <span style={{ fontSize: '22px' }}>💳</span>
          </div>
          <div className="flex-1">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>Total Spent</p>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '22px', color: 'white' }}>₹11,494</p>
          </div>
          <div className="text-right">
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>Next billing</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px', color: 'white' }}>May 13, 2027</p>
          </div>
        </div>

        {/* Transactions */}
        <div className="flex items-center justify-between mb-4">
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: '#16143A' }}>Transactions</p>
          <button style={{ fontSize: '13px', fontWeight: 600, color: '#6C3FE8', fontFamily: 'Inter, sans-serif' }}>Export All</button>
        </div>

        <div className="space-y-3">
          {transactions.map((tx) => {
            const statusConfig = {
              success: { icon: CheckCircle, color: '#3FC49A', bg: 'rgba(63,196,154,0.1)', label: 'Paid' },
              refunded: { icon: RefreshCw, color: '#F5A74D', bg: 'rgba(245,167,77,0.1)', label: 'Refunded' },
              failed: { icon: XCircle, color: '#F97566', bg: 'rgba(249,117,102,0.1)', label: 'Failed' },
            }[tx.status] || { icon: CheckCircle, color: '#3FC49A', bg: 'rgba(63,196,154,0.1)', label: 'Paid' };

            const StatusIcon = statusConfig.icon;

            return (
              <div key={tx.id} className="p-4"
                style={{ borderRadius: '16px', background: 'white', boxShadow: '0px 2px 10px rgba(0,0,0,0.05)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: statusConfig.bg }}>
                    <StatusIcon style={{ color: statusConfig.color, width: '20px', height: '20px' }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>
                        {tx.plan}
                      </p>
                      <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '14px', color: '#16143A', flexShrink: 0 }}>
                        {tx.amount}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-0.5">
                      <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>
                        {tx.date} · {tx.method}
                      </p>
                      <span className="px-2 py-0.5 rounded-full"
                        style={{ background: statusConfig.bg, fontSize: '11px', fontWeight: 700, color: statusConfig.color, fontFamily: 'Inter, sans-serif' }}>
                        {statusConfig.label}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3"
                  style={{ borderTop: '1px solid rgba(108,63,232,0.07)' }}>
                  <span style={{ fontSize: '11px', color: '#C5BBE8', fontFamily: 'Inter, sans-serif' }}>{tx.id}</span>
                  <button className="flex items-center gap-1" style={{ fontSize: '12px', color: '#6C3FE8', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                    <Download style={{ width: '13px', height: '13px' }} />
                    Receipt
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help */}
        <div className="mt-5 p-4 flex items-center justify-between"
          style={{ borderRadius: '14px', background: 'white', border: '1.5px solid rgba(108,63,232,0.1)' }}>
          <div>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: '#16143A' }}>
              Billing issue?
            </p>
            <p style={{ fontSize: '12px', color: '#8B86A8', fontFamily: 'Inter, sans-serif' }}>Contact our support team</p>
          </div>
          <ChevronRight style={{ color: '#6C3FE8', width: '18px', height: '18px' }} />
        </div>
      </div>
    </div>
  );
}
