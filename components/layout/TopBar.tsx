'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function breadcrumbsFromPath(pathname: string) {
  const segments = pathname.split('/').filter(Boolean)
  const crumbs = [{ label: 'Home', href: '/' }]
  let path = ''
  for (const seg of segments) {
    path += `/${seg}`
    const label = seg.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    crumbs.push({ label, href: path })
  }
  return crumbs
}

export function TopBar() {
  const pathname = usePathname()
  const crumbs = breadcrumbsFromPath(pathname)

  return (
    <header className="topbar">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        {crumbs.map((crumb, i) => (
          <span key={crumb.href} className="crumb-item">
            {i > 0 && <span className="crumb-sep">/</span>}
            {i === crumbs.length - 1 ? (
              <span className="crumb-current">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="crumb-link">{crumb.label}</Link>
            )}
          </span>
        ))}
      </nav>

      <div className="topbar-actions">
        <a
          href="https://www.figma.com"
          target="_blank"
          rel="noopener noreferrer"
          className="figma-link"
        >
          <svg width="14" height="14" viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z" fill="#1ABCFE"/>
            <path d="M9.5 47.5A9.5 9.5 0 0 1 19 38v9.5A9.5 9.5 0 0 1 9.5 47.5Z" fill="#0ACF83"/>
            <path d="M19 0.5h-9.5a9.5 9.5 0 0 0 0 19H19Z" fill="#FF7262"/>
            <path d="M19 19h-9.5a9.5 9.5 0 0 0 0 19H19Z" fill="#F24E1E"/>
            <path d="M19 19h9.5a9.5 9.5 0 0 0 0-19H19Z" fill="#FF7262"/>
          </svg>
          Open in Figma
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="gh-link"
          title="View on GitHub"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/>
          </svg>
        </a>
      </div>

      <style jsx>{`
        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 56px;
          height: 52px;
          border-bottom: 1px solid var(--color-border);
          background: var(--color-bg-raised);
          position: sticky;
          top: 0;
          z-index: 40;
        }
        .breadcrumbs { display: flex; align-items: center; gap: 0; }
        .crumb-item { display: flex; align-items: center; }
        .crumb-sep { margin: 0 6px; color: var(--color-text-muted); font-size: 12px; }
        .crumb-link {
          font-size: 12.5px;
          color: var(--color-text-secondary);
          text-decoration: none;
          transition: color 0.12s;
        }
        .crumb-link:hover { color: var(--color-primary); }
        .crumb-current {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--color-text);
        }
        .topbar-actions { display: flex; align-items: center; gap: 12px; }
        .figma-link {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600;
          color: var(--color-text-secondary);
          text-decoration: none;
          padding: 5px 12px;
          border: 1px solid var(--color-border);
          border-radius: 6px;
          transition: all 0.12s;
        }
        .figma-link:hover {
          color: var(--color-text);
          border-color: var(--color-primary);
          background: var(--color-primary-faint);
        }
        .gh-link {
          display: flex; align-items: center;
          color: var(--color-text-muted);
          text-decoration: none;
          padding: 4px;
          border-radius: 6px;
          transition: color 0.12s;
        }
        .gh-link:hover { color: var(--color-primary); }
      `}</style>
    </header>
  )
}
