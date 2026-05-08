'use client'
import { PageHeader } from '@/components/docs/PageHeader'

const durations = [
  { token: '--duration-instant', ms: 0,   use: 'No animation — state changes that should feel immediate' },
  { token: '--duration-fast',    ms: 100, use: 'Micro-interactions — hover highlights, active states, icon swaps' },
  { token: '--duration-normal',  ms: 200, use: 'Default — button presses, input focus rings, badge updates' },
  { token: '--duration-medium',  ms: 300, use: 'Modals opening, dropdowns expanding, sidebars collapsing' },
  { token: '--duration-slow',    ms: 500, use: 'Page transitions, skeleton to content, large layout shifts' },
  { token: '--duration-loading', ms: 1400,use: 'Looping animations — skeleton shimmer, spinners' },
]

const easings = [
  { token: '--ease-default',     value: 'cubic-bezier(0.2, 0, 0, 1)',    label: 'Default',   desc: 'Standard motion for most UI interactions. Fast start, gradual deceleration.' },
  { token: '--ease-in',          value: 'cubic-bezier(0.4, 0, 1, 1)',    label: 'Ease In',   desc: 'For elements leaving the screen — modals closing, toasts dismissing.' },
  { token: '--ease-out',         value: 'cubic-bezier(0, 0, 0.2, 1)',    label: 'Ease Out',  desc: 'For elements entering the screen — modals opening, dropdowns appearing.' },
  { token: '--ease-linear',      value: 'linear',                         label: 'Linear',    desc: 'Only for looping animations — spinners, progress bars, shimmer effects.' },
]

export default function MotionPage() {
  return (
    <div>
      <PageHeader section="Foundations" title="Motion"
        description="Motion in SS products is purposeful and restrained. Financial interfaces carry weight — animation should guide attention and confirm actions, never entertain. When in doubt, don't animate." />

      <section className="fs">
        <h2 className="ft">Principles</h2>
        <div className="principles-grid">
          {[
            { title: 'Purposeful',  body: 'Every animation has a job — communicating state change, guiding focus, or confirming an action. If you cannot articulate why something moves, remove the animation.' },
            { title: 'Fast',        body: 'Financial users need to move quickly. Most interactions should animate in 100–200ms. Anything over 300ms requires justification.' },
            { title: 'Respectful',  body: 'Always respect prefers-reduced-motion. Provide static alternatives for users who have disabled motion in their OS settings.' },
            { title: 'Consistent',  body: 'Identical interactions should always feel identical. A button press in VoxePay and a button press in Maestro should feel the same.' },
          ].map(p => (
            <div key={p.title} className="principle-card">
              <div className="p-title">{p.title}</div>
              <div className="p-body">{p.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="fs">
        <h2 className="ft">Duration scale</h2>
        <div className="dur-table">
          <div className="dur-head"><span>Token</span><span>Duration</span><span>Common use</span></div>
          {durations.map(d => (
            <div key={d.token} className="dur-row">
              <code className="dur-tok">{d.token}</code>
              <span className="dur-ms">{d.ms}ms</span>
              <span className="dur-use">{d.use}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="fs">
        <h2 className="ft">Easing curves</h2>
        <p className="fd">Easing defines how an animation accelerates and decelerates. The right easing makes motion feel physical and intentional.</p>
        <div className="ease-grid">
          {easings.map(e => (
            <div key={e.token} className="ease-card">
              <div className="ease-label">{e.label}</div>
              <code className="ease-token">{e.token}</code>
              <div className="ease-vis">
                <div className="ease-dot" style={{ animationTimingFunction: e.value }} />
              </div>
              <div className="ease-desc">{e.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="fs">
        <h2 className="ft">What to animate vs not</h2>
        <div className="anim-grid">
          <div className="anim-col do">
            <div className="anim-header">✓ Animate</div>
            {[
              'Button hover + active state (bg, scale)',
              'Input focus ring appearing',
              'Modal entering/exiting the screen',
              'Dropdown expanding/collapsing',
              'Toast sliding in from bottom-right',
              'Skeleton shimmer while loading',
              'Tab underline sliding to active',
              'Success icon drawing on completion',
            ].map(i => <div key={i} className="anim-item">{i}</div>)}
          </div>
          <div className="anim-col dont">
            <div className="anim-header">✕ Do not animate</div>
            {[
              'Page navigation (use loading states instead)',
              'Table row data updating',
              'Badge count incrementing',
              'Form field validation errors appearing',
              'Stat card values changing',
              'Sidebar nav items highlighting',
              'Anything inside a modal that is already animating in',
              'Any animation over 500ms in a data-dense view',
            ].map(i => <div key={i} className="anim-item">{i}</div>)}
          </div>
        </div>
      </section>

      <style jsx>{`
        .fs { margin-bottom: 52px; }
        .ft { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
        .fd { font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; max-width: 600px; }

        .principles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .principle-card { border: 1.5px solid var(--color-border); border-radius: 10px; padding: 18px; background: var(--color-bg-raised); }
        .p-title { font-size: 14px; font-weight: 600; color: var(--color-text); margin-bottom: 6px; }
        .p-body { font-size: 13px; color: var(--color-text-secondary); line-height: 1.7; }

        .dur-table { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .dur-head { display: grid; grid-template-columns: 200px 80px 1fr; gap: 12px; padding: 10px 16px; background: var(--color-bg-subtle); border-bottom: 1.5px solid var(--color-border); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--color-text-muted); }
        .dur-row { display: grid; grid-template-columns: 200px 80px 1fr; gap: 12px; padding: 12px 16px; border-bottom: 1px solid var(--color-border); align-items: center; }
        .dur-row:last-child { border-bottom: none; }
        .dur-tok { font-size: 11.5px; font-family: var(--font-mono); color: var(--color-primary); background: var(--color-primary-faint); padding: 2px 6px; border-radius: 4px; }
        .dur-ms { font-size: 13px; font-weight: 700; color: var(--color-text); }
        .dur-use { font-size: 13px; color: var(--color-text-secondary); line-height: 1.5; }

        .ease-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .ease-card { border: 1.5px solid var(--color-border); border-radius: 10px; padding: 16px; background: var(--color-bg-raised); }
        .ease-label { font-size: 13px; font-weight: 600; color: var(--color-text); margin-bottom: 4px; }
        .ease-token { font-size: 10px; font-family: var(--font-mono); color: var(--color-primary); background: var(--color-primary-faint); padding: 2px 5px; border-radius: 3px; display: block; margin-bottom: 12px; }
        .ease-vis { height: 40px; background: var(--color-bg-subtle); border-radius: 6px; position: relative; overflow: hidden; margin-bottom: 10px; }
        .ease-dot { position: absolute; width: 12px; height: 12px; background: var(--color-primary); border-radius: 50%; top: 50%; transform: translateY(-50%); left: 10%; animation: ease-anim 2s infinite; }
        @keyframes ease-anim { 0%, 20% { left: 10%; } 70%, 100% { left: 80%; } }
        .ease-desc { font-size: 12px; color: var(--color-text-muted); line-height: 1.55; }

        .anim-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .anim-col { border-radius: 12px; border: 1.5px solid; overflow: hidden; }
        .anim-col.do { border-color: #BBF7D0; }
        .anim-col.dont { border-color: #FECACA; }
        .anim-header { padding: 12px 16px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; border-bottom: 1px solid; }
        .anim-col.do .anim-header { color: #16A34A; background: #F0FDF4; border-color: #BBF7D0; }
        .anim-col.dont .anim-header { color: #DC2626; background: #FFF5F5; border-color: #FECACA; }
        .anim-item { padding: 9px 16px; font-size: 13px; border-bottom: 1px solid var(--color-border); color: var(--color-text-secondary); line-height: 1.5; }
        .anim-item:last-child { border-bottom: none; }
      `}</style>
    </div>
  )
}