'use client'
import { PageHeader } from '@/components/docs/PageHeader'

export default function DataFormattingPage() {
  return (
    <div>
      <PageHeader section="Foundations" title="Data Formatting"
        description="Consistent formatting rules for currency, dates, numbers, and statuses across all SS products. These are binding standards — not suggestions." />

      <section className="fs">
        <h2 className="ft">Currency</h2>
        <div className="rules-table">
          {[
            { rule: 'Always two decimal places',     bad: '₦50,000',           good: '₦50,000.00',       note: 'Even whole numbers get .00' },
            { rule: 'Symbol directly before amount', bad: 'NGN 50,000.00',      good: '₦50,000.00',       note: 'No space between ₦ and amount' },
            { rule: 'Commas as thousand separators', bad: '₦1000000.00',        good: '₦1,000,000.00',    note: 'Never use periods or spaces' },
            { rule: 'Right-align in tables',         bad: 'Left-aligned',       good: 'Right-aligned',    note: 'So decimal points stack vertically' },
            { rule: 'Use ₦ in UI, NGN in API',       bad: 'NGN in UI labels',   good: '₦ in UI, NGN in code', note: 'NGN is for technical/developer contexts' },
          ].map(r => (
            <div key={r.rule} className="rule-row">
              <div className="rule-name">{r.rule}</div>
              <div className="rule-bad"><span className="rb">✕</span>{r.bad}</div>
              <div className="rule-good"><span className="rg">✓</span>{r.good}</div>
              <div className="rule-note">{r.note}</div>
            </div>
          ))}
        </div>
        <div className="table-demo">
          <div className="demo-label">Amount column — right-aligned, two decimals</div>
          <div className="amount-table">
            <div className="at-head"><span>Description</span><span className="right">Amount (₦)</span></div>
            {[
              ['Transfer to John Chuks', '50,000.00'],
              ['DSTV Subscription', '8,500.00'],
              ['Add Funds via Card', '200,000.00'],
              ['Airtime Top-up', '1,000.00'],
              ['Electricity — EKEDC', '25,000.00'],
            ].map(([desc, amt]) => (
              <div key={desc} className="at-row">
                <span>{desc}</span>
                <span className="right mono">₦{amt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fs">
        <h2 className="ft">Dates & times</h2>
        <div className="rules-table">
          {[
            { rule: 'Date format in UI',       bad: '04/05/2026 or 2026-05-04', good: '04 May 2026',          note: 'Avoids ambiguity across regions' },
            { rule: 'Time format',             bad: '1:00 PM or 13:00',         good: '1:00 PM',              note: 'Use 12-hour format for consumer products' },
            { rule: 'Date + time combined',    bad: '04/05 13:00',              good: '04 May 2026, 1:00 PM', note: 'Always full date for transaction records' },
            { rule: 'Relative time (recent)',  bad: '14 hours ago',             good: 'Today, 1:00 PM',       note: 'Use relative only within 24 hours' },
            { rule: 'Date range',              bad: '04/05 - 11/05',            good: '04 – 11 May 2026',     note: 'Use en-dash, not hyphen' },
          ].map(r => (
            <div key={r.rule} className="rule-row">
              <div className="rule-name">{r.rule}</div>
              <div className="rule-bad"><span className="rb">✕</span>{r.bad}</div>
              <div className="rule-good"><span className="rg">✓</span>{r.good}</div>
              <div className="rule-note">{r.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="fs">
        <h2 className="ft">Numbers & percentages</h2>
        <div className="rules-table">
          {[
            { rule: 'Percentages',          bad: '12.43200%',       good: '12.43%',       note: 'Max 2 decimal places for percentages' },
            { rule: 'Large numbers',        bad: '1000000',         good: '1,000,000',    note: 'Always use commas' },
            { rule: 'Counts and quantities',bad: '0 items',         good: '0 items',      note: 'Zero is valid, never hide it' },
            { rule: 'Trend indicators',     bad: '+12% (no icon)',  good: '↑ 12.4%',      note: 'Arrow + percentage, success green' },
          ].map(r => (
            <div key={r.rule} className="rule-row">
              <div className="rule-name">{r.rule}</div>
              <div className="rule-bad"><span className="rb">✕</span>{r.bad}</div>
              <div className="rule-good"><span className="rg">✓</span>{r.good}</div>
              <div className="rule-note">{r.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="fs">
        <h2 className="ft">Transaction statuses</h2>
        <div className="status-grid">
          {[
            { status: 'Successful',  color: '#166534', bg: '#F0FDF4', border: '#BBF7D0', note: 'Payment cleared and settled.' },
            { status: 'Processing',  color: '#92400E', bg: '#FFFBEB', border: '#FDE68A', note: 'Initiated, awaiting settlement.' },
            { status: 'Pending',     color: '#92400E', bg: '#FFFBEB', border: '#FDE68A', note: 'Queued, not yet initiated.' },
            { status: 'Failed',      color: '#991B1B', bg: '#FFF5F5', border: '#FECACA', note: 'Could not be completed.' },
            { status: 'Reversed',    color: '#1E40AF', bg: '#EFF6FF', border: '#BFDBFE', note: 'Completed but subsequently reversed.' },
            { status: 'Cancelled',   color: '#374151', bg: '#F9FAFB', border: '#E5E7EB', note: 'Cancelled before processing.' },
          ].map(s => (
            <div key={s.status} className="status-card">
              <span style={{ display: 'inline-flex', alignItems: 'center', background: s.bg, border: `1px solid ${s.border}`, color: s.color, fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99, marginBottom: 10 }}>{s.status}</span>
              <div style={{ fontSize: 12.5, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .fs { margin-bottom: 52px; }
        .ft { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }

        .rules-table { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; margin-bottom: 16px; }
        .rule-row { display: grid; grid-template-columns: 200px 1fr 1fr 1fr; gap: 12px; padding: 12px 16px; border-bottom: 1px solid var(--color-border); align-items: start; font-size: 13px; }
        .rule-row:last-child { border-bottom: none; }
        .rule-name { font-weight: 600; color: var(--color-text); line-height: 1.5; }
        .rule-bad { color: #991B1B; display: flex; align-items: flex-start; gap: 6px; line-height: 1.5; }
        .rule-good { color: #166534; display: flex; align-items: flex-start; gap: 6px; line-height: 1.5; }
        .rule-note { color: var(--color-text-muted); font-size: 12px; line-height: 1.5; font-style: italic; }
        .rb { font-weight: 800; color: #DC2626; flex-shrink: 0; }
        .rg { font-weight: 800; color: #16A34A; flex-shrink: 0; }

        .table-demo { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .demo-label { font-size: 11px; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: .06em; padding: 10px 16px; border-bottom: 1.5px solid var(--color-border); background: var(--color-bg-subtle); }
        .amount-table {}
        .at-head { display: grid; grid-template-columns: 1fr auto; gap: 24px; padding: 10px 16px; border-bottom: 1px solid var(--color-border); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--color-text-muted); background: var(--color-bg-subtle); }
        .at-row { display: grid; grid-template-columns: 1fr auto; gap: 24px; padding: 11px 16px; border-bottom: 1px solid var(--color-border); font-size: 13px; color: var(--color-text-secondary); }
        .at-row:last-child { border-bottom: none; }
        .right { text-align: right; }
        .mono { font-family: var(--font-mono); font-size: 13px; color: var(--color-text); font-weight: 500; }

        .status-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .status-card { border: 1.5px solid var(--color-border); border-radius: 10px; padding: 16px; background: var(--color-bg-raised); }
      `}</style>
    </div>
  )
}