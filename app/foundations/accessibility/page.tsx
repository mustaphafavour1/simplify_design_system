'use client'
import { PageHeader } from '@/components/docs/PageHeader'

export default function AccessibilityPage() {
  return (
    <div>
      <PageHeader section="Foundations" title="Accessibility"
        description="SS products target WCAG 2.1 AA compliance. Accessibility is not an afterthought — it is built into every component from the start. Financial products serving diverse users have a particular responsibility here." />

      <section className="fs">
        <h2 className="ft">Colour contrast</h2>
        <p className="fd">All text and interactive elements must meet WCAG AA contrast ratios. Use a contrast checker before shipping any new colour combination.</p>
        <div className="contrast-grid">
          {[
            { label: 'Normal text (< 18px)',    ratio: '4.5:1', level: 'AA', bg: '#9753E8', fg: '#FFFFFF', pass: true },
            { label: 'Large text (≥ 18px bold)', ratio: '3:1',   level: 'AA', bg: '#9753E8', fg: '#FFFFFF', pass: true },
            { label: 'UI components & icons',    ratio: '3:1',   level: 'AA', bg: '#E8E3F3', fg: '#17102E', pass: true },
            { label: 'AAA — enhanced',           ratio: '7:1',   level: 'AAA', bg: '#0D0820', fg: '#FFFFFF', pass: true },
          ].map(c => (
            <div key={c.label} className="contrast-card" style={{ background: c.bg, color: c.fg }}>
              <div className="contrast-sample">Aa</div>
              <div className="contrast-meta">
                <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.85 }}>{c.label}</div>
                <div style={{ fontSize: 11, opacity: 0.7 }}>Ratio: {c.ratio} · {c.level}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: c.pass ? '#4ade80' : '#f87171', marginTop: 4 }}>{c.pass ? '✓ Pass' : '✕ Fail'}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="fs">
        <h2 className="ft">Keyboard navigation</h2>
        <div className="kb-table">
          {[
            { key: 'Tab',               action: 'Move focus to the next interactive element' },
            { key: 'Shift + Tab',       action: 'Move focus to the previous interactive element' },
            { key: 'Enter / Space',     action: 'Activate buttons, links, checkboxes' },
            { key: 'Escape',            action: 'Close modals, dropdowns, drawers, tooltips' },
            { key: '↑ / ↓',            action: 'Navigate options in a select, menu, or listbox' },
            { key: '← / →',            action: 'Navigate tabs, radio groups, sliders' },
            { key: 'Home / End',        action: 'Jump to first/last item in a list or menu' },
          ].map(r => (
            <div key={r.key} className="kb-row">
              <div className="kb-keys">{r.key.split(' + ').map((k, i) => <span key={k}>{i > 0 && <span className="kb-plus">+</span>}<kbd className="kb-key">{k}</kbd></span>)}</div>
              <div className="kb-action">{r.action}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="fs">
        <h2 className="ft">ARIA guidelines</h2>
        <div className="aria-grid">
          {[
            { role: 'button',       when: 'A div or span acting as a button. Prefer native <button> where possible.' },
            { role: 'dialog',       when: 'Modal overlays. Must include aria-modal="true" and aria-labelledby pointing to the title.' },
            { role: 'alert',        when: 'Error messages and important notifications that should be announced immediately.' },
            { role: 'status',       when: 'Toasts and status messages that are not urgent — announced after current content.' },
            { role: 'navigation',   when: 'Sidebar and top navigation landmark. Helps screen readers jump to nav sections.' },
            { role: 'main',         when: 'The primary page content area. One per page.' },
          ].map(a => (
            <div key={a.role} className="aria-card">
              <code className="aria-role">role="{a.role}"</code>
              <div className="aria-when">{a.when}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="fs">
        <h2 className="ft">Focus management</h2>
        <div className="focus-rules">
          {[
            { rule: 'Visible focus ring', body: 'Every interactive element must show a visible focus ring when keyboard focused. Never use outline: none without a custom replacement. SS uses a 3px var(--color-primary) ring with 2px offset.' },
            { rule: 'Focus trap in modals', body: 'When a modal opens, focus must move inside it. Tab/Shift+Tab should cycle only within the modal. When closed, focus returns to the trigger element.' },
            { rule: 'Skip links', body: 'Provide a "Skip to main content" link as the first focusable element on every page. Hidden visually until focused.' },
            { rule: 'Don\'t remove focus from live regions', body: 'When a success/error state updates, do not move focus away from the current element unless a modal opens. Let screen readers announce the change naturally via aria-live.' },
          ].map(r => (
            <div key={r.rule} className="focus-card">
              <div className="focus-rule">{r.rule}</div>
              <div className="focus-body">{r.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="fs">
        <h2 className="ft">Checklist</h2>
        <div className="checklist">
          {[
            'All text meets 4.5:1 contrast ratio (3:1 for large text)',
            'All interactive elements are keyboard operable',
            'Focus is always visible and clearly indicated',
            'Modals trap focus and return it on close',
            'All images have meaningful alt text (or alt="" if decorative)',
            'Form inputs have associated labels (not just placeholder)',
            'Errors are announced to screen readers via aria-live or role="alert"',
            'Loading states use aria-busy="true" on the affected region',
            'Icons used alone have aria-label or title',
            'prefers-reduced-motion is respected — animations are optional',
            'Colour is never the only means of conveying information',
            'Touch targets are at least 44×44px on mobile (Maestro MFB)',
          ].map((item, i) => (
            <div key={i} className="checklist-item">
              <span className="check-box">☐</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .fs { margin-bottom: 52px; }
        .ft { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
        .fd { font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; max-width: 600px; }

        .contrast-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .contrast-card { border-radius: 12px; padding: 20px; display: flex; flex-direction: column; gap: 10px; }
        .contrast-sample { font-size: 2.5rem; font-weight: 800; line-height: 1; }
        .contrast-meta {}

        .kb-table { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .kb-row { display: grid; grid-template-columns: 200px 1fr; gap: 16px; padding: 12px 16px; border-bottom: 1px solid var(--color-border); align-items: center; }
        .kb-row:last-child { border-bottom: none; }
        .kb-keys { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
        .kb-key { font-size: 12px; font-family: var(--font-mono); background: var(--color-bg-subtle); border: 1.5px solid var(--color-border); border-bottom-width: 3px; border-radius: 5px; padding: 3px 8px; color: var(--color-text); font-style: normal; }
        .kb-plus { font-size: 12px; color: var(--color-text-muted); margin: 0 2px; }
        .kb-action { font-size: 13px; color: var(--color-text-secondary); }

        .aria-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .aria-card { border: 1.5px solid var(--color-border); border-radius: 10px; padding: 16px; background: var(--color-bg-raised); }
        .aria-role { font-size: 12px; font-family: var(--font-mono); color: var(--color-primary); background: var(--color-primary-faint); padding: 3px 8px; border-radius: 5px; display: block; margin-bottom: 8px; }
        .aria-when { font-size: 13px; color: var(--color-text-secondary); line-height: 1.65; }

        .focus-rules { display: flex; flex-direction: column; gap: 10px; }
        .focus-card { border: 1.5px solid var(--color-border); border-radius: 10px; padding: 16px 18px; background: var(--color-bg-raised); display: flex; gap: 16px; align-items: flex-start; }
        .focus-rule { font-size: 13px; font-weight: 600; color: var(--color-text); min-width: 180px; flex-shrink: 0; padding-top: 1px; }
        .focus-body { font-size: 13px; color: var(--color-text-secondary); line-height: 1.65; }

        .checklist { display: flex; flex-direction: column; gap: 0; border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .checklist-item { display: flex; align-items: flex-start; gap: 12px; padding: 12px 16px; border-bottom: 1px solid var(--color-border); font-size: 13px; color: var(--color-text-secondary); line-height: 1.5; }
        .checklist-item:last-child { border-bottom: none; }
        .check-box { font-size: 16px; color: var(--color-border-strong); flex-shrink: 0; }
      `}</style>
    </div>
  )
}