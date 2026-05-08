import { PageHeader } from '@/components/docs/PageHeader'

export const metadata = { title: 'Contributing — SS Design System' }

const checklist = [
  { category: 'Design',       items: ['Figma component with all variants and states defined', 'Uses design tokens (no hardcoded colours or spacing)', 'Dark mode considerations noted', 'Mobile/responsive behaviour documented', 'Accessibility notes — contrast ratios, focus state visible'] },
  { category: 'Documentation',items: ['Component page created in the design system', 'Usage guidelines written (do\'s and don\'ts)', 'All props/API documented', 'At least 2 code examples provided', 'Related components linked'] },
  { category: 'Code',         items: ['Component implemented in React/TypeScript', 'Props typed correctly with JSDoc comments', 'Keyboard accessible (Tab, Enter, Escape where applicable)', 'ARIA roles and labels applied', 'Unit tests written for core behaviour'] },
]

export default function ContributingPage() {
  return (
    <div>
      <PageHeader
        section="Contributing"
        title="Contributing"
        description="The design system is a shared resource — owned by everyone, maintained by everyone. Here's how to propose changes, add new components, and keep things consistent."
      />

      {/* Process */}
      <section className="contrib-section">
        <h2 className="section-title">Contribution process</h2>
        <div className="steps">
          {[
            { step: '01', title: 'Identify the gap',    body: 'Check if what you need already exists or if a variant of an existing component covers it. Avoid duplication.' },
            { step: '02', title: 'Raise a proposal',    body: 'Open a GitHub issue using the "New Component" template. Describe the use case, which product needs it, and share any Figma references.' },
            { step: '03', title: 'Design in Figma',     body: 'Create the component in the SS Figma file, covering all variants, states, and responsive behaviour. Share the link in your proposal.' },
            { step: '04', title: 'Get reviewed',         body: 'At least one designer and one engineer must review and approve before the component is added to the system.' },
            { step: '05', title: 'Build & document',    body: 'Implement the component, write the documentation page following the template, and ensure the checklist below is complete.' },
            { step: '06', title: 'Ship & announce',     body: 'Merge to main, bump the version in the changelog, and notify the team in Slack so everyone knows it\'s available.' },
          ].map(s => (
            <div key={s.step} className="step-item">
              <div className="step-num">{s.step}</div>
              <div className="step-body">
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Checklist */}
      <section className="contrib-section">
        <h2 className="section-title">Component checklist</h2>
        <p className="section-desc">A component is only considered "done" when all items below are satisfied.</p>
        <div className="checklist-grid">
          {checklist.map(c => (
            <div key={c.category} className="checklist-card">
              <h3 className="checklist-category">{c.category}</h3>
              <ul className="checklist-items">
                {c.items.map((item, i) => (
                  <li key={i}>
                    <span className="check-icon">☐</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Naming */}
      <section className="contrib-section">
        <h2 className="section-title">Naming conventions</h2>
        <div className="naming-table-wrap">
          <table className="naming-table">
            <thead><tr><th>Thing</th><th>Convention</th><th>Example</th></tr></thead>
            <tbody>
              {[
                ['Component names',  'PascalCase',           'StatCard, IconButton, DatePicker'],
                ['Props',            'camelCase',            'isLoading, leftIcon, fullWidth'],
                ['CSS tokens',       '--kebab-case',         '--color-primary, --space-4'],
                ['Figma layers',     'PascalCase / groups',  'Button/Primary/Default'],
                ['Figma tokens',     'category/name/variant','color/primary/500'],
                ['File names',       'kebab-case',           'stat-card.tsx, date-picker.tsx'],
              ].map(([thing, conv, ex]) => (
                <tr key={thing as string}>
                  <td>{thing}</td>
                  <td><code>{conv}</code></td>
                  <td><code className="ex-code">{ex}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Changelog */}
      <section className="contrib-section">
        <h2 className="section-title">Changelog</h2>
        <div className="changelog">
          <div className="changelog-entry">
            <div className="changelog-meta">
              <span className="changelog-version">v1.0.0</span>
              <span className="changelog-date">May 2026</span>
              <span className="changelog-type initial">Initial release</span>
            </div>
            <ul className="changelog-items">
              <li>Design system website launched.</li>
              <li>Brand foundations: colours, typography, logo guidelines.</li>
              <li>Design tokens defined and documented.</li>
              <li>Core component library — Button, Input, Table, Modal, Badge, Card, Toast, Alert, Avatar, Sidebar Nav, Tabs, Pagination, Stat Card, Empty State, Skeleton.</li>
              <li>Pattern library — Dashboard layout, Authentication, Forms & Validation.</li>
              <li>Product showcase — Maestro MFB, VoxePay, OAGF Treasury.</li>
            </ul>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contrib-section { margin-bottom: 56px; }
        .section-title { font-size: 1.125rem; font-weight: 800; color: var(--color-text); margin-bottom: 8px; }
        .section-desc { font-size: 13px; color: var(--color-text-secondary); margin-bottom: 20px; line-height: 1.6; }

        /* Steps */
        .steps { display: flex; flex-direction: column; gap: 0; }
        .step-item {
          display: flex; gap: 20px;
          padding: 20px 0;
          border-bottom: 1px solid var(--color-border);
        }
        .step-item:last-child { border-bottom: none; }
        .step-num {
          font-size: 1.5rem; font-weight: 900;
          color: var(--color-primary); opacity: 0.3;
          flex-shrink: 0; width: 40px;
          line-height: 1;
        }
        .step-title { font-size: 14px; font-weight: 800; color: var(--color-text); margin-bottom: 4px; }
        .step-desc { font-size: 13px; color: var(--color-text-secondary); line-height: 1.7; }

        /* Checklist */
        .checklist-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .checklist-card {
          border: 1.5px solid var(--color-border);
          border-radius: 12px; padding: 20px;
          background: var(--color-bg-raised);
        }
        .checklist-category {
          font-size: 12px; font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.08em;
          color: var(--color-primary); margin-bottom: 14px;
        }
        .checklist-items { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .checklist-items li {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 12.5px; line-height: 1.6; color: var(--color-text-secondary);
        }
        .check-icon { color: var(--color-border-strong); flex-shrink: 0; font-size: 14px; }

        /* Naming */
        .naming-table-wrap { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .naming-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .naming-table thead tr { background: var(--color-bg-subtle); border-bottom: 1.5px solid var(--color-border); }
        .naming-table th { padding: 10px 16px; text-align: left; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-text-secondary); }
        .naming-table td { padding: 12px 16px; border-bottom: 1px solid var(--color-border); color: var(--color-text-secondary); }
        .naming-table tr:last-child td { border-bottom: none; }
        .naming-table td code { font-family: var(--font-mono); font-size: 12px; background: var(--color-bg-subtle); padding: 2px 6px; border-radius: 4px; color: var(--color-text); }
        .naming-table .ex-code { color: var(--color-primary); background: var(--color-primary-faint); }

        /* Changelog */
        .changelog { }
        .changelog-entry { border: 1.5px solid var(--color-border); border-radius: 12px; padding: 20px 24px; background: var(--color-bg-raised); }
        .changelog-meta { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .changelog-version { font-size: 1rem; font-weight: 900; color: var(--color-text); }
        .changelog-date { font-size: 12px; color: var(--color-text-muted); }
        .changelog-type {
          font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
          padding: 2px 8px; border-radius: 99px; border: 1px solid;
        }
        .changelog-type.initial { color: var(--color-primary); background: var(--color-primary-faint); border-color: var(--color-primary-subtle); }
        .changelog-items { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
        .changelog-items li { font-size: 13px; line-height: 1.6; color: var(--color-text-secondary); padding-left: 16px; position: relative; }
        .changelog-items li::before { content: '—'; position: absolute; left: 0; color: var(--color-primary); font-weight: 800; }
      `}</style>
    </div>
  )
}
