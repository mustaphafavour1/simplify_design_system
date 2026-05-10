'use client'
import { PageHeader } from '@/components/docs/PageHeader'
import { ArrowsLeftRight, Receipt, Bank, ChartBar, Code, ShieldCheck, CurrencyNgn } from '@phosphor-icons/react'

const features = [
  { Icon: ArrowsLeftRight, title: 'Money Transfers',       desc: 'Send and receive money instantly across accounts and banks.' },
  { Icon: Receipt,          title: 'Bill Payments',         desc: 'Pay utilities, subscriptions, and service providers in-platform.' },
  { Icon: Bank,             title: 'Virtual Bank Accounts', desc: 'Auto-assigned dedicated virtual accounts for collections.' },
  { Icon: ChartBar,         title: 'Business Dashboard',    desc: 'Transaction data and reconciliation for finance teams.' },
  { Icon: Code,             title: 'Developer API',         desc: 'Integrate VoxePay collections and payouts via REST API.' },
  { Icon: ShieldCheck,      title: 'KYC / KYB',            desc: 'Identity and business verification built into onboarding.' },
]

const segments = [
  { label: 'Personal',   desc: 'Individuals paying bills, sending money to family and friends, and managing everyday finances.' },
  { label: 'Business',   desc: 'Businesses collecting payments, managing virtual accounts, and reconciling transactions at scale.' },
  { label: 'Developers', desc: 'Engineers integrating VoxePay collections, payouts, and webhooks via the REST API.' },
]

const colors = [
  { name: 'VoxePay Blue', hex: '#1B56F4' },
  { name: 'Sky Blue',     hex: '#4FC3F7' },
  { name: 'Deep Navy',    hex: '#0D1B4B' },
  { name: 'White',        hex: '#FFFFFF' },
]

export default function VoxePayPage() {
  return (
    <div>
      <PageHeader section="Products" title="VoxePay"
        description="A licensed PSSP payment platform for individuals, businesses, and developers. Pay bills, send money, collect payments, and access transaction data." />

      <section className="prod-section">
        <div className="identity-row">
          <div className="logo-block vb">
            <div className="logo-ph">
              <CurrencyNgn size={32} color="rgba(255,255,255,0.4)" />
              <span className="logo-ph-note">Upload voxepay-logo-white.png</span>
            </div>
          </div>
          <div className="identity-meta">
            {[
              { k:'Type',        v:'Web Application + Mobile App + API' },
              { k:'Licence',     v:'Licensed PSSP (Payment Solution Service Provider)' },
              { k:'Integrations',v:'NIBSS Inward, Interswitch (Cards), Maestro MFB (Virtual Accounts)' },
              { k:'Segments',    v:'Personal · Business · Developers' },
              { k:'Status',      v:'Live', badge:true },
            ].map(r => (
              <div key={r.k} className="meta-row">
                <span className="meta-label">{r.k}</span>
                {r.badge ? <span className="status-badge">Live</span> : <span className="meta-value">{r.v}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prod-section">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          {features.map(({ Icon, title, desc }) => (
            <div key={title} className="feature-card">
              <div className="ficon blue"><Icon size={20} weight="duotone" color="#1B56F4" /></div>
              <div><div className="feature-title">{title}</div><div className="feature-desc">{desc}</div></div>
            </div>
          ))}
        </div>
      </section>

      <section className="prod-section">
        <h2 className="section-title">User segments</h2>
        <div className="segments-list">
          {segments.map(s => (
            <div key={s.label} className="segment-row">
              <span className="segment-label">{s.label}</span>
              <span className="segment-desc">{s.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="prod-section">
        <h2 className="section-title">Product colours</h2>
        <div className="color-row">
          {colors.map(c => (
            <div key={c.name} className="prod-swatch">
              <div style={{ width:80, height:52, background:c.hex, borderRadius:10, marginBottom:8, border: c.hex==='#FFFFFF' ? '1.5px solid var(--color-border)' : 'none' }} />
              <div style={{ fontSize:12, fontWeight:600, color:'var(--color-text)' }}>{c.name}</div>
              <code style={{ fontSize:11, fontFamily:'var(--font-mono)', color:'var(--color-text-muted)' }}>{c.hex}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="prod-section">
        <h2 className="section-title">Key screens</h2>
        <div className="screens-grid">
          {['Login - Empty','Login - Filled','Dashboard - Overview','Transactions - Empty','Transactions - Filled','Collections - Empty','Collections - Filled','Settings - Profile'].map(label => (
            <div key={label} className="screen-ph">
              <ChartBar size={22} color="var(--color-border-strong)" weight="thin" />
              <span>{label}</span>
              <span style={{fontSize:10, color:'var(--color-text-muted)' }}>[Upload screenshot]</span>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .prod-section { margin-bottom: 48px; }
        .section-title { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 16px; }
        .identity-row { display: grid; grid-template-columns: 220px 1fr; gap: 16px; }
        .logo-block { border-radius: 12px; min-height: 160px; display: flex; align-items: center; justify-content: center; }
        .vb { background: linear-gradient(135deg, #1B56F4, #0D1B4B); }
        .logo-ph { display:flex; flex-direction:column; align-items:center; gap:8px; }
        .logo-ph-note { font-size:10px; color:rgba(255,255,255,.35); text-align:center; }
        .identity-meta { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .meta-row { display: flex; align-items: flex-start; gap: 16px; padding: 12px 16px; border-bottom: 1px solid var(--color-border); }
        .meta-row:last-child { border-bottom: none; }
        .meta-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--color-text-muted); min-width: 100px; flex-shrink: 0; padding-top: 1px; }
        .meta-value { font-size: 13px; color: var(--color-text-secondary); }
        .status-badge { font-size:11px; font-weight:700; background:#F0FDF4; border:1px solid #BBF7D0; color:#16A34A; padding:2px 10px; border-radius:99px; }
        .features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
        .feature-card { display: flex; align-items: flex-start; gap: 12px; padding: 16px; border: 1.5px solid var(--color-border); border-radius: 10px; background: var(--color-bg-raised); }
        .ficon { width:36px; height:36px; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .ficon.blue { background: #EFF4FF; }
        .feature-title { font-size:13px; font-weight:600; color:var(--color-text); margin-bottom:3px; }
        .feature-desc { font-size:12px; color:var(--color-text-secondary); line-height:1.5; }
        .segments-list { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .segment-row { display: flex; gap: 24px; padding: 14px 20px; border-bottom: 1px solid var(--color-border); }
        .segment-row:last-child { border-bottom: none; }
        .segment-label { font-size:13px; font-weight:700; color:var(--color-text); min-width:100px; flex-shrink:0; }
        .segment-desc { font-size:13px; color:var(--color-text-secondary); line-height:1.6; }
        .color-row { display:flex; gap:12px; }
        .prod-swatch { text-align:center; }
        .screens-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; }
        .screen-ph { border:2px dashed var(--color-border); border-radius:10px; min-height:130px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:7px; background:var(--color-bg-subtle); font-size:11.5px; font-weight:600; color:var(--color-text-secondary); text-align:center; padding:14px; line-height:1.4; }
      `}</style>
    </div>
  )
}
