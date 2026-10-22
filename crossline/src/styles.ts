// Shared Tailwind class sets reused across sections.
export const container = 'mx-auto w-full max-w-[1232px] px-4 sm:px-6'
export const containerWide = 'mx-auto w-full max-w-[1392px] px-4 sm:px-6'
export const containerNarrow = 'mx-auto w-full max-w-[848px] px-4 sm:px-6'
export const sectionY = 'py-16 sm:py-[88px]'

const BUTTON_VARIANTS = {
  yellow: 'rounded-full bg-gold text-maroon-deep shadow-[0_6px_16px_-6px_rgb(234_163_10/0.6)] hover:bg-gold-dark',
  brown: 'rounded-full bg-brown text-white shadow-[0_8px_18px_-8px_rgb(122_84_19/0.7)] hover:bg-brown-dark',
  light: 'rounded-full bg-[#ececf0] text-ink hover:bg-[#e2e2e8]',
  maroon: 'rounded bg-maroon text-white hover:bg-maroon-deep',
}

const BUTTON_SIZES = {
  md: 'px-6 py-[13px] text-[0.78rem]',
  lg: 'px-[26px] py-[18px] text-[0.82rem]',
}

export function button(variant: keyof typeof BUTTON_VARIANTS, size: keyof typeof BUTTON_SIZES = 'md') {
  return `inline-flex cursor-pointer items-center justify-center gap-2.5 font-semibold tracking-[0.06em] whitespace-nowrap uppercase transition hover:-translate-y-px ${BUTTON_VARIANTS[variant]} ${BUTTON_SIZES[size]}`
}

export const pill =
  'inline-flex items-center rounded-full bg-gold px-2.5 py-[3px] text-[0.66rem] font-medium whitespace-nowrap text-ink'
