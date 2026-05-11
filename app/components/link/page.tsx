'use client'
import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react'

const dos = [
  'Use descriptive link text — "View transaction details" not "Click here".',
  'Use ArrowUpRight icon for external links so users know they are leaving the product.',
  'Underline links inside body text — never rely on colour alone.',
  'Use the primary brand colour consistently for all links within a product.',
]
const donts = [
  "Don't use links for actions that change data — use a Button instead.",
  "Don't open internal links in a new tab — only external links.",
  "Don't make links look like buttons or buttons look like links.",
  "Don't use vague labels — 'Learn more' is acceptable only when context is clear.",
]

export default function LinkPage() {
  return (
    <div>
      <PageHeader section="Components / Actions" title="Link" status="stable"
        description="Text links for navigation — inline within body text, standalone, and external. Consistent colour and underline treatment across all SS products." />

      <ComponentPreview title="Variants"
        code={`<a href="#">Internal link</a>\n<a href="#" className="link-standalone">View all transactions <ArrowRight /></a>\n<a href="#" target="_blank">External link <ArrowUpRight /></a>`}>
        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          <p style={{ fontSize:14, color:'var(--color-text-secondary)', lineHeight:1.7 }}>
            Your transfer of ₦50,000.00 has been processed. <a className="ss-link" href="#">View transaction details</a> to see the full breakdown.
          </p>
          <div style={{ display:'flex', gap:24, flexWrap:'wrap' }}>
            <a className="ss-link-standalone" href="#">
              View all transactions <ArrowRight size={14} weight="bold" />
            </a>
            <a className="ss-link-standalone" href="#" target="_blank" rel="noopener">
              Open in Figma <ArrowUpRight size={14} weight="bold" />
            </a>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Colours per product"
        description="Links use the primary colour of the product they appear in."
        code={`// VoxePay / Maestro / Compliance\n<a style={{ color: '#1B56F4' }}>VoxePay link</a>\n// Simplify DS\n<a style={{ color: '#9753E8' }}>Design system link</a>`}>
        <div style={{ display:'flex', gap:32, flexWrap:'wrap' }}>
          {[
            { product:'VoxePay / Maestro', color:'#1B56F4' },
            { product:'Compliance Engine', color:'#6B52D9' },
            { product:'Design System',     color:'#9753E8' },
          ].map(p => (
            <div key={p.product} style={{ display:'flex', flexDirection:'column', gap:4 }}>
              <span style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.06em', color:'var(--color-text-muted)' }}>{p.product}</span>
              <a href="#" style={{ color:p.color, fontSize:14, fontWeight:600, textDecoration:'underline', textUnderlineOffset:3 }}>View details</a>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <DosDonts dos={dos} donts={donts} />

      <style jsx global>{`
        .ss-link { color: var(--color-primary); font-weight: 600; text-decoration: underline; text-underline-offset: 3px; transition: opacity .15s; }
        .ss-link:hover { opacity: .75; }
        .ss-link-standalone { display: inline-flex; align-items: center; gap: 5px; color: var(--color-primary); font-size: 13.5px; font-weight: 600; text-decoration: none; transition: gap .15s; }
        .ss-link-standalone:hover { gap: 8px; }
      `}</style>
    </div>
  )
}
