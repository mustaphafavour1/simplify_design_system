'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export type NavItem = {
  label: string
  href?: string
  children?: NavItem[]
  badge?: string
}

const coreNav: NavItem[] = [
  { label: 'Overview', href: '/' },
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
      { label: 'Design Tokens',  href: '/foundations/tokens' },
      { label: 'Spacing & Grid', href: '/foundations/spacing' },
      { label: 'Elevation',      href: '/foundations/elevation' },
      { label: 'Border Radius',  href: '/foundations/border-radius' },
      { label: 'Iconography',    href: '/foundations/iconography' },
      { label: 'Motion',         href: '/foundations/motion' },
      { label: 'Accessibility',  href: '/foundations/accessibility' },
      { label: 'Data Formatting',href: '/foundations/data-formatting' },
    ],
  },
  {
    label: 'Components',
    children: [
      { label: 'Actions',       href: '/components/actions',      badge: 'group' },
      { label: 'Button',        href: '/components/button' },
      { label: 'Icon Button',   href: '/components/icon-button' },
      { label: 'Link',          href: '/components/link' },
      { label: 'Forms',         href: '/components/forms',        badge: 'group' },
      { label: 'Text Input',    href: '/components/text-input' },
      { label: 'Select',        href: '/components/select' },
      { label: 'Checkbox',      href: '/components/checkbox' },
      { label: 'Toggle',        href: '/components/toggle' },
      { label: 'Date Picker',   href: '/components/date-picker' },
      { label: 'Navigation',    href: '/components/navigation',   badge: 'group' },
      { label: 'Sidebar Nav',   href: '/components/sidebar-nav' },
      { label: 'Tabs',          href: '/components/tabs' },
      { label: 'Breadcrumbs',   href: '/components/breadcrumbs' },
      { label: 'Pagination',    href: '/components/pagination' },
      { label: 'Data Display',  href: '/components/data-display', badge: 'group' },
      { label: 'Table',         href: '/components/table' },
      { label: 'Stat Card',     href: '/components/stat-card' },
      { label: 'Badge',         href: '/components/badge' },
      { label: 'Avatar',        href: '/components/avatar' },
      { label: 'Feedback',      href: '/components/feedback',     badge: 'group' },
      { label: 'Alert',         href: '/components/alert' },
      { label: 'Toast',         href: '/components/toast' },
      { label: 'Modal',         href: '/components/modal' },
      { label: 'Tooltip',       href: '/components/tooltip' },
      { label: 'Empty State',   href: '/components/empty-state' },
      { label: 'Skeleton',      href: '/components/skeleton' },
      { label: 'Layout',        href: '/components/layout',       badge: 'group' },
      { label: 'Card',          href: '/components/card' },
      { label: 'Accordion',     href: '/components/accordion' },
      { label: 'Divider',       href: '/components/divider' },
    ],
  },
  {
    label: 'Patterns',
    children: [
      { label: 'Authentication',     href: '/patterns/auth' },
      { label: 'Dashboard Layout',   href: '/patterns/dashboard' },
      { label: 'Data Tables',        href: '/patterns/data-tables' },
      { label: 'Forms & Validation', href: '/patterns/forms' },
      { label: 'Empty & Error',      href: '/patterns/empty-error' },
    ],
  },
  {
    label: 'Products',
    children: [
      { label: 'Maestro MFB',          href: '/products/maestro' },
      { label: 'VoxePay',              href: '/products/voxepay' },
      { label: 'OAGF Treasury',        href: '/products/oagf' },
      { label: 'Compliance Engine',    href: '/products/compliance' },
    ],
  },
  { label: 'Contributing', href: '/contributing' },
]

function NavGroup({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const pathname = usePathname()
  const isActive = item.href ? pathname === item.href : false
  const hasChildren = !!(item.children && item.children.length > 0)
  const isGroupActive = item.children?.some(c => c.href ? pathname.startsWith(c.href) : false)
  const [open, setOpen] = useState(isGroupActive ?? false)

  if (!hasChildren && item.badge === 'group') {
    return <li className="nav-group-label"><span>{item.label}</span></li>
  }

  if (!hasChildren) {
    return (
      <li>
        <Link href={item.href!} className={`nav-link depth-${depth} ${isActive ? 'active' : ''}`}>
          {item.label}
        </Link>
      </li>
    )
  }

  return (
    <li className="nav-section">
      <button className={`nav-section-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{item.label}</span>
        <ChevronDown size={13} className={`chevron ${open ? 'rotated' : ''}`} />
      </button>
      {open && (
        <div className="nav-children-wrap">
          <div className="indent-line" />
          <ul className="nav-children">
            {item.children!.map(child => (
              <NavGroup key={child.href ?? child.label} item={child} depth={depth + 1} />
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}

type SidebarProps = {
  dynamicSections?: NavItem[]
}

export function Sidebar({ dynamicSections = [] }: SidebarProps) {
  const nav = dynamicSections.length > 0
    ? [...coreNav.slice(0, -1), ...dynamicSections, coreNav[coreNav.length - 1]]
    : coreNav

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/simplify-logo.png" alt="Simplify Synergy" className="sidebar-logo-img" />
        <span className="logo-ds">Design System</span>
      </div>

      <div className="sidebar-search">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <span>Search...</span>
        <kbd>⌘K</kbd>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {nav.map(item => (
            <NavGroup key={item.href ?? item.label} item={item} />
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <span className="version-badge">v1.0.0</span>
        <span className="footer-label">Design System</span>
      </div>

      <style jsx>{`
        .sidebar {
          position: fixed; top: 0; left: 0;
          width: var(--sidebar-width); height: 100vh;
          background: var(--sidebar-bg);
          display: flex; flex-direction: column;
          overflow: hidden; z-index: 50;
          border-right: 1px solid rgba(151,83,232,0.15);
        }
        .sidebar-logo {
          display: flex; align-items: center; gap: 10px;
          padding: 18px 20px 14px;
          border-bottom: 1px solid rgba(151,83,232,0.12);
          flex-shrink: 0; flex-direction: column; align-items: flex-start;
        }
        .sidebar-logo-img {
          height: 28px; width: auto;
          filter: brightness(0) invert(1);
          opacity: 0.92;
        }
        .logo-ds {
          font-size: 9px; color: rgba(151,83,232,0.7); font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; margin-top: -4px;
        }
        .sidebar-search {
          display: flex; align-items: center; gap: 8px;
          margin: 12px 12px 6px; padding: 7px 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(151,83,232,0.15);
          border-radius: 7px;
          color: rgba(200,189,237,0.45); font-size: 12px;
          cursor: pointer; font-family: var(--font-sans);
          transition: all 0.15s; flex-shrink: 0;
        }
        .sidebar-search:hover { background: rgba(255,255,255,0.07); border-color: rgba(151,83,232,0.3); color: rgba(200,189,237,0.75); }
        .sidebar-search kbd { margin-left: auto; font-size: 10px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08); padding: 1px 5px; border-radius: 4px; font-family: var(--font-sans); }
        .sidebar-nav { flex: 1; overflow-y: auto; padding: 8px 0 16px; scrollbar-width: none; }
        .sidebar-nav::-webkit-scrollbar { display: none; }
        .sidebar-nav ul { list-style: none; padding: 0; margin: 0; }
        .sidebar-footer { padding: 12px 20px; border-top: 1px solid rgba(151,83,232,0.12); display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .version-badge { font-size: 10px; font-weight: 700; background: rgba(151,83,232,0.18); color: var(--color-primary-light); padding: 2px 8px; border-radius: 99px; border: 1px solid rgba(151,83,232,0.25); }
        .footer-label { font-size: 11px; color: var(--sidebar-text); opacity: 0.4; }
      `}</style>

      <style jsx global>{`
        .nav-link {
          display: block; padding: 5px 20px;
          font-size: 13px; font-weight: 500;
          color: var(--sidebar-text); text-decoration: none;
          transition: color 0.12s, background 0.12s;
          position: relative; white-space: nowrap;
          overflow: hidden; text-overflow: ellipsis;
        }
        .nav-link.depth-1 { padding-left: 16px; font-size: 12.5px; font-weight: 400; }
        .nav-link:hover { color: #fff; background: var(--sidebar-hover); }
        .nav-link.active { color: #fff; font-weight: 600; background: rgba(151,83,232,0.16); }
        .nav-link.active::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0;
          width: 2.5px; background: var(--color-primary); border-radius: 0 2px 2px 0;
        }
        .nav-group-label {
          padding: 12px 20px 3px; font-size: 9.5px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(151,83,232,0.55); list-style: none;
        }
        .nav-section { list-style: none; }
        .nav-section-toggle {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 8px 16px 8px 20px; background: none; border: none;
          color: rgba(255,255,255,0.88); font-size: 12.5px; font-weight: 600;
          font-family: var(--font-sans); cursor: pointer; text-align: left;
          letter-spacing: 0.01em; transition: background 0.12s;
        }
        .nav-section-toggle:hover { background: var(--sidebar-hover); }
        .nav-section-toggle .chevron { transition: transform 0.2s; flex-shrink: 0; color: rgba(151,83,232,0.55); }
        .nav-section-toggle .chevron.rotated { transform: rotate(180deg); }

        /* Children + vertical indent line */
        .nav-children-wrap { position: relative; padding-left: 20px; }
        .indent-line {
          position: absolute;
          left: 28px; top: 4px; bottom: 6px;
          width: 1px;
          background: rgba(151,83,232,0.2);
          border-radius: 1px;
        }
        .nav-children { list-style: none; padding: 2px 0 4px; margin: 0; }
      `}</style>
    </aside>
  )
}
