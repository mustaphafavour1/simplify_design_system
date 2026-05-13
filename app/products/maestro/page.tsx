import { PageHeader } from '@/components/docs/PageHeader'
import { PhosphorIcon } from '@/lib/icons'
import { getProductBySlug, urlFor } from '@/lib/sanity'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export const revalidate = 0

const STATIC = {
  tagline: 'Smarter Finance, Smarter You.',
  description: "Maestro MFB is a mobile-first microfinance bank — designed around the idea that banking should be smarter, not harder. CBN Regulated, NDIC Insured, and NDPR Compliant.",
  liveUrl: null as string | null,
  figmaUrl: null as string | null,
  status: 'live',
  meta: [
    { key: 'Type',       value: 'Mobile App (iOS & Android) + Web' },
    { key: 'Regulation', value: 'CBN Regulated · NDIC Insured · NDPR Compliant' },
    { key: 'Category',   value: 'Microfinance Bank (MFB)' },
    { key: 'Audience',   value: 'Individuals — personal banking and savings' },
  ],
  features: [
    { iconName: 'CreditCard',       title: 'Account & Balance',   description: 'View total balance, account number, and recent activity at a glance.' },
    { iconName: 'ArrowsLeftRight',  title: 'Transfers',           description: 'Send money to other accounts instantly via NIBSS interbank.' },
    { iconName: 'Coins',            title: 'Save',                description: 'Built-in savings features to help users grow their money.' },
    { iconName: 'Download',         title: 'Add Funds',           description: 'Top up via card, bank transfer, or USSD.' },
    { iconName: 'ClipboardText',    title: 'Transaction History', description: 'Filterable log of all inflows and outflows with timestamps.' },
    { iconName: 'Bell',             title: 'Notifications',       description: 'Real-time push notifications for every account activity.' },
  ],
  colours: [
    { name: 'Maestro Blue', hex: '#0D2860' },
    { name: 'Purple',       hex: '#6B52D9' },
    { name: 'White',        hex: '#FFFFFF' },
  ],
  screenshots: ['Home - Overview','Send Money - Empty','Send Money - Filled','Transaction History - Filled','Transaction Details','Profile - Overview'],
}

const STATUS_MAP: Record<string, { label: string; bg: string; border: string; color: string }> = {
  live:      { label: 'Live',      bg: '#F0FDF4', border: '#BBF7D0', color: '#16A34A' },
  delivered: { label: 'Delivered', bg: '#EFF6FF', border: '#BFDBFE', color: '#1E40AF' },
  beta:      { label: 'Beta',      bg: '#FFFBEB', border: '#FDE68A', color: '#92400E' },
  internal:  { label: 'Internal',  bg: '#F5F3FF', border: '#DDD6FE', color: '#6D28D9' },
}

export default async function MaestroPage() {
  const sanity = await getProductBySlug('maestro')
  if (sanity && sanity.showOnSite === false) return notFound()
  const d = {
    tagline:     sanity?.tagline     || STATIC.tagline,
    description: sanity?.description || STATIC.description,
    liveUrl:     sanity?.liveUrl     || STATIC.liveUrl,
    figmaUrl:    sanity?.figmaUrl    || STATIC.figmaUrl,
    status:      sanity?.status      || STATIC.status,
    meta:        sanity?.meta?.length     ? sanity.meta     : STATIC.meta,
    features:    sanity?.features?.length ? sanity.features : STATIC.features,
    logo:        sanity?.logo || null,
    colours:     sanity?.colours?.length ? sanity.colours : STATIC.colours,
    screenshots: sanity?.screenshots?.length ? sanity.screenshots : null,
  }
  const badge = STATUS_MAP[d.status] ?? STATUS_MAP.live

  return (
    <div>
      <PageHeader section="Products" title="Maestro MFB" description={d.tagline} />

      {(d.liveUrl || d.figmaUrl) && (
        <div className="prod-header-actions">
          {d.liveUrl && (
            <a href={d.liveUrl} target="_blank" rel="noopener" className="prod-live-btn">
              Visit Maestro MFB <ArrowUpRight size={15} />
            </a>
          )}
          {d.figmaUrl && (
            <a href={d.figmaUrl} target="_blank" rel="noopener" className="prod-figma-btn">
              Open Figma file <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      )}

      <section className="prod-section">
        <div className="prod-identity-row">
          <div className="prod-logo-block" style={{ background: 'linear-gradient(135deg, #0D2860, #6B52D9)' }}>
            {d.logo
              ? <Image src={urlFor(d.logo).width(200).url()} alt="Maestro MFB" width={160} height={48} style={{ objectFit: 'contain' }} />
              : <div className="prod-logo-ph">
                  <span style={{ color: 'white', fontSize: 20, fontWeight: 800 }}>Maestro MFB</span>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,.35)' }}>Upload logo in Studio</span>
                </div>
            }
          </div>
          <div className="prod-meta-table">
            {d.meta.map((r: any) => (
              <div key={r.key} className="prod-meta-row">
                <span className="prod-meta-k">{r.key}</span>
                <span className="prod-meta-v">{r.value}</span>
              </div>
            ))}
            <div className="prod-meta-row">
              <span className="prod-meta-k">Status</span>
              <span className="prod-status-badge" style={{ background: badge.bg, border: `1px solid ${badge.border}`, color: badge.color }}>{badge.label}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="prod-section">
        <h2 className="prod-section-title">What Maestro MFB does</h2>
        <p className="prod-section-desc">{d.description}</p>
      </section>

      <section className="prod-section">
        <h2 className="prod-section-title">Features</h2>
        <div className="prod-features-grid">
          {d.features.map((f: any) => (
            <div key={f.title} className="prod-feature-card">
              <div className="prod-feature-icon" style={{ background: '#EEF2FF' }}>
                <PhosphorIcon name={f.iconName} size={20} weight="duotone" color="#0D2860" />
              </div>
              <div>
                <div className="prod-feature-title">{f.title}</div>
                <div className="prod-feature-desc">{f.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="prod-section">
        <h2 className="prod-section-title">Product colours</h2>
        <div className="prod-color-row">
          {d.colours.map(c => (
            <div key={c.name} className="prod-swatch">
              <div className="prod-swatch-block" style={{ background: c.hex, border: c.hex === '#FFFFFF' ? '1.5px solid var(--color-border)' : 'none' }} />
              <div className="prod-swatch-name">{c.name}</div>
              <code className="prod-swatch-hex">{c.hex}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="prod-section">
        <h2 className="prod-section-title">Key screens</h2>
        <div className="prod-screens-grid">
          {d.screenshots
            ? d.screenshots.map((s: any, i: number) => (
                <div key={i} className="prod-screen-card">
                  <Image src={s.url} alt={s.caption || `Screen ${i + 1}`} width={400} height={280} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  {s.caption && <div className="prod-screen-caption">{s.caption}</div>}
                </div>
              ))
            : STATIC.screenshots.map(label => (
                <div key={label} className="prod-screen-ph">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                  <span>{label}</span>
                  <span style={{ fontSize: 10, color: 'var(--color-text-muted)', fontWeight: 400 }}>Upload in Studio</span>
                </div>
              ))
          }
        </div>
      </section>
    </div>
  )
}