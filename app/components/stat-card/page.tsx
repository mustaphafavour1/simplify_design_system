'use client'
import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable } from '@/components/docs/PropsTable'
import { DosDonts } from '@/components/docs/DosDonts'

const props = [
  { name: 'label',   type: 'string',                         default: '—',      required: true,  description: 'The metric label above the value.' },
  { name: 'value',   type: 'string | number',                default: '—',      required: true,  description: 'The primary display value.' },
  { name: 'change',  type: '{ value: string; trend: "up" | "down" | "neutral" }', default: '—', required: false, description: 'Period-on-period change indicator.' },
  { name: 'prefix',  type: 'string',                         default: '—',      required: false, description: 'Prefix before the value — e.g. "₦".' },
  { name: 'icon',    type: 'ReactNode',                       default: '—',      required: false, description: 'Icon in the top-right of the card.' },
  { name: 'loading', type: 'boolean',                         default: 'false',  required: false, description: 'Shows skeleton state while data loads.' },
]

const dos = [
  'Always show two decimal places for monetary stat card values — ₦1,200,000.00 not ₦1,200,000.',
  'Use trend indicators consistently — up is always green, down is context-dependent (red for losses, green for reductions in debt).',
  'Pair each stat card with a clear, short label. "Total Collections" not "Collections Data".',
  'Use the loading skeleton when fetching data — never show 0 or empty as a placeholder.',
]

const donts = [
  "Don't put more than 4 stat cards in a single row on desktop.",
  "Don't truncate values — if the number is too long, adjust the card width or font size.",
  "Don't use icons that are decorative only — icons should reinforce the meaning of the metric.",
  "Don't mix currency and non-currency values in the same stat card row without clear labelling.",
]

const demoStats = [
  { label: 'Total Collections',   value: '₦12,450,000.00', change: '+12.4%', trend: 'up',      icon: '⇩' },
  { label: 'Successful Transfers', value: '4,821',          change: '+8.1%',  trend: 'up',      icon: '✓' },
  { label: 'Failed Transactions',  value: '23',             change: '-5.2%',  trend: 'down',    icon: '✕' },
  { label: 'Active Accounts',      value: '1,204',          change: '0%',     trend: 'neutral', icon: '◉' },
]

export default function StatCardPage() {
  return (
    <div>
      <PageHeader
        section="Components / Data Display"
        title="Stat Card"
        description="Stat cards surface key metrics at the top of dashboard views. The most-used component across Maestro MFB, VoxePay, and the OAGF Treasury portal."
        status="stable"
      />

      <ComponentPreview
        title="Dashboard row"
        description="Four stat cards in a grid — the standard dashboard header pattern across all SS products."
        code={`<StatCard label="Total Collections"    value="₦12,450,000.00" change={{ value: "+12.4%", trend: "up" }} />\n<StatCard label="Successful Transfers" value="4,821"           change={{ value: "+8.1%",  trend: "up" }} />\n<StatCard label="Failed Transactions"  value="23"             change={{ value: "-5.2%",  trend: "down" }} />\n<StatCard label="Active Accounts"      value="1,204"          change={{ value: "0%",     trend: "neutral" }} />`}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, width: '100%' }}>
          {demoStats.map(s => (
            <div key={s.label} className="stat-card">
              <div className="stat-header">
                <span className="stat-label">{s.label}</span>
                <span className="stat-icon">{s.icon}</span>
              </div>
              <div className="stat-value">{s.value}</div>
              <div className={`stat-change trend-${s.trend}`}>
                {s.trend === 'up' && '↑ '}
                {s.trend === 'down' && '↓ '}
                {s.change}
                <span className="stat-period"> vs last month</span>
              </div>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Loading state"
        description="Use skeleton state whenever data is being fetched. Never show zero as a placeholder."
        code={`<StatCard label="Total Collections" loading />`}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, width: '100%' }}>
          {[1,2,3,4].map(i => (
            <div key={i} className="stat-card">
              <div className="stat-header">
                <span className="skel skel-label" />
                <span className="skel skel-icon" />
              </div>
              <span className="skel skel-value" />
              <span className="skel skel-change" />
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Sizes — compact vs default"
        code={`<StatCard size="compact" label="Collections" value="₦12,450,000.00" />\n<StatCard size="default" label="Collections" value="₦12,450,000.00" />`}
      >
        <div style={{ display: 'flex', gap: 12, width: '100%' }}>
          <div className="stat-card stat-compact" style={{ flex: 1 }}>
            <span className="stat-label">Collections</span>
            <div className="stat-value" style={{ fontSize: '1.25rem' }}>₦12,450,000.00</div>
          </div>
          <div className="stat-card" style={{ flex: 1 }}>
            <span className="stat-label">Collections</span>
            <div className="stat-value">₦12,450,000.00</div>
          </div>
        </div>
      </ComponentPreview>

      <PropsTable props={props} />
      <DosDonts dos={dos} donts={donts} />

      <style jsx global>{`
        .stat-card {
          padding: 16px 18px;
          border: 1.5px solid var(--color-border);
          border-radius: 12px;
          background: var(--color-bg-raised);
          display: flex; flex-direction: column; gap: 6px;
        }
        .stat-compact { padding: 12px 14px; }
        .stat-header { display: flex; align-items: center; justify-content: space-between; }
        .stat-label { font-size: 11.5px; font-weight: 600; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.04em; }
        .stat-icon { font-size: 16px; color: var(--color-primary); opacity: 0.6; }
        .stat-value { font-size: 1.5rem; font-weight: 700; color: var(--color-text); letter-spacing: -0.02em; font-family: 'Poppins', sans-serif; line-height: 1.2; margin-top: 2px; }
        .stat-change { font-size: 12px; font-weight: 600; display: flex; align-items: center; gap: 2px; }
        .stat-period { font-weight: 400; color: var(--color-text-muted); }
        .trend-up { color: #16A34A; }
        .trend-down { color: #DC2626; }
        .trend-neutral { color: var(--color-text-muted); }

        /* Skeleton */
        .skel {
          display: block; border-radius: 6px;
          background: linear-gradient(90deg, var(--color-bg-subtle) 25%, var(--color-border) 50%, var(--color-bg-subtle) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }
        .skel-label  { height: 10px; width: 70%; }
        .skel-icon   { height: 16px; width: 16px; border-radius: 4px; }
        .skel-value  { height: 28px; width: 90%; margin-top: 6px; border-radius: 8px; }
        .skel-change { height: 10px; width: 50%; margin-top: 4px; }
        @keyframes shimmer { to { background-position: -200% 0; } }
      `}</style>
    </div>
  )
}