type Prop = {
  name: string
  type: string
  default: string
  required: boolean
  description: string
}

export function PropsTable({ props }: { props: Prop[] }) {
  return (
    <section className="pt-section">
      <h3 className="pt-heading">Props</h3>
      <div className="pt-wrap">
        <table className="pt-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map(p => (
              <tr key={p.name}>
                <td>
                  <code className="prop-name">{p.name}</code>
                  {p.required && <span className="required-badge">required</span>}
                </td>
                <td><code className="prop-type">{p.type}</code></td>
                <td><code className="prop-default">{p.default}</code></td>
                <td className="prop-desc">{p.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .pt-section { margin-bottom: 40px; }
        .pt-heading {
          font-size: 15px; font-weight: 800;
          color: var(--color-text);
          margin-bottom: 12px;
        }
        .pt-wrap {
          border: 1.5px solid var(--color-border);
          border-radius: 12px;
          overflow: hidden;
        }
        .pt-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }
        .pt-table thead tr {
          background: var(--color-bg-subtle);
          border-bottom: 1.5px solid var(--color-border);
        }
        .pt-table th {
          padding: 10px 16px;
          text-align: left;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-text-secondary);
        }
        .pt-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--color-border);
          vertical-align: top;
        }
        .pt-table tr:last-child td { border-bottom: none; }
        .pt-table tr:hover td { background: var(--color-bg-subtle); }
        .prop-name {
          font-family: var(--font-mono); font-size: 12px;
          font-weight: 700;
          color: var(--color-primary);
          background: var(--color-primary-faint);
          padding: 2px 6px; border-radius: 4px;
        }
        .required-badge {
          margin-left: 6px;
          font-size: 10px; font-weight: 700;
          color: #DC2626; background: #FEF2F2;
          padding: 1px 6px; border-radius: 99px;
          border: 1px solid #FECACA;
          font-family: var(--font-sans);
        }
        .prop-type {
          font-family: var(--font-mono); font-size: 12px;
          color: var(--color-text-secondary);
          background: var(--color-bg-subtle);
          padding: 2px 6px; border-radius: 4px;
        }
        .prop-default {
          font-family: var(--font-mono); font-size: 12px;
          color: var(--color-text-muted);
        }
        .prop-desc { color: var(--color-text-secondary); line-height: 1.6; }
      `}</style>
    </section>
  )
}


export function DosDonts({ dos, donts }: { dos: string[]; donts: string[] }) {
  return (
    <section className="dd-section">
      <h3 className="dd-heading">Usage guidelines</h3>
      <div className="dd-grid">
        <div className="dd-col dd-do">
          <div className="dd-col-header">
            <span className="dd-icon do">✓</span>
            <span>Do</span>
          </div>
          <ul>
            {dos.map((d, i) => (
              <li key={i}>
                <span className="dd-bullet do" />
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="dd-col dd-dont">
          <div className="dd-col-header">
            <span className="dd-icon dont">✕</span>
            <span>Don't</span>
          </div>
          <ul>
            {donts.map((d, i) => (
              <li key={i}>
                <span className="dd-bullet dont" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .dd-section { margin-bottom: 40px; }
        .dd-heading { font-size: 15px; font-weight: 800; color: var(--color-text); margin-bottom: 12px; }
        .dd-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .dd-col {
          border-radius: 12px;
          border: 1.5px solid;
          padding: 20px;
        }
        .dd-do { border-color: #BBF7D0; background: #F0FDF4; }
        .dd-dont { border-color: #FECACA; background: #FFF5F5; }
        .dd-col-header {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.08em;
          margin-bottom: 14px;
        }
        .dd-do .dd-col-header { color: #16A34A; }
        .dd-dont .dd-col-header { color: #DC2626; }
        .dd-icon {
          width: 20px; height: 20px;
          border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 800;
        }
        .dd-icon.do { background: #16A34A; color: #fff; }
        .dd-icon.dont { background: #DC2626; color: #fff; }
        .dd-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .dd-col li {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 13px; line-height: 1.6;
        }
        .dd-do li { color: #166534; }
        .dd-dont li { color: #991B1B; }
        .dd-bullet {
          width: 5px; height: 5px; border-radius: 50%;
          flex-shrink: 0; margin-top: 7px;
        }
        .dd-bullet.do { background: #16A34A; }
        .dd-bullet.dont { background: #DC2626; }
      `}</style>
    </section>
  )
}
