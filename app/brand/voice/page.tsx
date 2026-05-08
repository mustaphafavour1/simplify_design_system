'use client'
import { PageHeader } from '@/components/docs/PageHeader'

export default function VoiceTonePage() {
  return (
    <div>
      <PageHeader
        section="Brand"
        title="Voice & Tone"
        description="How Simplify Synergy communicates — across products, interfaces, and touchpoints. Formal enough to earn trust. Warm enough to feel human."
      />

      {/* Principles */}
      <section className="vt-section">
        <h2 className="section-title">Core principles</h2>
        <div className="principles-grid">
          {[
            {
              title: 'Formal, not stiff',
              body: "We work in fintech — people's money is involved. Our voice reflects that with professionalism and precision. But professionalism doesn't mean cold. We write like a knowledgeable colleague, not a legal document.",
              example: { bad: 'The aforementioned transaction has been processed successfully.', good: 'Your transfer was successful.' },
            },
            {
              title: 'Clear, not clever',
              body: 'No wordplay, no idioms, no ambiguity. In financial interfaces, confusion costs trust. Every sentence should have one job — and do it plainly.',
              example: { bad: "Hang tight while we work our magic!", good: 'Processing your payment. This may take a moment.' },
            },
            {
              title: 'Reassuring, not dramatic',
              body: 'Errors and confirmations are high-stakes moments. Our tone should de-escalate, not amplify. Give users exactly the information they need to move forward — nothing more.',
              example: { bad: 'CRITICAL ERROR: Transaction failed!', good: 'Payment unsuccessful. Please check your account balance and try again.' },
            },
            {
              title: 'Direct and action-oriented',
              body: "We talk to the user, not about them. Use 'you/your', active voice, and verb-led labels. Get to the point — every word should earn its place.",
              example: { bad: 'Users are required to verify their identity before proceeding.', good: 'Verify your identity to continue.' },
            },
          ].map(p => (
            <div key={p.title} className="principle-card">
              <h3 className="principle-title">{p.title}</h3>
              <p className="principle-body">{p.body}</p>
              <div className="example-block">
                <div className="example-bad">
                  <span className="ex-label bad">✕ Avoid</span>
                  <span>{p.example.bad}</span>
                </div>
                <div className="example-good">
                  <span className="ex-label good">✓ Use</span>
                  <span>{p.example.good}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tone by context... */}
      <section className="vt-section">
        <h2 className="section-title">Tone by context</h2>
        <p className="section-desc">The core voice stays consistent — but tone shifts based on what the user is doing and how they&apos;re likely feeling in that moment.</p>
        <div className="context-table-wrap">
          <table className="context-table">
            <thead>
              <tr><th>Context</th><th>User feeling</th><th>Our tone</th><th>Example</th></tr>
            </thead>
            <tbody>
              {[
                { ctx: 'Onboarding',          feeling: 'Curious, cautious',    tone: 'Welcoming, guiding',           ex: '"Let\'s get your account set up. It takes about 3 minutes."' },
                { ctx: 'Confirmation dialogs', feeling: 'Uncertain, wants clarity', tone: 'Calm, specific, factual', ex: '"Confirm you want to remove account 2001223344 | John Chuks | First Bank from the bulk upload list."' },
                { ctx: 'Success states',       feeling: 'Relieved, satisfied',  tone: 'Affirming, brief',             ex: '"Transfer successful. ₦50,000.00 has been sent to John Chuks."' },
                { ctx: 'Error states',         feeling: 'Frustrated, worried',  tone: 'Direct, solution-focused',     ex: '"Payment unsuccessful. Your account balance may be insufficient."' },
                { ctx: 'Empty states',         feeling: 'Disoriented',          tone: 'Helpful, forward-looking',     ex: '"No transactions yet. Once you send or receive money, they\'ll appear here."' },
                { ctx: 'Loading states',       feeling: 'Impatient',            tone: 'Reassuring, honest',           ex: '"Processing your payment. This usually takes a few seconds."' },
                { ctx: 'KYB / Compliance',     feeling: 'Anxious',              tone: 'Clear, procedural, trustworthy', ex: '"Upload your CAC certificate to continue. Your documents are handled securely."' },
              ].map(r => (
                <tr key={r.ctx}>
                  <td className="ctx-name">{r.ctx}</td>
                  <td>{r.feeling}</td>
                  <td className="ctx-tone">{r.tone}</td>
                  <td className="ctx-example">{r.ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Numbers & Currency */}
      <section className="vt-section">
        <h2 className="section-title">Numbers & currency</h2>
        <p className="section-desc">Financial products live and die on data precision. These rules are non-negotiable across all SS products.</p>
        <div className="rules-grid">
          {[
            { rule: 'Always use two decimal places', desc: 'All monetary amounts must display exactly two decimal places, even when the value is whole. Applies everywhere — balances, transaction amounts, fees.', bad: '₦50,000', good: '₦50,000.00' },
            { rule: 'Right-align amounts in tables', desc: 'Monetary values in tables must be right-aligned so decimal points stack vertically, making scanning and comparison easy.', bad: 'Left-aligned mixed amounts', good: 'Right-aligned, decimals stacked' },
            { rule: 'Use ₦ symbol, not "NGN"', desc: 'In product interfaces, use ₦ directly before the amount with no space. Use "NGN" only in technical/API contexts.', bad: 'NGN 50,000.00', good: '₦50,000.00' },
            { rule: 'Commas for thousands separators', desc: 'Format large numbers with commas. Never use spaces or periods as thousand separators.', bad: '₦1000000.00', good: '₦1,000,000.00' },
            { rule: 'Spell out numbers under 10 in prose', desc: 'In body text, spell out one through nine. Use numerals from 10 onwards.', bad: 'We sent 3 notifications.', good: 'We sent three notifications.' },
            { rule: 'Dates: DD MMM YYYY', desc: 'Day-month-year with abbreviated month name. Never use slashes — they are ambiguous across regions.', bad: '04/05/2026', good: '04 May 2026' },
          ].map(r => (
            <div key={r.rule} className="rule-card">
              <h4 className="rule-title">{r.rule}</h4>
              <p className="rule-desc">{r.desc}</p>
              <div className="rule-examples">
                <div className="rule-bad"><span className="rl bad">✕</span>{r.bad}</div>
                <div className="rule-good"><span className="rl good">✓</span>{r.good}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Word list */}
      <section className="vt-section">
        <h2 className="section-title">Word choices</h2>
        <div className="word-grid">
          <div className="word-col">
            <div className="word-col-header good">Prefer</div>
            {[
              ['Verify', 'instead of "Authenticate"'],
              ['Send / Transfer', 'instead of "Remit"'],
              ['Account number', 'instead of "NUBAN"'],
              ['Try again', 'instead of "Retry"'],
              ['Remove', 'for reversible actions'],
              ['Delete', 'for permanent, irreversible actions only'],
              ['You / Your', 'instead of "The user" or "The customer"'],
              ['Processing', 'instead of "Pending" for active states'],
            ].map(([word, note]) => (
              <div key={word} className="word-item">
                <span className="word">{word}</span>
                <span className="word-note">{note}</span>
              </div>
            ))}
          </div>
          <div className="word-col">
            <div className="word-col-header bad">Avoid</div>
            {[
              ['Oops', 'Too casual for financial errors'],
              ['Magic / Seamless', 'Marketing fluff — be specific'],
              ['Please note that', 'Filler — just say it'],
              ['Successfully completed', '"Successful" alone is enough'],
              ['Click here', 'Use descriptive link labels'],
              ['Invalid', 'Say what is wrong specifically'],
              ['Error occurred', 'Too vague — explain what happened'],
              ['Kindly', 'Overly deferential — omit or use "Please"'],
            ].map(([word, note]) => (
              <div key={word} className="word-item">
                <span className="word">{word}</span>
                <span className="word-note">{note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .vt-section { margin-bottom: 56px; }
        .section-title { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
        .section-desc { font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; max-width: 600px; }
        .principles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .principle-card { border: 1.5px solid var(--color-border); border-radius: 12px; padding: 20px; background: var(--color-bg-raised); }
        .principle-title { font-size: 14px; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
        .principle-body { font-size: 13px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 14px; }
        .example-block { display: flex; flex-direction: column; gap: 6px; }
        .example-bad, .example-good { display: flex; align-items: flex-start; gap: 8px; font-size: 12.5px; padding: 8px 10px; border-radius: 7px; line-height: 1.5; }
        .example-bad { background: #FFF5F5; color: #991B1B; }
        .example-good { background: #F0FDF4; color: #166534; }
        .ex-label { font-size: 10px; font-weight: 700; flex-shrink: 0; margin-top: 1px; }
        .ex-label.bad { color: #DC2626; } .ex-label.good { color: #16A34A; }
        .context-table-wrap { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .context-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .context-table thead tr { background: var(--color-bg-subtle); border-bottom: 1.5px solid var(--color-border); }
        .context-table th { padding: 10px 16px; text-align: left; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-text-secondary); }
        .context-table td { padding: 12px 16px; border-bottom: 1px solid var(--color-border); vertical-align: top; color: var(--color-text-secondary); line-height: 1.6; }
        .context-table tr:last-child td { border-bottom: none; }
        .ctx-name { font-weight: 700; color: var(--color-text); white-space: nowrap; }
        .ctx-tone { color: var(--color-primary); font-weight: 600; }
        .ctx-example { font-style: italic; font-size: 12.5px; }
        .rules-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .rule-card { border: 1.5px solid var(--color-border); border-radius: 12px; padding: 20px; background: var(--color-bg-raised); }
        .rule-title { font-size: 13.5px; font-weight: 600; color: var(--color-text); margin-bottom: 6px; }
        .rule-desc { font-size: 13px; color: var(--color-text-secondary); line-height: 1.65; margin-bottom: 12px; }
        .rule-examples { display: flex; flex-direction: column; gap: 5px; }
        .rule-bad, .rule-good { display: flex; align-items: center; gap: 8px; font-size: 12.5px; font-family: var(--font-mono); padding: 6px 10px; border-radius: 6px; }
        .rule-bad { background: #FFF5F5; color: #991B1B; }
        .rule-good { background: #F0FDF4; color: #166534; }
        .rl { font-size: 11px; font-weight: 800; font-family: var(--font-sans); flex-shrink: 0; }
        .rl.bad { color: #DC2626; } .rl.good { color: #16A34A; }
        .word-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .word-col { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .word-col-header { padding: 12px 16px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1.5px solid var(--color-border); }
        .word-col-header.good { color: #16A34A; background: #F0FDF4; }
        .word-col-header.bad { color: #DC2626; background: #FFF5F5; }
        .word-item { display: flex; flex-direction: column; padding: 10px 16px; border-bottom: 1px solid var(--color-border); }
        .word-item:last-child { border-bottom: none; }
        .word { font-size: 13px; font-weight: 600; color: var(--color-text); }
        .word-note { font-size: 12px; color: var(--color-text-muted); margin-top: 1px; }
      `}</style>
    </div>
  )
}