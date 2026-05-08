'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { DosDonts } from '@/components/docs/DosDonts'
import { PropsTable } from '@/components/docs/PropsTable'
import {
  SquaresFour, PaperPlaneTilt, CurrencyNgn, ArrowDownToLine,
  ChartLine, Gear, CaretDown, CaretUp, SignOut
} from '@phosphor-icons/react'

const props = [
  { name: 'items',       type: 'NavItem[]',   default: '[]',     required: true,  description: 'Navigation item tree.' },
  { name: 'activeHref',  type: 'string',      default: '—',      required: false, description: 'Currently active path — used to highlight the active item.' },
  { name: 'logo',        type: 'ReactNode',   default: '—',      required: true,  description: 'Logo element rendered at the top.' },
  { name: 'user',        type: 'UserProfile', default: '—',      required: false, description: 'User profile object for the bottom section.' },
  { name: 'collapsed',   type: 'boolean',     default: 'false',  required: false, description: 'Collapsed state — shows icon-only layout.' },
]

const dos = [
  'Show the active item with a branded background (100 stop) and text colour (500 stop) from the product palette.',
  'Group related nav items under a collapsible parent — keep max depth at 2 levels.',
  'Show badge counts on items that have pending actions (e.g. Transactions: 5, Collections: 8).',
  'Always place the user profile and logout at the very bottom of the sidebar.',
  'Use Phosphor Regular weight icons for inactive items, Bold for the active item.',
]

const donts = [
  "Don't nest more than 2 levels deep — it creates cognitive overload.",
  "Don't use icons without labels in the full sidebar — icon-only is only for the collapsed state.",
  "Don't change the sidebar width between pages — it must stay fixed at 240px.",
  "Don't put destructive actions (like Delete) in the sidebar — only navigation.",
]

// ── Live interactive demo ────────────────────────────────────────────────
const navItems = [
  { label: 'Dashboard',    href: '/dashboard', icon: SquaresFour },
  { label: 'Payments',     href: '/payments',  icon: PaperPlaneTilt, children: [
    { label: 'Single Payment', href: '/payments/single' },
    { label: 'Bulk Payment',   href: '/payments/bulk' },
  ]},
  { label: 'Transactions', href: '/transactions', icon: CurrencyNgn, badge: 5 },
  { label: 'Collections',  href: '/collections',  icon: ArrowDownToLine, badge: 8 },
  { label: 'Reports',      href: '/reports',   icon: ChartLine },
  { label: 'Settings',     href: '/settings',  icon: Gear, children: [
    { label: 'Profile',      href: '/settings/profile' },
    { label: 'Security',     href: '/settings/security' },
    { label: 'Integrations', href: '/settings/integrations' },
  ]},
]

function SidebarDemo() {
  const [active, setActive] = useState('/dashboard')
  const [expanded, setExpanded] = useState<string[]>([])

  const toggle = (href: string) => setExpanded(p => p.includes(href) ? p.filter(h => h !== href) : [...p, href])
  const isExpanded = (href: string) => expanded.includes(href)
  const isActive = (href: string) => active === href

  return (
    <div className="sbdemo">
      {/* Logo */}
      <div className="sbd-logo">
        <div className="sbd-logo-mark">
          <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
            <path d="M20 2C10.06 2 2 10.06 2 20C2 29.94 10.06 38 20 38C29.94 38 38 29.94 38 20C38 10.06 29.94 2 20 2Z" fill="url(#sd-grad)"/>
            <defs><linearGradient id="sd-grad" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse"><stop stopColor="#4FC3F7"/><stop offset="1" stopColor="#1B56F4"/></linearGradient></defs>
          </svg>
        </div>
        <span className="sbd-logo-text">VoxePay</span>
      </div>

      <div className="sbd-divider" />

      {/* Nav */}
      <nav className="sbd-nav">
        {navItems.map(item => {
          const Icon = item.icon
          const hasChildren = item.children && item.children.length > 0
          const open = isExpanded(item.href)
          const itemActive = isActive(item.href)
          const childActive = item.children?.some(c => isActive(c.href))

          return (
            <div key={item.href}>
              <button
                className={`sbd-item ${itemActive || childActive ? 'sbd-item-active' : ''}`}
                onClick={() => { hasChildren ? toggle(item.href) : setActive(item.href) }}
              >
                <Icon size={18} weight={itemActive || childActive ? 'bold' : 'regular'} className="sbd-icon" />
                <span className="sbd-label">{item.label}</span>
                {item.badge && <span className="sbd-badge">{item.badge}</span>}
                {hasChildren && (
                  <span className="sbd-caret">
                    {open ? <CaretUp size={12} /> : <CaretDown size={12} />}
                  </span>
                )}
              </button>

              {hasChildren && open && (
                <div className="sbd-children-wrap">
                  <div className="sbd-children-bg">
                    <div className="sbd-children-header">
                      <Icon size={16} weight="bold" style={{ color: '#1B56F4' }} />
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#1B56F4' }}>{item.label}</span>
                      <CaretUp size={12} style={{ marginLeft: 'auto', color: '#1B56F4' }} />
                    </div>
                    {item.children!.map(child => (
                      <button
                        key={child.href}
                        className={`sbd-child ${isActive(child.href) ? 'sbd-child-active' : ''}`}
                        onClick={() => setActive(child.href)}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* User profile */}
      <div className="sbd-divider" />
      <div className="sbd-user">
        <div className="sbd-avatar">AE</div>
        <div className="sbd-user-info">
          <div className="sbd-user-name">Alison Eyo</div>
          <div className="sbd-user-email">ajokeesther@gma...</div>
        </div>
        <SignOut size={18} className="sbd-signout" />
      </div>

      <style jsx>{`
        .sbdemo {
          width: 240px; background: white; border: 1.5px solid #E8E3F3;
          border-radius: 12px; overflow: hidden; display: flex; flex-direction: column;
          box-shadow: 0 4px 24px rgba(13,8,32,0.08); font-family: var(--font-sans);
        }
        .sbd-logo { display: flex; align-items: center; gap: 8px; padding: 18px 16px 12px; }
        .sbd-logo-mark { display: flex; }
        .sbd-logo-text { font-size: 16px; font-weight: 800; color: #0D1B4B; letter-spacing: -0.01em; }
        .sbd-divider { height: 1px; background: #F0EDF8; margin: 4px 0; }
        .sbd-nav { display: flex; flex-direction: column; padding: 8px 0; flex: 1; }

        .sbd-item {
          width: 100%; display: flex; align-items: center; gap: 10px;
          padding: 10px 16px; background: none; border: none; cursor: pointer;
          text-align: left; font-family: var(--font-sans); font-size: 14px;
          color: #6B6B80; border-radius: 0; transition: all .12s;
        }
        .sbd-item:hover { color: #17102E; background: #F9F7FF; }
        .sbd-item-active { color: #1B56F4 !important; background: #EFF4FF !important; }
        .sbd-icon { flex-shrink: 0; }
        .sbd-item-active .sbd-icon { color: #1B56F4; }
        .sbd-label { flex: 1; font-weight: 500; }
        .sbd-item-active .sbd-label { font-weight: 700; }
        .sbd-badge { font-size: 10px; font-weight: 700; background: #E8E3F3; color: #6B6B80; padding: 1px 6px; border-radius: 99px; }
        .sbd-item-active .sbd-badge { background: #D6E4FD; color: #1B56F4; }
        .sbd-caret { color: #9999AA; display: flex; }

        .sbd-children-wrap { padding: 4px 10px; }
        .sbd-children-bg { background: #EFF4FF; border-radius: 8px; overflow: hidden; }
        .sbd-children-header { display: flex; align-items: center; gap: 8px; padding: 10px 12px; }
        .sbd-child {
          width: 100%; display: block; padding: 10px 16px 10px 12px;
          background: none; border: none; cursor: pointer; text-align: left;
          font-family: var(--font-sans); font-size: 14px; color: #17102E;
          transition: all .12s;
        }
        .sbd-child:hover { background: rgba(27,86,244,0.08); }
        .sbd-child-active { background: #D6E4FD !important; font-weight: 700; color: #1B56F4; }

        .sbd-user { display: flex; align-items: center; gap: 10px; padding: 12px 16px; }
        .sbd-avatar { width: 36px; height: 36px; border-radius: 50%; background: #F3EAFD; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: #9753E8; flex-shrink: 0; position: relative; }
        .sbd-avatar::after { content: ''; position: absolute; bottom: 1px; right: 1px; width: 9px; height: 9px; border-radius: 50%; background: #16A34A; border: 2px solid white; }
        .sbd-user-info { flex: 1; min-width: 0; }
        .sbd-user-name { font-size: 13px; font-weight: 700; color: #17102E; }
        .sbd-user-email { font-size: 11px; color: #9999AA; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .sbd-signout { color: #9999AA; cursor: pointer; flex-shrink: 0; }
        .sbd-signout:hover { color: #DC2626; }
      `}</style>
    </div>
  )
}

export default function SidebarNavPage() {
  return (
    <div>
      <PageHeader
        section="Components / Navigation"
        title="Sidebar Nav"
        description="The primary navigation pattern for all SS web dashboards. Used in VoxePay, the OAGF Treasury Portal, and Maestro MFB web. Supports collapsible groups, badge counts, and a user profile section."
        status="stable"
      />

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: 12 }}>Live demo</h2>
        <p style={{ fontSize: 13.5, color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
          Click the nav items to see active states. Click Payments or Settings to expand dropdown groups.
        </p>
        <SidebarDemo />
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: 12 }}>Dropdown states</h2>
        <p style={{ fontSize: 13.5, color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
          Three states for collapsible nav groups — based on the VoxePay Payments dropdown pattern.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {[
            { label: 'Collapsed — inactive', activeChild: null },
            { label: 'Expanded — child active (Single Payment)', activeChild: 'single' },
            { label: 'Expanded — child active (Bulk Payment)', activeChild: 'bulk' },
          ].map(demo => (
            <div key={demo.label} style={{ border: '1.5px solid var(--color-border)', borderRadius: 12, overflow: 'hidden', background: 'var(--color-bg-raised)' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '10px 14px', borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-subtle)' }}>{demo.label}</div>
              <div style={{ padding: 12 }}>
                {/* Parent item */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 8, color: demo.activeChild ? '#1B56F4' : '#6B6B80', background: demo.activeChild ? '#EFF4FF' : 'transparent', marginBottom: demo.activeChild ? 6 : 0, cursor: 'pointer' }}>
                  <PaperPlaneTilt size={16} weight={demo.activeChild ? 'bold' : 'regular'} />
                  <span style={{ fontSize: 13, fontWeight: demo.activeChild ? 700 : 500, flex: 1 }}>Payments</span>
                  {demo.activeChild ? <CaretUp size={11} /> : <CaretDown size={11} />}
                </div>
                {/* Children */}
                {demo.activeChild && (
                  <div style={{ background: '#EFF4FF', borderRadius: 8, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px', borderBottom: '1px solid rgba(27,86,244,0.1)' }}>
                      <PaperPlaneTilt size={14} weight="bold" color="#1B56F4" />
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#1B56F4', flex: 1 }}>Payments</span>
                      <CaretUp size={11} color="#1B56F4" />
                    </div>
                    {['Single Payment', 'Bulk Payment'].map(child => (
                      <div key={child} style={{ padding: '10px 16px', fontSize: 13, fontWeight: demo.activeChild === child.split(' ')[0].toLowerCase() ? 700 : 400, background: demo.activeChild === child.split(' ')[0].toLowerCase() ? '#D6E4FD' : 'transparent', color: demo.activeChild === child.split(' ')[0].toLowerCase() ? '#1B56F4' : '#17102E', cursor: 'pointer' }}>
                        {child}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: 12 }}>Colour usage per product</h2>
        <div style={{ border: '1.5px solid var(--color-border)', borderRadius: 12, overflow: 'hidden' }}>
          {[
            { product: 'VoxePay',        active: '#1B56F4', activeBg: '#EFF4FF', childBg: '#D6E4FD', sidebar: 'White / Light (#FAFBFF)' },
            { product: 'Maestro MFB',    active: '#1B56F4', activeBg: '#EFF4FF', childBg: '#D6E4FD', sidebar: 'White / Light (#FAFBFF)' },
            { product: 'OAGF Treasury',  active: '#9753E8', activeBg: '#F3EAFD', childBg: '#E3CEFA', sidebar: '[To be confirmed]' },
          ].map((r, i, arr) => (
            <div key={r.product} style={{ display: 'grid', gridTemplateColumns: '160px 120px 120px 120px 1fr', gap: 12, padding: '13px 16px', borderBottom: i < arr.length - 1 ? '1px solid var(--color-border)' : 'none', alignItems: 'center', fontSize: 13 }}>
              <strong style={{ color: 'var(--color-text)' }}>{r.product}</strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><div style={{ width: 16, height: 16, borderRadius: 4, background: r.active }} /><span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>{r.active}</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><div style={{ width: 16, height: 16, borderRadius: 4, background: r.activeBg, border: '1px solid #D6E4FD' }} /><span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>Active bg</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><div style={{ width: 16, height: 16, borderRadius: 4, background: r.childBg, border: '1px solid #D6E4FD' }} /><span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>Child active</span></div>
              <span style={{ color: 'var(--color-text-secondary)' }}>{r.sidebar}</span>
            </div>
          ))}
        </div>
      </section>

      <PropsTable props={props} />
      <DosDonts dos={dos} donts={donts} />
    </div>
  )
}