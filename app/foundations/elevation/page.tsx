'use client'
import { PageHeader } from '@/components/docs/PageHeader'

const shadows = [
  { level: 0, token: 'none',         value: 'none',                                    use: 'Flat surfaces — table rows, list items, default cards' },
  { level: 1, token: '--shadow-sm',  value: '0 1px 2px rgba(13,8,32,.06)',             use: 'Subtle lift — input fields, default state for interactive cards' },
  { level: 2, token: '--shadow-md',  value: '0 4px 12px rgba(13,8,32,.08)',            use: 'Raised cards — stat cards, collection cards, hovered states' },
  { level: 3, token: '--shadow-lg',  value: '0 8px 32px rgba(13,8,32,.12)',            use: 'Dropdowns, select menus, floating elements' },
  { level: 4, token: '--shadow-xl',  value: '0 16px 48px rgba(13,8,32,.16)',           use: 'Modals, dialogs, bottom sheets' },
  { level: 5, token: '--shadow-2xl', value: '0 24px 64px rgba(13,8,32,.22)',           use: 'Toast notifications, popovers, command palettes' },
]

export default function ElevationPage() {
  return (
    <div>
      <PageHeader section="Foundations" title="Elevation"
        description="Elevation uses box shadows to communicate depth and hierarchy. Higher elevation = more shadow. Components that appear above others in the UI should have a higher elevation level." />

      <section className="fs">
        <h2 className="ft">Shadow scale</h2>
        <p className="fd">Six levels from flat (0) to highest overlay (5). Each level has a specific semantic purpose — do not use elevation arbitrarily.</p>
        <div className="elev-grid">
          {shadows.map(s => (
            <div key={s.level} className="elev-card" style={{ boxShadow: s.value === 'none' ? 'none' : s.value }}>
              <div className="elev-level">Level {s.level}</div>
              <code className="elev-token">{s.token}</code>
              <div className="elev-use">{s.use}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="fs">
        <h2 className="ft">Elevation in context</h2>
        <p className="fd">How elevation stacks in a typical dashboard view.</p>
        <div className="ctx-stack">
          <div style={{ padding: 24, background: 'var(--color-bg)', borderRadius: 12, border: '1.5px solid var(--color-border)', position: 'relative' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Level 0 — Page background</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 16 }}>
              {['Stat Card', 'Stat Card', 'Stat Card'].map((l, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 10, padding: '14px 16px', boxShadow: '0 4px 12px rgba(13,8,32,.08)', border: '1.5px solid var(--color-border)' }}>
                  <div style={{ fontSize: 10, color: 'var(--color-text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 }}>Level 2 — {l}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text)' }}>₦0.00</div>
                </div>
              ))}
            </div>
            <div style={{ background: 'white', borderRadius: 10, padding: '14px 16px', border: '1.5px solid var(--color-border)' }}>
              <div style={{ fontSize: 10, color: 'var(--color-text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Level 1 — Table card</div>
            </div>
            {/* Simulated dropdown */}
            <div style={{ position: 'absolute', top: 24, right: 24, background: 'white', borderRadius: 10, padding: '10px 0', boxShadow: '0 8px 32px rgba(13,8,32,.12)', border: '1.5px solid var(--color-border)', minWidth: 140 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', padding: '4px 14px', marginBottom: 4 }}>Level 3 — Dropdown</div>
              {['Export PDF', 'Export CSV', 'Export XLSX'].map(o => (
                <div key={o} style={{ fontSize: 12.5, color: 'var(--color-text-secondary)', padding: '8px 14px', cursor: 'pointer' }}>{o}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fs">
        <h2 className="ft">Reference table</h2>
        <div style={{ border: '1.5px solid var(--color-border)', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '70px 140px 1fr 1fr', gap: 12, padding: '10px 16px', background: 'var(--color-bg-subtle)', borderBottom: '1.5px solid var(--color-border)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)' }}>
            <span>Level</span><span>Token</span><span>Value</span><span>Use</span>
          </div>
          {shadows.map((s, i) => (
            <div key={s.level} style={{ display: 'grid', gridTemplateColumns: '70px 140px 1fr 1fr', gap: 12, padding: '12px 16px', borderBottom: i < shadows.length - 1 ? '1px solid var(--color-border)' : 'none', alignItems: 'start', fontSize: 13 }}>
              <strong style={{ color: 'var(--color-text)' }}>{s.level}</strong>
              <code style={{ fontSize: 11.5, fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', background: 'var(--color-primary-faint)', padding: '2px 6px', borderRadius: 4 }}>{s.token}</code>
              <code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{s.value}</code>
              <span style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{s.use}</span>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .fs { margin-bottom: 52px; }
        .ft { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
        .fd { font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; max-width: 600px; }
        .elev-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .elev-card { background: var(--color-bg-raised); border-radius: 12px; padding: 20px; border: 1px solid rgba(0,0,0,0.04); }
        .elev-level { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); margin-bottom: 6px; }
        .elev-token { font-size: 12px; font-family: var(--font-mono); color: var(--color-primary); background: var(--color-primary-faint); padding: 2px 6px; border-radius: 4px; display: block; margin-bottom: 10px; }
        .elev-use { font-size: 12.5px; color: var(--color-text-secondary); line-height: 1.6; }
        .ctx-stack { }
      `}</style>
    </div>
  )
}