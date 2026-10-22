import { TRUST_POINTS } from '../data'
import { button, containerWide, sectionY } from '../styles'
import { Icon } from './Icon'
import { Eyebrow, SectionTitle } from './ui'

const BRIDGE_POINTS = [
  'Direct plantation sourcing & supplier inspection',
  'Private label packaging under your name',
  'Full export documentation and freight handling',
]

export function Trust() {
  return (
    <section className={sectionY}>
      <div className={`${containerWide} grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_546px]`}>
        <div>
          <Eyebrow>Why Wholesale Clients Trust Us</Eyebrow>
          <SectionTitle>
            An export partner that works like part
            {' '}<br />
            of your team
          </SectionTitle>
          <ul className="mt-10 grid max-w-[775px] gap-4 sm:grid-cols-2 lg:mt-[108px]">
            {TRUST_POINTS.map((t) => (
              <li key={t.title} className="rounded-md bg-soft px-4 py-[18px]">
                <h3 className="flex items-center gap-2 text-[1.2rem] font-semibold text-maroon">
                  <Icon name={t.icon} size={18} />
                  {t.title}
                </h3>
                <p className="mt-2 max-w-[340px] text-[0.85rem] leading-[1.55]">{t.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="max-w-[560px] rounded-[20px] bg-bridge p-5 text-white shadow-[0_24px_40px_-20px_rgb(20_20_10/0.6)] sm:p-10 lg:max-w-none">
          <div className="rounded-[20px] border border-white/30 bg-[rgb(40_30_25/0.45)] px-6 pt-6 pb-7 backdrop-blur-[6px]">
            <p className="text-center text-[0.72rem] font-semibold tracking-[0.14em] text-[#ffd79a] uppercase">
              For Importers &amp; Distributors
            </p>
            <h3 className="mt-3.5 text-center text-[1.4rem] leading-[1.3] font-semibold sm:text-[1.8rem]">
              Looking for a reliable supply bridge in Sri Lanka?
            </h3>
            <p className="mt-5 text-[0.85rem] leading-[1.55]">
              If you import Sri Lankan food for wholesale, supermarket distribution or independent diaspora shops, we
              would be proud to be your trusted eyes and hands on the ground in Colombo.
            </p>
            <ul className="mt-4 grid gap-2 text-[0.82rem]">
              {BRIDGE_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2.5">
                  <Icon name="check" size={13} /> {point}
                </li>
              ))}
            </ul>
          </div>
          <a href="#contact" className={`${button('yellow')} mt-6 w-full`}>
            Contact Us <Icon name="arrowRight" />
          </a>
        </aside>
      </div>
    </section>
  )
}
