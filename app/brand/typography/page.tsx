import { PageHeader } from '@/components/docs/PageHeader'

export const metadata = { title: 'Typography — SS Design System' }

const typeScale = [
  { name: 'Display',     token: '--text-display',  size: '3.5rem / 56px',   weight: '900', lineHeight: '1.05', usage: 'Hero headlines, marketing moments only.' },
  { name: 'H1',          token: '--text-h1',       size: '2.25rem / 36px',  weight: '900', lineHeight: '1.1',  usage: 'Page titles. One per page.' },
  { name: 'H2',          token: '--text-h2',       size: '1.5rem / 24px',   weight: '800', lineHeight: '1.2',  usage: 'Section headings.' },
  { name: 'H3',          token: '--text-h3',       size: '1.125rem / 18px', weight: '700', lineHeight: '1.3',  usage: 'Subsection headings, card titles.' },
  { name: 'H4',          token: '--text-h4',       size: '1rem / 16px',     weight: '700', lineHeight: '1.4',  usage: 'Small headings, table column headers.' },
  { name: 'Body Large',  token: '--text-body-lg',  size: '1rem / 16px',     weight: '400', lineHeight: '1.75', usage: 'Long-form reading, article content.' },
  { name: 'Body',        token: '--text-body',     size: '0.875rem / 14px', weight: '400', lineHeight: '1.7',  usage: 'Default UI text across all products.' },
  { name: 'Body Small',  token: '--text-body-sm',  size: '0.8125rem / 13px',weight: '400', lineHeight: '1.65', usage: 'Secondary descriptions, helper text.' },
  { name: 'Label',       token: '--text-label',    size: '0.75rem / 12px',  weight: '700', lineHeight: '1',    usage: 'Form labels, badges, navigation items.' },
  { name: 'Caption',     token: '--text-caption',  size: '0.6875rem / 11px',weight: '500', lineHeight: '1.5',  usage: 'Timestamps, legal text, footnotes.' },
  { name: 'Code',        token: '--text-code',     size: '0.8125rem / 13px',weight: '400', lineHeight: '1.7',  usage: 'Code snippets, token names, API keys.' },
]

const weights = [
  { name: 'Light',      value: '300', sample: 'Financial clarity starts here.' },
  { name: 'Regular',    value: '400', sample: 'Financial clarity starts here.' },
  { name: 'Medium',     value: '500', sample: 'Financial clarity starts here.' },
  { name: 'SemiBold',   value: '600', sample: 'Financial clarity starts here.' },
  { name: 'Bold',       value: '700', sample: 'Financial clarity starts here.' },
  { name: 'ExtraBold',  value: '800', sample: 'Financial clarity starts here.' },
  { name: 'Black',      value: '900', sample: 'Financial clarity starts here.' },
]

export default function TypographyPage() {
  return (
    <div>
      <PageHeader
        section="Brand"
        title="Typography"
        description="Simplify Synergy uses Nunito as its primary typeface — a well-rounded sans-serif that pairs warmth with the precision needed for data-heavy financial interfaces. Poppins is used in product UIs."
      />

      {/* Typefaces */}
      <section className="type-section">
        <h2 className="section-title">Typefaces</h2>
        <div className="typeface-grid">
          <div className="typeface-card primary-face">
            <div className="face-label">Primary — Interfaces</div>
            <div className="face-name poppins">Poppins</div>
            <div className="face-sample poppins">AaBbCcDd 0123</div>
            <div className="face-chars poppins">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
            <div className="face-usage">Used across all product UIs — Maestro MFB, VoxePay, OAGF Treasury Portal.</div>
            <div className="face-source">Google Fonts · Free</div>
          </div>
          <div className="typeface-card secondary-face">
            <div className="face-label">Secondary — Documentation & Web</div>
            <div className="face-name nunito">Nunito</div>
            <div className="face-sample nunito">AaBbCcDd 0123</div>
            <div className="face-chars nunito">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
            <div className="face-usage">Used on the marketing website, this design system, and editorial content.</div>
            <div className="face-source">Google Fonts · Free</div>
          </div>
        </div>
      </section>

      {/* Type Scale */}
      <section className="type-section">
        <h2 className="section-title">Type Scale</h2>
        <p className="section-desc">Built on a modular scale with Poppins as the rendering font. Click any row to copy the CSS token.</p>
        <div className="scale-table">
          {typeScale.map(t => (
            <div key={t.name} className="scale-row">
              <div className="scale-meta">
                <span className="scale-name">{t.name}</span>
                <code className="scale-token">{t.token}</code>
              </div>
              <div
                className="scale-sample"
                style={{
                  fontSize: t.size.split(' / ')[0],
                  fontWeight: t.name === 'Code' ? 400 : parseInt(t.weight),
                  fontFamily: t.name === 'Code' ? "'JetBrains Mono', monospace" : 'Poppins, sans-serif',
                  lineHeight: t.lineHeight,
                }}
              >
                {t.name === 'Display' ? 'Simplify Synergy' :
                 t.name === 'H1' ? 'Dashboard Overview' :
                 t.name === 'H2' ? 'Transaction History' :
                 t.name === 'H3' ? 'Account Settings' :
                 t.name === 'H4' ? 'Recent transfers' :
                 t.name === 'Code' ? 'color.primary.500' :
                 'The quick brown fox jumps over the lazy dog.'}
              </div>
              <div className="scale-specs">
                <span>{t.size}</span>
                <span>{t.weight}</span>
                <span>/{t.lineHeight}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weights */}
      <section className="type-section">
        <h2 className="section-title">Font Weights</h2>
        <div className="weights-list">
          {weights.map(w => (
            <div key={w.value} className="weight-row">
              <span className="weight-label">{w.name} · {w.value}</span>
              <span className="weight-sample" style={{ fontWeight: parseInt(w.value) }}>{w.sample}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Usage guidelines */}
      <section className="type-section">
        <h2 className="section-title">Guidelines</h2>
        <div className="guidelines-grid">
          {[
            { rule: 'Hierarchy through weight', body: 'Never use size alone to communicate hierarchy. Pair size changes with weight changes. H1 should feel decisively bigger AND heavier than body text.' },
            { rule: 'Limit weights in use', body: 'Any single UI screen should use at most 3 font weights. Typically 400 (body), 600 (labels/emphasis), and 800–900 (headings).' },
            { rule: 'Line length', body: 'Body text should stay between 60–75 characters per line. Beyond that, reading becomes fatiguing — especially in dashboards.' },
            { rule: 'Never justify text', body: 'Left-aligned text only. Justified text creates uneven word spacing that hurts readability, especially at smaller sizes in financial tables.' },
          ].map(g => (
            <div key={g.rule} className="guideline-item">
              <div className="guideline-rule">{g.rule}</div>
              <div className="guideline-body">{g.body}</div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .type-section { margin-bottom: 56px; }
        .section-title { font-size: 1.125rem; font-weight: 800; color: var(--color-text); margin-bottom: 8px; }
        .section-desc { font-size: 13px; color: var(--color-text-secondary); margin-bottom: 20px; line-height: 1.6; }

        /* Typefaces */
        .typeface-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .typeface-card {
          border: 1.5px solid var(--color-border);
          border-radius: 12px;
          padding: 24px;
          background: var(--color-bg-raised);
        }
        .primary-face { border-color: var(--color-primary-subtle); background: var(--color-primary-faint); }
        .face-label {
          font-size: 10px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.1em;
          color: var(--color-primary); margin-bottom: 12px;
        }
        .face-name { font-size: 2.5rem; font-weight: 800; color: var(--color-text); line-height: 1; margin-bottom: 8px; }
        .poppins { font-family: 'Poppins', sans-serif; }
        .nunito  { font-family: 'Nunito', sans-serif; }
        .face-sample { font-size: 2rem; font-weight: 300; color: var(--color-text); margin-bottom: 12px; opacity: 0.6; }
        .face-chars { font-size: 11px; color: var(--color-text-secondary); letter-spacing: 0.05em; margin-bottom: 12px; line-height: 1.8; }
        .face-usage { font-size: 12.5px; color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 8px; }
        .face-source { font-size: 11px; color: var(--color-text-muted); font-weight: 600; }

        /* Scale */
        .scale-table { display: flex; flex-direction: column; gap: 0; border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .scale-row {
          display: flex; align-items: baseline; gap: 24px;
          padding: 16px 20px;
          border-bottom: 1px solid var(--color-border);
          transition: background 0.12s;
        }
        .scale-row:last-child { border-bottom: none; }
        .scale-row:hover { background: var(--color-bg-subtle); }
        .scale-meta { min-width: 160px; flex-shrink: 0; }
        .scale-name { display: block; font-size: 12px; font-weight: 700; color: var(--color-text); margin-bottom: 3px; }
        .scale-token { font-size: 10px; font-family: var(--font-mono); color: var(--color-primary); background: var(--color-primary-faint); padding: 1px 5px; border-radius: 3px; }
        .scale-sample { flex: 1; color: var(--color-text); min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .scale-specs { display: flex; gap: 10px; flex-shrink: 0; }
        .scale-specs span { font-size: 11px; font-family: var(--font-mono); color: var(--color-text-muted); }

        /* Weights */
        .weights-list { display: flex; flex-direction: column; gap: 0; border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .weight-row {
          display: flex; align-items: center; gap: 24px;
          padding: 14px 20px;
          border-bottom: 1px solid var(--color-border);
        }
        .weight-row:last-child { border-bottom: none; }
        .weight-label { min-width: 140px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-text-muted); }
        .weight-sample { font-size: 1.25rem; color: var(--color-text); font-family: 'Poppins', sans-serif; }

        /* Guidelines */
        .guidelines-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .guideline-item { padding: 20px; border: 1.5px solid var(--color-border); border-radius: 12px; background: var(--color-bg-raised); }
        .guideline-rule { font-size: 13px; font-weight: 800; color: var(--color-text); margin-bottom: 6px; }
        .guideline-body { font-size: 13px; color: var(--color-text-secondary); line-height: 1.7; }
      `}</style>
    </div>
  )
}
