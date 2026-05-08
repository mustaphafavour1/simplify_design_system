'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'

const corePalettes = [
  {
    brand: 'Simplify Synergy',
    primary: '#9753E8',
    desc: 'Primary brand purple. Used across the design system website, marketing, and non-product surfaces.',
    scale: [
      { stop: 25,  hex: '#FDFAFF' }, { stop: 50,  hex: '#F9F3FF' }, { stop: 75,  hex: '#F5EDFE' },
      { stop: 100, hex: '#F3EAFD' }, { stop: 200, hex: '#E3CEFA' }, { stop: 300, hex: '#C99AF4' },
      { stop: 400, hex: '#B47FF0' }, { stop: 500, hex: '#9753E8' }, { stop: 600, hex: '#7B3FD1' },
      { stop: 700, hex: '#5E2EAA' }, { stop: 800, hex: '#421F7A' }, { stop: 900, hex: '#2A1252' },
    ],
  },
  {
    brand: 'VoxePay & Maestro MFB',
    primary: '#1B56F4',
    desc: 'Shared blue palette for both fintech products. Generated from the VoxePay/Maestro primary blue using the Foundation Color Generator Figma plugin.',
    scale: [
      { stop: 25,  hex: '#FAFCFF' }, { stop: 50,  hex: '#EFF4FF' }, { stop: 75,  hex: '#E5EEFE' },
      { stop: 100, hex: '#D6E4FD' }, { stop: 200, hex: '#ADC8FB' }, { stop: 300, hex: '#74A0F8' },
      { stop: 400, hex: '#4778F6' }, { stop: 500, hex: '#1B56F4' }, { stop: 600, hex: '#1243D0' },
      { stop: 700, hex: '#0C31A0' }, { stop: 800, hex: '#082174' }, { stop: 900, hex: '#04134A' },
    ],
  },
]

const semanticColours = [
  { name: 'Success', hex: '#16A34A', bg: '#F0FDF4', border: '#BBF7D0', text: '#166534' },
  { name: 'Warning', hex: '#D97706', bg: '#FFFBEB', border: '#FDE68A', text: '#92400E' },
  { name: 'Error',   hex: '#DC2626', bg: '#FFF5F5', border: '#FECACA', text: '#991B1B' },
  { name: 'Info',    hex: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE', text: '#1E40AF' },
]

const neutrals = [
  { name: 'White',         hex: '#FFFFFF' }, { name: 'BG',            hex: '#FAFBFF' },
  { name: 'BG Subtle',     hex: '#F4F0FC' }, { name: 'Border',        hex: '#E8E3F3' },
  { name: 'Border Strong', hex: '#D1C7ED' }, { name: 'Text Muted',    hex: '#9999AA' },
  { name: 'Text Secondary',hex: '#6B6B80' }, { name: 'Text',          hex: '#17102E' },
  { name: 'Sidebar',       hex: '#0D0820' },
]

const usageMap: Record<number, string> = {
  25: 'Hover backgrounds', 50: 'Light backgrounds', 75: 'Container hover',
  100: 'Containers, chips', 200: 'Borders on light bg', 300: 'Disabled states',
  400: 'Placeholder icons', 500: 'Primary — base colour', 600: 'Primary hover',
  700: 'Active / pressed', 800: 'Dark text on light bg', 900: 'Darkest — sidebars',
}

function ScaleRow({ stop, hex }: { stop: number; hex: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="sr" onClick={() => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1500) }}>
      <div className="sr-swatch" style={{ background: hex, border: stop <= 75 ? '1px solid #E8E3F3' : 'none' }} />
      <div className="sr-stop">{stop}</div>
      <code className="sr-hex">{copied ? 'Copied!' : hex}</code>
      <div className="sr-use">{usageMap[stop] ?? ''}</div>
      {stop === 500 && <span className="sr-badge">Primary</span>}
      {stop !== 500 && <span />}
      <style jsx>{`
        .sr { display: grid; grid-template-columns: 44px 44px 110px 1fr 68px; align-items: center; gap: 12px; padding: 8px 16px; border-bottom: 1px solid var(--color-border); cursor: pointer; transition: background 0.1s; }
        .sr:hover { background: var(--color-bg-subtle); }
        .sr:last-child { border-bottom: none; }
        .sr-swatch { width: 36px; height: 36px; border-radius: 8px; }
        .sr-stop { font-size: 13px; font-weight: 700; color: var(--color-text); }
        .sr-hex { font-size: 12px; font-family: var(--font-mono); color: var(--color-text-secondary); }
        .sr-use { font-size: 12px; color: var(--color-text-muted); }
        .sr-badge { font-size: 10px; font-weight: 700; background: var(--color-primary-faint); color: var(--color-primary); border: 1px solid var(--color-primary-subtle); padding: 2px 8px; border-radius: 99px; text-align: center; }
      `}</style>
    </div>
  )
}

export default function ColoursPage() {
  return (
    <div>
      <PageHeader
        section="Brand"
        title="Colours"
        description="Each SS product has a primary colour with a full Material-style 25–900 scale, generated using the Foundation Color Generator Figma plugin. Click any swatch to copy the hex value."
      />

      {/* How the system works */}
      <section className="cs">
        <h2 className="sh">How the colour scale works</h2>
        <p className="sd">Each brand has a primary colour. From it we generate a 25–900 scale using the Foundation Color Generator plugin in Figma. The scale includes custom 25 and 75 stops (lighter tints for hover and containers) alongside the standard Material 100–900 levels.</p>
        <div className="hw-grid">
          {[
            { stop: '25 – 75',   label: 'Ultra-light tints', use: 'Hover backgrounds, page-level containers, card fills' },
            { stop: '100 – 200', label: 'Light tints',        use: 'Chips, badges, tag backgrounds, borders on light surfaces' },
            { stop: '300 – 400', label: 'Mid tints',          use: 'Disabled states, placeholder icons, secondary accents' },
            { stop: '500',       label: 'Primary ← base',     use: 'CTA buttons, active nav, links, key UI accents — the foundation value' },
            { stop: '600 – 700', label: 'Dark shades',        use: 'Hover and pressed states on primary actions' },
            { stop: '800 – 900', label: 'Darkest shades',     use: 'Text on light backgrounds, sidebar fills, high-contrast elements' },
          ].map(r => (
            <div key={r.stop} className="hw-row">
              <code className="hw-stop">{r.stop}</code>
              <div>
                <div className="hw-label">{r.label}</div>
                <div className="hw-use">{r.use}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand scales */}
      {corePalettes.map(p => (
        <section key={p.brand} className="cs">
          <div className="ph">
            <div style={{ width: 48, height: 48, borderRadius: 10, background: p.primary, flexShrink: 0 }} />
            <div>
              <h2 className="sh">{p.brand}</h2>
              <p className="sd">{p.desc}</p>
            </div>
          </div>
          <div className="st-wrap">
            <div className="st-head"><span>Swatch</span><span>Stop</span><span>Hex</span><span>Usage</span><span /></div>
            {p.scale.map(s => <ScaleRow key={s.stop} stop={s.stop} hex={s.hex} />)}
          </div>
        </section>
      ))}

      {/* Semantic */}
      <section className="cs">
        <h2 className="sh">Semantic colours</h2>
        <p className="sd">System feedback colours. Use only to communicate meaning — never for decoration.</p>
        <div className="sem-grid">
          {semanticColours.map(s => (
            <div key={s.name} className="sem-card">
              <div style={{ height: 56, background: s.hex }} />
              <div style={{ padding: '10px 14px 12px' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text)', marginBottom: 2 }}>{s.name}</div>
                <code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', display: 'block', marginBottom: 8 }}>{s.hex}</code>
                <div style={{ fontSize: 11.5, fontWeight: 600, background: s.bg, border: `1px solid ${s.border}`, color: s.text, padding: '5px 10px', borderRadius: 7, textAlign: 'center' }}>{s.name} container</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Neutrals */}
      <section className="cs">
        <h2 className="sh">Neutrals</h2>
        <p className="sd">Backgrounds, borders, text. Shared across all SS products.</p>
        <div className="neu-row">
          {neutrals.map(n => (
            <div key={n.name} className="neu-item">
              <div style={{ height: 48, background: n.hex, borderRadius: 8, border: n.hex === '#FFFFFF' || n.hex === '#FAFBFF' ? '1px solid #E8E3F3' : 'none', marginBottom: 6 }} />
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.3 }}>{n.name}</div>
              <code style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>{n.hex}</code>
            </div>
          ))}
        </div>
      </section>

      {/* In context */}
      <section className="cs">
        <h2 className="sh">Colour in context — VoxePay blue</h2>
        <p className="sd">How the VoxePay/Maestro 25–900 scale maps to real UI decisions. Every stop has a specific role.</p>
        <div className="ctx-demo">
          <div className="ctx-g">
            <div className="ctx-lbl">Active nav item — 50 bg + 500 text/icon + 500 left border</div>
            <div style={{ background: '#EFF4FF', borderLeft: '3px solid #1B56F4', padding: '10px 16px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10, maxWidth: 240 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B56F4" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#1B56F4' }}>Collections</span>
              <span style={{ marginLeft: 'auto', background: '#1B56F4', color: 'white', fontSize: 10, fontWeight: 700, padding: '1px 7px', borderRadius: 99 }}>10</span>
            </div>
          </div>
          <div className="ctx-g">
            <div className="ctx-lbl">Primary button — 500 default, 600 hover</div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button style={{ background: '#1B56F4', color: 'white', border: 'none', padding: '9px 20px', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>Get Started</button>
              <button style={{ background: '#1243D0', color: 'white', border: 'none', padding: '9px 20px', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>Hover (600)</button>
            </div>
          </div>
          <div className="ctx-g">
            <div className="ctx-lbl">Tier badge — 100 bg + 700 text + 200 border</div>
            <span style={{ background: '#D6E4FD', color: '#0C31A0', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 99, border: '1px solid #ADC8FB', display: 'inline-block' }}>Tier 1</span>
          </div>
          <div className="ctx-g">
            <div className="ctx-lbl">Tab active — 500 underline + 500 text</div>
            <div style={{ display: 'flex', gap: 24, borderBottom: '1px solid var(--color-border)' }}>
              {['All', 'Successful', 'Pending', 'Failed'].map((t, i) => (
                <span key={t} style={{ fontSize: 13, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? '#1B56F4' : 'var(--color-text-muted)', borderBottom: i === 0 ? '2px solid #1B56F4' : '2px solid transparent', paddingBottom: 8, cursor: 'pointer' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cs { margin-bottom: 56px; }
        .sh { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
        .sd { font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; max-width: 600px; }
        .hw-grid { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .hw-row { display: grid; grid-template-columns: 90px 1fr; gap: 16px; padding: 12px 20px; border-bottom: 1px solid var(--color-border); align-items: start; }
        .hw-row:last-child { border-bottom: none; }
        .hw-stop { font-size: 12px; font-family: var(--font-mono); color: var(--color-primary); background: var(--color-primary-faint); padding: 3px 8px; border-radius: 5px; white-space: nowrap; }
        .hw-label { font-size: 13px; font-weight: 600; color: var(--color-text); margin-bottom: 2px; }
        .hw-use { font-size: 12.5px; color: var(--color-text-muted); }
        .ph { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
        .st-wrap { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .st-head { display: grid; grid-template-columns: 44px 44px 110px 1fr 68px; gap: 12px; padding: 10px 16px; background: var(--color-bg-subtle); border-bottom: 1.5px solid var(--color-border); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-text-muted); }
        .sem-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .sem-card { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .neu-row { display: grid; grid-template-columns: repeat(9, 1fr); gap: 8px; }
        .neu-item {}
        .ctx-demo { display: flex; flex-direction: column; gap: 24px; border: 1.5px solid var(--color-border); border-radius: 12px; padding: 24px; background: var(--color-bg-raised); }
        .ctx-g { display: flex; flex-direction: column; gap: 8px; }
        .ctx-lbl { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-text-muted); }
      `}</style>
    </div>
  )
}