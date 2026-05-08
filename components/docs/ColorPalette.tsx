'use client'
import { useState } from 'react'

type Swatch = { name: string; token: string; hex: string; text?: string }
type Palette = { group: string; desc: string; swatches: Swatch[] }

const palettes: Palette[] = [
  {
    group: 'Primary — Purple',
    desc: 'The core brand colour. Use sparingly and purposefully — on CTAs, active states, links, and key UI accents.',
    swatches: [
      { name: 'Purple 50',  token: '--color-primary-50',   hex: '#F9F3FF', text: '#000' },
      { name: 'Purple 100', token: '--color-primary-100',  hex: '#F3EAFD', text: '#000' },
      { name: 'Purple 200', token: '--color-primary-200',  hex: '#E3CEFA', text: '#000' },
      { name: 'Purple 300', token: '--color-primary-300',  hex: '#C99AF4', text: '#000' },
      { name: 'Purple 400', token: '--color-primary-400',  hex: '#B47FF0' },
      { name: 'Purple 500', token: '--color-primary',      hex: '#9753E8', text: '#fff' },
      { name: 'Purple 600', token: '--color-primary-600',  hex: '#7B3FD1', text: '#fff' },
      { name: 'Purple 700', token: '--color-primary-700',  hex: '#5E2EAA', text: '#fff' },
      { name: 'Purple 800', token: '--color-primary-800',  hex: '#421F7A', text: '#fff' },
      { name: 'Purple 900', token: '--color-primary-900',  hex: '#2A1252', text: '#fff' },
    ],
  },
  {
    group: 'Navy — Dark',
    desc: 'Used for primary text, headings, and the sidebar. Communicates authority and depth.',
    swatches: [
      { name: 'Navy 50',  token: '--color-navy-50',  hex: '#F0F0F9', text: '#000' },
      { name: 'Navy 100', token: '--color-navy-100', hex: '#D9D9F0', text: '#000' },
      { name: 'Navy 300', token: '--color-navy-300', hex: '#8888C8', text: '#000' },
      { name: 'Navy 500', token: '--color-navy',     hex: '#1A1464', text: '#fff' },
      { name: 'Navy 700', token: '--color-navy-700', hex: '#0F0C3E', text: '#fff' },
      { name: 'Sidebar',  token: '--sidebar-bg',     hex: '#0D0820', text: '#fff' },
    ],
  },
  {
    group: 'Neutrals',
    desc: 'Backgrounds, borders, and secondary text. The scaffolding of every layout.',
    swatches: [
      { name: 'White',     token: '--color-bg-raised',   hex: '#FFFFFF', text: '#000' },
      { name: 'BG',        token: '--color-bg',           hex: '#FAFBFF', text: '#000' },
      { name: 'BG Subtle', token: '--color-bg-subtle',    hex: '#F4F0FC', text: '#000' },
      { name: 'Border',    token: '--color-border',       hex: '#E8E3F3', text: '#000' },
      { name: 'Muted Text',token: '--color-text-muted',   hex: '#9999AA', text: '#000' },
      { name: 'Secondary', token: '--color-text-secondary',hex: '#6B6B80', text: '#fff' },
      { name: 'Text',      token: '--color-text',         hex: '#17102E', text: '#fff' },
    ],
  },
  {
    group: 'Semantic',
    desc: 'System feedback colours for success, warning, error, and informational states. Do not use for decoration.',
    swatches: [
      { name: 'Success',  token: '--color-success',  hex: '#16A34A', text: '#fff' },
      { name: 'Warning',  token: '--color-warning',  hex: '#D97706', text: '#fff' },
      { name: 'Error',    token: '--color-error',    hex: '#DC2626', text: '#fff' },
      { name: 'Info',     token: '--color-info',     hex: '#2563EB', text: '#fff' },
    ],
  },
]

function SwatchCard({ swatch }: { swatch: Swatch }) {
  const [copied, setCopied] = useState(false)

  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="swatch-card" onClick={() => copy(swatch.hex)}>
      <div
        className="swatch-color"
        style={{ background: swatch.hex }}
      />
      <div className="swatch-info">
        <span className="swatch-name">{swatch.name}</span>
        <span className="swatch-hex" style={{ opacity: copied ? 0 : 1 }}>{swatch.hex}</span>
        {copied && <span className="swatch-copied">Copied!</span>}
        <span className="swatch-token">{swatch.token}</span>
      </div>

      <style jsx>{`
        .swatch-card {
          border: 1.5px solid var(--color-border);
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.15s;
        }
        .swatch-card:hover {
          border-color: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(151,83,232,0.1);
        }
        .swatch-color { height: 72px; }
        .swatch-info {
          padding: 10px 12px;
          background: var(--color-bg-raised);
        }
        .swatch-name {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 2px;
        }
        .swatch-hex {
          display: block;
          font-size: 11px;
          font-family: var(--font-mono);
          color: var(--color-text-secondary);
          margin-bottom: 2px;
          transition: opacity 0.15s;
        }
        .swatch-copied {
          display: block;
          font-size: 11px;
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: 2px;
          position: absolute;
          margin-top: -16px;
        }
        .swatch-token {
          display: block;
          font-size: 10px;
          font-family: var(--font-mono);
          color: var(--color-text-muted);
        }
      `}</style>
    </div>
  )
}

export function ColorPalette() {
  return (
    <div className="palettes">
      {palettes.map(p => (
        <section key={p.group} className="palette-section">
          <div className="palette-header">
            <h2 className="palette-title">{p.group}</h2>
            <p className="palette-desc">{p.desc}</p>
          </div>
          <div className="swatches-grid">
            {p.swatches.map(s => (
              <SwatchCard key={s.token} swatch={s} />
            ))}
          </div>
        </section>
      ))}

      <style jsx>{`
        .palettes { display: flex; flex-direction: column; gap: 48px; padding-top: 32px; }
        .palette-header { margin-bottom: 16px; }
        .palette-title {
          font-size: 1rem;
          font-weight: 800;
          color: var(--color-text);
          margin-bottom: 4px;
        }
        .palette-desc {
          font-size: 13px;
          line-height: 1.6;
          color: var(--color-text-secondary);
          max-width: 520px;
        }
        .swatches-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
          gap: 10px;
        }
      `}</style>
    </div>
  )
}
