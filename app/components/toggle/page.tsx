'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { DosDonts } from '@/components/docs/DosDonts'

const dos = ['Use toggles for immediate on/off settings that take effect without a save button.','Always show the current state clearly — on the right side, with colour reinforcing state.','Label the setting being toggled, not the action — "Dark mode" not "Enable dark mode".','Animate the thumb sliding between states (200ms ease).']
const donts = ["Don't use a toggle where the change requires a form submit — use a checkbox instead.","Don't use toggle for mutually exclusive choices — use radio buttons.","Don't change the toggle size — 44×24px is the standard across SS products.","Don't label toggles with On/Off text inside the track — the colour communicates state."]

export default function TogglePage() {
  const [states, setStates] = useState<Record<string,boolean>>({ require2fa: true, notifications: false, reenter: false })
  const toggle = (key: string) => setStates(p => ({...p, [key]: !p[key]}))
  return (
    <div>
      <PageHeader section="Components / Forms" title="Toggle / Switch" status="stable"
        description="Toggles control binary on/off settings. Used in Change Password (re-enter on all devices) and throughout Settings pages across SS products." />

      <section className="cs">
        <h3 className="ct">States</h3>
        <div className="demo-area">
          <div className="tg-row"><span className="tg-label">Off (default)</span><div className="tg off"><div className="thumb" /></div></div>
          <div className="tg-row"><span className="tg-label">On</span><div className="tg on"><div className="thumb on" /></div></div>
          <div className="tg-row"><span className="tg-label">Disabled off</span><div className="tg off disabled"><div className="thumb" /></div></div>
          <div className="tg-row"><span className="tg-label">Disabled on</span><div className="tg on disabled"><div className="thumb on" /></div></div>
        </div>
      </section>

      <section className="cs">
        <h3 className="ct">Settings list — live demo</h3>
        <div className="settings-list">
          {[
            { key:'require2fa',    label:'Require 2FA on login',                              desc:'All users must complete two-factor authentication.' },
            { key:'notifications', label:'Email notifications',                               desc:'Receive alerts for new transactions and account activity.' },
            { key:'reenter',       label:'Require all logged in devices to re-enter password',desc:'Applied after a password change.' },
          ].map(s => (
            <div key={s.key} className="setting-row" onClick={() => toggle(s.key)}>
              <div>
                <div className="setting-label">{s.label}</div>
                <div className="setting-desc">{s.desc}</div>
              </div>
              <div className={`tg ${states[s.key]?'on':'off'}`} style={{flexShrink:0}}>
                <div className={`thumb ${states[s.key]?'on':''}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <DosDonts dos={dos} donts={donts} />

      <style jsx>{`
        .cs { margin-bottom: 40px; }
        .ct { font-size: 15px; font-weight: 600; color: var(--color-text); margin-bottom: 12px; }
        .demo-area { display: flex; flex-wrap: wrap; gap: 24px; padding: 24px; background: var(--color-bg-subtle); border: 1.5px solid var(--color-border); border-radius: 12px; }
        .tg-row { display: flex; align-items: center; gap: 10px; }
        .tg-label { font-size: 13px; color: var(--color-text-secondary); min-width: 100px; }
        .tg { width: 44px; height: 24px; border-radius: 99px; position: relative; cursor: pointer; transition: background .2s; flex-shrink: 0; }
        .tg.on  { background: var(--color-primary); }
        .tg.off { background: #D1D5DB; }
        .tg.disabled { opacity: .45; cursor: not-allowed; }
        .thumb { width: 18px; height: 18px; border-radius: 50%; background: white; position: absolute; top: 3px; left: 3px; box-shadow: 0 1px 3px rgba(0,0,0,.2); transition: transform .2s ease; }
        .thumb.on { transform: translateX(20px); }
        .settings-list { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .setting-row { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 16px 20px; border-bottom: 1px solid var(--color-border); cursor: pointer; transition: background .1s; }
        .setting-row:last-child { border-bottom: none; }
        .setting-row:hover { background: var(--color-bg-subtle); }
        .setting-label { font-size: 13.5px; font-weight: 600; color: var(--color-text); margin-bottom: 3px; }
        .setting-desc { font-size: 12.5px; color: var(--color-text-muted); line-height: 1.5; }
      `}</style>
    </div>
  )
}
