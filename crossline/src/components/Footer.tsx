import { useState, type FormEvent } from 'react'
import { CONTACT } from '../data'
import { container } from '../styles'
import { Icon } from './Icon'

const CERTIFICATIONS = ['USDA Organic', 'SLSI Grade C5', 'HACCP Certified', 'EDB Sri Lanka Registered']

const heading = 'mb-5 text-[0.78rem] font-semibold tracking-[0.12em] text-[#ffcf80] uppercase'
const hoverLink = 'hover:text-white hover:underline'

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-footer pt-[88px] pb-8 text-[0.85rem] leading-[1.6] text-[#e9d6da]">
      <div className={container}>
        <img
          className="aspect-[1182/174] h-auto w-full object-cover"
          src="/images/footer-banner.png"
          alt=""
          loading="lazy"
        />

        <div className="mt-16 grid gap-12 sm:grid-cols-2 md:grid-cols-[1.1fr_0.85fr_0.9fr]">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 font-serif text-[1.8rem] font-semibold tracking-[0.02em] text-white">
              <img src="/images/logo.png" alt="" width={40} height={40} className="rounded-md bg-white" />
              <span>CROSSLINE</span>
            </div>
            <p className="mt-3.5 mb-[18px] font-serif text-xl font-semibold text-gold italic">
              "Pure Sri Lankan flavor, delivered worldwide."
            </p>
            <p>
              Aristocratic Ceylon spice house and multimodal logistics gateway. Sourcing directly from Southern estates
              and Kandy gardens, cleared through Colombo Port to global retail networks.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2.5">
              {CERTIFICATIONS.map((c) => (
                <li
                  key={c}
                  className="rounded-[2px] bg-white/12 px-2.5 py-1 text-[0.72rem] font-bold tracking-[0.1em] text-[#fbe6c9] uppercase"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={heading}>Port Dispatch &amp; HQ</h4>
            <address className="grid not-italic">
              {CONTACT.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            <ul className="mt-[18px] grid gap-2 font-semibold tracking-[0.03em] text-white">
              <li className="flex items-center gap-2.5">
                <Icon name="phone" size={13} className="flex-none text-[#ffcf80]" />
                <a href={CONTACT.phoneHref} className={hoverLink}>
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 break-words">
                <Icon name="mail" size={13} className="flex-none text-[#ffcf80]" />
                <a href={`mailto:${CONTACT.email}`} className={`min-w-0 ${hoverLink}`}>
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="anchor" size={13} className="flex-none text-[#ffcf80]" />
                CMB Port Gateway / BIA Cargo
              </li>
            </ul>
          </div>

          <div>
            <h4 className={heading}>Global Wholesale Dispatch Inquiry</h4>
            <p>Subscribe to weekly FOB Colombo commodity spot-rates and seasonal harvest dispatches.</p>
            {subscribed ? (
              <p className="mt-5 font-semibold text-gold">Thanks, you're on the list.</p>
            ) : (
              <form className="mt-5 flex gap-2" onSubmit={onSubscribe}>
                <input
                  type="email"
                  required
                  placeholder="importer@enterprise.com"
                  aria-label="Email address"
                  className="min-w-0 max-w-[196px] flex-1 rounded-[2px] bg-white/10 px-3 py-2.5 text-white placeholder:text-white/45"
                />
                <button
                  type="submit"
                  className="cursor-pointer rounded-[2px] bg-gold px-4 py-2.5 font-medium text-maroon-deep uppercase"
                >
                  Subscribe
                </button>
              </form>
            )}
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.08em] text-[#ffcf80] uppercase hover:text-white"
            >
              <Icon name="arrowRight" size={13} /> Direct Commercial Procurement Portal
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-4 text-[#e9d6da]/70 sm:mt-[88px]">
          <p>© {new Date().getFullYear()} Crossline Ceylon Ltd. All International Maritime Rights Reserved.</p>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {[
              ['#shipping', 'Freight Terms (Incoterms 2020)'],
              ['#faq', 'Phytosanitary Clearance'],
              ['#faq', 'HS Codes Registry'],
            ].map(([href, label]) => (
              <li
                key={label}
                className="relative not-first:before:absolute not-first:before:top-1/2 not-first:before:-left-4 not-first:before:size-1 not-first:before:rounded-full not-first:before:bg-[#e9d6da]/40"
              >
                <a href={href} className={hoverLink}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
