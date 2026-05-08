'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type NavItem = {
  label: string
  href?: string
  children?: NavItem[]
  badge?: string
}

const nav: NavItem[] = [
  {
    label: 'Overview',
    href: '/',
  },
  {
    label: 'Brand',
    children: [
      { label: 'Logo',         href: '/brand/logo' },
      { label: 'Colours',      href: '/brand/colours' },
      { label: 'Typography',   href: '/brand/typography' },
      { label: 'Voice & Tone', href: '/brand/voice' },
    ],
  },
  {
    label: 'Foundations',
    children: [
      { label: 'Design Tokens',    href: '/foundations/tokens' },
      { label: 'Spacing & Grid',   href: '/foundations/spacing' },
      { label: 'Elevation',        href: '/foundations/elevation' },
      { label: 'Border Radius',    href: '/foundations/border-radius' },
      { label: 'Iconography',      href: '/foundations/iconography' },
      { label: 'Motion',           href: '/foundations/motion' },
      { label: 'Accessibility',    href: '/foundations/accessibility' },
    ],
  },
  {
    label: 'Components',
    children: [
      { label: 'Actions',          href: '/components/actions',      badge: 'group' },
      { label: 'Button',           href: '/components/button' },
      { label: 'Icon Button',      href: '/components/icon-button' },
      { label: 'Link',             href: '/components/link' },
      { label: 'Forms',            href: '/components/forms',        badge: 'group' },
      { label: 'Text Input',       href: '/components/text-input' },
      { label: 'Select',           href: '/components/select' },
      { label: 'Checkbox',         href: '/components/checkbox' },
      { label: 'Toggle',           href: '/components/toggle' },
      { label: 'Date Picker',      href: '/components/date-picker' },
      { label: 'Navigation',       href: '/components/navigation',   badge: 'group' },
      { label: 'Sidebar Nav',      href: '/components/sidebar-nav' },
      { label: 'Tabs',             href: '/components/tabs' },
      { label: 'Breadcrumbs',      href: '/components/breadcrumbs' },
      { label: 'Pagination',       href: '/components/pagination' },
      { label: 'Data Display',     href: '/components/data-display', badge: 'group' },
      { label: 'Table',            href: '/components/table' },
      { label: 'Stat Card',        href: '/components/stat-card' },
      { label: 'Badge',            href: '/components/badge' },
      { label: 'Avatar',           href: '/components/avatar' },
      { label: 'Feedback',         href: '/components/feedback',     badge: 'group' },
      { label: 'Alert',            href: '/components/alert' },
      { label: 'Toast',            href: '/components/toast' },
      { label: 'Modal',            href: '/components/modal' },
      { label: 'Tooltip',          href: '/components/tooltip' },
      { label: 'Empty State',      href: '/components/empty-state' },
      { label: 'Skeleton',         href: '/components/skeleton' },
      { label: 'Layout',           href: '/components/layout',       badge: 'group' },
      { label: 'Card',             href: '/components/card' },
      { label: 'Accordion',        href: '/components/accordion' },
      { label: 'Divider',          href: '/components/divider' },
    ],
  },
  {
    label: 'Patterns',
    children: [
      { label: 'Authentication',    href: '/patterns/auth' },
      { label: 'Dashboard Layout',  href: '/patterns/dashboard' },
      { label: 'Data Tables',       href: '/patterns/data-tables' },
      { label: 'Forms & Validation',href: '/patterns/forms' },
      { label: 'Empty & Error',     href: '/patterns/empty-error' },
    ],
  },
  {
    label: 'Products',
    children: [
      { label: 'Maestro MFB',        href: '/products/maestro' },
      { label: 'VoxePay',            href: '/products/voxepay' },
      { label: 'OAGF Treasury',      href: '/products/oagf' },
    ],
  },
  {
    label: 'Contributing',
    href: '/contributing',
  },
]

function NavGroup({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const pathname = usePathname()
  const isActive = item.href ? pathname === item.href : false
  const hasChildren = item.children && item.children.length > 0
  const isGroupActive = item.children?.some(c =>
    c.href ? pathname.startsWith(c.href) : false
  )
  const [open, setOpen] = useState(isGroupActive ?? false)

  if (!hasChildren) {
    if (item.badge === 'group') {
      return (
        <li className="nav-group-label">
          <span>{item.label}</span>
        </li>
      )
    }
    return (
      <li>
        <Link
          href={item.href!}
          className={`nav-link ${isActive ? 'active' : ''} depth-${depth}`}
        >
          {item.label}
        </Link>
      </li>
    )
  }

  return (
    <li className="nav-section">
      <button
        className={`nav-section-toggle ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{item.label}</span>
        <ChevronDown size={14} className={`chevron ${open ? 'rotated' : ''}`} />
      </button>
      {open && (
        <ul className="nav-children">
          {item.children!.map(child => (
            <NavGroup key={child.href ?? child.label} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}

export function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-mark">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
            <path d="M20 2C10.06 2 2 10.06 2 20C2 29.94 10.06 38 20 38C29.94 38 38 29.94 38 20C38 10.06 29.94 2 20 2Z" fill="url(#logo-grad)" />
            <path d="M25 13H17C14.79 13 13 14.79 13 17C13 19.21 14.79 21 17 21H23C25.21 21 27 22.79 27 25C27 27.21 25.21 29 23 29H15" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <defs>
              <linearGradient id="logo-grad" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#64B5F6"/>
                <stop offset="1" stopColor="#9753E8"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="logo-text">
          <span className="logo-name">Simplify</span>
          <span className="logo-ds">Design System</span>
        </div>
      </div>

      {/* Search */}
      <div className="sidebar-search">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <span>Search...</span>
        <kbd>⌘K</kbd>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        <ul>
          {nav.map(item => (
            <NavGroup key={item.href ?? item.label} item={item} />
          ))}
        </ul>
      </nav>

      {/* Version footer */}
      <div className="sidebar-footer">
        <span className="version-badge">v1.0.0</span>
        <span className="footer-label">Design System</span>
      </div>

      <style jsx>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: var(--sidebar-width);
          height: 100vh;
          background: var(--sidebar-bg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 50;
          border-right: 1px solid rgba(151, 83, 232, 0.15);
        }

        /* Logo */
        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 20px 20px 16px;
          border-bottom: 1px solid rgba(151, 83, 232, 0.12);
        }
        .logo-mark { flex-shrink: 0; }
        .logo-text { display: flex; flex-direction: column; }
        .logo-name {
          font-size: 13px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          line-height: 1;
        }
        .logo-ds {
          font-size: 10px;
          color: rgba(151, 83, 232, 0.8);
          font-weight: 500;
          letter-spacing: 0.04em;
          margin-top: 2px;
        }

        /* Search */
        .sidebar-search {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 12px 12px 8px;
          padding: 8px 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(151, 83, 232, 0.15);
          border-radius: 8px;
          color: rgba(200, 189, 237, 0.5);
          font-size: 12.5px;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: all 0.15s;
        }
        .sidebar-search:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(151, 83, 232, 0.35);
          color: rgba(200, 189, 237, 0.8);
        }
        .sidebar-search kbd {
          margin-left: auto;
          font-size: 10px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 1px 5px;
          border-radius: 4px;
          font-family: var(--font-sans);
        }

        /* Nav */
        .sidebar-nav {
          flex: 1;
          overflow-y: auto;
          padding: 8px 0 16px;
          scrollbar-width: none;
        }
        .sidebar-nav::-webkit-scrollbar { display: none; }
        .sidebar-nav ul { list-style: none; padding: 0; margin: 0; }

        :global(.nav-link) {
          display: block;
          padding: 6px 20px 6px 20px;
          font-size: 13px;
          font-weight: 500;
          color: var(--sidebar-text);
          text-decoration: none;
          border-radius: 0;
          transition: all 0.12s;
          position: relative;
        }
        :global(.nav-link.depth-1) { padding-left: 28px; font-size: 12.5px; font-weight: 400; }
        :global(.nav-link:hover) { color: #fff; background: var(--sidebar-hover); }
        :global(.nav-link.active) {
          color: #fff;
          font-weight: 600;
          background: rgba(151, 83, 232, 0.18);
        }
        :global(.nav-link.active::before) {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--color-primary);
          border-radius: 0 2px 2px 0;
        }

        :global(.nav-group-label) {
          padding: 14px 20px 4px;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(151, 83, 232, 0.7);
        }

        :global(.nav-section-toggle) {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 20px;
          background: none;
          border: none;
          color: #fff;
          font-size: 12.5px;
          font-weight: 700;
          font-family: var(--font-sans);
          cursor: pointer;
          text-align: left;
          letter-spacing: 0.01em;
          transition: all 0.12s;
        }
        :global(.nav-section-toggle:hover) { background: var(--sidebar-hover); }
        :global(.nav-section-toggle .chevron) { transition: transform 0.2s; flex-shrink: 0; color: var(--sidebar-text); }
        :global(.nav-section-toggle .chevron.rotated) { transform: rotate(180deg); }

        :global(.nav-children) { list-style: none; padding: 2px 0; margin: 0; }

        /* Footer */
        .sidebar-footer {
          padding: 12px 20px;
          border-top: 1px solid rgba(151, 83, 232, 0.12);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .version-badge {
          font-size: 10px;
          font-weight: 700;
          background: rgba(151, 83, 232, 0.2);
          color: var(--color-primary-light);
          padding: 2px 8px;
          border-radius: 99px;
          border: 1px solid rgba(151, 83, 232, 0.3);
        }
        .footer-label {
          font-size: 11px;
          color: var(--sidebar-text);
          opacity: 0.5;
        }
      `}</style>
    </aside>
  )
}
