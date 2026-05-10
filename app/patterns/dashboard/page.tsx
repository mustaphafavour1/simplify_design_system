'use client'
import { PageHeader } from '@/components/docs/PageHeader'

export default function DashboardPage() {
  return (
    <div>
      <PageHeader section="Patterns" title="Dashboard Layout"
        description="The master layout pattern for all SS web products. Fixed sidebar, sticky top bar, scrollable content. Every internal dashboard — VoxePay, Compliance Engine, Maestro MFB web — uses this structure." />

      <section className="ps">
        <div className="figma-callout">
          <div className="figma-label">Figma naming — Dashboard screens</div>
          <div className="figma-names">
            <code>Dashboard - Overview</code>
            <code>Dashboard - Empty</code>
          </div>
        </div>
      </section>

      <section className="ps">
        <h2 className="pt">Layout structure</h2>
        <div className="layout-demo">
          {/* Sidebar */}
          <div className="l-sidebar">
            <div className="l-sidebar-logo">Logo</div>
            <div className="l-nav">
              <div className="l-nav-item active">■ Dashboard</div>
              <div className="l-nav-item">◎ Payments ▾</div>
              <div className="l-nav-item">≡ Transactions <span className="l-badge">5</span></div>
              <div className="l-nav-item">⊞ Collections <span className="l-badge">8</span></div>
              <div className="l-nav-item">↗ Reports</div>
              <div className="l-nav-item">⚙ Settings ▾</div>
            </div>
            <div className="l-user">
              <div className="l-avatar">AE</div>
              <div>
                <div className="l-uname">Ajoke Esther</div>
                <div className="l-uemail">ajokeesther@gma...</div>
              </div>
              <span className="l-signout">→</span>
            </div>
          </div>
          {/* Main */}
          <div className="l-main">
            <div className="l-topbar">
              <div className="l-page-title">Good Morning Fave</div>
              <div className="l-topbar-right">
                <span className="l-date">25th Mon. Jan 2026</span>
                <span className="l-icon">✉</span>
                <span className="l-icon">🔔</span>
                <span className="l-tier">Tier 1</span>
              </div>
            </div>
            <div className="l-content">
              <div className="l-breadcrumb">← Collections</div>
              <div className="l-stat-row">
                {['Total Collected', 'Successful', 'Pending', 'Failed'].map(s => (
                  <div key={s} className="l-stat">{s}<br /><strong>₦0.00</strong></div>
                ))}
              </div>
              <div className="l-table-area">Table content area</div>
            </div>
          </div>
        </div>
      </section>

      <section className="ps">
        <h2 className="pt">Dimensions & tokens</h2>
        <div className="dim-table">
          {[
            { element: 'Sidebar width',       value: '240px',  token: 'var(--sidebar-width)',  note: 'Fixed. Never collapses on desktop.' },
            { element: 'Top bar height',       value: '56px',   token: '—',                     note: 'Sticky. Stays visible when content scrolls.' },
            { element: 'Content padding',      value: '24–32px',token: 'var(--space-6/8)',       note: 'Horizontal and vertical page padding.' },
            { element: 'Sidebar bg (dark)',    value: '#0D0820',token: 'var(--sidebar-bg)',      note: 'SS Design System (this site).' },
            { element: 'Sidebar bg (light)',   value: '#FFFFFF',token: '—',                     note: 'VoxePay, Compliance Engine, Maestro MFB web.' },
            { element: 'Content bg',           value: '#F0EEF9 / #FAFBFF', token: '—',          note: 'Light lavender tint — creates depth vs white sidebar.' },
          ].map(d => (
            <div key={d.element} className="dim-row">
              <span className="dim-el">{d.element}</span>
              <strong className="dim-val">{d.value}</strong>
              <code className="dim-tok">{d.token}</code>
              <span className="dim-note">{d.note}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ps">
        <h2 className="pt">Top bar anatomy</h2>
        <div className="topbar-demo">
          <div className="tb-left">
            <div className="tb-greeting">Good Morning Fave</div>
            <div className="tb-sub">View and Manage Incoming Payments</div>
          </div>
          <div className="tb-right">
            <span className="tb-date">25th Mon. Jan 2026</span>
            <div className="tb-icon-btn">✉</div>
            <div className="tb-icon-btn notif">🔔<span className="notif-dot" /></div>
            <div className="tb-tier">⊙ Tier 1</div>
          </div>
        </div>
        <div className="topbar-specs">
          {[
            { el: 'Greeting / Page title', spec: '"Good Morning [First name]" on the dashboard. The sub-page description on inner pages e.g. "View and Manage Incoming Payments from Customers".' },
            { el: 'Date format',           spec: '"25th Mon. Jan 2026" — ordinal day, abbreviated day name, abbreviated month, full year. Consistent across all SS products.' },
            { el: 'Mail icon',             spec: 'Opens message centre. No badge unless there are unread messages.' },
            { el: 'Bell icon',             spec: 'Opens notification panel. Red dot badge when there are unread notifications.' },
            { el: 'Tier badge',            spec: 'Shows the user\'s KYC/access tier (Tier 1, Tier 2, Tier 3). Displays on VoxePay and Compliance Engine.' },
          ].map(s => (
            <div key={s.el} className="ts-row">
              <span className="ts-el">{s.el}</span>
              <span className="ts-spec">{s.spec}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ps">
        <h2 className="pt">Breadcrumb & back navigation</h2>
        <div className="bread-demos">
          <div className="bread-card">
            <div className="bread-label">Back arrow — single level</div>
            <div className="bread-demo">
              <span className="bread-back">←</span>
              <span className="bread-current">Collections</span>
            </div>
            <div className="bread-note">Use when navigating from a list to a detail page or sub-page.</div>
          </div>
          <div className="bread-card">
            <div className="bread-label">Breadcrumb — multi level</div>
            <div className="bread-demo">
              <span className="bread-back">←</span>
              <span className="bread-link">User Management</span>
              <span className="bread-arrow">▶</span>
              <span className="bread-current">Create New User</span>
            </div>
            <div className="bread-note">Use when 2+ levels deep. Each ancestor is a clickable link.</div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ps { margin-bottom: 52px; }
        .pt { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }

        .figma-callout { display: flex; flex-direction: column; gap: 8px; padding: 16px 20px; background: var(--color-primary-faint); border: 1.5px solid var(--color-primary-subtle); border-radius: 10px; }
        .figma-label { font-size: 11px; font-weight: 700; color: var(--color-primary); text-transform: uppercase; letter-spacing: .06em; }
        .figma-names { display: flex; flex-wrap: wrap; gap: 6px; }
        .figma-names code { font-size: 11.5px; font-family: var(--font-mono); background: white; border: 1px solid var(--color-primary-subtle); color: var(--color-text); padding: 3px 8px; border-radius: 5px; }

        .layout-demo { display: flex; height: 400px; border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; font-size: 12px; }
        .l-sidebar { width: 180px; flex-shrink: 0; background: white; border-right: 1px solid var(--color-border); display: flex; flex-direction: column; padding: 0; }
        .l-sidebar-logo { padding: 16px; font-size: 11px; font-weight: 800; color: var(--color-text); border-bottom: 1px solid var(--color-border); }
        .l-nav { flex: 1; padding: 8px 0; }
        .l-nav-item { padding: 10px 16px; color: var(--color-text-muted); cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 12.5px; font-weight: 500; transition: all .1s; }
        .l-nav-item:hover { background: #F0EEF9; }
        .l-nav-item.active { background: #EFF4FF; color: #1B56F4; font-weight: 700; border-left: 3px solid #1B56F4; }
        .l-badge { margin-left: auto; background: var(--color-bg-subtle); border: 1px solid var(--color-border); font-size: 10px; font-weight: 700; padding: 1px 6px; border-radius: 99px; color: var(--color-text-muted); }
        .l-user { border-top: 1px solid var(--color-border); padding: 12px 16px; display: flex; align-items: center; gap: 8px; }
        .l-avatar { width: 28px; height: 28px; border-radius: 50%; background: var(--color-primary-faint); color: var(--color-primary); font-size: 10px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .l-uname { font-size: 11px; font-weight: 700; color: var(--color-text); }
        .l-uemail { font-size: 10px; color: var(--color-text-muted); }
        .l-signout { margin-left: auto; color: var(--color-text-muted); font-size: 13px; cursor: pointer; }
        .l-main { flex: 1; display: flex; flex-direction: column; background: #F0EEF9; min-width: 0; }
        .l-topbar { display: flex; align-items: center; justify-content: space-between; padding: 0 20px; height: 48px; background: white; border-bottom: 1px solid var(--color-border); flex-shrink: 0; }
        .l-page-title { font-size: 13px; font-weight: 700; color: var(--color-text); }
        .l-topbar-right { display: flex; align-items: center; gap: 10px; }
        .l-date { font-size: 11px; color: var(--color-text-muted); }
        .l-icon { font-size: 14px; cursor: pointer; }
        .l-tier { font-size: 10px; font-weight: 700; background: #EFF4FF; border: 1px solid #ADC8FB; color: #1B56F4; padding: 3px 8px; border-radius: 99px; }
        .l-content { flex: 1; padding: 16px 20px; overflow: hidden; }
        .l-breadcrumb { font-size: 12px; font-weight: 600; color: var(--color-text-secondary); margin-bottom: 12px; }
        .l-stat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 12px; }
        .l-stat { background: white; border-radius: 8px; padding: 10px; border: 1px solid var(--color-border); font-size: 10px; color: var(--color-text-muted); line-height: 1.8; }
        .l-stat strong { font-size: 13px; color: var(--color-text); display: block; }
        .l-table-area { background: white; border-radius: 8px; border: 1px solid var(--color-border); flex: 1; height: 120px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: var(--color-text-muted); }

        .dim-table { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .dim-row { display: grid; grid-template-columns: 180px 80px 200px 1fr; gap: 12px; padding: 12px 16px; border-bottom: 1px solid var(--color-border); font-size: 13px; align-items: center; }
        .dim-row:last-child { border-bottom: none; }
        .dim-el { font-weight: 600; color: var(--color-text); }
        .dim-val { color: var(--color-text); }
        .dim-tok { font-size: 11px; font-family: var(--font-mono); color: var(--color-primary); background: var(--color-primary-faint); padding: 2px 6px; border-radius: 4px; }
        .dim-note { color: var(--color-text-muted); font-size: 12.5px; line-height: 1.5; }

        .topbar-demo { display: flex; align-items: center; justify-content: space-between; padding: 14px 20px; background: white; border: 1.5px solid var(--color-border); border-radius: 12px; margin-bottom: 12px; }
        .tb-greeting { font-size: 14px; font-weight: 700; color: var(--color-text); }
        .tb-sub { font-size: 11px; color: var(--color-text-muted); margin-top: 2px; }
        .tb-right { display: flex; align-items: center; gap: 10px; }
        .tb-date { font-size: 12px; color: var(--color-text-secondary); }
        .tb-icon-btn { width: 32px; height: 32px; border-radius: 8px; border: 1px solid var(--color-border); display: flex; align-items: center; justify-content: center; font-size: 14px; cursor: pointer; position: relative; }
        .tb-icon-btn.notif {}
        .notif-dot { position: absolute; top: 6px; right: 6px; width: 7px; height: 7px; border-radius: 50%; background: #DC2626; border: 1.5px solid white; }
        .tb-tier { font-size: 11px; font-weight: 700; background: #EFF4FF; border: 1px solid #ADC8FB; color: #1B56F4; padding: 5px 12px; border-radius: 99px; cursor: pointer; }
        .topbar-specs { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .ts-row { display: grid; grid-template-columns: 160px 1fr; gap: 16px; padding: 12px 16px; border-bottom: 1px solid var(--color-border); font-size: 13px; }
        .ts-row:last-child { border-bottom: none; }
        .ts-el { font-weight: 700; color: var(--color-text); }
        .ts-spec { color: var(--color-text-secondary); line-height: 1.6; }

        .bread-demos { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .bread-card { border: 1.5px solid var(--color-border); border-radius: 12px; padding: 18px; background: var(--color-bg-raised); }
        .bread-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--color-text-muted); margin-bottom: 10px; }
        .bread-demo { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
        .bread-back { font-size: 14px; color: var(--color-text-secondary); cursor: pointer; }
        .bread-link { font-size: 13px; color: var(--color-text-secondary); cursor: pointer; }
        .bread-link:hover { color: var(--color-primary); text-decoration: underline; }
        .bread-arrow { font-size: 9px; color: var(--color-primary); }
        .bread-current { font-size: 13px; font-weight: 700; color: var(--color-text); }
        .bread-note { font-size: 12.5px; color: var(--color-text-muted); line-height: 1.5; }
      `}</style>
    </div>
  )
}
