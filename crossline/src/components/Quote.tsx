import { useState, type FormEvent, type ReactNode } from 'react'
import { CONTACT, QUOTE_CATEGORIES, SHIPPING_OPTIONS, VOLUME_OPTIONS } from '../data'
import { button, containerWide, sectionY } from '../styles'
import { Icon, type IconName } from './Icon'
import { Eyebrow, SectionLead, SectionTitle } from './ui'

const INITIAL = {
  name: '',
  shop: '',
  destination: '',
  contact: '',
  shipping: SHIPPING_OPTIONS[0],
  volume: VOLUME_OPTIONS[0],
  details: '',
}

const fieldLabel = 'text-[0.85rem] font-medium text-ink'
const fieldControl =
  'w-full rounded-[2px] border border-transparent bg-soft px-3.5 py-[11px] text-[0.92rem] text-ink transition-colors placeholder:text-[#9b97a0] focus:border-brown focus:bg-white focus:outline-none'
const inquiryButton =
  'inline-flex cursor-pointer items-center gap-1.5 rounded-[2px] bg-white px-2.5 py-1.5 font-mono text-[0.7rem] tracking-normal normal-case text-ink'

function buildInquiry(form: typeof INITIAL, categories: string[]) {
  return [
    'Subject: B2B Wholesale Quote Request - Crossline Ceylon',
    `Buyer: ${form.name || '-'}`,
    `Shop: ${form.shop || '-'}`,
    `Destination: ${form.destination || '-'}`,
    `Contact: ${form.contact || '-'}`,
    `Selected Categories: ${categories.length ? categories.join(', ') : '-'}`,
    `Shipping Preference: ${form.shipping}`,
    `Estimated Volume: ${form.volume}`,
    `Order Details: ${form.details || '-'}`,
  ].join('\n')
}

function ContactCard({ icon, tone, children }: { icon: IconName; tone: string; children: ReactNode }) {
  return (
    <li className="flex gap-4 rounded-lg bg-soft px-4 pt-5 pb-[22px]">
      <span className={`grid size-9 flex-none place-items-center rounded-lg ${tone}`}>
        <Icon name={icon} size={18} />
      </span>
      <div className="min-w-0">{children}</div>
    </li>
  )
}

const cardTitle = 'text-[1.3rem] leading-[1.3] font-semibold text-ink'
const cardLink = 'block text-[0.85rem] font-bold tracking-[0.04em] break-words text-maroon hover:underline'
const cardText = 'mt-1 text-[0.82rem] leading-[1.6]'

export function Quote() {
  const [form, setForm] = useState(INITIAL)
  const [categories, setCategories] = useState<string[]>(QUOTE_CATEGORIES.slice(0, 4))
  const [inquiry, setInquiry] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const update = (key: keyof typeof INITIAL) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const toggleCategory = (c: string) =>
    setCategories((list) => (list.includes(c) ? list.filter((x) => x !== c) : [...list, c]))

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setInquiry(buildInquiry(form, categories))
    setCopied(false)
  }

  const copy = async () => {
    if (!inquiry) return
    try {
      await navigator.clipboard.writeText(inquiry)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const mailto = inquiry
    ? `mailto:${CONTACT.email}?subject=${encodeURIComponent('B2B Wholesale Quote Request - Crossline Ceylon')}&body=${encodeURIComponent(inquiry)}`
    : undefined

  return (
    <section className={sectionY} id="contact">
      <div
        className={`${containerWide} grid items-start gap-6 lg:grid-cols-[minmax(0,546px)_minmax(0,774px)] lg:justify-between`}
      >
        <div>
          <Eyebrow>Fast Turnaround Quote</Eyebrow>
          <SectionTitle xl>
            Tell us what your shop
            {' '}<br />
            needs
          </SectionTitle>
          <SectionLead large>
            Send your product list and destination port. We respond with live FOB/CIF prices and freight options,
            usually within one working day (Sri Lanka Time, GMT+5:30).
          </SectionLead>

          <ul className="mt-7 grid gap-4">
            <ContactCard icon="message" tone="bg-[#fbe3b5] text-brown">
              <h3 className={cardTitle}>WhatsApp / Direct Call</h3>
              <a href={CONTACT.whatsappHref} className={cardLink}>
                {CONTACT.phone}
              </a>
              <p className={cardText}>Immediate commercial liaison for shop owners</p>
            </ContactCard>
            <ContactCard icon="mail" tone="bg-[#f1d9de] text-maroon">
              <h3 className={cardTitle}>Commercial Desk</h3>
              <a href={`mailto:${CONTACT.email}`} className={cardLink}>
                {CONTACT.email}
              </a>
              <p className={cardText}>FOB / CIF tender submissions</p>
            </ContactCard>
            <ContactCard icon="mapPin" tone="bg-[#e9e7eb] text-[#3d3d3d]">
              <h3 className={cardTitle}>Colombo Headquarters</h3>
              <p className={cardText}>
                {CONTACT.address[0]}, {CONTACT.address[1]},
                {' '}<br />
                {CONTACT.address[2]}
              </p>
            </ContactCard>
          </ul>
        </div>

        <form
          className="grid gap-[18px] rounded-[18px] bg-white px-4 py-6 shadow-[0_10px_30px_-12px_rgb(30_20_30/0.18)] sm:p-10"
          onSubmit={onSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid min-w-0 gap-2">
              <span className={fieldLabel}>Your Name</span>
              <input
                className={fieldControl}
                value={form.name}
                onChange={update('name')}
                placeholder="e.g. Nirmala Perera"
                required
              />
            </label>
            <label className="grid min-w-0 gap-2">
              <span className={fieldLabel}>Shop or Company</span>
              <input
                className={fieldControl}
                value={form.shop}
                onChange={update('shop')}
                placeholder="e.g. Lanka Spice Mart UK"
              />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid min-w-0 gap-2">
              <span className={fieldLabel}>Destination Country / City</span>
              <input
                className={fieldControl}
                value={form.destination}
                onChange={update('destination')}
                placeholder="e.g. United Kingdom (London)"
                required
              />
            </label>
            <label className="grid min-w-0 gap-2">
              <span className={fieldLabel}>Email or WhatsApp</span>
              <input
                className={fieldControl}
                value={form.contact}
                onChange={update('contact')}
                placeholder="+44 7700 900123 / info@shop.co.uk"
                required
              />
            </label>
          </div>

          <fieldset className="min-w-0">
            <legend className={`${fieldLabel} mb-2`}>Products You're Interested In</legend>
            <div className="flex flex-wrap gap-2">
              {QUOTE_CATEGORIES.map((c) => (
                <label
                  key={c}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-[2px] bg-soft px-3 py-1.5 text-[0.85rem] text-ink"
                >
                  <input
                    type="checkbox"
                    className="size-3.5 cursor-pointer accent-[#0a6cf5]"
                    checked={categories.includes(c)}
                    onChange={() => toggleCategory(c)}
                  />
                  {c}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid min-w-0 gap-2">
              <span className={fieldLabel}>Shipping Preference</span>
              <span className="relative">
                <select
                  className={`${fieldControl} cursor-pointer appearance-none pr-9`}
                  value={form.shipping}
                  onChange={update('shipping')}
                >
                  {SHIPPING_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                <Icon
                  name="chevronDown"
                  size={14}
                  className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-muted"
                />
              </span>
            </label>
            <label className="grid min-w-0 gap-2">
              <span className={fieldLabel}>Estimated Volume / Weight</span>
              <span className="relative">
                <select
                  className={`${fieldControl} cursor-pointer appearance-none pr-9`}
                  value={form.volume}
                  onChange={update('volume')}
                >
                  {VOLUME_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                <Icon
                  name="chevronDown"
                  size={14}
                  className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-muted"
                />
              </span>
            </label>
          </div>

          <label className="grid min-w-0 gap-2">
            <span className={fieldLabel}>Order Details, Specific SKUs or Questions</span>
            <textarea
              className={`${fieldControl} resize-y`}
              rows={3}
              value={form.details}
              onChange={update('details')}
              placeholder="e.g. Looking for regular monthly delivery of Maldive fish chips, Red raw rice 5kg bags, and Vijaya curry powders."
            />
          </label>

          <button type="submit" className={`${button('maroon')} w-full`}>
            <Icon name="fileText" /> Prepare Wholesale Inquiry
          </button>

          {inquiry && (
            <div className="rounded bg-soft p-4" aria-live="polite">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2 font-mono text-[0.78rem] font-bold tracking-[0.12em] text-brown uppercase">
                <span>Inquiry Ready for Dispatch</span>
                <div className="flex gap-1.5">
                  <a href={mailto} className={inquiryButton}>
                    <Icon name="mail" size={12} /> Email
                  </a>
                  <button type="button" className={inquiryButton} onClick={copy}>
                    <Icon name={copied ? 'check' : 'copy'} size={12} /> {copied ? 'Copied' : 'Copy Inquiry Text'}
                  </button>
                </div>
              </div>
              <pre className="max-h-[140px] overflow-auto bg-white p-3 font-mono text-[0.72rem] leading-[1.7] whitespace-pre-wrap text-ink">
                {inquiry}
              </pre>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
