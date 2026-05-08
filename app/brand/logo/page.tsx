'use client'
import { PageHeader } from '@/components/docs/PageHeader'

const variants = [
  { name: 'Primary — Colour',       file: 'simplify-logo-colour.png',   bg: '#FAFBFF',  border: true,  note: 'Default. Use on white and light backgrounds.' },
  { name: 'Wordmark — Dark',        file: 'simplify-logo-dark.png',      bg: '#FAFBFF',  border: true,  note: 'Use on light backgrounds when the gradient mark conflicts.' },
  { name: 'Wordmark — White',       file: 'simplify-logo-white.png',     bg: '#0D0820',  border: false, note: 'Use on dark and coloured backgrounds.' },
  { name: 'Icon only — Gradient',   file: 'simplify-icon-gradient.png',  bg: '#FAFBFF',  border: true,  note: 'Compact spaces — app icons, favicons, avatar.' },
  { name: 'Icon only — Dark',       file: 'simplify-icon-dark.png',      bg: '#FAFBFF',  border: true,  note: 'Single-colour contexts — embossed, engraved.' },
  { name: 'Icon only — White',      file: 'simplify-icon-white.png',     bg: '#9753E8',  border: false, note: 'On brand purple or dark backgrounds.' },
]

const clearspaceNote = 'Always maintain clear space equal to the height of the "S" mark on all sides of the logo. Never crowd the logo with other elements.'

const misuses = [
  'Don\'t change the logo colours',
  'Don\'t stretch or distort the logo',
  'Don\'t add drop shadows or effects',
  'Don\'t place on busy or low-contrast backgrounds',
  'Don\'t recreate the logo in a different typeface',
  'Don\'t rotate or flip the logo',
  'Don\'t use an outdated version',
  'Don\'t add the "TM" or "®" symbol without legal approval',
]

function PlaceholderBox({ bg, border, label, file }: { bg: string; border: boolean; label: string; file: string }) {
  return (
    <div style={{ background: bg, border: border ? '1.5px solid var(--color-border)' : 'none', borderRadius: 12, minHeight: 160, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, padding: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.4 }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={bg === '#0D0820' || bg === '#9753E8' ? '#fff' : '#9753E8'} strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
        </svg>
        <span style={{ fontSize: 10, color: bg === '#0D0820' || bg === '#9753E8' ? 'rgba(255,255,255,0.5)' : 'var(--color-text-muted)', textAlign: 'center', lineHeight: 1.4 }}>
          Upload {file}
        </span>
      </div>
    </div>
  )
}

export default function LogoPage() {
  return (
    <div>
      <PageHeader section="Brand" title="Logo"
        description="The Simplify Synergy logo consists of the gradient S mark and the SIMPLIFY wordmark. Both elements are protected — use only the approved variants below." />

      <section className="ls">
        <h2 className="lt">Logo variants</h2>
        <p className="ld">Six approved variants covering all use contexts. Upload the files from the assets folder to replace the placeholders.</p>
        <div className="var-grid">
          {variants.map(v => (
            <div key={v.name} className="var-card">
              <PlaceholderBox bg={v.bg} border={v.border} label={v.name} file={v.file} />
              <div className="var-meta">
                <div className="var-name">{v.name}</div>
                <div className="var-note">{v.note}</div>
                <div className="var-file"><code>{v.file}</code></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ls">
        <h2 className="lt">Clear space</h2>
        <p className="ld">{clearspaceNote}</p>
        <div className="clearspace-demo">
          <div className="cs-outer">
            <div className="cs-arrow top">↕ S-height</div>
            <div className="cs-arrow left">↔ S-height</div>
            <div className="cs-logo">
              <div className="cs-logo-inner">
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'linear-gradient(135deg, #64B5F6, #9753E8)', flexShrink: 0 }} />
                <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: '0.06em', color: '#1A1464' }}>SIMPLIFY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ls">
        <h2 className="lt">Minimum sizes</h2>
        <div className="sizes-row">
          {[
            { label: 'Full wordmark',  minW: '120px', minH: '—',   note: 'Never smaller than 120px wide in print, 80px on screen' },
            { label: 'Icon only',      minW: '24px',  minH: '24px', note: 'Minimum 24×24px for digital use, 10mm for print' },
          ].map(s => (
            <div key={s.label} className="size-card">
              <div className="size-label">{s.label}</div>
              <div className="size-vals">
                <span>Min width: <strong>{s.minW}</strong></span>
                {s.minH !== '—' && <span>Min height: <strong>{s.minH}</strong></span>}
              </div>
              <div className="size-note">{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="ls">
        <h2 className="lt">What not to do</h2>
        <div className="misuse-grid">
          {misuses.map((m, i) => (
            <div key={i} className="misuse-item">
              <span className="misuse-x">✕</span>
              <span>{m}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ls">
        <h2 className="lt">Product logos</h2>
        <p className="ld">Each SS product has its own logo. These are separate from the Simplify Synergy parent brand.</p>
        <div className="product-logos">
          {[
            { name: 'VoxePay',     bg: 'linear-gradient(135deg, #1B56F4, #04134A)', file: 'voxepay-logo-full.png' },
            { name: 'Maestro MFB', bg: 'linear-gradient(135deg, #0D1B4B, #1B56F4)', file: 'maestro-logo-full.png' },
          ].map(p => (
            <div key={p.name} className="prod-logo-card">
              <div style={{ background: p.bg, borderRadius: 12, minHeight: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 24, marginBottom: 12 }}>
                <div style={{ opacity: 0.4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>Upload {p.file}</span>
                </div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text)', marginBottom: 3 }}>{p.name}</div>
              <code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>{p.file}</code>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .ls { margin-bottom: 52px; }
        .lt { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
        .ld { font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; max-width: 600px; }

        .var-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .var-card { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .var-meta { padding: 14px 16px; }
        .var-name { font-size: 13px; font-weight: 700; color: var(--color-text); margin-bottom: 4px; }
        .var-note { font-size: 12.5px; color: var(--color-text-secondary); line-height: 1.5; margin-bottom: 8px; }
        .var-file code { font-size: 11px; font-family: var(--font-mono); color: var(--color-text-muted); background: var(--color-bg-subtle); padding: 2px 6px; border-radius: 4px; }

        .clearspace-demo { border: 1.5px solid var(--color-border); border-radius: 12px; padding: 32px; background: var(--color-bg-raised); display: flex; align-items: center; justify-content: center; }
        .cs-outer { position: relative; padding: 32px; border: 2px dashed var(--color-border); border-radius: 8px; }
        .cs-arrow { position: absolute; font-size: 10px; font-weight: 700; color: var(--color-primary); }
        .cs-arrow.top { top: -20px; left: 50%; transform: translateX(-50%); }
        .cs-arrow.left { left: -60px; top: 50%; transform: translateY(-50%); }
        .cs-logo { display: flex; align-items: center; justify-content: center; padding: 8px; }
        .cs-logo-inner { display: flex; align-items: center; gap: 10px; padding: 8px 16px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 6px; }

        .sizes-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .size-card { border: 1.5px solid var(--color-border); border-radius: 10px; padding: 18px; background: var(--color-bg-raised); }
        .size-label { font-size: 13px; font-weight: 700; color: var(--color-text); margin-bottom: 8px; }
        .size-vals { display: flex; gap: 16px; font-size: 13px; color: var(--color-text-secondary); margin-bottom: 8px; }
        .size-note { font-size: 12.5px; color: var(--color-text-muted); line-height: 1.5; }

        .misuse-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .misuse-item { display: flex; align-items: flex-start; gap: 10px; padding: 12px 16px; border-bottom: 1px solid var(--color-border); border-right: 1px solid var(--color-border); font-size: 13px; color: var(--color-text-secondary); line-height: 1.5; }
        .misuse-item:nth-child(even) { border-right: none; }
        .misuse-item:nth-last-child(-n+2) { border-bottom: none; }
        .misuse-x { color: #DC2626; font-weight: 800; font-size: 12px; flex-shrink: 0; }

        .product-logos { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .prod-logo-card { }
      `}</style>
    </div>
  )
}