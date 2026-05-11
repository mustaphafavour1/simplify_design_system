'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { CaretDown } from '@phosphor-icons/react'

const dos = [
  'Use accordions for FAQ sections and settings categories with many sub-options.',
  'Show a clear caret icon that rotates 180° when open.',
  'Allow only one section open at a time in a settings context.',
  'Keep accordion titles short and scannable — users decide to expand based on the title.',
]
const donts = [
  "Don't use accordions for primary navigation — use the sidebar.",
  "Don't hide critical information in an accordion — it should be visible by default.",
  "Don't use accordions for content shorter than 3 lines — just show it.",
  "Don't animate accordion content longer than 300ms.",
]

const items = [
  { title: 'Personal Information', content: 'Your name, email address, phone number, and profile picture. These details are visible to other users in your organisation.' },
  { title: 'Security Settings',    content: 'Manage your password, two-factor authentication, and active sessions. We recommend enabling 2FA for all accounts.' },
  { title: 'Notification Preferences', content: 'Choose which events trigger email or in-app notifications — transaction alerts, system updates, and security events.' },
  { title: 'API Keys & Integrations',   content: 'Generate and manage API keys for third-party integrations. Rotate keys immediately if you suspect a compromise.' },
]

export default function AccordionPage() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div>
      <PageHeader section="Components / Layout" title="Accordion" status="stable"
        description="Collapsible content sections. Used in Settings pages and FAQ sections across SS products to organise dense information without overwhelming the page." />

      <ComponentPreview title="Settings accordion — single open"
        description="Only one section open at a time. Used in the Settings sidebar sub-navigation pattern."
        code={`<Accordion items={items} singleOpen />`}>
        <div style={{ width:'100%', border:'1.5px solid var(--color-border)', borderRadius:12, overflow:'hidden', background:'var(--color-bg-raised)' }}>
          {items.map((item, i) => (
            <div key={i} style={{ borderBottom: i < items.length-1 ? '1px solid var(--color-border)' : 'none' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 18px', background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-sans)', fontSize:14, fontWeight:600, color:'var(--color-text)', textAlign:'left' }}>
                {item.title}
                <CaretDown size={16} color="var(--color-text-muted)" style={{ transform: open===i ? 'rotate(180deg)' : 'rotate(0)', transition:'transform .2s', flexShrink:0 }} />
              </button>
              {open === i && (
                <div style={{ padding:'0 18px 16px', fontSize:13, color:'var(--color-text-secondary)', lineHeight:1.7 }}>
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </ComponentPreview>

      <DosDonts dos={dos} donts={donts} />
    </div>
  )
}
