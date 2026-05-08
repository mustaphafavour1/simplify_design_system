'use client'
import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable } from '@/components/docs/PropsTable'
import { DosDonts } from '@/components/docs/DosDonts'

const props = [
  { name: 'title',       type: 'string',    default: '—',     required: true,  description: 'Short headline for the empty state.' },
  { name: 'description', type: 'string',    default: '—',     required: false, description: 'Supporting text explaining what will appear here.' },
  { name: 'icon',        type: 'ReactNode', default: 'auto',  required: false, description: 'Illustration or icon. Defaults to a document/search icon.' },
  { name: 'action',      type: '{ label: string; onClick: () => void }', default: '—', required: false, description: 'Optional CTA button — only when there is a direct action the user can take.' },
]

const dos = [
  'Always explain what will appear here when data exists — "When there are collections, they will show here."',
  'Keep titles short and factual — "No Records Yet" not "Oh no, nothing here!"',
  'Only add an action button if there is something the user can directly do — e.g. "Add account".',
  'Use the same empty state illustration style across all empty tables in a product.',
]

const donts = [
  "Don't use empty states to show errors — use an Alert or error state instead.",
  "Don't leave empty states without a description — always tell the user what to expect.",
  "Don't add multiple CTAs — one action maximum, or none.",
  "Don't use humour or personality — SS empty states are calm and informational.",
]

// Document/search SVG — matches the VoxePay "No Records Yet" illustration style
function EmptyIllustration({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="10" width="38" height="48" rx="4" fill="#F1F0F5" stroke="#D8D5E8" strokeWidth="1.5"/>
      <rect x="22" y="20" width="26" height="2.5" rx="1.25" fill="#D8D5E8"/>
      <rect x="22" y="27" width="20" height="2.5" rx="1.25" fill="#D8D5E8"/>
      <rect x="22" y="34" width="23" height="2.5" rx="1.25" fill="#D8D5E8"/>
      <circle cx="50" cy="50" r="16" fill="white" stroke="#D8D5E8" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="10" fill="#F1F0F5" stroke="#D8D5E8" strokeWidth="1.5"/>
      <line x1="57" y1="57" x2="63" y2="63" stroke="#D8D5E8" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="50" cy="50" r="5" fill="#E8E3F3"/>
    </svg>
  )
}

function NoDataIllustration({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <rect x="10" y="24" width="60" height="40" rx="4" fill="#F1F0F5" stroke="#D8D5E8" strokeWidth="1.5"/>
      <rect x="10" y="24" width="60" height="10" rx="4" fill="#E8E3F3" stroke="#D8D5E8" strokeWidth="1.5"/>
      <rect x="18" y="42" width="18" height="2" rx="1" fill="#D8D5E8"/>
      <rect x="18" y="48" width="12" height="2" rx="1" fill="#D8D5E8"/>
      <rect x="44" y="42" width="18" height="2" rx="1" fill="#D8D5E8"/>
      <rect x="44" y="48" width="12" height="2" rx="1" fill="#D8D5E8"/>
      <line x1="40" y1="30" x2="40" y2="30" stroke="#9753E8" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export default function EmptyStatePage() {
  return (
    <div>
      <PageHeader
        section="Components / Feedback"
        title="Empty State"
        description="Shown when a data view has no content to display. Guides the user rather than leaving them with a blank screen. Used heavily in SS dashboard tables, transaction lists, and collection views."
        status="stable"
      />

      <ComponentPreview
        title="Default — table empty state"
        description="The standard pattern used in VoxePay Collections, Transactions, and similar table-based views. Icon centred above message, no action button."
        code={`<EmptyState\n  title="No Records Yet"\n  description="When there are collections, they will show here."\n/>`}
      >
        <div style={{ width: '100%', padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, background: 'var(--color-bg-raised)', borderRadius: 10 }}>
          <EmptyIllustration size={72} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 4 }}>No Records Yet</p>
            <p style={{ fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>When there are collections, they will show here.</p>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With action button"
        description="Only add a CTA when there is a direct, immediate action the user can take to populate the view."
        code={`<EmptyState\n  title="No accounts added"\n  description="Add the first account to start sending bulk transfers."\n  action={{ label: "Add account", onClick: () => {} }}\n/>`}
      >
        <div style={{ width: '100%', padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, background: 'var(--color-bg-raised)', borderRadius: 10 }}>
          <NoDataIllustration size={72} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 4 }}>No accounts added</p>
            <p style={{ fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: 16 }}>Add the first account to start sending bulk transfers.</p>
            <button className="ss-btn ss-btn-primary" style={{ fontSize: 13 }}>Add account</button>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Search / filter — no results"
        description="When a search query or active filter returns nothing. Different from a truly empty view — the data exists, the filter just didn't match."
        code={`<EmptyState\n  title="No results found"\n  description="Try adjusting your search or filters."\n/>`}
      >
        <div style={{ width: '100%', borderRadius: 10, overflow: 'hidden', border: '1.5px solid var(--color-border)', background: 'var(--color-bg-raised)' }}>
          {/* Simulated table header */}
          <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border)', display: 'flex', gap: 16, background: 'var(--color-bg-subtle)' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, padding: '7px 12px', border: '1.5px solid var(--color-border)', borderRadius: 8, fontSize: 13, color: 'var(--color-text-muted)', background: 'var(--color-bg-raised)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              bulk transfer 2025
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['All', 'Successful', 'Pending', 'Failed'].map((t, i) => (
                <button key={t} style={{ padding: '7px 14px', borderRadius: 6, border: 'none', fontSize: 13, fontWeight: i === 0 ? 700 : 400, background: i === 0 ? '#1B56F4' : 'none', color: i === 0 ? '#fff' : 'var(--color-text-muted)', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>{t}</button>
              ))}
            </div>
          </div>
          {/* Empty */}
          <div style={{ padding: '56px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <EmptyIllustration size={64} />
            <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-secondary)' }}>No results found</p>
            <p style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>Try adjusting your search or filters.</p>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="In full page context — VoxePay Collections"
        description="How the empty state sits within the full Collections dashboard layout with stat cards and table."
        code=""
      >
        <div style={{ width: '100%', background: 'var(--color-bg-subtle)', borderRadius: 10, overflow: 'hidden', border: '1.5px solid var(--color-border)' }}>
          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, padding: '16px' }}>
            {[
              { label: 'Total Amount Collected', value: '₦122,210,120,345.05', icon: '₦', color: '#1B56F4' },
              { label: 'Successful Collections', value: '0', icon: '✓', color: '#16A34A' },
              { label: 'Pending Collections',    value: '0', icon: '⏳', color: '#D97706' },
              { label: 'Failed Collections',     value: '0', icon: '⚠', color: '#DC2626' },
            ].map(s => (
              <div key={s.label} style={{ background: 'white', borderRadius: 10, padding: '14px 16px', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>{s.label}</span>
                  <span style={{ fontSize: 14, color: s.color }}>{s.icon}</span>
                </div>
                <div style={{ fontSize: s.value.length > 10 ? '0.85rem' : '1.25rem', fontWeight: 700, color: 'var(--color-text)', fontFamily: 'Poppins, sans-serif' }}>{s.value}</div>
              </div>
            ))}
          </div>
          {/* Table area */}
          <div style={{ margin: '0 16px 16px', background: 'white', borderRadius: 10, border: '1px solid var(--color-border)', overflow: 'hidden' }}>
            <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'flex-end', fontSize: 12, color: 'var(--color-text-muted)' }}>Download Record</div>
            <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--color-border)', display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px', border: '1px solid var(--color-border)', borderRadius: 7, fontSize: 12, color: 'var(--color-text-muted)' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                Search by reference, description or related party
              </div>
              {['All', 'Successful', 'Pending', 'Failed'].map((t, i) => (
                <span key={t} style={{ fontSize: 12, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? '#1B56F4' : 'var(--color-text-muted)', borderBottom: i === 0 ? '2px solid #1B56F4' : 'none', paddingBottom: 4, cursor: 'pointer' }}>{t}</span>
              ))}
            </div>
            <div style={{ padding: '0 14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 1fr 1fr 1fr 1fr 1fr 1fr', padding: '10px 0', borderBottom: '1px solid var(--color-border)' }}>
                {['S/N','Reference ID','Product/Service','Amount (₦)','Related Party','Channel','Status','Date'].map(h => (
                  <span key={h} style={{ fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{h}</span>
                ))}
              </div>
              {/* Empty state */}
              <div style={{ padding: '48px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <EmptyIllustration size={60} />
                <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-secondary)' }}>No Records Yet</p>
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>When there are collections, they will show here.</p>
              </div>
            </div>
            <div style={{ padding: '10px 14px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--color-text-muted)' }}>
              <span>Showing 0 of 0 items</span>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <button style={{ padding: '4px 8px', border: '1px solid var(--color-border)', borderRadius: 6, background: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}>{'<'}</button>
                <span>1 of 1</span>
                <button style={{ padding: '4px 8px', border: '1px solid var(--color-border)', borderRadius: 6, background: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}>{'>'}</button>
              </div>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <PropsTable props={props} />
      <DosDonts dos={dos} donts={donts} />
    </div>
  )
}