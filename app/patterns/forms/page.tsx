'use client'
import { PageHeader } from '@/components/docs/PageHeader'

export default function FormsPage() {
  return (
    <div>
      <PageHeader section="Patterns" title="Forms & Validation"
        description="Form patterns used across all SS products — from authentication to user creation to settings. Max two columns. Primary button always disabled until required fields are complete." />

      <section className="ps">
        <div className="figma-callout">
          <div className="figma-label">Figma naming — Form screens</div>
          <div className="figma-names">
            <code>User Management - Create New User - Empty</code>
            <code>User Management - Create New User - Filled</code>
            <code>Settings - Change Password</code>
            <code>User Management - Add New Product - Empty</code>
          </div>
        </div>
      </section>

      {/* Layout rules */}
      <section className="ps">
        <h2 className="pt">Layout rules</h2>
        <div className="rules-cards">
          {[
            { rule: 'One column for short forms', desc: 'If the form has fewer than 5 fields, use a single centred column. Max width 560px. Clean and focused.', icon: '▣' },
            { rule: 'Two columns max',             desc: 'For longer forms, split into two equal columns. Never three. First name/Last name is the most common two-column pair.', icon: '⊞' },
            { rule: 'Logical grouping',            desc: 'Group related fields visually with a section heading (e.g. "Personal Details", "Organisation Details"). Add a divider between groups.', icon: '≡' },
            { rule: 'Required fields',             desc: 'Mark required fields with a red asterisk (*) after the label. Inform at the top if all fields are required.', icon: '∗' },
            { rule: 'Disabled submit',             desc: 'The primary button is muted/grey and non-interactive until ALL required fields are filled. No exceptions.', icon: '⊘' },
            { rule: 'Helper text',                 desc: 'Use small helper text below inputs for format hints (e.g. "Only JPG and PNG files allowed, max 1MB"). Always below the input, never above.', icon: '?' },
          ].map(r => (
            <div key={r.rule} className="rule-card">
              <span className="rule-icon">{r.icon}</span>
              <div>
                <div className="rule-title">{r.rule}</div>
                <div className="rule-desc">{r.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* One column demo */}
      <section className="ps">
        <h2 className="pt">Single column form — Add New Product</h2>
        <p className="pd">Short focused forms use a single column card, centred on the page. Based on the Compliance Engine "Add New Product" screen.</p>
        <div className="form-container single-col">
          <div className="form-card">
            <div className="form-card-header">
              <div className="form-card-title">Add New Product</div>
              <div className="form-card-sub">Kindly specify the details of the product to be added</div>
            </div>
            <div className="form-body">
              <div className="field-group">
                <label className="field-label">Product Name <span className="req">*</span></label>
                <input className="field-input" placeholder="E.g Maestro MFB" />
              </div>
              <div className="field-group">
                <label className="field-label">Official Name</label>
                <input className="field-input" placeholder="E.g Maestro Microfinance Bank Ltd." />
              </div>
              <div className="field-group">
                <label className="field-label">Product Logo</label>
                <div className="file-upload">
                  <span>Upload Product Logo</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>
                </div>
                <div className="field-helper">Only JPG and PNG files allowed, max 1MB file size</div>
              </div>
              <div className="field-group">
                <label className="field-label">Product Website</label>
                <input className="field-input" placeholder="Enter Product Website" />
              </div>
              <div className="field-group">
                <label className="field-label">Product Admins</label>
                <div className="field-select">Choose one or more users as Admins <span>▾</span></div>
              </div>
              <div className="field-link">+ Create New Users</div>
              <button className="form-btn disabled" disabled>Add Product</button>
            </div>
          </div>
        </div>
      </section>

      {/* Two column demo */}
      <section className="ps">
        <h2 className="pt">Two column form — Create New User</h2>
        <p className="pd">Longer forms with related pairs (First Name / Last Name) use two equal columns. Based on the Compliance Engine user creation form.</p>
        <div className="form-container two-col">
          <div className="form-card wide">
            <div className="form-card-header">
              <div className="form-card-title">User Details</div>
              <div className="form-card-sub">Kindly specify the details of the user to be created</div>
            </div>
            <div className="form-body">
              <div className="field-group full">
                <label className="field-label">User Role</label>
                <div className="field-select">Product Admin <span>▾</span></div>
              </div>
              <div className="field-group full">
                <label className="field-label">Assigned Subsidiaries <span className="req">*</span></label>
                <div className="field-select multi-select">
                  <span className="chip">Maestro MFB <span className="chip-x">×</span></span>
                  <span>▾</span>
                </div>
              </div>
              <div className="two-col-row">
                <div className="field-group">
                  <label className="field-label">First Name <span className="req">*</span></label>
                  <input className="field-input filled" defaultValue="Maxwell" />
                </div>
                <div className="field-group">
                  <label className="field-label">Last Name <span className="req">*</span></label>
                  <input className="field-input filled" defaultValue="Kentebe" />
                </div>
              </div>
              <div className="field-group full">
                <label className="field-label">Phone Number <span className="req">*</span></label>
                <div className="field-input phone-field">
                  <span>08122334455</span>
                  <div className="phone-flag">🇳🇬 ▾</div>
                </div>
              </div>
              <div className="field-group full">
                <label className="field-label">Official Email <span className="req">*</span></label>
                <input className="field-input filled" defaultValue="maxwell.kentebe@simplifysynergy.com" />
              </div>
              <button className="form-btn active">Create User</button>
            </div>
          </div>
        </div>
      </section>

      {/* Error states */}
      <section className="ps">
        <h2 className="pt">Validation & error states</h2>
        <p className="pd">Field-level errors use a red border + red caption below the input. Never show all errors at once on submit — validate on blur (when the user leaves a field).</p>
        <div className="form-container single-col">
          <div className="form-card">
            <div className="form-card-title" style={{marginBottom:20}}>Change Password</div>
            <div className="form-body">
              <div className="field-group">
                <label className="field-label">Enter Current Password</label>
                <div className="field-input error-state">
                  FavourTolulope
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                </div>
                <div className="error-caption">The current password is incorrect</div>
              </div>
              <div className="field-group">
                <label className="field-label">Enter New Password</label>
                <div className="field-input focused">
                  <span style={{color:'var(--color-text-muted)'}}>New password</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                </div>
              </div>
              <div className="field-group">
                <label className="field-label">Confirm New Password</label>
                <div className="field-input focused">
                  <span style={{color:'var(--color-text-muted)'}}>New password</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                </div>
              </div>
              <div className="field-helper">Your password must be at least 8 characters including at least 1 Capital letter, 1 Symbol (@, !, ? etc.) and 1 Number</div>
              <div className="field-divider" />
              <div className="toggle-row">
                <span className="toggle-label">Require all logged in Devices to re-enter this new password</span>
                <div className="toggle-switch off" />
              </div>
              <div className="two-btn-row">
                <button className="form-btn-ghost">Back</button>
                <button className="form-btn active">Change Password</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ps { margin-bottom: 52px; }
        .pt { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
        .pd { font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; max-width: 600px; }

        .figma-callout { display: flex; flex-direction: column; gap: 8px; padding: 16px 20px; background: var(--color-primary-faint); border: 1.5px solid var(--color-primary-subtle); border-radius: 10px; }
        .figma-label { font-size: 11px; font-weight: 700; color: var(--color-primary); text-transform: uppercase; letter-spacing: .06em; }
        .figma-names { display: flex; flex-wrap: wrap; gap: 6px; }
        .figma-names code { font-size: 11.5px; font-family: var(--font-mono); background: white; border: 1px solid var(--color-primary-subtle); color: var(--color-text); padding: 3px 8px; border-radius: 5px; }

        .rules-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .rule-card { display: flex; align-items: flex-start; gap: 12px; border: 1.5px solid var(--color-border); border-radius: 10px; padding: 16px; background: var(--color-bg-raised); }
        .rule-icon { font-size: 20px; width: 32px; height: 32px; background: var(--color-bg-subtle); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .rule-title { font-size: 13px; font-weight: 600; color: var(--color-text); margin-bottom: 4px; }
        .rule-desc { font-size: 13px; color: var(--color-text-secondary); line-height: 1.65; }

        .form-container { display: flex; align-items: flex-start; justify-content: center; padding: 32px; background: #F0EEF9; border-radius: 12px; border: 1.5px solid var(--color-border); }
        .form-card { background: white; border-radius: 16px; padding: 32px 28px; box-shadow: 0 4px 24px rgba(13,8,32,.06); border: 1px solid var(--color-border); }
        .single-col .form-card { width: 100%; max-width: 480px; }
        .two-col .form-card { width: 100%; max-width: 600px; }
        .form-card.wide {}
        .form-card-header { margin-bottom: 24px; }
        .form-card-title { font-size: 1.1rem; font-weight: 700; color: var(--color-text); margin-bottom: 4px; }
        .form-card-sub { font-size: 13px; color: var(--color-text-muted); }
        .form-body { display: flex; flex-direction: column; gap: 16px; }
        .field-group { display: flex; flex-direction: column; gap: 6px; }
        .field-group.full { grid-column: 1 / -1; }
        .field-label { font-size: 13px; font-weight: 600; color: var(--color-text); }
        .req { color: #DC2626; }
        .field-input { border: 1.5px solid var(--color-border); border-radius: 8px; padding: 10px 14px; font-size: 13.5px; color: var(--color-text-muted); font-family: var(--font-sans); display: flex; align-items: center; justify-content: space-between; cursor: text; }
        .field-input.filled { color: var(--color-text); border-color: var(--color-border); }
        .field-input.focused { border-color: #1B56F4; box-shadow: 0 0 0 3px rgba(27,86,244,0.1); }
        .field-input.error-state { border-color: #DC2626; color: var(--color-text); }
        .error-caption { font-size: 12px; font-weight: 600; color: #DC2626; margin-top: 2px; }
        .field-select { border: 1.5px solid var(--color-border); border-radius: 8px; padding: 10px 14px; font-size: 13.5px; color: var(--color-text-secondary); display: flex; align-items: center; justify-content: space-between; cursor: pointer; }
        .multi-select { align-items: center; gap: 8px; }
        .chip { background: #EFF4FF; border: 1px solid #ADC8FB; color: #1B56F4; font-size: 12px; font-weight: 600; padding: 2px 8px; border-radius: 5px; display: inline-flex; align-items: center; gap: 4px; }
        .chip-x { font-size: 14px; opacity: 0.6; cursor: pointer; }
        .file-upload { border: 1.5px dashed var(--color-border); border-radius: 8px; padding: 12px 14px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-size: 13.5px; color: var(--color-text-muted); }
        .field-helper { font-size: 11.5px; color: var(--color-text-muted); line-height: 1.5; }
        .field-link { font-size: 13px; font-weight: 600; color: var(--color-primary); cursor: pointer; }
        .two-col-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .phone-field { padding: 8px 14px; }
        .phone-flag { font-size: 13px; }
        .field-divider { height: 1px; background: var(--color-border); }
        .toggle-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .toggle-label { font-size: 13px; color: var(--color-text-secondary); line-height: 1.5; }
        .toggle-switch { width: 44px; height: 24px; border-radius: 99px; background: var(--color-border); flex-shrink: 0; position: relative; cursor: pointer; }
        .toggle-switch.on { background: #1B56F4; }

        .form-btn { border: none; border-radius: 8px; padding: 12px 20px; font-size: 14px; font-weight: 700; font-family: var(--font-sans); width: 100%; cursor: pointer; transition: all .15s; margin-top: 4px; }
        .form-btn.active { background: var(--color-primary); color: white; }
        .form-btn.disabled { background: #C8C8D8; color: #9999AA; cursor: not-allowed; }
        .two-btn-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .form-btn-ghost { border: 1.5px solid var(--color-border); border-radius: 8px; padding: 12px; font-size: 14px; font-weight: 700; font-family: var(--font-sans); background: none; cursor: pointer; color: var(--color-text); }
      `}</style>
    </div>
  )
}
