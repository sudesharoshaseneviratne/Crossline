import { HERO_STATS } from '../data'
import { button, containerWide } from '../styles'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero pt-5 pb-[76px]" id="top">
      <img
        className="pointer-events-none absolute top-0 right-0 h-full w-full object-cover object-[left_top] opacity-25 mask-hero-art sm:w-[70%] sm:opacity-45 md:w-[min(50%,760px)] md:opacity-100"
        src="/images/hero-art.png"
        alt=""
      />
      <div className={`${containerWide} relative`}>
        <p className="text-[length:clamp(1.4rem,1rem_+_1.2vw,2rem)] font-medium tracking-[0.04em] text-brick italic">
          CROSSLINE...
        </p>
        <h1 className="mt-[26px] text-[length:clamp(2.4rem,1.2rem_+_4vw,3.9rem)] leading-[1.12] font-semibold tracking-[-0.025em] text-ink [&_br]:hidden sm:[&_br]:inline">
          Stock the taste of home
          {' '}<br />
          your customers ask for.
        </h1>
        <p className="mt-6 max-w-[720px] text-[length:clamp(1rem,0.9rem_+_0.35vw,1.15rem)] leading-[1.6] text-ink">
          Crossline supplies Sri Lankan grocery shops abroad with Ceylon cinnamon, cloves, black pepper, dry fish,
          rice flour, Ceylon tea, coffee and certified organic products, plus our own Crossline range and leading Sri
          Lankan brands. Tell us what you need, we source it, consolidate your order in Colombo, and ship it by sea or
          air to your door.
        </p>
        <div className="mt-[38px] flex flex-wrap gap-4">
          <a href="#contact" className={`${button('brown', 'lg')} w-full sm:w-auto`}>
            Request a Wholesale Quote <Icon name="arrowRight" />
          </a>
          <a href="#shipping" className={`${button('light', 'lg')} w-full sm:w-auto`}>
            <Icon name="compass" /> See How Ordering Works
          </a>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-3 md:grid-cols-[repeat(3,minmax(0,250px))]">
          {HERO_STATS.map((s) => (
            <li
              key={s.title}
              className="rounded-2xl bg-white px-4 pt-4 pb-[18px] shadow-[0_10px_24px_-14px_rgb(60_20_30/0.35)]"
            >
              <h3 className="flex items-center gap-2 text-xl font-semibold text-maroon">
                <Icon name={s.icon} size={20} />
                {s.title}
              </h3>
              <p className="mt-2 text-[0.82rem] leading-normal text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
