import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable } from '@/components/docs/PropsTable'
import { DosDonts } from '@/components/docs/DosDonts'

export const metadata = { title: 'Button — SS Design System' }

const buttonProps = [
  { name: 'variant',   type: '"primary" | "secondary" | "ghost" | "danger"', default: '"primary"', required: false, description: 'Visual style of the button.' },
  { name: 'size',      type: '"sm" | "md" | "lg"',                            default: '"md"',      required: false, description: 'Controls padding and font size.' },
  { name: 'disabled',  type: 'boolean',                                        default: 'false',     required: false, description: 'Disables interaction and applies muted styling.' },
  { name: 'loading',   type: 'boolean',                                        default: 'false',     required: false, description: 'Shows a spinner and disables the button.' },
  { name: 'leftIcon',  type: 'ReactNode',                                      default: '—',         required: false, description: 'Icon rendered to the left of the label.' },
  { name: 'rightIcon', type: 'ReactNode',                                      default: '—',         required: false, description: 'Icon rendered to the right of the label.' },
  { name: 'fullWidth', type: 'boolean',                                        default: 'false',     required: false, description: 'Stretches button to fill its container.' },
  { name: 'children',  type: 'ReactNode',                                      default: '—',         required: true,  description: 'Button label content.' },
]

const dos = [
  'Use primary buttons for the single most important action on the page.',
  'Keep button labels short, verb-led, and specific — "Save changes", "Add account".',
  'Use loading state when an action triggers an async operation.',
  'Maintain at most 1 primary button per section.',
]

const donts = [
  'Don\'t stack more than 2 buttons in a single group.',
  'Don\'t use primary for destructive actions — use the danger variant.',
  'Don\'t disable a button without explaining why elsewhere on the page.',
  'Don\'t use vague labels like "Submit" or "Click here".',
]

export default function ButtonPage() {
  return (
    <div>
      <PageHeader
        section="Components / Actions"
        title="Button"
        description="Buttons trigger actions. They communicate what happens when clicked and carry a clear visual hierarchy — primary for the most important action, secondary and ghost for supporting ones."
        status="stable"
      />

      <ComponentPreview
        title="Variants"
        description="Four variants cover the full range of action priorities across all SS products."
        code={`<Button variant="primary">Save changes</Button>\n<Button variant="secondary">Cancel</Button>\n<Button variant="ghost">Learn more</Button>\n<Button variant="danger">Delete account</Button>`}
      >
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button className="ss-btn ss-btn-primary">Save changes</button>
          <button className="ss-btn ss-btn-secondary">Cancel</button>
          <button className="ss-btn ss-btn-ghost">Learn more</button>
          <button className="ss-btn ss-btn-danger">Delete account</button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Sizes"
        code={`<Button size="sm">Small</Button>\n<Button size="md">Medium</Button>\n<Button size="lg">Large</Button>`}
      >
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button className="ss-btn ss-btn-primary ss-btn-sm">Small</button>
          <button className="ss-btn ss-btn-primary">Medium</button>
          <button className="ss-btn ss-btn-primary ss-btn-lg">Large</button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="States"
        code={`<Button loading>Processing...</Button>\n<Button disabled>Disabled</Button>`}
      >
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <button className="ss-btn ss-btn-primary ss-btn-loading">
            <span className="ss-spinner" />
            Processing...
          </button>
          <button className="ss-btn ss-btn-primary" disabled>Disabled</button>
          <button className="ss-btn ss-btn-secondary" disabled>Disabled</button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Icons"
        code={`<Button leftIcon={<PlusIcon />}>Add account</Button>\n<Button rightIcon={<ArrowRight />} variant="ghost">View details</Button>`}
      >
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <button className="ss-btn ss-btn-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{marginRight: 6}}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add account
          </button>
          <button className="ss-btn ss-btn-ghost">
            View details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{marginLeft: 6}}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>
      </ComponentPreview>

      <PropsTable props={buttonProps} />

      <DosDonts dos={dos} donts={donts} />
    </div>
  )
}
