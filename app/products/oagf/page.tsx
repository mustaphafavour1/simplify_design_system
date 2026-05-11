'use client'
import { PageHeader } from '@/components/docs/PageHeader'
import { ChartBar, Table, FileText, ShieldCheck, Users, ArrowsLeftRight } from '@phosphor-icons/react'

const features = [
  { Icon: ArrowsLeftRight, title: 'Payment Management',    desc: 'Manage and track government payment flows across ministries and agencies.' },
  { Icon: ChartBar,         title: 'Treasury Analytics',   desc: 'Real-time dashboards for cash position, inflows, outflows, and forecasting.' },
  { Icon: Table,            title: 'Transaction Reporting', desc: 'Detailed transaction logs with export to PDF, XLSX, HTML, and CSV.' },
  { Icon: ShieldCheck,      title: 'Compliance Controls',  desc: 'Built-in audit trails and approval workflows for regulatory compliance.' },
  { Icon: Users,            title: 'Multi-agency Access',  desc: 'Role-based access for multiple MDAs (Ministries, Departments, Agencies).' },
  { Icon: FileText,         title: 'Reconciliation',       desc: 'Automated reconciliation of government accounts against transaction records.' },
]

export default function OAGFPage() {
  return (
    <div>
      <PageHeader section="Products" title="OAGF Treasury Portal"
        description="A custom Treasury Management System built for the Office of the Accountant General of the Federation (OAGF). Manages government payment flows, reconciliation, and treasury analytics." />

      <section className="prod-section">
        <div className="identity-row">
          <div className="logo-block oagf-bg">
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
              <div style={{ width:48, height:48, background:'rgba(255,255,255,0.15)', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <ChartBar size={28} color="white" weight="duotone" />
              </div>
              <div style={{ textAlign:'center' }}>
                <div style={{ color:'white', fontSize:12, fontWeight:800, letterSpacing:'.04em' }}>OAGF</div>
                <div style={{ color:'rgba(255,255,255,.6)', fontSize:9, fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase' }}>Treasury Portal</div>
              </div>
              <span style={{ fontSize:10, color:'rgba(255,255,255,.35)' }}>[Upload logo PNG]</span>
            </div>
          </div>
          <div className="identity-meta">
            {[
              { k:'Type',       v:'Web Portal (Enterprise)' },
              { k:'Client',     v:'Office of the Accountant General of the Federation (OAGF)' },
              { k:'Audience',   v:'Government finance officers, treasury managers, MDA staff' },
              { k:'Category',   v:'Treasury Management System (TMS)' },
              { k:'Built by',   v:'Simplify Synergy' },
              { k:'Status',     v:'Delivered', badge:true },
            ].map(r => (
              <div key={r.k} className="meta-row">
                <span className="meta-label">{r.k}</span>
                {r.badge
                  ? <span style={{ fontSize:11, fontWeight:700, background:'#EFF6FF', border:'1px solid #BFDBFE', color:'#1E40AF', padding:'2px 10px', borderRadius:99 }}>{r.v}</span>
                  : <span className="meta-value">{r.v}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prod-section">
        <h2 className="section-title">Key features</h2>
        <div className="features-grid">
          {features.map(({ Icon, title, desc }) => (
            <div key={title} className="feature-card">
              <div className="ficon oagf-icon"><Icon size={20} weight="duotone" color="#1E40AF" /></div>
              <div>
                <div className="feature-title">{title}</div>
                <div className="feature-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="prod-section">
        <h2 className="section-title">Design notes</h2>
        <div className="notes-list">
          {[
            { title: 'Context',           body: 'Enterprise government portal. Users are finance professionals — expect high data density, precise formatting, and formal tone throughout.' },
            { title: 'Table pattern',     body: 'Same data table pattern as VoxePay — stat cards at top, tabs, search, download record, pagination. All amounts right-aligned, two decimal places.' },
            { title: 'Colour palette',    body: 'Uses a formal navy/blue palette appropriate for a government context. Confirm exact primary colour with the OAGF brand guidelines.' },
            { title: 'Figma file',        body: '[Link to OAGF Treasury Portal Figma file — add when available]' },
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
          {['Login - Empty','Login - Filled','Dashboard - Overview','Transactions - Empty','Transactions - Filled','Reports - Overview'].map(label => (
            <div key={label} className="screen-ph">
              <ChartBar size={22} color="var(--color-border-strong)" weight="thin" />
              <span>{label}</span>
              <span style={{ fontSize:10, color:'var(--color-text-muted)' }}>[Upload screenshot]</span>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .prod-section { margin-bottom: 48px; }
        .section-title { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 16px; }
        .identity-row { display: grid; grid-template-columns: 220px 1fr; gap: 16px; }
        .logo-block { border-radius: 12px; min-height: 160px; display: flex; align-items: center; justify-content: center; }
        .oagf-bg { background: linear-gradient(135deg, #1E3A8A, #1E40AF); }
        .identity-meta { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .meta-row { display: flex; align-items: flex-start; gap: 16px; padding: 12px 16px; border-bottom: 1px solid var(--color-border); }
        .meta-row:last-child { border-bottom: none; }
        .meta-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--color-text-muted); min-width: 80px; flex-shrink: 0; padding-top: 1px; }
        .meta-value { font-size: 13px; color: var(--color-text-secondary); }
        .features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
        .feature-card { display: flex; align-items: flex-start; gap: 12px; padding: 16px; border: 1.5px solid var(--color-border); border-radius: 10px; background: var(--color-bg-raised); }
        .ficon { width:36px; height:36px; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .oagf-icon { background: #EFF6FF; }
        .feature-title { font-size:13px; font-weight:600; color:var(--color-text); margin-bottom:3px; }
        .feature-desc { font-size:12px; color:var(--color-text-secondary); line-height:1.5; }
        .notes-list { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .note-row { display: flex; align-items: flex-start; gap: 20px; padding: 13px 20px; border-bottom: 1px solid var(--color-border); }
        .note-row:last-child { border-bottom: none; }
        .note-title { font-size:12px; font-weight:700; color:var(--color-text); min-width:110px; flex-shrink:0; margin-top:1px; }
        .note-body { font-size:13px; color:var(--color-text-secondary); line-height:1.6; }
        .screens-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
        .screen-ph { border:2px dashed var(--color-border); border-radius:10px; min-height:130px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:7px; background:var(--color-bg-subtle); font-size:11.5px; font-weight:600; color:var(--color-text-secondary); text-align:center; padding:14px; line-height:1.4; }
      `}</style>
    </div>
  )
}
