type Props = {
  section: string
  title: string
  description: string
  status?: 'stable' | 'beta' | 'draft'
  figmaUrl?: string
}

const statusConfig = {
  stable: { label: 'Stable',  color: '#16A34A', bg: '#F0FDF4', border: '#BBF7D0' },
  beta:   { label: 'Beta',    color: '#D97706', bg: '#FFFBEB', border: '#FDE68A' },
  draft:  { label: 'Draft',   color: '#9CA3AF', bg: '#F9FAFB', border: '#E5E7EB' },
}

export function PageHeader({ section, title, description, status, figmaUrl }: Props) {
  const st = status ? statusConfig[status] : null

  return (
    <header className="page-header">
      <div className="header-meta">
        <span className="header-section">{section}</span>
        {st && (
          <span
            className="header-status"
            style={{ color: st.color, background: st.bg, borderColor: st.border }}
          >
            {st.label}
          </span>
        )}
        {figmaUrl && (
          <a href={figmaUrl} target="_blank" rel="noopener noreferrer" className="header-figma">
            <svg width="12" height="12" viewBox="0 0 38 57" fill="none">
              <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z" fill="#1ABCFE"/>
              <path d="M9.5 47.5A9.5 9.5 0 0 1 19 38v9.5A9.5 9.5 0 0 1 9.5 47.5Z" fill="#0ACF83"/>
              <path d="M19 0.5h-9.5a9.5 9.5 0 0 0 0 19H19Z" fill="#FF7262"/>
              <path d="M19 19h-9.5a9.5 9.5 0 0 0 0 19H19Z" fill="#F24E1E"/>
              <path d="M19 19h9.5a9.5 9.5 0 0 0 0-19H19Z" fill="#FF7262"/>
            </svg>
            Figma file
          </a>
        )}
      </div>
      <h1 className="header-title">{title}</h1>
      <p className="header-desc">{description}</p>
      <div className="header-rule" />

      <style jsx>{`
        .page-header { margin-bottom: 40px; }
        .header-meta {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 12px;
        }
        .header-section {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-primary);
        }
        .header-status {
          font-size: 11px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 99px;
          border: 1px solid;
        }
        .header-figma {
          display: flex; align-items: center; gap: 5px;
          font-size: 11px;
          font-weight: 600;
          color: var(--color-text-secondary);
          text-decoration: none;
          padding: 2px 8px;
          border-radius: 99px;
          border: 1px solid var(--color-border);
          transition: all 0.12s;
        }
        .header-figma:hover { color: var(--color-text); border-color: var(--color-text); }
        .header-title {
          font-size: 2.25rem;
          font-weight: 900;
          color: var(--color-text);
          letter-spacing: -0.03em;
          margin-bottom: 12px;
          line-height: 1.1;
        }
        .header-desc {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--color-text-secondary);
          max-width: 600px;
        }
        .header-rule {
          height: 1px;
          background: var(--color-border);
          margin-top: 32px;
        }
      `}</style>
    </header>
  )
}
