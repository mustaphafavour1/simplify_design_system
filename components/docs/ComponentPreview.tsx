'use client'
import { useState } from 'react'

type Props = {
  title: string
  description?: string
  code: string
  children: React.ReactNode
}

export function ComponentPreview({ title, description, code, children }: Props) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview')
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section className="cp-section">
      <div className="cp-header">
        <div>
          <h3 className="cp-title">{title}</h3>
          {description && <p className="cp-desc">{description}</p>}
        </div>
      </div>

      <div className="cp-block">
        {/* Tab bar */}
        <div className="cp-tabs">
          <button
            className={`cp-tab ${tab === 'preview' ? 'active' : ''}`}
            onClick={() => setTab('preview')}
          >
            Preview
          </button>
          <button
            className={`cp-tab ${tab === 'code' ? 'active' : ''}`}
            onClick={() => setTab('code')}
          >
            Code
          </button>
          <div className="cp-tab-spacer" />
          <button className="cp-copy" onClick={copy}>
            {copied ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Copied
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                Copy
              </>
            )}
          </button>
        </div>

        {/* Preview pane */}
        {tab === 'preview' && (
          <div className="cp-preview">
            {children}
          </div>
        )}

        {/* Code pane */}
        {tab === 'code' && (
          <div className="cp-code">
            <pre><code>{code}</code></pre>
          </div>
        )}
      </div>

      <style jsx>{`
        .cp-section { margin-bottom: 40px; }
        .cp-header { margin-bottom: 12px; }
        .cp-title { font-size: 15px; font-weight: 800; color: var(--color-text); margin-bottom: 4px; }
        .cp-desc { font-size: 13px; color: var(--color-text-secondary); line-height: 1.6; }

        .cp-block {
          border: 1.5px solid var(--color-border);
          border-radius: 12px;
          overflow: hidden;
          background: var(--color-bg-raised);
        }

        .cp-tabs {
          display: flex;
          align-items: center;
          border-bottom: 1.5px solid var(--color-border);
          padding: 0 4px;
          background: var(--color-bg);
        }
        .cp-tab {
          padding: 10px 14px;
          font-size: 12.5px;
          font-weight: 600;
          font-family: var(--font-sans);
          color: var(--color-text-muted);
          background: none;
          border: none;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          margin-bottom: -1.5px;
          transition: all 0.12s;
        }
        .cp-tab:hover { color: var(--color-text); }
        .cp-tab.active { color: var(--color-primary); border-bottom-color: var(--color-primary); }
        .cp-tab-spacer { flex: 1; }
        .cp-copy {
          display: flex; align-items: center; gap: 5px;
          padding: 5px 10px;
          font-size: 11.5px;
          font-weight: 600;
          font-family: var(--font-sans);
          color: var(--color-text-secondary);
          background: none;
          border: 1px solid var(--color-border);
          border-radius: 6px;
          cursor: pointer;
          margin-right: 8px;
          transition: all 0.12s;
        }
        .cp-copy:hover { color: var(--color-primary); border-color: var(--color-primary); }

        .cp-preview {
          padding: 36px 32px;
          min-height: 100px;
          display: flex;
          align-items: center;
          background: var(--color-bg-raised);
          /* Subtle dot grid */
          background-image: radial-gradient(circle, var(--color-border) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .cp-code {
          background: #0D0820;
          overflow-x: auto;
        }
        .cp-code pre {
          padding: 24px 28px;
          margin: 0;
        }
        .cp-code code {
          font-size: 13px;
          line-height: 1.7;
          color: #C8BDED;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          white-space: pre;
        }
      `}</style>

      <style jsx global>{`
        /* ── Button styles for all previews ── */
        .ss-btn {
          display: inline-flex; align-items: center; justify-content: center;
          font-family: var(--font-sans);
          font-size: 14px; font-weight: 700;
          border-radius: 8px;
          padding: 9px 18px;
          border: 1.5px solid transparent;
          cursor: pointer;
          transition: all 0.15s;
          line-height: 1;
        }
        .ss-btn:disabled { opacity: 0.45; cursor: not-allowed; }
        .ss-btn-primary { background: var(--color-primary); color: #fff; border-color: var(--color-primary); }
        .ss-btn-primary:not(:disabled):hover { background: var(--color-primary-dark); border-color: var(--color-primary-dark); transform: translateY(-1px); }
        .ss-btn-secondary { background: transparent; color: var(--color-primary); border-color: var(--color-primary); }
        .ss-btn-secondary:not(:disabled):hover { background: var(--color-primary-faint); }
        .ss-btn-ghost { background: transparent; color: var(--color-text); border-color: var(--color-border); }
        .ss-btn-ghost:not(:disabled):hover { border-color: var(--color-primary); color: var(--color-primary); }
        .ss-btn-danger { background: #DC2626; color: #fff; border-color: #DC2626; }
        .ss-btn-danger:not(:disabled):hover { background: #B91C1C; }
        .ss-btn-sm { padding: 6px 12px; font-size: 12.5px; border-radius: 6px; }
        .ss-btn-lg { padding: 12px 24px; font-size: 15px; border-radius: 10px; }
        .ss-btn-loading { opacity: 0.8; cursor: not-allowed; pointer-events: none; }
        .ss-spinner {
          display: inline-block;
          width: 13px; height: 13px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: ss-spin 0.65s linear infinite;
          margin-right: 8px;
          flex-shrink: 0;
        }
        @keyframes ss-spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}
