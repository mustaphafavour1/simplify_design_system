'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { PropsTable } from '@/components/docs/PropsTable'
import { DosDonts } from '@/components/docs/DosDonts'

const props = [
  { name: 'label',       type: 'string',           default: '—',     required: false, description: 'Field label above the select.' },
  { name: 'options',     type: 'Option[]',          default: '[]',    required: true,  description: 'Array of { value, label } objects.' },
  { name: 'value',       type: 'string',           default: '—',     required: false, description: 'Controlled value.' },
  { name: 'placeholder', type: 'string',           default: '—',     required: false, description: 'Placeholder when no option is selected.' },
  { name: 'multiple',    type: 'boolean',           default: 'false', required: false, description: 'Allows selecting multiple options (shows chips).' },
  { name: 'error',       type: 'string',           default: '—',     required: false, description: 'Error message — triggers error state.' },
  { name: 'disabled',    type: 'boolean',           default: 'false', required: false, description: 'Disables the select.' },
  { name: 'onChange',    type: '(value) => void',  default: '—',     required: false, description: 'Called when selection changes.' },
]
const dos = ['Use placeholder text that describes what to choose — "Choose one e.g. Product Admin".','Show a caret (▾) on the right side always.','For multi-select, show selected items as removable chips inside the input.','Max 7–8 options before switching to a searchable select.']
const donts = ["Don't use a native <select> element — use the custom component for consistent styling.","Don't leave the placeholder blank — users need context.","Don't use select for binary choices — use a Toggle instead.","Don't truncate option text in the dropdown — let it wrap."]

export default function SelectPage() {
  const [val, setVal] = useState('')
  const [open, setOpen] = useState(false)
  const [multiVal, setMultiVal] = useState(['Maestro MFB'])
  const options = ['Product Admin','Super Admin','Compliance Admin','Viewer']
  return (
    <div>
      <PageHeader section="Components / Forms" title="Select / Dropdown" status="stable"
        description="Select menus allow users to choose from a predefined list. Used extensively in forms — user roles, status filters, product assignment." />

      <section className="cs">
        <h3 className="ct">Default</h3>
        <div className="demo-area">
          <div className="sf">
            <label className="sl">User Role</label>
            <div className="sbox" onClick={() => setOpen(o => !o)}>
              <span style={{color: val ? 'var(--color-text)' : 'var(--color-text-muted)'}}>
                {val || 'Choose One e.g. Product Admin'}
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            {open && (
              <div className="sdropdown">
                {options.map(o => (
                  <div key={o} className={`sopt ${val===o?'selected':''}`} onClick={() => { setVal(o); setOpen(false) }}>
                    {o}
                    {val===o && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="sf">
            <label className="sl">All Status</label>
            <div className="sbox">
              <span style={{color:'var(--color-text-muted)'}}>All Status</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
        </div>
      </section>

      <section className="cs">
        <h3 className="ct">Multi-select with chips</h3>
        <p className="cd">Used for Assigned Subsidiaries and Product Admins in the Compliance Engine.</p>
        <div className="demo-area">
          <div className="sf full">
            <label className="sl">Assigned Subsidiaries <span style={{color:'#DC2626'}}>*</span></label>
            <div className="sbox multi">
              {multiVal.map(v => (
                <span key={v} className="chip">
                  {v}
                  <span className="chip-x" onClick={() => setMultiVal(p => p.filter(x => x !== v))}>×</span>
                </span>
              ))}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginLeft:'auto'}}><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
        </div>
      </section>

      <section className="cs">
        <h3 className="ct">States</h3>
        <div className="demo-area">
          {[
            { label:'Focused', cls:'sbox focused', placeholder:'Product Admin', caret: true },
            { label:'Error',   cls:'sbox error',   placeholder:'Choose a role', caret: true, err:'Please select a user role' },
            { label:'Disabled',cls:'sbox disabled', placeholder:'Not available', caret: true },
          ].map(s => (
            <div key={s.label} className="sf">
              <label className="sl">{s.label}</label>
              <div className={s.cls}>
                <span style={{color:'var(--color-text-muted)'}}>{s.placeholder}</span>
                {s.caret && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>}
              </div>
              {s.err && <div className="serr">{s.err}</div>}
            </div>
          ))}
        </div>
      </section>

      <PropsTable props={props} />
      <DosDonts dos={dos} donts={donts} />

      <style jsx>{`
        .cs { margin-bottom: 40px; }
        .ct { font-size: 15px; font-weight: 600; color: var(--color-text); margin-bottom: 6px; }
        .cd { font-size: 13px; color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 14px; }
        .demo-area { display: flex; gap: 16px; flex-wrap: wrap; padding: 24px; background: var(--color-bg-subtle); border: 1.5px solid var(--color-border); border-radius: 12px; }
        .sf { display: flex; flex-direction: column; gap: 5px; flex: 1; min-width: 180px; position: relative; }
        .sf.full { flex: 1 1 100%; }
        .sl { font-size: 13px; font-weight: 600; color: var(--color-text); }
        .sbox { border: 1.5px solid var(--color-border); border-radius: 8px; padding: 10px 14px; font-size: 13.5px; color: var(--color-text-secondary); display: flex; align-items: center; justify-content: space-between; cursor: pointer; background: white; gap: 8px; transition: all .12s; min-height: 42px; }
        .sbox:hover { border-color: var(--color-primary); }
        .sbox.focused { border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(151,83,232,.12); }
        .sbox.error { border-color: #DC2626; }
        .sbox.disabled { background: var(--color-bg-subtle); cursor: not-allowed; opacity: .6; }
        .sbox.multi { flex-wrap: wrap; gap: 6px; }
        .chip { background: #EFF4FF; border: 1px solid #ADC8FB; color: #1B56F4; font-size: 12px; font-weight: 600; padding: 2px 8px; border-radius: 5px; display: inline-flex; align-items: center; gap: 5px; }
        .chip-x { cursor: pointer; font-size: 15px; line-height: 1; opacity: .7; }
        .sdropdown { position: absolute; top: 100%; left: 0; right: 0; z-index: 50; background: white; border: 1.5px solid var(--color-border); border-radius: 8px; box-shadow: 0 8px 24px rgba(13,8,32,.12); margin-top: 4px; overflow: hidden; }
        .sopt { padding: 10px 14px; font-size: 13.5px; color: var(--color-text-secondary); cursor: pointer; display: flex; align-items: center; justify-content: space-between; transition: background .1s; }
        .sopt:hover { background: var(--color-bg-subtle); }
        .sopt.selected { color: var(--color-primary); font-weight: 600; background: var(--color-primary-faint); }
        .serr { font-size: 12px; font-weight: 600; color: #DC2626; }
      `}</style>
    </div>
  )
}
