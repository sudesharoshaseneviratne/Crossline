import { FAQS } from '../data'
import { containerNarrow, sectionY } from '../styles'
import { Icon } from './Icon'
import { SectionTitle } from './ui'

export function Faq() {
  return (
    <section className={`${sectionY} bg-soft`} id="faq">
      <div className={containerNarrow}>
        <SectionTitle center>Frequently asked questions</SectionTitle>
        <div className="mt-16 grid gap-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-md bg-white shadow-[0_2px_6px_rgb(0_0_0/0.04)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-[18px] text-[1.1rem] font-medium text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <Icon name="chevronDown" className="flex-none transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-4 pb-5 text-[0.92rem] leading-[1.65]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
