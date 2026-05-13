import { PageHeader } from '@/components/docs/PageHeader'
import { getBrandSettings, urlFor } from '@/lib/sanity'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

export const revalidate = 0

export default async function LogoPage() {
  const brand = await getBrandSettings()

  const logoVariants = [
    { label: 'Primary logo',        field: brand?.logoPrimary,    bg: '#FFFFFF', border: true,  note: 'Default — use on white or light backgrounds.' },
    { label: 'White / reversed',    field: brand?.logoWhite,      bg: '#0D0820', border: false, note: 'Use on dark or primary-coloured backgrounds.' },
    { label: 'Dark logo',           field: brand?.logoDark,       bg: '#F0EEF9', border: false, note: 'Use on coloured or mid-tone backgrounds.' },
    { label: 'Logo mark',           field: brand?.logoMark,       bg: '#FFFFFF', border: true,  note: 'Icon only — for favicons, app icons, and small sizes.' },
    { label: 'Logo mark — white',   field: brand?.logomarkWhite,  bg: '#0D0820', border: false, note: 'White mark for dark backgrounds.' },
  ]

  return (
    <div>
      <PageHeader section="Brand" title="Logo"
        description="The Simplify Synergy logo system — all variants, usage rules, and download links." />

      {/* Live link + Figma */}
      {(brand?.websiteUrl || brand?.figmaUrl) && (
        <div style={{ display:'flex', gap:10, marginBottom:32, flexWrap:'wrap' }}>
          {brand.websiteUrl && (
            <a href={brand.websiteUrl} target="_blank" rel="noopener" className="prod-live-btn">
              Visit Simplify Synergy <ArrowUpRight size={15} />
            </a>
          )}
          {brand.figmaUrl && (
            <a href={brand.figmaUrl} target="_blank" rel="noopener" className="prod-figma-btn">
              Open Brand Figma file <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      )}

      {/* Logo variants */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize:'1.125rem', fontWeight:600, color:'var(--color-text)', marginBottom:16 }}>Logo variants</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
          {logoVariants.map(v => (
            <div key={v.label} style={{ border:'1.5px solid var(--color-border)', borderRadius:12, overflow:'hidden' }}>
              <div style={{ background:v.bg, height:140, display:'flex', alignItems:'center', justifyContent:'center', padding:24, border: v.border ? 'none' : undefined }}>
                {v.field
                  ? <Image src={urlFor(v.field).width(280).url()} alt={v.label} width={200} height={80} style={{ objectFit:'contain', maxHeight:80 }} />
                  : <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={v.bg === '#0D0820' ? 'rgba(255,255,255,.2)' : 'var(--color-border-strong)'} strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                      <span style={{ fontSize:11, color: v.bg === '#0D0820' ? 'rgba(255,255,255,.3)' : 'var(--color-text-muted)', textAlign:'center' }}>Upload in Studio →{'\n'}Brand Settings</span>
                    </div>
                }
              </div>
              <div style={{ padding:'12px 14px', background:'var(--color-bg-raised)' }}>
                <div style={{ fontSize:13, fontWeight:700, color:'var(--color-text)', marginBottom:3 }}>{v.label}</div>
                <div style={{ fontSize:12, color:'var(--color-text-muted)', lineHeight:1.5 }}>{v.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage rules */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize:'1.125rem', fontWeight:600, color:'var(--color-text)', marginBottom:16 }}>Usage rules</h2>
        <div style={{ border:'1.5px solid var(--color-border)', borderRadius:12, overflow:'hidden', background:'var(--color-bg-raised)' }}>
          {[
            { rule: 'Minimum size',       spec: '24px height for the logo mark. 80px height for the full logo. Never smaller.' },
            { rule: 'Clear space',        spec: 'Always maintain clear space equal to the height of the "S" mark on all sides.' },
            { rule: 'Backgrounds',        spec: 'Use primary logo on white and light backgrounds. Use white logo on dark and primary-colour backgrounds.' },
            { rule: 'Do not distort',     spec: 'Never stretch, skew, or change the logo proportions. Scale proportionally only.' },
            { rule: 'Do not recolour',    spec: 'Never change the logo colours. Use the approved variants only.' },
            { rule: 'Do not add effects', spec: 'No drop shadows, glows, gradients, or outlines on the logo.' },
          ].map(r => (
            <div key={r.rule} style={{ display:'flex', gap:20, padding:'12px 20px', borderBottom:'1px solid var(--color-border)', fontSize:13 }}>
              <span style={{ fontWeight:700, color:'var(--color-text)', minWidth:140, flexShrink:0 }}>{r.rule}</span>
              <span style={{ color:'var(--color-text-secondary)', lineHeight:1.6 }}>{r.spec}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}