'use client'
import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'

const dos = [
  'Use dividers to separate logically distinct groups of content.',
  'Use horizontal dividers between form sections and vertical dividers in nav headers.',
  'Keep divider colour subtle — var(--color-border) is always the right choice.',
  'Use spacing around dividers consistently — at least 16px on each side.',
]
const donts = [
  "Don't use dividers between every item in a list — use spacing instead.",
  "Don't make dividers thicker than 1px except for section-level separators.",
  "Don't use dividers as decorative elements — they should always separate content.",
  "Don't use a different colour for dividers than var(--color-border).",
]

export default function DividerPage() {
  return (
    <div>
      <PageHeader section="Components / Layout" title="Divider" status="stable"
        description="A thin line used to separate content groups. Used between form sections, sidebar sections, and the user profile area at the bottom of the sidebar." />

      <ComponentPreview title="Horizontal"
        code={`<hr className="ss-divider" />`}>
        <div style={{ width:'100%', display:'flex', flexDirection:'column', gap:16 }}>
          <div style={{ fontSize:13, color:'var(--color-text-secondary)' }}>Personal Details</div>
          <hr style={{ border:'none', borderTop:'1px solid var(--color-border)', margin:'4px 0' }} />
          <div style={{ fontSize:13, color:'var(--color-text-secondary)' }}>Organisation Details</div>
        </div>
      </ComponentPreview>

      <ComponentPreview title="With label"
        description="Used to separate major sections with a category label."
        code={`<Divider label="Or continue with" />`}>
        <div style={{ width:'100%', display:'flex', alignItems:'center', gap:12 }}>
          <hr style={{ flex:1, border:'none', borderTop:'1px solid var(--color-border)' }} />
          <span style={{ fontSize:12, fontWeight:600, color:'var(--color-text-muted)', whiteSpace:'nowrap' }}>Or continue with email</span>
          <hr style={{ flex:1, border:'none', borderTop:'1px solid var(--color-border)' }} />
        </div>
      </ComponentPreview>

      <ComponentPreview title="Vertical"
        description="Used in top bars and stat card rows."
        code={`<div className="vertical-divider" />`}>
        <div style={{ display:'flex', alignItems:'center', gap:20, height:48 }}>
          <span style={{ fontSize:13, color:'var(--color-text-secondary)' }}>Dashboard</span>
          <div style={{ width:1, height:'100%', background:'var(--color-border)' }} />
          <span style={{ fontSize:13, color:'var(--color-text-secondary)' }}>Analytics</span>
          <div style={{ width:1, height:'100%', background:'var(--color-border)' }} />
          <span style={{ fontSize:13, color:'var(--color-text-secondary)' }}>Reports</span>
        </div>
      </ComponentPreview>

      <DosDonts dos={dos} donts={donts} />
    </div>
  )
}
