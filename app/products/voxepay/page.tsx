import { PageHeader } from '@/components/docs/PageHeader'
import { PhosphorIcon } from '@/lib/icons'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

// ── Static fallback data ──────────────────────────────────────────────────
const STATIC = {
  tagline: 'A licensed PSSP payment platform for individuals, businesses, and developers.',
  description: 'VoxePay is Simplify Synergy\'s payment gateway — positioned alongside Paystack and Flutterwave in the Nigerian payments ecosystem. It enables individuals to pay bills and transfer money, businesses to collect payments and reconcile transactions, and developers to integrate payment capabilities via API.',
  liveUrl: null,
  figmaUrl: null,
  status: 'live',
  meta: [
    { key: 'Type',          value: 'Web Application + Mobile App + API' },
    { key: 'Licence',       value: 'Licensed PSSP (Payment Solution Service Provider)' },
    { key: 'Integrations',  value: 'NIBSS Inward, Interswitch (Cards), Maestro MFB (Virtual Accounts)' },
    { key: 'Segments',      value: 'Personal · Business · Developers' },
  ],
  features: [
    { iconName: 'ArrowsLeftRight', title: 'Money Transfers',        description: 'Send and receive money instantly across accounts and banks.' },
    { iconName: 'Receipt',          title: 'Bill Payments',          description: 'Pay utilities, subscriptions, and service providers in-platform.' },
    { iconName: 'Bank',             title: 'Virtual Bank Accounts',  description: 'Auto-assigned dedicated virtual accounts for collections.' },
    { iconName: 'ChartBar',         title: 'Business Dashboard',     description: 'Transaction data and reconciliation for finance teams.' },
    { iconName: 'Code',             title: 'Developer API',          description: 'Integrate VoxePay collections and payouts via REST API.' },
    { iconName: 'ShieldCheck',      title: 'KYC / KYB',             description: 'Identity and business verification built into onboarding.' },
  ],
  screenshots: [
    'Login - Empty', 'Login - Filled', 'Dashboard - Overview',
    'Transactions - Empty', 'Transactions - Filled',
    'Collections - Empty', 'Collections - Filled', 'Settings - Profile',
  ],
}

const COLOURS = [
  { name: 'VoxePay Blue', hex: '#1B56F4' },
  { name: 'Sky Blue',     hex: '#4FC3F7' },
  { name: 'Deep Navy',    hex: '#0D1B4B' },
  { name: 'White',        hex: '#FFFFFF' },
]

async function getProductData() {
  try {
    return await client?.fetch(`
      *[_type == "product" && slug.current == "voxepay"][0] {
        name, tagline, description, status, liveUrl, figmaUrl,
        logo, features, meta, screenshots
      }
    `)
  } catch { return null }
}

export default async function VoxePayPage() {
  const sanity = await getProductData()
  const data = {
    tagline:     sanity?.tagline     ?? STATIC.tagline,
    description: sanity?.description ?? STATIC.description,
    liveUrl:     sanity?.liveUrl     ?? STATIC.liveUrl,
    figmaUrl:    sanity?.figmaUrl    ?? STATIC.figmaUrl,
    status:      sanity?.status      ?? STATIC.status,
    meta:        sanity?.meta?.length    ? sanity.meta    : STATIC.meta,
    features:    sanity?.features?.length ? sanity.features : STATIC.features,
    screenshots: sanity?.screenshots?.length ? sanity.screenshots : null,
  }

  return (
    <div>
      <PageHeader section="Products" title="VoxePay" description={data.tagline} />

      {/* Identity */}
      <section className="ps">
        <div className="identity-row">
          {/* Logo block */}
          <div className="logo-block vb">
            {sanity?.logo
              ? <Image src={urlFor(sanity.logo).width(200).url()} alt="VoxePay" width={160} height={48} style={{ objectFit:'contain' }} />
              : <div className="logo-ph">
                  <span style={{ color:'white', fontSize:22, fontWeight:800, letterSpacing:'-0.01em' }}>VoxePay</span>
                  <span style={{ fontSize:10, color:'rgba(255,255,255,.4)' }}>Upload logo in Sanity</span>
                </div>
            }
          </div>

          {/* Meta table */}
          <div className="identity-meta">
            {data.meta.map((r: any) => (
              <div key={r.key} className="meta-row">
                <span className="meta-label">{r.key}</span>
                <span className="meta-value">{r.value}</span>
              </div>
            ))}
            <div className="meta-row">
              <span className="meta-label">Status</span>
              <span className="status-badge">
                {data.status === 'live' ? 'Live' : data.status === 'delivered' ? 'Delivered' : data.status}
              </span>
            </div>
            {data.liveUrl && (
              <div className="meta-row">
                <span className="meta-label">Live URL</span>
                <a href={data.liveUrl} target="_blank" rel="noopener" className="meta-link">
                  {data.liveUrl} <ArrowUpRight size={12} />
                </a>
              </div>
            )}
            {data.figmaUrl && (
              <div className="meta-row">
                <span className="meta-label">Figma</span>
                <a href={data.figmaUrl} target="_blank" rel="noopener" className="meta-link">
                  Open Figma file <ArrowUpRight size={12} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="ps">
        <h2 className="section-title">What VoxePay does</h2>
        <p className="section-desc">{data.description}</p>
      </section>

      {/* Features — from Sanity or static */}
      <section className="ps">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          {data.features.map((f: any) => (
            <div key={f.title} className="feature-card">
              <div className="ficon blue">
                <PhosphorIcon name={f.iconName} size={20} weight="duotone" color="#1B56F4" />
              </div>
              <div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Colours */}
      <section className="ps">
        <h2 className="section-title">Product colours</h2>
        <div className="color-row">
          {COLOURS.map(c => (
            <div key={c.name} className="prod-swatch">
              <div style={{ width:80, height:52, background:c.hex, borderRadius:10, marginBottom:8, border: c.hex==='#FFFFFF' ? '1.5px solid var(--color-border)' : 'none' }} />
              <div style={{ fontSize:12, fontWeight:600, color:'var(--color-text)' }}>{c.name}</div>
              <code style={{ fontSize:11, fontFamily:'var(--font-mono)', color:'var(--color-text-muted)' }}>{c.hex}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className="ps">
        <h2 className="section-title">Key screens</h2>
        <div className="screens-grid">
          {data.screenshots
            ? data.screenshots.map((s: any) => (
                <div key={s.caption || s} className="screen-card">
                  <Image src={urlFor(s).width(400).url()} alt={s.caption || s} width={400} height={280} style={{ width:'100%', height:'auto', borderRadius:8 }} />
                  {s.caption && <div className="screen-caption">{s.caption}</div>}
                </div>
              ))
            : STATIC.screenshots.map(label => (
                <div key={label} className="screen-ph">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span>{label}</span>
                  <span style={{ fontSize:10, color:'var(--color-text-muted)' }}>Upload in Sanity Studio</span>
                </div>
              ))
          }
        </div>
      </section>

      <style jsx>{`
        .ps { margin-bottom: 48px; }
        .section-title { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 12px; }
        .section-desc { font-size: 14px; color: var(--color-text-secondary); line-height: 1.75; max-width: 640px; }
        .identity-row { display: grid; grid-template-columns: 220px 1fr; gap: 16px; }
        .logo-block { border-radius: 12px; min-height: 160px; display: flex; align-items: center; justify-content: center; }
        .vb { background: linear-gradient(135deg, #1B56F4, #0D1B4B); }
        .logo-ph { display:flex; flex-direction:column; align-items:center; gap:8px; }
        .identity-meta { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .meta-row { display: flex; align-items: flex-start; gap: 16px; padding: 11px 16px; border-bottom: 1px solid var(--color-border); }
        .meta-row:last-child { border-bottom: none; }
        .meta-label { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:.06em; color:var(--color-text-muted); min-width:100px; flex-shrink:0; padding-top:1px; }
        .meta-value { font-size:13px; color:var(--color-text-secondary); }
        .meta-link { display:inline-flex; align-items:center; gap:4px; font-size:13px; color:var(--color-primary); font-weight:600; text-decoration:none; }
        .status-badge { font-size:11px; font-weight:700; background:#F0FDF4; border:1px solid #BBF7D0; color:#16A34A; padding:2px 10px; border-radius:99px; }
        .features-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
        .feature-card { display:flex; align-items:flex-start; gap:12px; padding:16px; border:1.5px solid var(--color-border); border-radius:10px; background:var(--color-bg-raised); }
        .ficon { width:36px; height:36px; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .ficon.blue { background:#EFF4FF; }
        .feature-title { font-size:13px; font-weight:600; color:var(--color-text); margin-bottom:3px; }
        .feature-desc { font-size:12px; color:var(--color-text-secondary); line-height:1.5; }
        .color-row { display:flex; gap:12px; }
        .prod-swatch { text-align:center; }
        .screens-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; }
        .screen-ph { border:2px dashed var(--color-border); border-radius:10px; min-height:130px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:7px; background:var(--color-bg-subtle); font-size:11.5px; font-weight:600; color:var(--color-text-secondary); text-align:center; padding:14px; line-height:1.4; }
        .screen-card { border-radius:10px; overflow:hidden; border:1.5px solid var(--color-border); }
        .screen-caption { font-size:11px; font-weight:600; color:var(--color-text-muted); padding:8px 12px; background:var(--color-bg-subtle); }
      `}</style>
    </div>
  )
}