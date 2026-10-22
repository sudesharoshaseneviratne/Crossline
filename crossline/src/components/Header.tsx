import { Fragment, useEffect, useState } from 'react'
import { NAV_LINKS, TOPBAR_ITEMS } from '../data'
import { button, container } from '../styles'
import { Icon } from './Icon'

function useActiveSection() {
  const [active, setActive] = useState<string>(NAV_LINKS[0].id)

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return active
}

export function Header() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgb(0_0_0/0.04)]">
      <div className="overflow-x-auto bg-crimson text-[#fde6c4] [scrollbar-width:none] md:overflow-hidden">
        <div className="flex w-max items-center gap-[18px] px-4 py-[5px] text-[0.7rem] font-semibold tracking-[0.12em] whitespace-nowrap uppercase md:w-auto md:justify-center">
          {TOPBAR_ITEMS.map((item, i) => (
            <Fragment key={item.label}>
              {i > 0 && <span className="size-1 rounded-full bg-[#e0807a]" aria-hidden="true" />}
              <span className="inline-flex items-center gap-1.5">
                <Icon name={item.icon} size={13} />
                {item.label}
              </span>
            </Fragment>
          ))}
        </div>
      </div>

      <nav className={`${container} relative flex min-h-[76px] items-center gap-5 md:min-h-[100px] lg:gap-8`}>
        <a href="#top" className="flex items-center gap-3" aria-label="Crossline Ceylon Exporter home">
          <img src="/images/logo.png" alt="" width={58} height={60} className="h-auto w-[46px] sm:w-[58px]" />
          <span>
            <strong className="block font-serif text-[1.3rem] leading-[1.1] font-bold text-maroon">CROSSLINE</strong>
            <small className="mt-1.5 block text-[0.62rem] font-bold tracking-[0.12em] text-[#6b4a0e]">
              CEYLON EXPORTER
            </small>
          </span>
        </a>

        <ul
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col bg-white px-6 pt-2 pb-6 shadow-[0_16px_24px_-16px_rgb(0_0_0/0.25)] md:static md:mx-auto md:flex md:flex-row md:gap-4 md:bg-transparent md:p-0 md:shadow-none lg:gap-6`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative block py-3 text-[0.95rem] transition-colors hover:text-maroon md:py-1.5 ${
                  active === link.id
                    ? 'font-semibold text-maroon md:after:absolute md:after:inset-x-0 md:after:-bottom-1 md:after:h-0.5 md:after:bg-maroon'
                    : 'text-[#4b4048]'
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3 md:hidden">
            <a href="#contact" className={`${button('yellow')} w-full`} onClick={() => setOpen(false)}>
              <Icon name="message" /> Request Wholesale Quote
            </a>
          </li>
        </ul>

        <div className="hidden lg:block">
          <a href="#contact" className={`${button('yellow')} py-[15px]`}>
            <Icon name="message" /> Request Wholesale Quote
          </a>
        </div>

        <button
          type="button"
          className="ml-auto grid cursor-pointer place-items-center p-2 text-maroon md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </nav>
    </header>
  )
}
