import { PageHeader } from '@/components/docs/PageHeader'
import { PhosphorIcon } from '@/lib/icons'
import { getProductBySlug, urlFor } from '@/lib/sanity'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export const revalidate = 0

const STATIC = {
  tagline: 'Internal compliance API management platform.',
  description: "An internal B2B platform for Simplify Synergy staff to manage compliance API integrations across all SS products — BVN verification, identity checks, KYC workflows, and user access control across multiple subsidiaries.",
  liveUrl: null as string | null,
  figmaUrl: null as string | null,
  status: 'internal',
  meta: [
    { key: 'Type',     value: 'Internal web application' },
    { key: 'Audience', value: 'Simplify Synergy staff only — not public-facing' },
    { key: 'Purpose',  value: 'Manage compliance APIs and KYC workflows across SS products' },
    { key: 'Products', value: 'Maestro MFB, VoxePay, and other SS subsidiaries' },
  ],
  features: [
    { iconName: 'PlugsConnected', title: 'API Integrations',  description: 'Manage third-party compliance providers — BVN, NIN, CAC, AML screening.' },
    { iconName: 'Users',          title: 'User Management',   description: 'Create and manage users across subsidiaries. Assign roles and permissions.' },
    { iconName: 'ChartBar',       title: 'Costs & Usage',     description: 'Monitor API consumption and costs per product/subsidiary.' },
    { iconName: 'Gear',           title: 'Workflows',         description: 'Configure compliance workflows and automated processes.' },
    { iconName: 'ChartLine',      title: 'Analytics & Logs',  description: 'Audit trail of all compliance checks and API calls.' },
    { iconName: 'Buildings',      title: 'Multi-subsidiary',  description: 'Manage multiple SS products from a single compliance dashboard.' },
  ],
  colours: [
    { name: 'Compliance Purple', hex: '#6B52D9' },
    { name: 'Navy',              hex: '#1A1464' },
    { name: 'White',             hex: '#FFFFFF' },
  ],
  screenshots: ['Login - Empty','Login - Filled','Dashboard - Overview','User Management - Empty','User Management - Filled','User Management - Create New User - Empty','User Management - Create New User - Filled','User Management - Add New Product - Empty'],
}

const STATUS_MAP: Record<string, { label: string; bg: string; border: string; color: string }> = {
  live:      { label: 'Live',      bg: '#F0FDF4', border: '#BBF7D0', color: '#16A34A' },
  delivered: { label: 'Delivered', bg: '#EFF6FF', border: '#BFDBFE', color: '#1E40AF' },
  beta:      { label: 'Beta',      bg: '#FFFBEB', border: '#FDE68A', color: '#92400E' },
  internal:  { label: 'Internal',  bg: '#F5F3FF', border: '#DDD6FE', color: '#6D28D9' },
}

export default async function CompliancePage() {
  const sanity = await getProductBySlug('compliance')
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
  const badge = STATUS_MAP[d.status] ?? STATUS_MAP.internal

  return (
    <div>
      <PageHeader section="Products" title="Simplify Compliance Engine" description={d.tagline} />

      {(d.liveUrl || d.figmaUrl) && (
        <div className="prod-header-actions">
          {d.liveUrl && (
            <a href={d.liveUrl} target="_blank" rel="noopener" className="prod-live-btn">
              Open Compliance Engine <ArrowUpRight size={15} />
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
          <div className="prod-logo-block" style={{ background: 'linear-gradient(135deg, #1A1464, #6B52D9)' }}>
            {d.logo
              ? <Image src={urlFor(d.logo).width(200).url()} alt="Compliance Engine" width={160} height={48} style={{ objectFit: 'contain' }} />
              : <div className="prod-logo-ph">
                  <span style={{ color: 'white', fontSize: 13, fontWeight: 800, letterSpacing: '.02em', textAlign: 'center', lineHeight: 1.5 }}>SIMPLIFY COMPLIANCE ENGINE</span>
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
        <h2 className="prod-section-title">What the Compliance Engine does</h2>
        <p className="prod-section-desc">{d.description}</p>
      </section>

      <section className="prod-section">
        <h2 className="prod-section-title">Features</h2>
        <div className="prod-features-grid">
          {d.features.map((f: any) => (
            <div key={f.title} className="prod-feature-card">
              <div className="prod-feature-icon" style={{ background: '#F0EDFB' }}>
                <PhosphorIcon name={f.iconName} size={20} weight="duotone" color="#6B52D9" />
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
          {d.colours.map((c: any) => (
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