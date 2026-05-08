'use client'
import { PageHeader } from '@/components/docs/PageHeader'

const scale = [
  { token: '--space-1',  px: 4,  use: 'Icon gaps, tight inline spacing' },
  { token: '--space-2',  px: 8,  use: 'Button vertical padding, input inner gap' },
  { token: '--space-3',  px: 12, use: 'Small component padding' },
  { token: '--space-4',  px: 16, use: 'Default padding, list item gaps' },
  { token: '--space-5',  px: 20, use: 'Card padding (compact), sidebar padding' },
  { token: '--space-6',  px: 24, use: 'Card padding (default), small section gap' },
  { token: '--space-8',  px: 32, use: 'Section gap (md), page horizontal margin' },
  { token: '--space-10', px: 40, use: 'Section gap (lg)' },
  { token: '--space-12', px: 48, use: 'Page section vertical rhythm' },
  { token: '--space-16', px: 64, use: 'Large gaps, hero padding' },
]

export default function SpacingPage() {
  return (
    <div>
      <PageHeader section="Foundations" title="Spacing & Grid"
        description="All spacing is built on a 4px base unit. Every gap, padding, and margin in SS products is a multiple of 4 — creating predictable visual rhythm across all interfaces." />

      <section className="fs">
        <h2 className="ft">Base unit — 4px</h2>
        <p className="fd">One base unit = 4px. All spacing tokens are multiples of this. If something looks off, it is almost always because it has broken from the 4px grid.</p>
        <div className="base-demo">
          {[1,2,3,4,6,8,12].map(n => (
            <div key={n} className="b-item">
              <div style={{ width: n * 4, height: n * 4, background: 'var(--color-primary)', borderRadius: 3, opacity: 0.7, minWidth: 4 }} />
              <code style={{ fontSize: 10, color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>{n * 4}px</code>
            </div>
          ))}
        </div>
      </section>

      <section className="fs">
        <h2 className="ft">Spacing scale</h2>
        <div className="st-wrap">
          <div className="st-head"><span>Token</span><span>px</span><span>rem</span><span>Bar</span><span>Common use</span></div>
          {scale.map(s => (
            <div key={s.token} className="st-row">
              <code className="st-tok">{s.token}</code>
              <span className="st-px">{s.px}px</span>
              <span className="st-rem">{(s.px / 16).toFixed(4).replace(/\.?0+$/, '')}rem</span>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: Math.min(s.px * 2, 200), height: 10, background: 'var(--color-primary)', opacity: 0.5, borderRadius: 3 }} />
              </div>
              <span className="st-use">{s.use}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="fs">
        <h2 className="ft">Grid system</h2>
        <div className="grid-cards">
          {[
            { label: 'Desktop — 12 columns', cols: 12, gutter: '24px', margin: '32px', max: '1280px' },
            { label: 'Mobile — 4 columns',   cols: 4,  gutter: '16px', margin: '16px', max: '100%'  },
          ].map(g => (
            <div key={g.label} className="gc">
              <div className="gc-label">{g.label}</div>
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${g.cols}, 1fr)`, gap: 6, marginBottom: 14 }}>
                {Array.from({ length: g.cols }).map((_, i) => <div key={i} className="gc-col" />)}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                {[['Columns', g.cols], ['Gutter', g.gutter], ['Margin', g.margin], ['Max width', g.max]].map(([k, v]) => (
                  <div key={k as string}><div className="gc-spec-k">{k}</div><div className="gc-spec-v">{v}</div></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="fs">
        <h2 className="ft">Dashboard layout anatomy</h2>
        <p className="fd">Standard layout for all SS web products. Fixed sidebar + scrollable content. The sidebar width and top bar height are fixed tokens.</p>
        <div className="dash">
          <div className="dash-sidebar">
            <span>Sidebar<br /><code>240px</code></span>
          </div>
          <div className="dash-right">
            <div className="dash-topbar">Top bar — 56px</div>
            <div className="dash-content">
              <span>Content area — fluid · max 1280px · 48px top · 32px sides</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .fs { margin-bottom: 52px; }
        .ft { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
        .fd { font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; max-width: 600px; }
        .base-demo { display: flex; align-items: flex-end; gap: 20px; padding: 24px; background: var(--color-bg-raised); border: 1.5px solid var(--color-border); border-radius: 12px; }
        .b-item { display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .st-wrap { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .st-head { display: grid; grid-template-columns: 150px 55px 65px 1fr 1fr; gap: 12px; padding: 10px 16px; background: var(--color-bg-subtle); border-bottom: 1.5px solid var(--color-border); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-text-muted); }
        .st-row { display: grid; grid-template-columns: 150px 55px 65px 1fr 1fr; gap: 12px; padding: 10px 16px; border-bottom: 1px solid var(--color-border); align-items: center; transition: background .1s; }
        .st-row:last-child { border-bottom: none; }
        .st-row:hover { background: var(--color-bg-subtle); }
        .st-tok { font-size: 11.5px; font-family: var(--font-mono); color: var(--color-primary); background: var(--color-primary-faint); padding: 2px 6px; border-radius: 4px; }
        .st-px { font-size: 13px; font-weight: 600; color: var(--color-text); }
        .st-rem { font-size: 12px; font-family: var(--font-mono); color: var(--color-text-muted); }
        .st-use { font-size: 12.5px; color: var(--color-text-muted); }
        .grid-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .gc { border: 1.5px solid var(--color-border); border-radius: 12px; padding: 20px; background: var(--color-bg-raised); }
        .gc-label { font-size: 12px; font-weight: 700; color: var(--color-text); margin-bottom: 12px; }
        .gc-col { height: 28px; background: var(--color-primary); opacity: 0.12; border-radius: 4px; border: 1px solid var(--color-primary); }
        .gc-spec-k { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--color-text-muted); margin-bottom: 2px; }
        .gc-spec-v { font-size: 13px; font-weight: 600; color: var(--color-text); }
        .dash { display: flex; height: 200px; border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .dash-sidebar { width: 100px; flex-shrink: 0; background: var(--color-primary-faint); border-right: 1.5px solid var(--color-primary-subtle); display: flex; align-items: center; justify-content: center; text-align: center; font-size: 11px; font-weight: 700; color: var(--color-primary); line-height: 1.6; }
        .dash-sidebar code { display: block; font-size: 10px; color: var(--color-text-muted); }
        .dash-right { flex: 1; display: flex; flex-direction: column; }
        .dash-topbar { height: 32px; background: var(--color-bg-subtle); border-bottom: 1px solid var(--color-border); display: flex; align-items: center; padding: 0 12px; font-size: 10px; font-weight: 700; color: var(--color-text-muted); flex-shrink: 0; }
        .dash-content { flex: 1; background: var(--color-bg); display: flex; align-items: center; justify-content: center; font-size: 11px; color: var(--color-text-muted); text-align: center; padding: 16px; }
      `}</style>
    </div>
  )
}