'use client'
import { PageHeader } from '@/components/docs/PageHeader'


const tokenGroups = [
  {
    group: 'Color',
    prefix: 'color',
    tokens: [
      { token: '--color-primary',         value: '#9753E8',  type: 'color' },
      { token: '--color-primary-dark',     value: '#7B3FD1',  type: 'color' },
      { token: '--color-primary-light',    value: '#B47FF0',  type: 'color' },
      { token: '--color-primary-faint',    value: '#F3EAFD',  type: 'color' },
      { token: '--color-navy',             value: '#1A1464',  type: 'color' },
      { token: '--color-text',             value: '#17102E',  type: 'color' },
      { token: '--color-text-secondary',   value: '#6B6B80',  type: 'color' },
      { token: '--color-text-muted',       value: '#9999AA',  type: 'color' },
      { token: '--color-bg',               value: '#FAFBFF',  type: 'color' },
      { token: '--color-border',           value: '#E8E3F3',  type: 'color' },
      { token: '--color-success',          value: '#16A34A',  type: 'color' },
      { token: '--color-warning',          value: '#D97706',  type: 'color' },
      { token: '--color-error',            value: '#DC2626',  type: 'color' },
    ],
  },
  {
    group: 'Spacing',
    prefix: 'space',
    tokens: [
      { token: '--space-1',  value: '4px',   type: 'spacing' },
      { token: '--space-2',  value: '8px',   type: 'spacing' },
      { token: '--space-3',  value: '12px',  type: 'spacing' },
      { token: '--space-4',  value: '16px',  type: 'spacing' },
      { token: '--space-6',  value: '24px',  type: 'spacing' },
      { token: '--space-8',  value: '32px',  type: 'spacing' },
      { token: '--space-12', value: '48px',  type: 'spacing' },
      { token: '--space-16', value: '64px',  type: 'spacing' },
    ],
  },
  {
    group: 'Border Radius',
    prefix: 'radius',
    tokens: [
      { token: '--radius-sm',   value: '4px',    type: 'radius' },
      { token: '--radius-md',   value: '8px',    type: 'radius' },
      { token: '--radius-lg',   value: '12px',   type: 'radius' },
      { token: '--radius-xl',   value: '16px',   type: 'radius' },
      { token: '--radius-full', value: '9999px', type: 'radius' },
    ],
  },
  {
    group: 'Shadow',
    prefix: 'shadow',
    tokens: [
      { token: '--shadow-sm', value: '0 1px 2px 0 rgba(13,8,32,.06)',    type: 'shadow' },
      { token: '--shadow-md', value: '0 4px 12px 0 rgba(13,8,32,.08)',   type: 'shadow' },
      { token: '--shadow-lg', value: '0 8px 32px 0 rgba(13,8,32,.12)',   type: 'shadow' },
      { token: '--shadow-xl', value: '0 16px 48px 0 rgba(13,8,32,.16)',  type: 'shadow' },
    ],
  },
]

function TokenRow({ token, value, type }: { token: string; value: string; type: string }) {
  return (
    <tr className="token-row">
      <td>
        <code className="token-name">{token}</code>
      </td>
      <td>
        <div className="token-preview-cell">
          {type === 'color' && (
            <div className="token-color-swatch" style={{ background: value }} />
          )}
          {type === 'spacing' && (
            <div className="token-spacing-bar" style={{ width: value, maxWidth: 64, minWidth: 4 }} />
          )}
          {type === 'radius' && (
            <div className="token-radius-box" style={{ borderRadius: value === '9999px' ? '50%' : value }} />
          )}
          {type === 'shadow' && (
            <div className="token-shadow-box" style={{ boxShadow: value }} />
          )}
        </div>
      </td>
      <td>
        <code className="token-value">{value}</code>
      </td>

      <style jsx>{`
        .token-row { transition: background 0.1s; }
        .token-row:hover td { background: var(--color-bg-subtle); }
        td { padding: 10px 16px; border-bottom: 1px solid var(--color-border); vertical-align: middle; }
        .token-name {
          font-family: var(--font-mono); font-size: 12px;
          color: var(--color-primary);
          background: var(--color-primary-faint);
          padding: 2px 6px; border-radius: 4px;
        }
        .token-preview-cell { display: flex; align-items: center; }
        .token-color-swatch {
          width: 28px; height: 28px;
          border-radius: 6px;
          border: 1.5px solid rgba(0,0,0,0.08);
        }
        .token-spacing-bar {
          height: 8px;
          background: var(--color-primary);
          border-radius: 99px;
          opacity: 0.7;
        }
        .token-radius-box {
          width: 28px; height: 28px;
          border: 2px solid var(--color-primary);
          background: var(--color-primary-faint);
        }
        .token-shadow-box {
          width: 28px; height: 28px;
          border-radius: 6px;
          background: #fff;
          border: 1px solid var(--color-border);
        }
        .token-value {
          font-family: var(--font-mono); font-size: 12px;
          color: var(--color-text-secondary);
        }
      `}</style>
    </tr>
  )
}

export default function TokensPage() {
  return (
    <div>
      <PageHeader
        section="Foundations"
        title="Design Tokens"
        description="Design tokens are the named variables that store the raw values of the Simplify Synergy design language — colours, spacing, radius, shadows. They are the contract between Figma and code."
      />

      <div className="tokens-intro">
        <div className="token-callout">
          <div className="callout-icon">💡</div>
          <div>
            <strong>Single source of truth.</strong> All tokens are defined in <code>app/globals.css</code> as CSS custom properties and should be used in all components — never hardcode raw values.
          </div>
        </div>
      </div>

      {tokenGroups.map(g => (
        <section key={g.group} className="token-group">
          <h2 className="group-title">{g.group}</h2>
          <div className="token-table-wrap">
            <table className="token-table">
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Preview</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {g.tokens.map(t => (
                  <TokenRow key={t.token} {...t} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <style jsx>{`
        .tokens-intro { margin-bottom: 40px; }
        .token-callout {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 16px 20px;
          background: var(--color-primary-faint);
          border: 1.5px solid var(--color-primary-subtle);
          border-radius: 10px;
          font-size: 13.5px; line-height: 1.7;
          color: var(--color-text-secondary);
        }
        .token-callout code {
          font-family: var(--font-mono);
          font-size: 12px;
          background: rgba(151,83,232,0.12);
          color: var(--color-primary);
          padding: 1px 5px; border-radius: 3px;
        }
        .callout-icon { font-size: 18px; flex-shrink: 0; margin-top: 1px; }

        .token-group { margin-bottom: 48px; }
        .group-title { font-size: 1rem; font-weight: 800; color: var(--color-text); margin-bottom: 12px; }
        .token-table-wrap {
          border: 1.5px solid var(--color-border);
          border-radius: 12px; overflow: hidden;
        }
        .token-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .token-table thead tr { background: var(--color-bg-subtle); border-bottom: 1.5px solid var(--color-border); }
        .token-table th {
          padding: 10px 16px; text-align: left;
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.06em;
          color: var(--color-text-secondary);
        }
        .token-table tbody tr:last-child td { border-bottom: none; }
      `}</style>
    </div>
  )
}