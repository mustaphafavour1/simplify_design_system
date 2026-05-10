'use client'
import { PageHeader } from '@/components/docs/PageHeader'

export default function EmptyErrorPage() {
  return (
    <div>
      <PageHeader section="Patterns" title="Empty & Error States"
        description="Consistent patterns for empty tables, error modals, field validation, and system-level failures across all SS products." />

      <section className="ps">
        <h2 className="pt">Empty state formula</h2>
        <p className="pd">Every table and data view must have an empty state designed. The copy follows a strict formula:</p>
        <div className="formula-box">
          <div className="formula-line">"<strong>No [Items] Yet</strong>"  — Title. Short, factual.</div>
          <div className="formula-line">"<strong>When there are [items], they will show here.</strong>"  — Subtitle. States what will appear. Passive, reassuring, no blame.</div>
        </div>
        <div className="examples-grid">
          {[
            { page: 'Collections',    title: 'No Records Yet', sub: 'When there are collections, they will show here.' },
            { page: 'Transactions',   title: 'No Records Yet', sub: 'When there are transactions, they will show here.' },
            { page: 'User Management',title: 'No Records Yet', sub: 'When there are users, they will show here.' },
            { page: 'Reports',        title: 'No Reports Yet', sub: 'When there are reports, they will show here.' },
          ].map(e => (
            <div key={e.page} className="example-card">
              <div className="example-page">{e.page}</div>
              <div className="es-icon">
                <svg width="48" height="48" viewBox="0 0 80 80" fill="none">
                  <rect x="16" y="10" width="38" height="48" rx="4" fill="#F1F0F5" stroke="#D8D5E8" strokeWidth="1.5"/>
                  <rect x="22" y="20" width="26" height="2.5" rx="1.25" fill="#D8D5E8"/>
                  <rect x="22" y="27" width="20" height="2.5" rx="1.25" fill="#D8D5E8"/>
                  <circle cx="50" cy="50" r="12" fill="white" stroke="#D8D5E8" strokeWidth="1.5"/>
                  <circle cx="50" cy="50" r="7" fill="#F1F0F5" stroke="#D8D5E8" strokeWidth="1.5"/>
                  <line x1="55" y1="55" x2="60" y2="60" stroke="#D8D5E8" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="es-title">{e.title}</div>
              <div className="es-sub">{e.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="ps">
        <h2 className="pt">Error patterns</h2>
        <p className="pd">Two types of errors: inline field errors and error modals. Use field errors for form validation, error modals for system/API failures.</p>
        <div className="error-grid">

          {/* Field error */}
          <div className="error-type-card">
            <div className="et-title">1. Field validation error</div>
            <div className="et-desc">Triggered when the user leaves a field with invalid input. Red border + red caption under the field. Always specific — say what is wrong and/or how to fix it.</div>
            <div className="et-demo">
              <div className="ef-group">
                <label className="ef-label">Enter Current Password</label>
                <div className="ef-input error">FavourTolulope <span>👁</span></div>
                <div className="ef-error">The current password is incorrect</div>
              </div>
              <div className="ef-group" style={{marginTop:12}}>
                <label className="ef-label">Official Email *</label>
                <div className="ef-input error">invalid-email <span>✉</span></div>
                <div className="ef-error">Please enter a valid email address</div>
              </div>
            </div>
            <div className="et-rules">
              <div className="rule">✓ Red border (#DC2626) on the input</div>
              <div className="rule">✓ Red caption directly below (font-size: 12px, font-weight: 600)</div>
              <div className="rule">✓ Validate on blur, not on every keystroke</div>
              <div className="rule">✕ Never show all errors at once on page load</div>
            </div>
          </div>

          {/* Error modal */}
          <div className="error-type-card">
            <div className="et-title">2. Error modal</div>
            <div className="et-desc">For system-level failures — API errors, authentication failures, network issues. Info icon (not warning triangle), specific message, single OK button.</div>
            <div className="et-demo centered">
              <div className="em-preview">
                <div className="em-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="0.5" fill="#DC2626" strokeWidth="2"/></svg>
                </div>
                <div className="em-title">Email not found</div>
                <div className="em-body">The specified email couldn't be found. Kindly check and try again.</div>
                <button className="em-btn">OK</button>
              </div>
            </div>
            <div className="et-rules">
              <div className="rule">✓ Info icon in red circle (not warning triangle)</div>
              <div className="rule">✓ Title: specific, not "Error occurred"</div>
              <div className="rule">✓ Body: explains what happened + what to do</div>
              <div className="rule">✓ Single "OK" button — full width, primary colour</div>
            </div>
          </div>
        </div>
      </section>

      <section className="ps">
        <h2 className="pt">Error copy guidelines</h2>
        <div className="copy-table">
          <div className="ct-head"><span>❌ Avoid</span><span>✓ Use instead</span><span>Why</span></div>
          {[
            { bad: 'Invalid input',               good: 'Please enter a valid email address',              why: 'Specific. Tells the user exactly what to fix.' },
            { bad: 'Error occurred',              good: 'Payment unsuccessful. Please try again.',         why: 'Names what failed and what to do next.' },
            { bad: 'Something went wrong',        good: 'We couldn\'t connect. Check your internet and retry.', why: 'Suggests a cause and action.' },
            { bad: 'The email field is required', good: 'Please enter your email address to continue.',    why: 'Tells what to do, not just what is missing.' },
            { bad: 'Password too short',          good: 'Password must be at least 8 characters.',        why: 'Gives the rule, not just the failure.' },
          ].map(r => (
            <div key={r.bad} className="ct-row">
              <span className="ct-bad">{r.bad}</span>
              <span className="ct-good">{r.good}</span>
              <span className="ct-why">{r.why}</span>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .ps { margin-bottom: 52px; }
        .pt { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
        .pd { font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; max-width: 600px; }

        .formula-box { background: var(--color-bg-subtle); border: 1.5px solid var(--color-border); border-radius: 10px; padding: 18px 20px; margin-bottom: 20px; display: flex; flex-direction: column; gap: 8px; }
        .formula-line { font-size: 14px; color: var(--color-text-secondary); line-height: 1.6; }
        .formula-line strong { color: var(--color-text); }

        .examples-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .example-card { border: 1.5px solid var(--color-border); border-radius: 12px; padding: 16px; background: var(--color-bg-raised); display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; }
        .example-page { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--color-text-muted); align-self: flex-start; }
        .es-icon {}
        .es-title { font-size: 13px; font-weight: 600; color: var(--color-text-secondary); }
        .es-sub { font-size: 11.5px; color: var(--color-text-muted); line-height: 1.5; }

        .error-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .error-type-card { border: 1.5px solid var(--color-border); border-radius: 12px; padding: 20px; background: var(--color-bg-raised); display: flex; flex-direction: column; gap: 14px; }
        .et-title { font-size: 13.5px; font-weight: 700; color: var(--color-text); }
        .et-desc { font-size: 13px; color: var(--color-text-secondary); line-height: 1.65; }
        .et-demo { background: var(--color-bg-subtle); border-radius: 8px; padding: 16px; }
        .et-demo.centered { display: flex; align-items: center; justify-content: center; }
        .et-rules { display: flex; flex-direction: column; gap: 6px; }
        .rule { font-size: 12.5px; color: var(--color-text-secondary); }

        /* Field errors */
        .ef-group { display: flex; flex-direction: column; gap: 5px; }
        .ef-label { font-size: 12px; font-weight: 600; color: var(--color-text); }
        .ef-input { border: 1.5px solid var(--color-border); border-radius: 8px; padding: 9px 12px; font-size: 13px; color: var(--color-text); display: flex; justify-content: space-between; align-items: center; background: white; }
        .ef-input.error { border-color: #DC2626; }
        .ef-error { font-size: 12px; font-weight: 600; color: #DC2626; }

        /* Error modal */
        .em-preview { background: white; border-radius: 16px; padding: 24px 20px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 10px; box-shadow: 0 4px 24px rgba(13,8,32,.08); border: 1px solid var(--color-border); width: 100%; max-width: 280px; }
        .em-icon {}
        .em-title { font-size: 14px; font-weight: 700; color: var(--color-text); }
        .em-body { font-size: 12.5px; color: var(--color-text-secondary); line-height: 1.6; }
        .em-btn { background: var(--color-primary); color: white; border: none; border-radius: 8px; padding: 9px 24px; font-size: 13px; font-weight: 700; cursor: pointer; font-family: var(--font-sans); }

        /* Copy table */
        .copy-table { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .ct-head { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; padding: 10px 16px; background: var(--color-bg-subtle); border-bottom: 1.5px solid var(--color-border); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--color-text-muted); }
        .ct-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; padding: 12px 16px; border-bottom: 1px solid var(--color-border); font-size: 13px; align-items: start; }
        .ct-row:last-child { border-bottom: none; }
        .ct-bad { color: #991B1B; }
        .ct-good { color: #166534; font-weight: 500; }
        .ct-why { color: var(--color-text-muted); font-size: 12.5px; line-height: 1.5; }
      `}</style>
    </div>
  )
}
