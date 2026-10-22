import { useState } from 'react'
import { SHIPPING_MODES, SHIPPING_PHOTOS } from '../data'
import { container } from '../styles'
import { SectionLead, SectionTitle } from './ui'

type Mode = keyof typeof SHIPPING_MODES

export function Shipping() {
  const [mode, setMode] = useState<Mode>('sea')
  const current = SHIPPING_MODES[mode]

  return (
    <section className="bg-shipping py-16 sm:pt-[104px] sm:pb-24" id="shipping">
      <div className={container}>
        <SectionTitle>Choose the shipping that fits your order</SectionTitle>
        <SectionLead dark>
          Small shop or large distributor, we match the freight mode to your volume, shelf-life demands, and timing.
        </SectionLead>

        <div className="mt-16 grid items-start gap-6 lg:grid-cols-[324px_1fr]">
          <div className="max-w-[420px] rounded-[14px] border border-white bg-white px-4 pt-10 pb-4 shadow-[0_20px_40px_-24px_rgb(60_20_10/0.6)] lg:max-w-none">
            <h3 className="text-center text-base font-semibold text-ink">Choose Your Dispatch Channel</h3>
            <p className="mt-0.5 text-center text-[0.7rem] text-muted">Direct ports of origin: Colombo (CMB) &amp; BIA</p>

            <div className="mt-4 grid grid-cols-2 gap-1 rounded-[10px] bg-soft p-1" role="tablist" aria-label="Freight mode">
              {(Object.keys(SHIPPING_MODES) as Mode[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={mode === key}
                  className={`cursor-pointer rounded-lg p-2 text-[0.8rem] transition-colors ${
                    mode === key ? 'bg-brown text-white' : 'text-muted'
                  }`}
                  onClick={() => setMode(key)}
                >
                  <span aria-hidden="true">{SHIPPING_MODES[key].emoji}</span> {SHIPPING_MODES[key].label}
                </button>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-2">
              <span className="inline-flex items-center rounded-full bg-gold px-3 py-1 text-[0.6rem] font-bold tracking-[0.08em] whitespace-nowrap text-maroon uppercase">
                {current.tag}
              </span>
              <span className="text-[0.72rem] font-medium whitespace-nowrap text-[#6b4a0e]">{current.port}</span>
            </div>
            <p className="mt-[34px] text-[0.85rem] leading-normal text-ink">{current.text}</p>

            <dl className="mt-[30px] overflow-hidden rounded-[10px] border border-line">
              {current.rows.map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-2 px-3 py-2.5 text-[0.7rem] odd:bg-[#faf9fb] not-first:border-t not-first:border-line"
                >
                  <dt className="whitespace-nowrap text-muted">{k}</dt>
                  <dd className="text-right font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {SHIPPING_PHOTOS.map((p) => (
              <li
                key={p.src}
                className="group aspect-[270/195] overflow-hidden rounded-[14px] shadow-[0_12px_26px_-16px_rgb(40_10_10/0.6)]"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
