import { GATEWAYS } from '../data'
import { container, pill } from '../styles'
import { Eyebrow, SectionLead, SectionTitle } from './ui'

export function Gateways() {
  return (
    <section className="py-16 sm:pt-[104px] sm:pb-[88px]">
      <div className={container}>
        <Eyebrow>Global Diaspora Gateways</Eyebrow>
        <SectionTitle>
          Serving Sri Lankan shops wherever the
          {' '}<br />
          community lives
        </SectionTitle>
        <SectionLead>
          Sri Lankans abroad want the exact taste of the rice, spices and dry fish they grew up with. We keep the
          specialist grocery shops that serve them fully stocked year-round.
        </SectionLead>
        <ul className="mt-[72px] grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {GATEWAYS.map((g) => (
            <li
              key={g.region}
              className="relative min-h-[180px] overflow-hidden rounded-[20px] bg-brown px-3 pt-4 pb-3.5 text-white transition-transform hover:-translate-y-[3px]"
            >
              <div className="flex items-center justify-between">
                <img src={g.flag} alt="" width={39} height={39} className="size-[39px] rounded-full" />
                <span className={pill}>{g.badge}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold">{g.region}</h3>
              <p className="truncate text-[0.68rem] opacity-85">{g.cities}</p>
              <div className="mt-6 flex justify-between border-t border-white/18 pt-2.5 text-[0.66rem]">
                <span>{g.left}</span>
                <span>{g.right}</span>
              </div>
              <span
                className="pointer-events-none absolute right-1 -bottom-3.5 font-serif text-[2.6rem] leading-none font-bold opacity-10"
                aria-hidden="true"
              >
                {g.mark}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
