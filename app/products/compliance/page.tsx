'use client'
import { PageHeader } from '@/components/docs/PageHeader'

const features = [
  { icon: '🔗', title: 'API Integrations',   desc: 'Manage third-party compliance API providers — BVN verification, NIN lookup, CAC checks, AML screening.' },
  { icon: '👥', title: 'User Management',     desc: 'Create and manage users across products (subsidiaries). Assign roles, set permissions, and track access.' },
  { icon: '📊', title: 'Costs & Usage',       desc: 'Monitor API consumption and costs per product/subsidiary. Badge count shows items needing attention.' },
  { icon: '⚙',  title: 'Workflows',           desc: 'Configure compliance workflows and automated processes across products.' },
  { icon: '📈', title: 'Analytics & Logs',    desc: 'Audit trail of all compliance checks and API calls across the organisation.' },
  { icon: '🏢', title: 'Multi-subsidiary',    desc: 'Manage multiple SS products (Maestro MFB, VoxePay) from a single compliance dashboard.' },
]

const colors = [
  { name: 'Compliance Purple', hex: '#6B52D9', bg: '#F0EDFB', border: '#C9C0F0' },
  { name: 'Navy',              hex: '#1A1464', bg: '#EEEDF8', border: '#C5C3EC' },
  { name: 'White',             hex: '#FFFFFF', bg: '#F9F9F9', border: '#E5E5E5' },
]

export default function CompliancePage() {
  return (
    <div>
      <PageHeader section="Products" title="Simplify Compliance Engine"
        description="An internal B2B platform for Simplify Synergy staff to manage compliance API integrations across all SS products — BVN verification, identity checks, KYC workflows, and user access." />

      <section className="prod-section">
        <div className="identity-row">
          <div className="logo-block compliance-bg">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 28, height: 28, background: 'rgba(255,255,255,0.2)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <div style={{ color: 'white', fontSize: 12, fontWeight: 800, letterSpacing: '.04em' }}>SIMPLIFY</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 8, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>COMPLIANCE ENGINE</div>
                </div>
              </div>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>[Replace with logo PNG]</span>
            </div>
          </div>
          <div className="identity-meta">
            {[
              { k: 'Type',        v: 'Internal web application' },
              { k: 'Audience',    v: 'Simplify Synergy staff only — not public-facing' },
              { k: 'Purpose',     v: 'Manage compliance API integrations and KYC workflows across SS products' },
              { k: 'Products managed', v: 'Maestro MFB, VoxePay, and other SS subsidiaries' },
              { k: 'Key features', v: 'User management, API cost tracking, workflow configuration, audit logs' },
              { k: 'Status',      v: 'Live (internal)' },
            ].map(r => (
              <div key={r.k} className="meta-row">
                <span className="meta-label">{r.k}</span>
                <span className="meta-value">{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prod-section">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          {features.map(f => (
            <div key={f.title} className="feature-card">
              <span className="feature-icon">{f.icon}</span>
              <div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="prod-section">
        <h2 className="section-title">Design notes</h2>
        <div className="notes-list">
          {[
            { title: 'Sidebar', body: 'White sidebar on light (#F0EEF9) content background. Active items use the purple scale — 50 bg, 500 text, 500 left border.' },
            { title: 'Multi-subsidiary switcher', body: 'A product/subsidiary switcher sits at the bottom of the sidebar (below the user profile). Shows active product logo + name + caret. Clicking opens a dropdown to switch context.' },
            { title: 'User roles', body: 'Super Admin, Product Admin. Shown as a badge on user records. Super Admins have access to all subsidiaries.' },
            { title: 'Table pattern', body: 'Same data table pattern as VoxePay — tabs, search, status filter, download record, pagination. S/N first column, ACTIONS last.' },
            { title: 'Form pattern', body: 'User creation form: two-column for name pairs, single-column for everything else. Primary button disabled until required fields filled.' },
            { title: 'Figma file', body: '[Link to Compliance Engine Figma file — add when available]' },
          ].map(n => (
            <div key={n.title} className="note-row">
              <span className="note-title">{n.title}</span>
              <span className="note-body">{n.body}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="prod-section">
        <h2 className="section-title">Key screens</h2>
        <div className="screens-grid">
          {[
            'Login - Empty',
            'Login - Filled',
            'Dashboard - Overview',
            'User Management - Empty',
            'User Management - Filled',
            'User Management - Create New User - Empty',
            'User Management - Create New User - Filled',
            'User Management - Add New Product - Empty',
          ].map(label => (
            <div key={label} className="screen-placeholder">
              <div className="screen-inner">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <span>{label}</span>
                <span style={{fontSize:10, color:'var(--color-text-muted)' }}>[Upload screenshot]</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .prod-section { margin-bottom: 48px; }
        .section-title { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 16px; }
        .identity-row { display: grid; grid-template-columns: 240px 1fr; gap: 16px; align-items: start; }
        .logo-block { border-radius: 12px; display: flex; align-items: center; justify-content: center; min-height: 160px; }
        .compliance-bg { background: linear-gradient(135deg, #1A1464, #6B52D9); }
        .identity-meta { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .meta-row { display: flex; align-items: flex-start; gap: 16px; padding: 11px 16px; border-bottom: 1px solid var(--color-border); }
        .meta-row:last-child { border-bottom: none; }
        .meta-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--color-text-muted); min-width: 130px; flex-shrink: 0; padding-top: 1px; }
        .meta-value { font-size: 13px; color: var(--color-text-secondary); line-height: 1.5; }
        .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .feature-card { display: flex; align-items: flex-start; gap: 12px; padding: 16px; border: 1.5px solid var(--color-border); border-radius: 10px; background: var(--color-bg-raised); }
        .feature-icon { font-size: 18px; width: 36px; height: 36px; background: var(--color-bg-subtle); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .feature-title { font-size: 13px; font-weight: 600; color: var(--color-text); margin-bottom: 3px; }
        .feature-desc { font-size: 12px; color: var(--color-text-secondary); line-height: 1.5; }
        .notes-list { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .note-row { display: flex; align-items: flex-start; gap: 20px; padding: 13px 20px; border-bottom: 1px solid var(--color-border); }
        .note-row:last-child { border-bottom: none; }
        .note-title { font-size: 12px; font-weight: 700; color: var(--color-text); min-width: 120px; flex-shrink: 0; margin-top: 1px; }
        .note-body { font-size: 13px; color: var(--color-text-secondary); line-height: 1.6; }
        .screens-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .screen-placeholder { border: 2px dashed var(--color-border); border-radius: 10px; }
        .screen-inner { min-height: 130px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; background: var(--color-bg-subtle); font-size: 11px; font-weight: 600; color: var(--color-text-secondary); text-align: center; padding: 14px; line-height: 1.4; }
      `}</style>
    </div>
  )
}
