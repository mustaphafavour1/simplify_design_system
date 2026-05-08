'use client'
import { PageHeader } from '@/components/docs/PageHeader'

const features = [
  { icon: '💳', title: 'Account & Balance',    desc: 'View total account balance, account number, and recent activity at a glance.' },
  { icon: '⇄',  title: 'Transfers',            desc: 'Send money to other accounts instantly. Interbank transfers via NIBSS.' },
  { icon: '🏦', title: 'Save',                 desc: 'Built-in savings features to help users grow their money over time.' },
  { icon: '➕', title: 'Add Funds',            desc: 'Top up via card, bank transfer, or USSD.' },
  { icon: '📋', title: 'Transaction History',  desc: 'Filterable log of all inflows and outflows with status and timestamps.' },
  { icon: '🔔', title: 'Notifications',        desc: 'Real-time push notifications for every account activity.' },
]

const colors = [
  { name: 'Maestro Navy',  hex: '#0D1B4B', token: 'maestro-navy' },
  { name: 'Maestro Blue',  hex: '#1B56F4', token: 'maestro-blue' },
  { name: 'Sky Blue',      hex: '#4FC3F7', token: 'maestro-sky' },
  { name: 'White',         hex: '#FFFFFF', token: 'maestro-white' },
]

export default function MaestroPage() {
  return (
    <div>
      <PageHeader
        section="Products"
        title="Maestro MFB"
        description="A CBN-regulated microfinance bank offering mobile-first banking — spend, save, and grow money with no stress and no complexity."
      />

      {/* Identity */}
      <section className="prod-section">
        <div className="identity-row">
          <div className="logo-block maestro-bg">
            <div className="logo-placeholder">
              {/* Replace with: <img src="/logos/maestro-white.png" alt="Maestro MFB" /> */}
              <div className="logo-mock">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <polygon points="0,0 16,0 32,16 16,16" fill="white" opacity="0.9"/>
                  <polygon points="0,0 0,16 16,32 16,16" fill="#4FC3F7" opacity="0.8"/>
                </svg>
                <span className="logo-mock-text">Maestro</span>
              </div>
              <span className="logo-note">[Replace with white logo PNG/SVG]</span>
            </div>
          </div>

          <div className="identity-meta">
            <div className="meta-row">
              <span className="meta-label">Type</span>
              <span className="meta-value">Mobile App (iOS & Android) + Web</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Regulation</span>
              <div className="meta-tags">
                <span className="meta-tag reg">CBN Regulated</span>
                <span className="meta-tag reg">NDIC Insured</span>
                <span className="meta-tag reg">NDPR Compliant</span>
              </div>
            </div>
            <div className="meta-row">
              <span className="meta-label">Category</span>
              <span className="meta-value">Microfinance Bank (MFB)</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Audience</span>
              <span className="meta-value">Individuals — personal banking and savings</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Role in ecosystem</span>
              <span className="meta-value">Also provides virtual bank account assignment for VoxePay collections</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Status</span>
              <span className="status-badge">Live</span>
            </div>
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="prod-section">
        <h2 className="section-title">What Maestro MFB does</h2>
        <p className="section-desc">
          Maestro MFB is a mobile-first microfinance bank — designed around the idea that banking should be smarter, not harder. Users get a full bank account, can send and receive money, save, and track every transaction — all from a mobile app. It is also the virtual account infrastructure behind VoxePay&apos;s collections feature.
        </p>
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

      {/* Mobile-specific design notes */}
      <section className="prod-section">
        <h2 className="section-title">Mobile-first considerations</h2>
        <p className="section-desc">Maestro is the only SS product with a native mobile app. These patterns apply specifically to mobile UI design.</p>
        <div className="mobile-grid">
          {[
            { title: 'Touch targets',    body: 'All interactive elements must be at least 44×44px. Financial actions like Transfer and Add Funds get 56px+ tap areas.' },
            { title: 'Bottom navigation', body: 'Primary navigation uses a bottom tab bar — not a sidebar. Typically 4–5 items: Home, Save, Transfers, History, Profile.' },
            { title: 'Balance display',   body: 'Total balance is the hero element on the home screen. Large, bold, with a toggle to show/hide the value for privacy in public.' },
            { title: 'Amounts',           body: 'Always two decimal places. ₦80,735,690.00 not ₦80,735,690. Right-aligned in transaction lists.' },
            { title: 'Success screens',   body: 'Full-screen success states with a clear green check icon after transfers. Include amount, recipient, and a "Done" CTA.' },
            { title: 'Biometrics',        body: 'Support fingerprint and Face ID for login and transaction confirmation. Never replace with PIN-only on capable devices.' },
          ].map(n => (
            <div key={n.title} className="mobile-card">
              <div className="mobile-title">{n.title}</div>
              <div className="mobile-body">{n.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Product colours */}
      <section className="prod-section">
        <h2 className="section-title">Product colours</h2>
        <p className="section-desc">Maestro shares the same blue palette as VoxePay — both are SS fintech products. The navy acts as the primary brand anchor.</p>
        <div className="color-row">
          {colors.map(c => (
            <div key={c.name} className="prod-swatch">
              <div className="swatch-color" style={{ background: c.hex, border: c.hex === '#FFFFFF' ? '1.5px solid var(--color-border)' : 'none' }} />
              <div className="swatch-name">{c.name}</div>
              <div className="swatch-hex">{c.hex}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Screens */}
      <section className="prod-section">
        <h2 className="section-title">Key screens</h2>
        <div className="screens-grid">
          {[
            'Home — Account Balance & Quick Actions',
            'Transfer — Send Money Flow',
            'Save — Savings Overview',
            'Transfer Successful — Success State',
          ].map(label => (
            <div key={label} className="screen-placeholder">
              <div className="screen-inner">
                <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5">
                  <rect x="1" y="1" width="22" height="38" rx="4"/>
                  <line x1="9" y1="4" x2="15" y2="4"/>
                </svg>
                <span>{label}</span>
                <span className="placeholder-note">[Upload mobile screenshot]</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .prod-section { margin-bottom: 48px; }
        .section-title { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
        .section-desc { font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; max-width: 600px; }
        .identity-row { display: grid; grid-template-columns: 240px 1fr; gap: 16px; align-items: start; }
        .logo-block { border-radius: 12px; display: flex; align-items: center; justify-content: center; min-height: 160px; }
        .maestro-bg { background: linear-gradient(135deg, #0D1B4B 0%, #1B56F4 100%); }
        .logo-placeholder { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .logo-mock { display: flex; align-items: center; gap: 10px; }
        .logo-mock-text { color: white; font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
        .logo-note { font-size: 10px; color: rgba(255,255,255,0.4); }
        .identity-meta { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .meta-row { display: flex; align-items: flex-start; gap: 16px; padding: 12px 16px; border-bottom: 1px solid var(--color-border); }
        .meta-row:last-child { border-bottom: none; }
        .meta-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-text-muted); min-width: 120px; flex-shrink: 0; margin-top: 1px; }
        .meta-value { font-size: 13px; color: var(--color-text-secondary); line-height: 1.5; }
        .meta-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .meta-tag { font-size: 11px; font-weight: 600; background: var(--color-bg-subtle); border: 1px solid var(--color-border); padding: 2px 8px; border-radius: 99px; color: var(--color-text-secondary); }
        .meta-tag.reg { background: #EFF4FF; border-color: #C7D7FD; color: #1B56F4; }
        .status-badge { font-size: 11px; font-weight: 700; background: #F0FDF4; border: 1px solid #BBF7D0; color: #16A34A; padding: 2px 10px; border-radius: 99px; }
        .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .feature-card { display: flex; align-items: flex-start; gap: 12px; padding: 16px; border: 1.5px solid var(--color-border); border-radius: 10px; background: var(--color-bg-raised); }
        .feature-icon { font-size: 18px; flex-shrink: 0; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background: #EFF4FF; border-radius: 8px; }
        .feature-title { font-size: 13px; font-weight: 600; color: var(--color-text); margin-bottom: 3px; }
        .feature-desc { font-size: 12px; color: var(--color-text-secondary); line-height: 1.5; }
        .mobile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .mobile-card { padding: 16px 20px; border: 1.5px solid var(--color-border); border-radius: 10px; background: var(--color-bg-raised); }
        .mobile-title { font-size: 13px; font-weight: 600; color: var(--color-text); margin-bottom: 5px; }
        .mobile-body { font-size: 13px; color: var(--color-text-secondary); line-height: 1.65; }
        .color-row { display: flex; gap: 12px; }
        .prod-swatch { text-align: center; }
        .swatch-color { width: 80px; height: 60px; border-radius: 10px; margin-bottom: 8px; }
        .swatch-name { font-size: 12px; font-weight: 600; color: var(--color-text); }
        .swatch-hex { font-size: 11px; font-family: var(--font-mono); color: var(--color-text-muted); }
        .screens-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .screen-placeholder { border: 2px dashed var(--color-border); border-radius: 12px; }
        .screen-inner { min-height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; background: var(--color-bg-subtle); font-size: 11.5px; font-weight: 600; color: var(--color-text-secondary); text-align: center; padding: 16px; }
        .placeholder-note { font-size: 10px; color: var(--color-text-muted); font-weight: 400; }
      `}</style>
    </div>
  )
}