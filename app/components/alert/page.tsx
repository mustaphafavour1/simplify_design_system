'use client'
import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable } from '@/components/docs/PropsTable'
import { DosDonts } from '@/components/docs/DosDonts'

const props = [
  { name: 'variant',     type: '"info" | "success" | "warning" | "error"', default: '"info"',  required: false, description: 'Semantic variant controlling colour and icon.' },
  { name: 'title',       type: 'string',                                    default: '—',        required: false, description: 'Optional bold heading above the message.' },
  { name: 'description', type: 'string | ReactNode',                       default: '—',        required: true,  description: 'The alert message content.' },
  { name: 'dismissible', type: 'boolean',                                   default: 'false',    required: false, description: 'Shows a close button to dismiss the alert.' },
  { name: 'icon',        type: 'ReactNode',                                 default: 'auto',     required: false, description: 'Overrides the default variant icon.' },
]

const dos = [
  'Use alerts for system-level messages that affect the whole page or a major section.',
  'Include an action link or button in the alert when the user can do something about it.',
  'Write alert messages in plain language — state what happened and what to do next.',
  'Place alerts at the top of the relevant section, before the content they describe.',
]

const donts = [
  "Don't use error alerts for form field validation — use inline field errors instead.",
  "Don't use more than one alert variant on the same page at once.",
  "Don't write alerts in passive voice — 'Your KYC was rejected' not 'KYC rejection has occurred'.",
  "Don't auto-dismiss error or warning alerts — only success/info alerts may auto-dismiss.",
]

const variants = [
  { v: 'info',    icon: 'ℹ', title: 'Verification in progress', desc: 'Your business documents are being reviewed. This usually takes 1–2 business days.', bg: '#EFF6FF', border: '#BFDBFE', color: '#1E40AF', iconBg: '#DBEAFE' },
  { v: 'success', icon: '✓', title: 'Account verified',          desc: 'Your identity verification is complete. You now have full access to all features.', bg: '#F0FDF4', border: '#BBF7D0', color: '#166534', iconBg: '#DCFCE7' },
  { v: 'warning', icon: '⚠', title: 'Transaction limit reached', desc: 'You have reached your daily transfer limit of ₦500,000.00. Limits reset at midnight.', bg: '#FFFBEB', border: '#FDE68A', color: '#92400E', iconBg: '#FEF3C7' },
  { v: 'error',   icon: '✕', title: 'Payment unsuccessful',      desc: 'Your transfer of ₦50,000.00 could not be completed. Please check your account balance and try again.', bg: '#FFF5F5', border: '#FECACA', color: '#991B1B', iconBg: '#FEE2E2' },
]

export default function AlertPage() {
  return (
    <div>
      <PageHeader
        section="Components / Feedback"
        title="Alert"
        description="Alerts communicate system-level messages — confirmations, warnings, errors, and informational notices. They sit inline within page content, not as overlays."
        status="stable"
      />

      <ComponentPreview
        title="Variants"
        description="Four semantic variants, each mapping to a specific message type."
        code={`<Alert variant="info" title="Verification in progress" description="Your documents are being reviewed." />\n<Alert variant="success" title="Account verified" description="Your identity verification is complete." />\n<Alert variant="warning" title="Transaction limit reached" description="Daily limit of ₦500,000.00 reached." />\n<Alert variant="error" title="Payment unsuccessful" description="Transfer could not be completed. Try again." />`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
          {variants.map(a => (
            <div key={a.v} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', background: a.bg, border: `1.5px solid ${a.border}`, borderRadius: 10 }}>
              <span style={{ width: 28, height: 28, borderRadius: '50%', background: a.iconBg, color: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, flexShrink: 0, marginTop: 1 }}>{a.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: a.color, marginBottom: 3 }}>{a.title}</div>
                <div style={{ fontSize: 13, color: a.color, opacity: 0.85, lineHeight: 1.6 }}>{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Dismissible"
        code={`<Alert variant="info" title="New feature available" description="Bulk transfers are now live." dismissible />`}
      >
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', background: '#EFF6FF', border: '1.5px solid #BFDBFE', borderRadius: 10 }}>
            <span style={{ width: 28, height: 28, borderRadius: '50%', background: '#DBEAFE', color: '#1E40AF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, flexShrink: 0 }}>ℹ</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1E40AF', marginBottom: 3 }}>New feature available</div>
              <div style={{ fontSize: 13, color: '#1E40AF', opacity: 0.85, lineHeight: 1.6 }}>Bulk transfers are now live for Business accounts.</div>
            </div>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1E40AF', opacity: 0.6, fontSize: 16, padding: '0 4px', lineHeight: 1 }}>✕</button>
          </div>
        </div>
      </ComponentPreview>

      <PropsTable props={props} />
      <DosDonts dos={dos} donts={donts} />
    </div>
  )
}