'use client'
import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable } from '@/components/docs/PropsTable'
import { DosDonts } from '@/components/docs/DosDonts'

const props = [
  { name: 'variant',    type: '"success" | "error" | "warning" | "info"', default: '"info"',  required: false, description: 'Semantic variant.' },
  { name: 'title',      type: 'string',                                    default: '—',        required: true,  description: 'Short toast message.' },
  { name: 'description',type: 'string',                                    default: '—',        required: false, description: 'Optional supporting detail.' },
  { name: 'duration',   type: 'number',                                    default: '4000',     required: false, description: 'Auto-dismiss duration in ms. Pass 0 to disable.' },
  { name: 'action',     type: '{ label: string; onClick: () => void }',    default: '—',        required: false, description: 'Optional inline action button.' },
]

const dos = [
  'Use toasts for transient feedback — actions the user just performed.',
  'Keep toast messages to one short sentence. The title should be self-sufficient.',
  'Position toasts at the bottom-right on desktop, bottom-center on mobile.',
  'Allow only one toast visible at a time. Queue subsequent ones.',
]

const donts = [
  "Don't use toasts for critical errors — use an Alert or Modal instead.",
  "Don't auto-dismiss error toasts — the user must acknowledge them.",
  "Don't stack more than 3 toasts — clear the queue before adding new ones.",
  "Don't put long descriptions or CTAs in toasts — keep them lightweight.",
]

const toastVariants = [
  { v: 'success', icon: '✓', title: 'Transfer successful',       desc: '₦50,000.00 sent to John Chuks.',    bg: '#F0FDF4', border: '#BBF7D0', color: '#166534', iconBg: '#DCFCE7' },
  { v: 'error',   icon: '✕', title: 'Payment failed',            desc: 'Insufficient account balance.',      bg: '#FFF5F5', border: '#FECACA', color: '#991B1B', iconBg: '#FEE2E2' },
  { v: 'warning', icon: '⚠', title: 'Session expiring soon',     desc: 'You will be logged out in 2 minutes.', bg: '#FFFBEB', border: '#FDE68A', color: '#92400E', iconBg: '#FEF3C7' },
  { v: 'info',    icon: 'ℹ', title: 'Verification in progress',  desc: 'We will notify you when complete.', bg: '#EFF6FF', border: '#BFDBFE', color: '#1E40AF', iconBg: '#DBEAFE' },
]

export default function ToastPage() {
  return (
    <div>
      <PageHeader
        section="Components / Feedback"
        title="Toast"
        description="Toasts are short-lived, non-blocking notifications that confirm an action or surface a system event. They appear and disappear automatically — except for errors."
        status="stable"
      />

      <ComponentPreview
        title="Variants"
        description="Toasts use the same four semantic variants as Alert. The visual style is more compact to suit the transient, overlay nature."
        code={`toast.success({ title: 'Transfer successful', description: '₦50,000.00 sent to John Chuks.' })\ntoast.error({ title: 'Payment failed', description: 'Insufficient account balance.' })\ntoast.warning({ title: 'Session expiring soon' })\ntoast.info({ title: 'Verification in progress' })`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', maxWidth: 360 }}>
          {toastVariants.map(t => (
            <div key={t.v} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px 14px', background: t.bg, border: `1.5px solid ${t.border}`, borderRadius: 10, boxShadow: '0 4px 16px rgba(13,8,32,0.08)' }}>
              <span style={{ width: 24, height: 24, borderRadius: '50%', background: t.iconBg, color: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, flexShrink: 0, marginTop: 1 }}>{t.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: t.color, lineHeight: 1.3 }}>{t.title}</div>
                <div style={{ fontSize: 12, color: t.color, opacity: 0.75, marginTop: 2, lineHeight: 1.5 }}>{t.desc}</div>
              </div>
              <button style={{ background: 'none', border: 'none', color: t.color, opacity: 0.5, fontSize: 14, cursor: 'pointer', padding: '0 2px', lineHeight: 1, flexShrink: 0 }}>✕</button>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With action"
        description="Include an action when the user can immediately respond to the toast."
        code={`toast.error({\n  title: 'Transfer failed',\n  description: 'Insufficient balance.',\n  action: { label: 'Add funds', onClick: () => router.push('/add-funds') }\n})`}
      >
        <div style={{ maxWidth: 360, width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px 14px', background: '#FFF5F5', border: '1.5px solid #FECACA', borderRadius: 10, boxShadow: '0 4px 16px rgba(13,8,32,0.08)' }}>
            <span style={{ width: 24, height: 24, borderRadius: '50%', background: '#FEE2E2', color: '#991B1B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, flexShrink: 0 }}>✕</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#991B1B' }}>Transfer failed</div>
              <div style={{ fontSize: 12, color: '#991B1B', opacity: 0.75, margin: '2px 0 8px', lineHeight: 1.5 }}>Insufficient account balance.</div>
              <button style={{ fontSize: 12, fontWeight: 700, color: '#991B1B', background: '#FEE2E2', border: 'none', padding: '4px 10px', borderRadius: 6, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>Add funds</button>
            </div>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Positioning"
        description="Always bottom-right on desktop. Bottom-center on mobile. Never top — financial notifications should not compete with page headers."
        code=""
      >
        <div style={{ position: 'relative', width: '100%', height: 200, background: 'var(--color-bg-subtle)', borderRadius: 10, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: 16, right: 16, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: '#F0FDF4', border: '1.5px solid #BBF7D0', borderRadius: 10, boxShadow: '0 4px 16px rgba(13,8,32,0.1)', fontSize: 12, fontWeight: 600, color: '#166534', whiteSpace: 'nowrap' }}>
              ✓ &nbsp;Transfer successful
            </div>
          </div>
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 12, color: 'var(--color-text-muted)' }}>Page content</span>
        </div>
      </ComponentPreview>

      <PropsTable props={props} />
      <DosDonts dos={dos} donts={donts} />
    </div>
  )
}