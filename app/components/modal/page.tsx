'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable } from '@/components/docs/PropsTable'
import { DosDonts } from '@/components/docs/DosDonts'

const props = [
  { name: 'isOpen',    type: 'boolean',                           default: 'false', required: true,  description: 'Controls modal visibility.' },
  { name: 'onClose',   type: '() => void',                        default: '—',     required: true,  description: 'Called when user dismisses the modal.' },
  { name: 'title',     type: 'string',                            default: '—',     required: true,  description: 'Modal heading.' },
  { name: 'icon',      type: '"question" | "success" | "warning"',default: '—',     required: false, description: 'Icon shown above the title.' },
  { name: 'size',      type: '"sm" | "md" | "lg"',               default: '"md"',  required: false, description: 'Controls modal width.' },
  { name: 'children',  type: 'ReactNode',                         default: '—',     required: false, description: 'Modal body — use for form fields inside the modal.' },
  { name: 'footer',    type: 'ReactNode',                         default: '—',     required: false, description: 'Footer — typically action buttons.' },
]

const dos = [
  'Always name the specific entity in confirmation modals — account number, holder name, and bank.',
  'Show a success modal after a destructive action completes — never just close silently.',
  'Require typed confirmation (email or keyword) for irreversible permanent actions.',
  'Use a single full-width Done button for all success/completion states.',
  'Close on overlay click and Escape key for non-destructive modals.',
]

const donts = [
  "Don't stack modals — resolve the active one before opening another.",
  "Don't use vague titles — 'Confirm Removal' not 'Are you sure?'",
  "Don't auto-close success modals — let the user dismiss with Done.",
  "Don't use the danger button for reversible actions — only permanent deletes.",
  "Don't put complex multi-step forms in a modal — use a drawer or dedicated page.",
]

function ModalShell({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="mo-overlay" onClick={onClose}>
      <div className="mo-card" onClick={e => e.stopPropagation()}>
        {children}
      </div>
      <style jsx>{`
        .mo-overlay {
          position: fixed; inset: 0; z-index: 200;
          background: rgba(13,8,32,0.5);
          display: flex; align-items: center; justify-content: center;
          padding: 20px; animation: mofade 0.15s ease;
        }
        @keyframes mofade { from { opacity: 0; } to { opacity: 1; } }
        .mo-card {
          background: #fff; border-radius: 16px;
          padding: 36px 28px 28px; width: 100%; max-width: 440px;
          box-shadow: 0 20px 60px rgba(13,8,32,0.2);
          display: flex; flex-direction: column; align-items: center;
          text-align: center; animation: moslide 0.2s ease;
        }
        @keyframes moslide { from { transform: translateY(12px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </div>
  )
}

function ConfirmDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="ss-btn ss-btn-secondary" onClick={() => setOpen(true)}>Open — Confirmation</button>
      {open && (
        <ModalShell onClose={() => setOpen(false)}>
          <div className="mo-q-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#9999AA" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <circle cx="12" cy="17" r="0.5" fill="#9999AA" strokeWidth="2"/>
            </svg>
          </div>
          <h2 className="mo-title">Confirm Removal</h2>
          <p className="mo-body">
            Please confirm you want to remove the account,{' '}
            <span className="mo-entity">2001223344 | John Chuks | First Bank</span>
            {' '}from the bulk upload list.
          </p>
          <div className="mo-actions">
            <button className="ss-btn ss-btn-ghost mo-btn" onClick={() => setOpen(false)}>Back</button>
            <button className="ss-btn ss-btn-primary mo-btn" onClick={() => setOpen(false)}>Remove</button>
          </div>
        </ModalShell>
      )}
    </>
  )
}

function DestructiveDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="ss-btn ss-btn-danger" onClick={() => setOpen(true)}>Open — Destructive</button>
      {open && (
        <ModalShell onClose={() => setOpen(false)}>
          <div className="mo-q-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#9999AA" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <circle cx="12" cy="17" r="0.5" fill="#9999AA" strokeWidth="2"/>
            </svg>
          </div>
          <h2 className="mo-title">Delete Account?</h2>
          <p className="mo-body">
            Are you sure you want to delete your account? This action{' '}
            <strong>CANNOT</strong> be reversed and all data will be lost.
          </p>
          <div style={{ width: '100%', textAlign: 'left', marginBottom: 20 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text)', display: 'block', marginBottom: 6 }}>
              Type your email address for confirmation
            </label>
            <input className="ss-input" style={{ width: '100%' }} type="email" placeholder="Email address" />
          </div>
          <div className="mo-actions">
            <button className="ss-btn ss-btn-ghost mo-btn" onClick={() => setOpen(false)}>Back</button>
            <button className="ss-btn ss-btn-danger mo-btn">Delete</button>
          </div>
        </ModalShell>
      )}
    </>
  )
}

function SuccessEntityDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="ss-btn ss-btn-secondary" onClick={() => setOpen(true)}>Open — Success (with entity)</button>
      {open && (
        <ModalShell onClose={() => setOpen(false)}>
          <div className="mo-success-icon">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h2 className="mo-title">Successfully Removed</h2>
          <p className="mo-body">
            The account, —{' '}
            <span className="mo-entity">2001223344 | John Chuks | First Bank</span>
            {' '}has been removed from the bulk upload list.
          </p>
          <button className="ss-btn ss-btn-primary mo-full" onClick={() => setOpen(false)}>Done</button>
        </ModalShell>
      )}
    </>
  )
}

function SuccessSimpleDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="ss-btn ss-btn-secondary" onClick={() => setOpen(true)}>Open — Success (simple)</button>
      {open && (
        <ModalShell onClose={() => setOpen(false)}>
          <div className="mo-success-icon">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h2 className="mo-title">Password Changed</h2>
          <p className="mo-body">The password to your account has been changed.</p>
          <button className="ss-btn ss-btn-primary mo-full" onClick={() => setOpen(false)}>Done</button>
        </ModalShell>
      )}
    </>
  )
}

export default function ModalPage() {
  return (
    <div>
      <PageHeader
        section="Components / Feedback"
        title="Modal"
        description="Modals interrupt the current flow to request a decision or present critical information. SS products use four distinct modal patterns — each mapped to a specific interaction type."
        status="stable"
      />

      {/* Pattern reference table */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: 12 }}>Four patterns at a glance</h2>
        <div style={{ border: '1.5px solid var(--color-border)', borderRadius: 12, overflow: 'hidden', background: 'var(--color-bg-raised)' }}>
          {[
            { pattern: 'Confirmation',           icon: '?', when: 'Reversible but significant — e.g. remove from bulk list.',         cta: 'Back + Action' },
            { pattern: 'Destructive',            icon: '?', when: 'Permanent, irreversible — e.g. delete account. Requires typing email.', cta: 'Back + Delete (red)' },
            { pattern: 'Success — with entity',  icon: '✓', when: 'Action completed, entity affected — name account/bank in full.',    cta: 'Done (full-width)' },
            { pattern: 'Success — simple',       icon: '✓', when: 'Action completed, no specific entity — password change, settings.', cta: 'Done (full-width)' },
          ].map((p, i, arr) => (
            <div key={p.pattern} style={{ display: 'grid', gridTemplateColumns: '28px 1fr 1fr auto', gap: 16, padding: '13px 20px', borderBottom: i < arr.length - 1 ? '1px solid var(--color-border)' : 'none', alignItems: 'center' }}>
              <span style={{ width: 24, height: 24, borderRadius: '50%', border: '1.5px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'var(--color-text-muted)', flexShrink: 0 }}>{p.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text)' }}>{p.pattern}</span>
              <span style={{ fontSize: 12.5, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{p.when}</span>
              <code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', background: 'var(--color-primary-faint)', padding: '3px 8px', borderRadius: 6, whiteSpace: 'nowrap' }}>{p.cta}</code>
            </div>
          ))}
        </div>
      </section>

      <ComponentPreview
        title="Pattern 1 — Confirmation"
        description="For reversible but significant actions. Name the entity. Two equal-width buttons, primary action on the right."
        code={`<Modal icon="question" title="Confirm Removal"\n  footer={<><Button variant="ghost">Back</Button><Button>Remove</Button></>}\n>\n  Please confirm you want to remove the account,\n  <strong>2001223344 | John Chuks | First Bank</strong>\n  from the bulk upload list.\n</Modal>`}
      >
        <ConfirmDemo />
      </ComponentPreview>

      <ComponentPreview
        title="Pattern 2 — Destructive with typed confirmation"
        description='Permanent, irreversible actions. Require typed email before the delete button enables. "CANNOT" is intentionally uppercase — the one exception to sentence case in SS copy.'
        code={`<Modal icon="question" title="Delete Account?"\n  footer={<><Button variant="ghost">Back</Button><Button variant="danger" disabled={!confirmed}>Delete</Button></>}\n>\n  This action CANNOT be reversed.\n  <Input label="Type your email address for confirmation" />\n</Modal>`}
      >
        <DestructiveDemo />
      </ComponentPreview>

      <ComponentPreview
        title="Pattern 3 — Success with entity"
        description="After the confirmation action completes. Always confirm which entity was affected — full account number, name, and bank. Single full-width Done button."
        code={`<Modal icon="success" title="Successfully Removed"\n  footer={<Button fullWidth>Done</Button>}\n>\n  The account, — <strong>2001223344 | John Chuks | First Bank</strong>\n  has been removed from the bulk upload list.\n</Modal>`}
      >
        <SuccessEntityDemo />
      </ComponentPreview>

      <ComponentPreview
        title="Pattern 4 — Success simple"
        description="After a non-entity action — password change, profile update, settings saved. Brief, affirming, one full-width Done button."
        code={`<Modal icon="success" title="Password Changed"\n  footer={<Button fullWidth>Done</Button>}\n>\n  The password to your account has been changed.\n</Modal>`}
      >
        <SuccessSimpleDemo />
      </ComponentPreview>

      <PropsTable props={props} />
      <DosDonts dos={dos} donts={donts} />

      <style jsx global>{`
        .mo-q-icon {
          width: 64px; height: 64px; border-radius: 50%;
          border: 1.5px solid var(--color-border);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
        .mo-success-icon {
          width: 64px; height: 64px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
        .mo-title { font-size: 1.25rem; font-weight: 600; color: var(--color-text); margin-bottom: 12px; }
        .mo-body { font-size: 14px; color: var(--color-text-secondary); line-height: 1.75; margin-bottom: 24px; max-width: 340px; }
        .mo-entity { color: #1B56F4; font-weight: 600; }
        .mo-actions { display: flex; gap: 12px; width: 100%; }
        .mo-btn { flex: 1; justify-content: center; }
        .mo-full { width: 100%; justify-content: center; }
      `}</style>
    </div>
  )
}