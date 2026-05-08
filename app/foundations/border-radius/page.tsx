'use client'
import { PageHeader } from '@/components/docs/PageHeader'

const radii = [
  { token: '--radius-none', value: '0px',    use: 'Sharp corners — table row highlights, dividers' },
  { token: '--radius-sm',   value: '4px',    use: 'Small chips, badges, code blocks, tight elements' },
  { token: '--radius-md',   value: '8px',    use: 'Buttons, inputs, small cards, tags — default interactive elements' },
  { token: '--radius-lg',   value: '12px',   use: 'Cards, panels, modals, sidebar sections' },
  { token: '--radius-xl',   value: '16px',   use: 'Large cards, bottom sheets, floating panels' },
  { token: '--radius-2xl',  value: '24px',   use: 'Feature cards, full-page overlays, hero elements' },
  { token: '--radius-full', value: '9999px', use: 'Pills, badges, avatars, toggle switches, progress bars' },
]

export default function BorderRadiusPage() {
  return (
    <div>
      <PageHeader section="Foundations" title="Border Radius"
        description="SS products use a consistent radius scale. Larger radii signal softer, more approachable surfaces — smaller radii signal precision and data density. Never use arbitrary values." />

      <section className="fs">
        <h2 className="ft">Radius scale</h2>
        <div className="rad-grid">
          {radii.map(r => (
            <div key={r.token} className="rad-card">
              <div className="rad-preview">
                <div style={{ width: 72, height: 72, background: 'var(--color-primary)', opacity: 0.15, borderRadius: r.value, border: '2px solid var(--color-primary)', flexShrink: 0 }} />
              </div>
              <div className="rad-meta">
                <code className="rad-token">{r.token}</code>
                <div className="rad-value">{r.value}</div>
                <div className="rad-use">{r.use}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="fs">
        <h2 className="ft">Applied in context</h2>
        <div className="ctx-demo">
          {[
            { label: 'Badge (--radius-sm → full)', el: <span style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', color: '#166534', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 9999 }}>Successful</span> },
            { label: 'Button (--radius-md)', el: <button style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '9px 18px', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>Save changes</button> },
            { label: 'Input (--radius-md)', el: <input style={{ border: '1.5px solid var(--color-border)', borderRadius: 8, padding: '9px 13px', fontSize: 13, fontFamily: 'var(--font-sans)', outline: 'none', width: 200 }} placeholder="Account number" /> },
            { label: 'Card (--radius-lg)', el: <div style={{ background: 'white', border: '1.5px solid var(--color-border)', borderRadius: 12, padding: '16px 20px', width: 180, boxShadow: '0 4px 12px rgba(13,8,32,.08)' }}><div style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 700, marginBottom: 4 }}>TOTAL COLLECTED</div><div style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text)' }}>₦0.00</div></div> },
            { label: 'Avatar (--radius-full)', el: <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--color-primary-faint)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', border: '2px solid var(--color-primary-subtle)' }}>AE</div> },
            { label: 'Modal (--radius-xl)', el: <div style={{ background: 'white', border: '1.5px solid var(--color-border)', borderRadius: 16, padding: '16px 20px', width: 160, boxShadow: '0 16px 48px rgba(13,8,32,.16)', textAlign: 'center', fontSize: 12, color: 'var(--color-text-secondary)' }}>Modal card<br />border-radius: 16px</div> },
          ].map(c => (
            <div key={c.label} className="ctx-item">
              <div className="ctx-el">{c.el}</div>
              <div className="ctx-label">{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .fs { margin-bottom: 52px; }
        .ft { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
        .fd { font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; max-width: 600px; }
        .rad-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .rad-card { border: 1.5px solid var(--color-border); border-radius: 12px; padding: 16px; background: var(--color-bg-raised); }
        .rad-preview { display: flex; align-items: center; justify-content: center; height: 90px; margin-bottom: 12px; background: var(--color-bg-subtle); border-radius: 8px; }
        .rad-token { font-size: 11px; font-family: var(--font-mono); color: var(--color-primary); background: var(--color-primary-faint); padding: 2px 6px; border-radius: 4px; display: block; margin-bottom: 4px; }
        .rad-value { font-size: 13px; font-weight: 600; color: var(--color-text); margin-bottom: 5px; }
        .rad-use { font-size: 12px; color: var(--color-text-muted); line-height: 1.5; }
        .ctx-demo { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .ctx-item { border: 1.5px solid var(--color-border); border-radius: 12px; padding: 20px; background: var(--color-bg-raised); display: flex; flex-direction: column; align-items: center; gap: 14px; }
        .ctx-el { display: flex; align-items: center; justify-content: center; }
        .ctx-label { font-size: 11.5px; color: var(--color-text-muted); text-align: center; line-height: 1.5; }
      `}</style>
    </div>
  )
}