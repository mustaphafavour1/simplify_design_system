'use client'
import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable } from '@/components/docs/PropsTable'
import { DosDonts } from '@/components/docs/DosDonts'

const props = [
  { name: 'label',       type: 'string',           default: '—',       required: false, description: 'Input label shown above the field.' },
  { name: 'placeholder', type: 'string',           default: '—',       required: false, description: 'Placeholder text inside the field.' },
  { name: 'helperText',  type: 'string',           default: '—',       required: false, description: 'Supporting text below the field.' },
  { name: 'error',       type: 'string',           default: '—',       required: false, description: 'Error message — triggers error state when set.' },
  { name: 'disabled',    type: 'boolean',          default: 'false',   required: false, description: 'Disables the input.' },
  { name: 'leftIcon',    type: 'ReactNode',        default: '—',       required: false, description: 'Icon inside the input on the left.' },
  { name: 'rightIcon',   type: 'ReactNode',        default: '—',       required: false, description: 'Icon or action inside the input on the right.' },
  { name: 'required',    type: 'boolean',          default: 'false',   required: false, description: 'Marks the field as required.' },
  { name: 'type',        type: 'string',           default: '"text"',  required: false, description: 'HTML input type — text, email, password, number, tel.' },
]

const dos = [
  'Always pair an input with a label — never use placeholder text as the only label.',
  'Show inline error messages directly beneath the field they relate to.',
  'Use helper text to set expectations — e.g. "Enter the 10-digit account number".',
  'Use the appropriate input type — tel for phone numbers, number for amounts, email for emails.',
]

const donts = [
  "Don't use placeholder text as a substitute for a label — it disappears on focus.",
  "Don't show error state before the user has interacted with the field.",
  "Don't use a generic error like 'Invalid input' — say exactly what is wrong.",
  "Don't disable an input without communicating why it is disabled.",
]

export default function TextInputPage() {
  return (
    <div>
      <PageHeader
        section="Components / Forms"
        title="Text Input"
        description="The foundational form element. Used across onboarding, KYC flows, transfer forms, and settings across all SS products."
        status="stable"
      />

      <ComponentPreview
        title="States"
        description="All input states from default through to error."
        code={`<Input label="Account number" placeholder="Enter 10-digit account number" />\n<Input label="Account number" placeholder="0123456789" value="0123456789" />\n<Input label="Account number" error="Account number must be 10 digits." />\n<Input label="Account number" disabled />`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%', maxWidth: 400 }}>
          {/* Default */}
          <div className="ss-field">
            <label className="ss-label">Account number</label>
            <input className="ss-input" placeholder="Enter 10-digit account number" />
          </div>
          {/* Filled */}
          <div className="ss-field">
            <label className="ss-label">Account number <span className="ss-required">*</span></label>
            <input className="ss-input ss-input-filled" defaultValue="0123456789" />
            <span className="ss-helper">Recipient name: John Chuks — First Bank</span>
          </div>
          {/* Error */}
          <div className="ss-field">
            <label className="ss-label">Account number</label>
            <input className="ss-input ss-input-error" defaultValue="012345" />
            <span className="ss-error-text">Account number must be exactly 10 digits.</span>
          </div>
          {/* Disabled */}
          <div className="ss-field">
            <label className="ss-label ss-label-disabled">Account number</label>
            <input className="ss-input ss-input-disabled" disabled placeholder="Not available" />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With icons"
        description="Icons for search fields, currency inputs, and password fields."
        code={`<Input leftIcon={<SearchIcon />} placeholder="Search transactions..." />\n<Input leftIcon={<span>₦</span>} label="Amount" type="number" placeholder="0.00" />\n<Input rightIcon={<EyeIcon />} label="Password" type="password" />`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 400 }}>
          <div className="ss-field">
            <div className="ss-input-wrap">
              <span className="ss-input-icon left">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              </span>
              <input className="ss-input ss-input-icon-l" placeholder="Search transactions..." />
            </div>
          </div>
          <div className="ss-field">
            <label className="ss-label">Amount</label>
            <div className="ss-input-wrap">
              <span className="ss-input-icon left" style={{ fontWeight: 700, fontSize: 14 }}>₦</span>
              <input className="ss-input ss-input-icon-l" type="number" placeholder="0.00" />
            </div>
          </div>
          <div className="ss-field">
            <label className="ss-label">Password</label>
            <div className="ss-input-wrap">
              <input className="ss-input ss-input-icon-r" type="password" placeholder="Enter password" />
              <span className="ss-input-icon right">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </span>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <PropsTable props={props} />
      <DosDonts dos={dos} donts={donts} />

      <style jsx global>{`
        .ss-field { display: flex; flex-direction: column; gap: 5px; }
        .ss-label { font-size: 13px; font-weight: 600; color: var(--color-text); }
        .ss-label-disabled { color: var(--color-text-muted); }
        .ss-required { color: #DC2626; }
        .ss-input {
          width: 100%; padding: 9px 13px;
          font-size: 14px; font-family: var(--font-sans);
          color: var(--color-text);
          background: var(--color-bg-raised);
          border: 1.5px solid var(--color-border);
          border-radius: 8px;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .ss-input::placeholder { color: var(--color-text-muted); }
        .ss-input:focus { border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(151,83,232,0.12); }
        .ss-input-filled { border-color: var(--color-primary); }
        .ss-input-error { border-color: #DC2626; }
        .ss-input-error:focus { box-shadow: 0 0 0 3px rgba(220,38,38,0.1); }
        .ss-input-disabled { background: var(--color-bg-subtle); color: var(--color-text-muted); cursor: not-allowed; opacity: 0.7; }
        .ss-helper { font-size: 12px; color: #16A34A; font-weight: 500; }
        .ss-error-text { font-size: 12px; color: #DC2626; font-weight: 500; }
        .ss-input-wrap { position: relative; }
        .ss-input-icon {
          position: absolute; top: 50%; transform: translateY(-50%);
          color: var(--color-text-muted);
          display: flex; align-items: center; justify-content: center;
          width: 38px;
        }
        .ss-input-icon.left { left: 0; }
        .ss-input-icon.right { right: 0; }
        .ss-input-icon-l { padding-left: 36px; }
        .ss-input-icon-r { padding-right: 36px; }
      `}</style>
    </div>
  )
}