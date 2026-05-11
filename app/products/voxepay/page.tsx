import { PageHeader } from '@/components/docs/PageHeader'
import { PhosphorIcon } from '@/lib/icons'
import { getProductBySlug, urlFor } from '@/lib/sanity'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

export const revalidate = 0 // always fresh

// ── Static fallback ───────────────────────────────────────────────────────
const STATIC = {
  tagline: 'A licensed PSSP payment platform for individuals, businesses, and developers.',
  description: 'VoxePay is Simplify Synergy\'s payment gateway — positioned alongside Paystack and Flutterwave in the Nigerian payments ecosystem. Enables individuals to pay bills and transfer money, businesses to collect payments and reconcile transactions, and developers to integrate payment capabilities via API.',
  liveUrl: null as string | null,
  figmaUrl: null as string | null,
  status: 'live',
  meta: [
    { key: 'Type',         value: 'Web Application + Mobile App + API' },
    { key: 'Licence',      value: 'Licensed PSSP (Payment Solution Service Provider)' },
    { key: 'Integrations', value: 'NIBSS Inward, Interswitch (Cards), Maestro MFB (Virtual Accounts)' },
    { key: 'Segments',     value: 'Personal · Business · Developers' },
  ],
  features: [
    { iconName: 'ArrowsLeftRight', title: 'Money Transfers',       description: 'Send and receive money instantly across accounts and banks.' },
    { iconName: 'Receipt',          title: 'Bill Payments',         description: 'Pay utilities, subscriptions, and service providers in-platform.' },
    { iconName: 'Bank',             title: 'Virtual Bank Accounts', description: 'Auto-assigned dedicated virtual accounts for collections.' },
    { iconName: 'ChartBar',         title: 'Business Dashboard',    description: 'Transaction data and reconciliation for finance teams.' },
    { iconName: 'Code',             title: 'Developer API',         description: 'Integrate VoxePay collections and payouts via REST API.' },
    { iconName: 'ShieldCheck',      title: 'KYC / KYB',            description: 'Identity and business verification built into onboarding.' },
  ],
  screenshots: ['Login - Empty','Login - Filled','Dashboard - Overview','Transactions - Empty','Transactions - Filled','Collections - Empty','Collections - Filled','Settings - Profile'],
}

const COLOURS = [
  { name: 'VoxePay Blue', hex: '#1B56F4' },
  { name: 'Sky Blue',     hex: '#4FC3F7' },
  { name: 'Deep Navy',    hex: '#0D1B4B' },
  { name: 'White',        hex: '#FFFFFF' },
]

const statusBadge: Record<string, { label: string; bg: string; border: string; color: string }> = {
  live:      { label: 'Live',      bg: '#F0FDF4', border: '#BBF7D0', color: '#16A34A' },
  delivered: { label: 'Delivered', bg: '#EFF6FF', border: '#BFDBFE', color: '#1E40AF' },
  beta:      { label: 'Beta',      bg: '#FFFBEB', border: '#FDE68A', color: '#92400E' },
  internal:  { label: 'Internal',  bg: '#F5F3FF', border: '#DDD6FE', color: '#6D28D9' },
}

export default async function VoxePayPage() {
  const sanity = await getProductBySlug('voxepay')

  // Merge: Sanity wins where it has data, static is the fallback
  const d = {
    tagline:     sanity?.tagline     || STATIC.tagline,
    description: sanity?.description || STATIC.description,
    liveUrl:     sanity?.liveUrl     || STATIC.liveUrl,
    figmaUrl:    sanity?.figmaUrl    || STATIC.figmaUrl,
    status:      sanity?.status      || STATIC.status,
    meta:        sanity?.meta?.length     ? sanity.meta     : STATIC.meta,
    features:    sanity?.features?.length ? sanity.features : STATIC.features,
    logo:        sanity?.logo        || null,
    screenshots: sanity?.screenshots?.length ? sanity.screenshots : null,
  }

  const badge = statusBadge[d.status] ?? statusBadge.live

  return (
    <div>
      <PageHeader section="Products" title="VoxePay" description={d.tagline} />

      {/* Identity */}
      <section className="ps">
        <div className="identity-row">
          <div className="logo-block" style={{ background: 'linear-gradient(135deg, #1B56F4, #0D1B4B)' }}>
            {d.logo
              ? <Image src={urlFor(d.logo).width(200).url()} alt="VoxePay logo" width={160} height={48} style={{ objectFit: 'contain' }} />
              : <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
                  <span style={{ color:'white', fontSize:22, fontWeight:800, letterSpacing:'-0.01em' }}>VoxePay</span>
                  <span style={{ fontSize:10, color:'rgba(255,255,255,.35)' }}>Upload logo in Sanity Studio</span>
                </div>
            }
          </div>

          <div className="identity-meta">
            {d.meta.map((r: any) => (
              <div key={r.key} className="meta-row">
                <span className="meta-k">{r.key}</span>
                <span className="meta-v">{r.value}</span>
              </div>
            ))}
            <div className="meta-row">
              <span className="meta-k">Status</span>
              <span style={{ fontSize:11, fontWeight:700, background:badge.bg, border:`1px solid ${badge.border}`, color:badge.color, padding:'2px 10px', borderRadius:99 }}>
                {badge.label}
              </span>
            </div>
            {d.liveUrl && (
              <div className="meta-row">
                <span className="meta-k">Live URL</span>
                <a href={d.liveUrl} target="_blank" rel="noopener" className="meta-link">
                  {d.liveUrl} <ArrowUpRight size={12} />
                </a>
              </div>
            )}
            {d.figmaUrl && (
              <div className="meta-row">
                <span className="meta-k">Figma</span>
                <a href={d.figmaUrl} target="_blank" rel="noopener" className="meta-link">
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
        <p className="section-desc">{d.description}</p>
      </section>

      {/* Features */}
      <section className="ps">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          {d.features.map((f: any) => (
            <div key={f.title} className="feature-card">
              <div className="ficon">
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
        <p style={{ fontSize:13, color:'var(--color-text-muted)', marginBottom:16 }}>
          Upload screenshots in Sanity Studio using the Figma naming convention: <code style={{ fontSize:12, background:'var(--color-bg-subtle)', padding:'1px 6px', borderRadius:4 }}>Module - Screen - State</code>
        </p>
        <div className="screens-grid">
          {d.screenshots
            ? d.screenshots.map((s: any, i: number) => (
                <div key={i} className="screen-card">
                  <Image src={s.url} alt={s.caption || `Screen ${i+1}`} width={400} height={280} style={{ width:'100%', height:'auto', display:'block' }} />
                  {s.caption && <div className="screen-caption">{s.caption}</div>}
                </div>
              ))
            : STATIC.screenshots.map(label => (
                <div key={label} className="screen-ph">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span>{label}</span>
                  <span style={{ fontSize:10, color:'var(--color-text-muted)', fontWeight:400 }}>Upload in Studio</span>
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
        .identity-meta { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .meta-row { display: flex; align-items: flex-start; gap: 16px; padding: 11px 16px; border-bottom: 1px solid var(--color-border); }
        .meta-row:last-child { border-bottom: none; }
        .meta-k { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:.06em; color:var(--color-text-muted); min-width:100px; flex-shrink:0; padding-top:1px; }
        .meta-v { font-size:13px; color:var(--color-text-secondary); line-height:1.5; }
        .meta-link { display:inline-flex; align-items:center; gap:4px; font-size:13px; color:var(--color-primary); font-weight:600; text-decoration:none; }
        .meta-link:hover { text-decoration:underline; }
        .features-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
        .feature-card { display:flex; align-items:flex-start; gap:12px; padding:16px; border:1.5px solid var(--color-border); border-radius:10px; background:var(--color-bg-raised); }
        .ficon { width:36px; height:36px; background:#EFF4FF; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .feature-title { font-size:13px; font-weight:600; color:var(--color-text); margin-bottom:3px; }
        .feature-desc { font-size:12px; color:var(--color-text-secondary); line-height:1.5; }
        .color-row { display:flex; gap:12px; }
        .prod-swatch { text-align:center; }
        .screens-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; }
        .screen-ph { border:2px dashed var(--color-border); border-radius:10px; min-height:130px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:7px; background:var(--color-bg-subtle); font-size:11.5px; font-weight:600; color:var(--color-text-secondary); text-align:center; padding:14px; line-height:1.4; }
        .screen-card { border-radius:10px; overflow:hidden; border:1.5px solid var(--color-border); }
        .screen-caption { font-size:11px; font-weight:600; color:var(--color-text-muted); padding:7px 12px; background:var(--color-bg-subtle); }
      `}</style>
    </div>
  )
}