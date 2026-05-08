'use client'
import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable } from '@/components/docs/PropsTable'
import { DosDonts } from '@/components/docs/DosDonts'

const props = [
  { name: 'variant', type: '"default" | "success" | "warning" | "error" | "info" | "purple"', default: '"default"', required: false, description: 'Colour variant — maps to semantic meaning.' },
  { name: 'size',    type: '"sm" | "md"',                                                       default: '"md"',       required: false, description: 'Controls font size and padding.' },
  { name: 'dot',     type: 'boolean',                                                           default: 'false',      required: false, description: 'Shows a small dot indicator before the label.' },
  { name: 'children',type: 'ReactNode',                                                         default: '—',          required: true,  description: 'Badge label content.' },
]

const dos = [
  'Use badges to communicate status — transaction states, account tiers, verification levels.',
  'Keep badge labels to 1–2 words maximum. "Successful" not "Transaction was successful".',
  'Use semantic variants consistently — green always means success, red always means failure.',
  'Use the dot variant for live/active status indicators like connection state or real-time feeds.',
]

const donts = [
  "Don't use badges for counts or numbers — use a separate chip or counter component instead.",
  "Don't stack multiple badges next to each other — pick the one that matters most.",
  "Don't use colour alone to communicate meaning — the label must also convey the status.",
  "Don't create custom colours outside the defined variants.",
]

export default function BadgePage() {
  return (
    <div>
      <PageHeader
        section="Components / Data Display"
        title="Badge"
        description="Badges communicate status, state, or category at a glance. Used extensively across SS products for transaction statuses, account tiers, KYC levels, and verification states."
        status="stable"
      />

      <ComponentPreview
        title="Variants"
        description="Six variants covering all semantic states used across SS products."
        code={`<Badge variant="default">Pending</Badge>\n<Badge variant="success">Successful</Badge>\n<Badge variant="warning">Processing</Badge>\n<Badge variant="error">Failed</Badge>\n<Badge variant="info">New</Badge>\n<Badge variant="purple">Tier 3</Badge>`}
      >
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          {[
            { v: 'default', label: 'Pending' },
            { v: 'success', label: 'Successful' },
            { v: 'warning', label: 'Processing' },
            { v: 'error',   label: 'Failed' },
            { v: 'info',    label: 'New' },
            { v: 'purple',  label: 'Tier 3' },
          ].map(b => (
            <span key={b.v} className={`ss-badge ss-badge-${b.v}`}>{b.label}</span>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With dot indicator"
        description="Use the dot variant for live states and real-time indicators."
        code={`<Badge variant="success" dot>Active</Badge>\n<Badge variant="error" dot>Offline</Badge>\n<Badge variant="warning" dot>Syncing</Badge>`}
      >
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {[
            { v: 'success', label: 'Active' },
            { v: 'error',   label: 'Offline' },
            { v: 'warning', label: 'Syncing' },
          ].map(b => (
            <span key={b.v} className={`ss-badge ss-badge-${b.v} ss-badge-dot`}>
              <span className={`dot dot-${b.v}`} />
              {b.label}
            </span>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Sizes"
        code={`<Badge size="sm">Verified</Badge>\n<Badge size="md">Verified</Badge>`}
      >
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span className="ss-badge ss-badge-purple ss-badge-sm">Verified</span>
          <span className="ss-badge ss-badge-purple">Verified</span>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="In context — transaction list"
        description="How badges appear inline with financial data."
        code={`// Transaction row status badges\n<Badge variant="success">Successful</Badge>\n<Badge variant="error">Failed</Badge>\n<Badge variant="warning">Processing</Badge>`}
      >
        <div style={{ border: '1.5px solid var(--color-border)', borderRadius: 10, overflow: 'hidden', width: '100%' }}>
          {[
            { name: 'Transfer to John Chuks',   amount: '₦50,000.00',  status: 'success', label: 'Successful' },
            { name: 'Bill Payment — DSTV',       amount: '₦8,500.00',   status: 'warning', label: 'Processing' },
            { name: 'Add Funds via Card',         amount: '₦200,000.00', status: 'error',   label: 'Failed' },
          ].map((row, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: i < 2 ? '1px solid var(--color-border)' : 'none', background: 'var(--color-bg-raised)' }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-text)' }}>{row.name}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--color-text)', textAlign: 'right' }}>{row.amount}</span>
                <span className={`ss-badge ss-badge-${row.status}`}>{row.label}</span>
              </div>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <PropsTable props={props} />
      <DosDonts dos={dos} donts={donts} />

      <style jsx global>{`
        .ss-badge {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12px; font-weight: 700;
          padding: 3px 10px; border-radius: 99px;
          border: 1px solid; line-height: 1.4;
          font-family: var(--font-sans);
          white-space: nowrap;
        }
        .ss-badge-sm { font-size: 10.5px; padding: 2px 8px; }
        .ss-badge-default { color: #374151; background: #F9FAFB; border-color: #E5E7EB; }
        .ss-badge-success { color: #166534; background: #F0FDF4; border-color: #BBF7D0; }
        .ss-badge-warning { color: #92400E; background: #FFFBEB; border-color: #FDE68A; }
        .ss-badge-error   { color: #991B1B; background: #FFF5F5; border-color: #FECACA; }
        .ss-badge-info    { color: #1E40AF; background: #EFF6FF; border-color: #BFDBFE; }
        .ss-badge-purple  { color: #6B21A8; background: #FAF5FF; border-color: #E9D5FF; }
        .dot {
          width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
          animation: badge-pulse 2s ease-in-out infinite;
        }
        .dot-success { background: #16A34A; }
        .dot-error   { background: #DC2626; }
        .dot-warning { background: #D97706; }
        @keyframes badge-pulse {
          0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}