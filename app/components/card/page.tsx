'use client'
import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { ArrowRight } from '@phosphor-icons/react'

const dos = [
  'Use --radius-lg (12px) for cards — consistent with all SS dashboards.',
  'Use --shadow-md for elevated/interactive cards. Flat cards get border only.',
  'Keep card padding at 20px or 24px — never less than 16px.',
  'Group related information inside one card. One card = one concept.',
]
const donts = [
  "Don't nest cards inside cards.",
  "Don't use more than one primary action per card.",
  "Don't use different border radii for cards on the same page.",
  "Don't add decorative elements inside cards — keep them clean and data-focused.",
]

export default function CardPage() {
  return (
    <div>
      <PageHeader section="Components / Layout" title="Card" status="stable"
        description="The primary surface container across all SS dashboards. Wraps stat cards, form sections, table areas, and content groups. Consistent radius and shadow." />

      <ComponentPreview title="Default card"
        code={`<Card>\n  <h3>User Details</h3>\n  <p>Kindly specify the details of the user to be created</p>\n</Card>`}>
        <div className="ss-card" style={{ width:'100%', maxWidth:440 }}>
          <div style={{ fontSize:16, fontWeight:700, color:'var(--color-text)', marginBottom:4 }}>User Details</div>
          <div style={{ fontSize:13, color:'var(--color-text-muted)' }}>Kindly specify the details of the user to be created</div>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Stat card"
        description="Compact card variant used at the top of dashboard pages."
        code={`<StatCard label="Total Collections" value="₦122,210,120,345.05" />`}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10, width:'100%' }}>
          {[
            { label:'Total Collections',   value:'₦122,210,120,345.05' },
            { label:'Successful',          value:'0' },
            { label:'Failed',              value:'0' },
          ].map(s => (
            <div key={s.label} className="ss-card" style={{ padding:'14px 16px' }}>
              <div style={{ fontSize:11, color:'var(--color-text-muted)', marginBottom:8 }}>{s.label}</div>
              <div style={{ fontSize:'1.1rem', fontWeight:700, color:'var(--color-text)', fontFamily:'Poppins, sans-serif' }}>{s.value}</div>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview title="Clickable card"
        description="Cards that navigate to a detail view — used in the design system overview grid."
        code={`<Card href="/components/button" clickable>\n  <h3>Button</h3>\n  <p>Primary action component</p>\n</Card>`}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:10, width:'100%' }}>
          {['Button','Text Input'].map(name => (
            <div key={name} className="ss-card ss-card-hover" style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'var(--color-text)', marginBottom:3 }}>{name}</div>
                <div style={{ fontSize:12, color:'var(--color-text-muted)' }}>Actions / Form</div>
              </div>
              <ArrowRight size={16} color="var(--color-text-muted)" />
            </div>
          ))}
        </div>
      </ComponentPreview>

      <DosDonts dos={dos} donts={donts} />

      <style jsx global>{`
        .ss-card { background: var(--color-bg-raised); border: 1.5px solid var(--color-border); border-radius: 12px; padding: 20px; }
        .ss-card-hover { cursor: pointer; transition: all .15s; text-decoration: none; display: flex; }
        .ss-card-hover:hover { border-color: var(--color-primary); box-shadow: 0 4px 16px rgba(151,83,232,.1); transform: translateY(-1px); }
      `}</style>
    </div>
  )
}
