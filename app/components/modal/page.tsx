'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable } from '@/components/docs/PropsTable'
import { DosDonts } from '@/components/docs/DosDonts'

const props = [
  { name: 'isOpen',      type: 'boolean',          default: 'false', required: true,  description: 'Controls modal visibility.' },
  { name: 'onClose',     type: '() => void',        default: '—',     required: true,  description: 'Called when the user dismisses the modal.' },
  { name: 'title',       type: 'string',            default: '—',     required: true,  description: 'Modal heading.' },
  { name: 'description', type: 'string | ReactNode',default: '—',     required: false, description: 'Supporting text below the title.' },
  { name: 'icon',        type: 'ReactNode',         default: '—',     required: false, description: 'Icon displayed above the title.' },
  { name: 'size',        type: '"sm" | "md" | "lg"',default: '"md"',  required: false, description: 'Controls modal width.' },
  { name: 'children',   type: 'ReactNode',          default: '—',     required: false, description: 'Modal body content.' },
  { name: 'footer',      type: 'ReactNode',         default: '—',     required: false, description: 'Footer area — typically holds action buttons.' },
]

const dos = [
  'Always name the specific entity in destructive confirmation modals — account number, name, and bank.',
  'Provide a clear cancel/back path. Never trap the user in a modal with only a destructive action.',
  'Use the question-mark icon for confirmations and the warning icon for irreversible destructive actions.',
  'Close the modal on overlay click and Escape key — always.',
]

const donts = [
  "Don't stack modals. If a second confirmation is needed, resolve the first modal first.",
  "Don't put complex forms inside modals — use a dedicated page or drawer instead.",
  "Don't use vague titles like 'Are you sure?' — state specifically what is being confirmed.",
  "Don't auto-close modals after a destructive action — show a success state first.",
]

function ModalDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="ss-btn ss-btn-secondary" onClick={() => setOpen(true)}>Open confirmation modal</button>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            {/* Icon */}
            <div className="modal-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9999AA" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <circle cx="12" cy="16" r="0.5" fill="#9999AA" strokeWidth="2"/>
              </svg>
            </div>
            {/* Title */}
            <h2 className="modal-title">Confirm Removal</h2>
            {/* Body */}
            <p className="modal-body">
              Please confirm you want to remove the account,{' '}
              <span className="modal-entity">2001223344 | John Chuks | First Bank</span>
              {' '}from the bulk upload list.
            </p>
            {/* Actions */}
            <div className="modal-actions">
              <button className="ss-btn ss-btn-ghost modal-btn" onClick={() => setOpen(false)}>Back</button>
              <button className="ss-btn ss-btn-danger modal-btn" onClick={() => setOpen(false)}>Remove</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed; inset: 0; z-index: 200;
          background: rgba(13, 8, 32, 0.5);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          animation: fade-in 0.15s ease;
        }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .modal-card {
          background: #fff; border-radius: 16px;
          padding: 32px 28px 24px;
          width: 100%; max-width: 440px;
          box-shadow: 0 20px 60px rgba(13,8,32,0.2);
          display: flex; flex-direction: column; align-items: center;
          text-align: center;
          animation: slide-up 0.2s ease;
        }
        @keyframes slide-up { from { transform: translateY(12px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .modal-icon-wrap {
          width: 56px; height: 56px; border-radius: 50%;
          border: 1.5px solid var(--color-border);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
        .modal-title { font-size: 1.25rem; font-weight: 600; color: var(--color-text); margin-bottom: 12px; }
        .modal-body { font-size: 14px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 28px; max-width: 340px; }
        .modal-entity { color: #1B56F4; font-weight: 600; }
        .modal-actions { display: flex; gap: 12px; width: 100%; }
        .modal-btn { flex: 1; justify-content: center; }
      `}</style>
    </>
  )
}

export default function ModalPage() {
  return (
    <div>
      <PageHeader
        section="Components / Feedback"
        title="Modal"
        description="Modals interrupt the current flow to request a decision or present critical information. Used for confirmations, destructive actions, and focused tasks that require the user's full attention."
        status="stable"
      />

      <ComponentPreview
        title="Confirmation modal"
        description="The standard pattern for confirming a destructive or impactful action. Always name the specific entity being acted upon."
        code={`<Modal\n  isOpen={open}\n  onClose={() => setOpen(false)}\n  title="Confirm Removal"\n  icon={<QuestionIcon />}\n  footer={\n    <>\n      <Button variant="ghost" onClick={() => setOpen(false)}>Back</Button>\n      <Button variant="danger" onClick={handleRemove}>Remove</Button>\n    </>\n  }\n>\n  Please confirm you want to remove the account,\n  <strong>2001223344 | John Chuks | First Bank</strong>\n  from the bulk upload list.\n</Modal>`}
      >
        <ModalDemo />
      </ComponentPreview>

      <ComponentPreview
        title="Anatomy"
        description="The four parts of every modal."
        code=""
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1.5px solid var(--color-border)', borderRadius: 12, overflow: 'hidden', width: '100%', background: 'var(--color-bg-raised)' }}>
          {[
            { part: 'Icon',    desc: 'Optional. Question mark for confirmation, warning triangle for destructive irreversible actions. Neutral grey circle, never coloured.' },
            { part: 'Title',   desc: 'Short, specific, verb-led. "Confirm Removal" not "Are you sure?". Font weight 600, never 900.' },
            { part: 'Body',    desc: 'Explain what will happen. Name the specific entity. Highlight entity references in blue (#1B56F4) for quick scanning.' },
            { part: 'Actions', desc: 'Two buttons maximum. Secondary/ghost on the left (Back/Cancel), primary or danger on the right (the action). Equal width.' },
          ].map((a, i) => (
            <div key={a.part} style={{ display: 'flex', gap: 16, padding: '14px 20px', borderBottom: i < 3 ? '1px solid var(--color-border)' : 'none' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', minWidth: 60, flexShrink: 0, paddingTop: 1 }}>{a.part}</span>
              <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{a.desc}</span>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <PropsTable props={props} />
      <DosDonts dos={dos} donts={donts} />
    </div>
  )
}