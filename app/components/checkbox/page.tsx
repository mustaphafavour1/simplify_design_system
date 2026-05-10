'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { DosDonts } from '@/components/docs/DosDonts'

const dos = ['Always pair a checkbox with a visible, clickable label.','Use indeterminate state when some (not all) children are checked.','Use checkboxes for multi-select lists. Use a toggle for on/off settings.','Group related checkboxes visually. Max 6–7 per group before using a multi-select.']
const donts = ["Don't use a checkbox for a single binary setting — use a Toggle.","Don't rely on the checkbox border alone to show error state — add a red label too.","Don't make checkboxes smaller than 16×16px.","Don't stack checkboxes horizontally when there are more than 3."]

export default function CheckboxPage() {
  const [checked, setChecked] = useState<string[]>(['remember'])
  const toggle = (v: string) => setChecked(p => p.includes(v) ? p.filter(x => x!==v) : [...p, v])
  return (
    <div>
      <PageHeader section="Components / Forms" title="Checkbox" status="stable"
        description="Checkboxes let users select one or more items from a list. Seen on the auth screens (Remember me) and in the Compliance Engine's multi-select patterns." />

      <section className="cs">
        <h3 className="ct">States</h3>
        <div className="demo-area">
          {[
            { id:'unchecked', label:'Unchecked', checked: false, disabled: false },
            { id:'checked',   label:'Checked',   checked: true,  disabled: false },
            { id:'disabled1', label:'Disabled unchecked', checked: false, disabled: true },
            { id:'disabled2', label:'Disabled checked',   checked: true,  disabled: true },
          ].map(s => (
            <label key={s.id} className={`cb-label ${s.disabled?'disabled':''}`}>
              <div className={`cb ${s.checked?'checked':''} ${s.disabled?'disabled':''}`}>
                {s.checked && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>}
              </div>
              {s.label}
            </label>
          ))}
        </div>
      </section>

      <section className="cs">
        <h3 className="ct">Checkbox group</h3>
        <div className="demo-area vertical">
          {['Remember me','Send email notifications','Require 2FA on login','Allow API access'].map(item => (
            <label key={item} className="cb-label" onClick={() => toggle(item)}>
              <div className={`cb ${checked.includes(item)?'checked':''}`}>
                {checked.includes(item) && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>}
              </div>
              {item}
            </label>
          ))}
        </div>
      </section>

      <DosDonts dos={dos} donts={donts} />

      <style jsx>{`
        .cs { margin-bottom: 40px; }
        .ct { font-size: 15px; font-weight: 600; color: var(--color-text); margin-bottom: 12px; }
        .demo-area { display: flex; flex-wrap: wrap; gap: 16px 32px; padding: 24px; background: var(--color-bg-subtle); border: 1.5px solid var(--color-border); border-radius: 12px; }
        .demo-area.vertical { flex-direction: column; gap: 12px; }
        .cb-label { display: flex; align-items: center; gap: 10px; font-size: 13.5px; color: var(--color-text); cursor: pointer; user-select: none; }
        .cb-label.disabled { opacity: .45; cursor: not-allowed; }
        .cb { width: 18px; height: 18px; border-radius: 5px; border: 1.5px solid var(--color-border); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all .15s; background: white; }
        .cb.checked { background: var(--color-primary); border-color: var(--color-primary); }
        .cb.disabled { background: var(--color-bg-subtle); }
        .cb.checked.disabled { background: var(--color-primary); opacity: .5; }
      `}</style>
    </div>
  )
}
