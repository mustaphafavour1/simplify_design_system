'use client'
import { PageHeader } from '@/components/docs/PageHeader'

const features = [
  { icon: '⇄', title: 'Money Transfers',      desc: 'Send and receive money instantly across accounts and banks.' },
  { icon: '📄', title: 'Bill Payments',         desc: 'Pay utilities, subscriptions, and service providers in-platform.' },
  { icon: '🏦', title: 'Virtual Bank Accounts', desc: 'Auto-assigned dedicated virtual accounts for collections.' },
  { icon: '📊', title: 'Business Dashboard',    desc: 'Transaction data and reconciliation for finance teams.' },
  { icon: '🔗', title: 'Developer API',          desc: 'Integrate VoxePay collections and payouts via REST API.' },
  { icon: '✅', title: 'KYC / KYB',             desc: 'Identity and business verification built into onboarding.' },
]

const segments = [
  { label: 'Personal',    desc: 'Individuals paying bills, sending money to family and friends, and managing everyday finances.' },
  { label: 'Business',    desc: 'Businesses collecting payments, managing virtual accounts, and reconciling transactions at scale.' },
  { label: 'Developers',  desc: 'Engineers integrating VoxePay collections, payouts, and webhooks via the REST API.' },
]

const colors = [
  { name: 'VoxePay Blue',  hex: '#1B56F4', token: 'voxepay-primary' },
  { name: 'Sky Blue',      hex: '#4FC3F7', token: 'voxepay-secondary' },
  { name: 'Deep Navy',     hex: '#0D1B4B', token: 'voxepay-navy' },
  { name: 'White',         hex: '#FFFFFF', token: 'voxepay-white' },
]

export default function VoxePayPage() {
  return (
    <div>
      <PageHeader
        section="Products"
        title="VoxePay"
        description="A licensed PSSP payment platform for individuals, businesses, and developers. Pay bills, send money, collect payments, and access transaction data — all in one place."
      />

      {/* Identity */}
      <section className="prod-section">
        <div className="identity-row">
          {/* Logo block */}
          <div className="logo-block voxepay-bg">
            <div className="logo-placeholder">
              {/* Replace with: <img src="/logos/voxepay-white.png" alt="VoxePay" /> */}
              <div className="logo-mock">
                <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                  <path d="M8 8 L24 4 L40 8 L44 24 L40 40 L24 44 L8 40 L4 24 Z" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.5"/>
                  <path d="M16 16 L32 16 L32 32 L16 32 Z" fill="white" opacity="0.6"/>
                </svg>
                <span className="logo-mock-text">VoxePay</span>
              </div>
              <span className="logo-note">[Replace with white logo PNG/SVG]</span>
            </div>
          </div>
          {/* Meta */}
          <div className="identity-meta">
            <div className="meta-row">
              <span className="meta-label">Type</span>
              <span className="meta-value">Web Application + Mobile App + API</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Licence</span>
              <span className="meta-value">Licensed PSSP (Payment Solution Service Provider)</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Integrations</span>
              <span className="meta-value">NIBSS Inward, Interswitch (Cards), Maestro MFB (Virtual Accounts)</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Segments</span>
              <div className="meta-tags">
                {['Personal', 'Business', 'Developers'].map(s => (
                  <span key={s} className="meta-tag">{s}</span>
                ))}
              </div>
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
        <h2 className="section-title">What VoxePay does</h2>
        <p className="section-desc">
          VoxePay is Simplify Synergy&apos;s payment gateway — positioned alongside platforms like Paystack and Flutterwave in the Nigerian payments ecosystem. It enables individuals to pay bills and transfer money, businesses to collect payments and reconcile transactions, and developers to integrate payment capabilities via API.
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

      {/* User segments */}
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

      {/* Product colours */}
      <section className="prod-section">
        <h2 className="section-title">Product colours</h2>
        <p className="section-desc">VoxePay uses a distinct blue palette separate from the Simplify Synergy brand purple. Do not mix these in cross-product contexts.</p>
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
        <p className="section-desc">Reference screens showing VoxePay&apos;s design patterns in context.</p>
        <div className="screens-grid">
          {[
            'Homepage / Hero — Bills & Money Transfers',
            'Business Dashboard — Transaction Overview',
            'Bulk Upload — Account Management',
            'KYB Onboarding — Document Upload',
          ].map(label => (
            <div key={label} className="screen-placeholder">
              <div className="screen-inner">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <span>{label}</span>
                <span className="placeholder-note">[Upload screenshot]</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design notes */}
      <section className="prod-section">
        <h2 className="section-title">Design notes</h2>
        <div className="notes-list">
          {[
            { title: 'Typeface', body: 'Poppins throughout — consistent with all SS products. VoxePay uses the same type scale.' },
            { title: 'Confirmation dialogs', body: 'Follow the modal pattern strictly. Destructive actions (like bulk account removal) must show the entity name in full — account number, holder name, and bank — as seen in the "Confirm Removal" modal.' },
            { title: 'Amounts', body: 'All monetary values displayed with two decimal places (₦50,000.00). Right-aligned in tables. See Voice & Tone → Numbers & Currency.' },
            { title: 'Status colours', body: 'Payment statuses use semantic colours: green (#16A34A) for Successful, red (#DC2626) for Failed, amber (#D97706) for Processing/Pending. Never use VoxePay blue for status.' },
            { title: 'Figma file', body: '[Link to VoxePay Figma file — add when available]' },
          ].map(n => (
            <div key={n.title} className="note-row">
              <span className="note-title">{n.title}</span>
              <span className="note-body">{n.body}</span>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .prod-section { margin-bottom: 48px; }
        .section-title { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
        .section-desc { font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; max-width: 600px; }

        .identity-row { display: grid; grid-template-columns: 240px 1fr; gap: 16px; align-items: start; }
        .logo-block { border-radius: 12px; overflow: hidden; display: flex; align-items: center; justify-content: center; min-height: 160px; }
        .voxepay-bg { background: linear-gradient(135deg, #1B56F4, #0D1B4B); }
        .logo-placeholder { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .logo-mock { display: flex; align-items: center; gap: 10px; }
        .logo-mock-text { color: white; font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
        .logo-note { font-size: 10px; color: rgba(255,255,255,0.4); }
        .identity-meta { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .meta-row { display: flex; align-items: flex-start; gap: 16px; padding: 12px 16px; border-bottom: 1px solid var(--color-border); }
        .meta-row:last-child { border-bottom: none; }
        .meta-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-text-muted); min-width: 100px; flex-shrink: 0; margin-top: 1px; }
        .meta-value { font-size: 13px; color: var(--color-text-secondary); line-height: 1.5; }
        .meta-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .meta-tag { font-size: 11px; font-weight: 600; background: var(--color-bg-subtle); border: 1px solid var(--color-border); padding: 2px 8px; border-radius: 99px; color: var(--color-text-secondary); }
        .status-badge { font-size: 11px; font-weight: 700; background: #F0FDF4; border: 1px solid #BBF7D0; color: #16A34A; padding: 2px 10px; border-radius: 99px; }

        .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .feature-card { display: flex; align-items: flex-start; gap: 12px; padding: 16px; border: 1.5px solid var(--color-border); border-radius: 10px; background: var(--color-bg-raised); }
        .feature-icon { font-size: 20px; flex-shrink: 0; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background: #EFF4FF; border-radius: 8px; }
        .feature-title { font-size: 13px; font-weight: 600; color: var(--color-text); margin-bottom: 3px; }
        .feature-desc { font-size: 12px; color: var(--color-text-secondary); line-height: 1.5; }

        .segments-list { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .segment-row { display: flex; align-items: flex-start; gap: 24px; padding: 14px 20px; border-bottom: 1px solid var(--color-border); }
        .segment-row:last-child { border-bottom: none; }
        .segment-label { font-size: 13px; font-weight: 700; color: var(--color-text); min-width: 100px; flex-shrink: 0; }
        .segment-desc { font-size: 13px; color: var(--color-text-secondary); line-height: 1.6; }

        .color-row { display: flex; gap: 12px; }
        .prod-swatch { text-align: center; }
        .swatch-color { width: 80px; height: 60px; border-radius: 10px; margin-bottom: 8px; }
        .swatch-name { font-size: 12px; font-weight: 600; color: var(--color-text); }
        .swatch-hex { font-size: 11px; font-family: var(--font-mono); color: var(--color-text-muted); }

        .screens-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
        .screen-placeholder { border: 2px dashed var(--color-border); border-radius: 12px; overflow: hidden; }
        .screen-inner { min-height: 160px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; background: var(--color-bg-subtle); font-size: 12.5px; font-weight: 600; color: var(--color-text-secondary); text-align: center; padding: 16px; }
        .placeholder-note { font-size: 11px; color: var(--color-text-muted); font-weight: 400; }

        .notes-list { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .note-row { display: flex; align-items: flex-start; gap: 20px; padding: 13px 20px; border-bottom: 1px solid var(--color-border); }
        .note-row:last-child { border-bottom: none; }
        .note-title { font-size: 12px; font-weight: 700; color: var(--color-text); min-width: 110px; flex-shrink: 0; margin-top: 1px; }
        .note-body { font-size: 13px; color: var(--color-text-secondary); line-height: 1.6; }
      `}</style>
    </div>
  )
}