'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { Info, Gear, Bell } from '@phosphor-icons/react'

const dos = [
  'Use tooltips to reveal the label of icon-only buttons on hover.',
  'Keep tooltip text to one short sentence — maximum 10 words.',
  'Show tooltip on hover (200ms delay) and on keyboard focus.',
  'Position tooltip to avoid clipping at screen edges.',
]
const donts = [
  "Don't put interactive content (links, buttons) inside a tooltip.",
  "Don't use tooltips for critical information — it must always be visible.",
  "Don't show tooltips on mobile — use a label or bottom sheet instead.",
  "Don't use tooltips as the only way to understand an element's purpose.",
]

function Tooltip({ label, children }: { label: string; children: React.ReactNode }) {
  const [show, setShow] = useState(false)
  return (
    <div style={{ position:'relative', display:'inline-flex' }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div style={{ position:'absolute', bottom:'calc(100% + 6px)', left:'50%', transform:'translateX(-50%)', background:'#17102E', color:'white', fontSize:12, fontWeight:500, padding:'5px 10px', borderRadius:6, whiteSpace:'nowrap', pointerEvents:'none', zIndex:100, boxShadow:'0 4px 12px rgba(0,0,0,.2)' }}>
          {label}
          <div style={{ position:'absolute', top:'100%', left:'50%', transform:'translateX(-50%)', width:0, height:0, borderLeft:'5px solid transparent', borderRight:'5px solid transparent', borderTop:'5px solid #17102E' }} />
        </div>
      )}
    </div>
  )
}

export default function TooltipPage() {
  return (
    <div>
      <PageHeader section="Components / Feedback" title="Tooltip" status="stable"
        description="Floating labels that appear on hover or focus. Used primarily to label icon-only buttons and provide supplementary context for form fields." />

      <ComponentPreview title="Icon button tooltips — hover to see"
        code={`<Tooltip label="Settings">\n  <IconButton icon={<Gear />} />\n</Tooltip>`}>
        <div style={{ display:'flex', gap:16, padding:'24px 0' }}>
          {[
            { Icon: Gear,  label: 'Settings' },
            { Icon: Bell,  label: 'Notifications' },
            { Icon: Info,  label: 'More information' },
          ].map(({ Icon, label }) => (
            <Tooltip key={label} label={label}>
              <button className="ib ib-ghost" aria-label={label}>
                <Icon size={18} />
              </button>
            </Tooltip>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview title="Positions" description="Tooltip automatically repositions to avoid clipping."
        code={`<Tooltip position="top" label="Top tooltip">…</Tooltip>\n<Tooltip position="bottom" label="Bottom tooltip">…</Tooltip>`}>
        <div style={{ display:'flex', gap:32, padding:'32px 0' }}>
          {['Top', 'Right aligned'].map(pos => (
            <Tooltip key={pos} label={`${pos} tooltip`}>
              <button className="ss-btn ss-btn-secondary" style={{ fontSize:13 }}>{pos}</button>
            </Tooltip>
          ))}
        </div>
      </ComponentPreview>

      <DosDonts dos={dos} donts={donts} />
    </div>
  )
}
