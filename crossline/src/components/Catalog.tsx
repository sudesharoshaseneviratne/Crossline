import { BRANDS, PRODUCTS, RANGE } from '../data'
import { button, container, sectionY } from '../styles'
import { Icon } from './Icon'
import { SectionLead, SectionTitle } from './ui'

export function Products() {
  return (
    <section className={sectionY} id="products">
      <div className={container}>
        <SectionTitle>
          Wholesale Sri Lankan groceries,
          {' '}<br />
          packed for export
        </SectionTitle>
        <SectionLead>
          Order in bulk or retail packs, under our label or the Sri Lankan brands your customers already know. Every
          product is sourced, checked and packed for long transit.
        </SectionLead>
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-y-12">
          {PRODUCTS.map((p) => (
            <li
              key={p.name}
              className="overflow-hidden rounded-xl border border-line bg-white transition hover:-translate-y-[3px] hover:shadow-[0_16px_30px_-18px_rgb(40_20_30/0.4)]"
            >
              <div className="aspect-[276/174] bg-[#efedf1]">
                <img src={p.image} alt={p.name} loading="lazy" className="size-full object-cover" />
              </div>
              <h3 className="p-3 text-base font-semibold text-ink sm:px-4 sm:pt-[18px] sm:pb-5 sm:text-[1.2rem]">
                {p.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Brands() {
  // Rendered twice so the marquee can loop seamlessly.
  const strip = [...BRANDS, ...BRANDS]
  return (
    <section className="pt-6 pb-16 sm:pb-[88px]" id="brands">
      <div className={container}>
        <SectionTitle center>
          The brands your customers ask for,
          {' '}<br />
          in the same shipment
        </SectionTitle>
        <div className="group mt-10 overflow-hidden bg-[#4d4442] py-5">
          <ul className="flex w-max gap-6 group-hover:[animation-play-state:paused] motion-safe:animate-marquee">
            {strip.map((b, i) => (
              <li key={i} aria-hidden={i >= BRANDS.length} className="h-[88px] w-[138px] flex-none overflow-hidden rounded bg-white">
                <img src={b.image} alt={b.name} loading="lazy" className="size-full object-cover" />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex justify-center">
          <a href="#range" className={button('brown', 'lg')}>
            <Icon name="compass" /> See All Products
          </a>
        </div>
      </div>
    </section>
  )
}

export function Range() {
  return (
    <section className="bg-range pt-[100px] pb-20" id="range">
      <div className={container}>
        <SectionTitle center>The Crossline Range- Ceylon Premium</SectionTitle>
        <SectionLead center>
          Our own retail packs, filled in Sri Lanka and ready for your shelves. Resealable stand-up pouches with clear
          window, so shoppers can see the quality before they buy.
        </SectionLead>
        <ul className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {RANGE.map((item) => (
            <li
              key={item.name}
              className="group rounded-[20px] bg-white px-6 pt-6 pb-7 shadow-[0_20px_40px_-24px_rgb(20_40_10/0.5)]"
            >
              <div className="aspect-[329/401] overflow-hidden rounded-[14px]">
                <img
                  src={item.image}
                  alt={`${item.name}, ${item.weight}`}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-400 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-5 text-[1.2rem] font-semibold text-ink">{item.name}</h3>
              <p className="mt-2 text-[0.82rem] leading-[1.6]">{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-20 flex flex-wrap items-center gap-5 rounded-[20px] bg-white p-6 shadow-[0_20px_40px_-24px_rgb(20_40_10/0.6)] md:flex-nowrap">
          <span className="grid size-12 flex-none place-items-center rounded-[10px] bg-gold text-brown">
            <Icon name="tag" size={22} />
          </span>
          <div className="min-w-[200px] flex-1">
            <h3 className="text-[1.15rem] font-medium text-ink">Private Label Packing Available</h3>
            <p className="mt-0.5 text-[0.82rem]">
              More Crossline packs are on the way. We can also pack our Ceylon spices under your shop's own private
              brand.
            </p>
          </div>
          <a href="#contact" className={`${button('brown', 'lg')} w-full sm:w-auto`}>
            <Icon name="compass" /> See All Products
          </a>
        </div>
      </div>
    </section>
  )
}
