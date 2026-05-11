'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { DosDonts } from '@/components/docs/DosDonts'
import { CalendarBlank } from '@phosphor-icons/react'

const dos = [
  'Always display the selected date in DD MMM YYYY format — "04 May 2026".',
  'Show a calendar icon on the right side of the input.',
  'Support manual text entry as well as calendar picker selection.',
  'For date ranges, show start and end inputs side by side.',
]
const donts = [
  "Don't use slashes in displayed dates — use DD MMM YYYY always.",
  "Don't disable past dates by default — only when the context requires future-only input.",
  "Don't show a full calendar widget for date of birth — use three separate dropdowns instead.",
  "Don't auto-submit the form when a date is selected — require explicit submission.",
]

export default function DatePickerPage() {
  const [val, setVal] = useState('')
  return (
    <div>
      <PageHeader section="Components / Forms" title="Date Picker" status="stable"
        description="Allows users to select a date. Used in transaction filtering, report generation, and any form requiring a date input across SS products." />

      <ComponentPreview title="Default"
        code={`<DatePicker label="Transaction Date" placeholder="DD MMM YYYY" />`}>
        <div style={{ display:'flex', flexDirection:'column', gap:6, maxWidth:280 }}>
          <label style={{ fontSize:13, fontWeight:600, color:'var(--color-text)' }}>Transaction Date</label>
          <div style={{ display:'flex', alignItems:'center', border:'1.5px solid var(--color-border)', borderRadius:8, padding:'9px 13px', background:'white', gap:8, cursor:'pointer' }}>
            <input
              style={{ flex:1, border:'none', outline:'none', fontSize:13.5, fontFamily:'var(--font-sans)', color: val ? 'var(--color-text)' : 'var(--color-text-muted)', background:'transparent', cursor:'pointer' }}
              placeholder="DD MMM YYYY" value={val}
              onChange={e => setVal(e.target.value)} />
            <CalendarBlank size={16} color="var(--color-text-muted)" />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Date range — filter pattern"
        description="Used above data tables to filter by date range. Based on the VoxePay Reports and Transactions filter pattern."
        code={`<DateRangePicker startLabel="From" endLabel="To" />`}>
        <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
          {['From', 'To'].map(label => (
            <div key={label} style={{ display:'flex', flexDirection:'column', gap:5 }}>
              <label style={{ fontSize:12, fontWeight:700, color:'var(--color-text-muted)', textTransform:'uppercase', letterSpacing:'.06em' }}>{label}</label>
              <div style={{ display:'flex', alignItems:'center', border:'1.5px solid var(--color-border)', borderRadius:8, padding:'8px 12px', background:'white', gap:8, cursor:'pointer', minWidth:160 }}>
                <input style={{ flex:1, border:'none', outline:'none', fontSize:13, fontFamily:'var(--font-sans)', color:'var(--color-text-muted)', background:'transparent' }} placeholder="DD MMM YYYY" />
                <CalendarBlank size={15} color="var(--color-text-muted)" />
              </div>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <DosDonts dos={dos} donts={donts} />
    </div>
  )
}
