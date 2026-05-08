'use client'
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
            <span>Don&apos;t</span>
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