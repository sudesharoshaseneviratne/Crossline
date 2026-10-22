import type { ReactNode } from 'react'

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-2 text-[0.72rem] font-semibold tracking-[0.14em] text-brown uppercase">{children}</p>
}

export function SectionTitle({
  children,
  center = false,
  xl = false,
}: {
  children: ReactNode
  center?: boolean
  xl?: boolean
}) {
  const size = xl
    ? 'text-[length:clamp(2.1rem,1.3rem_+_2.6vw,3rem)]'
    : 'text-[length:clamp(1.9rem,1.2rem_+_2.2vw,2.65rem)]'
  return (
    <h2
      className={`${size} leading-[1.18] font-semibold tracking-[-0.02em] text-ink [&_br]:hidden sm:[&_br]:inline ${center ? 'text-center' : ''}`}
    >
      {children}
    </h2>
  )
}

export function SectionLead({
  children,
  center = false,
  dark = false,
  large = false,
}: {
  children: ReactNode
  center?: boolean
  dark?: boolean
  large?: boolean
}) {
  return (
    <p
      className={`mt-3.5 max-w-[740px] leading-[1.65] ${large ? 'text-base' : 'text-[0.95rem]'} ${dark ? 'text-ink' : ''} ${center ? 'mx-auto text-center' : ''}`}
    >
      {children}
    </p>
  )
}
