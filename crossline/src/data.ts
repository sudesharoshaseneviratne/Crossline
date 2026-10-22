export const NAV_LINKS = [
  { id: 'products', label: 'Products' },
  { id: 'brands', label: 'Brands' },
  { id: 'range', label: 'All Products' },
  { id: 'shipping', label: 'Shipping' },
  { id: 'contact', label: 'Contact' },
  { id: 'faq', label: 'FAQ' },
] as const

export const TOPBAR_ITEMS = [
  { icon: 'star', label: 'From Sri Lanka' },
  { icon: 'leaf', label: 'Ceylon Spices' },
  { icon: 'basket', label: 'Authentic Sri Lankan Groceries' },
  { icon: 'ship', label: 'Sea & Air Freight' },
  { icon: 'badgeCheck', label: 'Direct Wholesale' },
] as const

export const HERO_STATS = [
  { icon: 'badgeCheck', title: '5+ years', text: 'Exporting direct from Sri Lanka' },
  { icon: 'plane', title: 'Sea & Air', text: 'LCL, FCL & Scheduled Air Cargo' },
  { icon: 'archive', title: '1 Consolidated', text: 'Shipment for spices, dry fish & brands' },
] as const

export const PRODUCTS = [
  { name: 'Supiri Keeri Samba', image: '/images/product-keeri-samba.png' },
  { name: 'Samba Rice', image: '/images/product-samba-rice.png' },
  { name: 'Red Nadu', image: '/images/product-red-nadu.png' },
  { name: 'White Nadu', image: '/images/product-white-nadu.png' },
  { name: 'Chilli Powder', image: '/images/product-chilli-powder.png' },
  { name: 'Chilli Pieces', image: '/images/product-chilli-pieces.png' },
]

export const BRANDS = [
  { name: 'Araliya Rice Producers', image: '/images/brand-araliya.png' },
  { name: 'Wijaya Products', image: '/images/brand-wijaya.png' },
  { name: 'Matara Freelan', image: '/images/brand-freelan.png' },
  { name: 'CBL Munchee', image: '/images/brand-munchee.png' },
  { name: 'Maliban', image: '/images/brand-maliban.png' },
  { name: 'Dilmah', image: '/images/brand-dilmah.png' },
  { name: 'Raigam', image: '/images/brand-raigam.png' },
  { name: 'Crossline', image: '/images/brand-crossline.png' },
]

export const RANGE = [
  {
    name: 'Sri Lankan Coffee',
    weight: 'Net 200g',
    image: '/images/range-coffee.png',
    text: 'Roasted Sri Lankan coffee beans with a rich, aromatic and smooth cup. Sealed with one way degas valve.',
  },
  {
    name: 'Sri Lankan Black Tea',
    weight: 'Net 500g',
    image: '/images/range-black-tea.png',
    text: 'Strong, bright Ceylon hill country black tea crafted specifically for comforting plain tea or rich milk tea.',
  },
  {
    name: 'Ceylon Cinnamon Sticks',
    weight: 'Net 250g',
    image: '/images/range-cinnamon.png',
    text: 'True Ceylon cinnamon quills, hand-rolled and cut to length. Sweet aroma with negligible coumarin content.',
  },
]

export const GATEWAYS = [
  {
    region: 'UK & Europe',
    cities: 'London, Paris, Milan, Oslo',
    badge: 'Felixstowe',
    left: 'Direct LCL/FCL',
    right: 'Rotterdam',
    mark: 'EU',
    flag: '/images/flag-uk.png',
  },
  {
    region: 'Australia & NZ',
    cities: 'Melbourne, Sydney, Auckland',
    badge: 'DAFF / MPI',
    left: 'Biosecurity Clear',
    right: 'Weekly',
    mark: 'AU',
    flag: '/images/flag-au.png',
  },
  {
    region: 'Middle East & Gulf',
    cities: 'Dubai, Doha, Riyadh, Kuwait',
    badge: 'Fast 5-8d',
    left: 'Daily Cargo',
    right: 'Sea/Air',
    mark: 'ME',
    flag: '/images/flag-me.png',
  },
  {
    region: 'Asia & N. America',
    cities: 'Toronto, NY, CA, Tokyo',
    badge: 'FDA Cleared',
    left: 'FDA Prior Notice',
    right: 'Direct',
    mark: 'NA',
    flag: '/images/flag-jp.png',
  },
]

export const SHIPPING_MODES = {
  sea: {
    label: 'Sea Freight',
    emoji: '🚢',
    tag: 'Lowest cost per kilo',
    port: 'Port of Colombo (CMB)',
    text: 'The most economical solution for staple grains, heavy flours, canned goods, and scheduled bulk replenishment.',
    rows: [
      ['Capacity / Cons', 'LCL from ~1 CBM / 20ft & 40ft FCL'],
      ['Transit Duration', '2 to 6 weeks (by corridor)'],
      ['Ideal Products', 'Rice, Spices, Canned & Dry'],
    ],
  },
  air: {
    label: 'Air Freight',
    emoji: '✈️',
    tag: 'Fastest to shelf',
    port: 'Bandaranaike Intl. (BIA)',
    text: 'Scheduled air cargo for urgent restocks, trial consignments, premium teas and short shelf-life products.',
    rows: [
      ['Capacity / Cons', 'From 45 kg / Pallet loads'],
      ['Transit Duration', '3 to 8 days (by corridor)'],
      ['Ideal Products', 'Tea, Spices, Dry Fish, Samples'],
    ],
  },
} as const

export const SHIPPING_PHOTOS = [
  { src: '/images/ship-port.png', alt: 'Container terminal at the Port of Colombo' },
  { src: '/images/ship-pallet.png', alt: 'Strapped export cartons on a pallet' },
  { src: '/images/ship-cartons.png', alt: 'Export cartons staged for consolidation' },
  { src: '/images/ship-airport.png', alt: 'Bandaranaike International Airport' },
  { src: '/images/ship-wrapped.png', alt: 'Shrink-wrapped pallets ready for dispatch' },
  { src: '/images/ship-truck.png', alt: 'Cartons loaded onto a delivery truck' },
]

export const TRUST_POINTS = [
  {
    icon: 'shield',
    title: '5+ years export tenure',
    text: 'We know the local paperwork, customs tariffs and biosecurity rules in every major destination country.',
  },
  {
    icon: 'infinity',
    title: 'One order, one shipment',
    text: 'Spices, dry fish, tea and branded groceries from different processors consolidated into a single manifest.',
  },
  {
    icon: 'award',
    title: 'Authentic Ceylon taste',
    text: 'Procured directly from Sri Lankan plantations and processors—never re-exported or diluted through middle ports.',
  },
  {
    icon: 'sliders',
    title: 'Flexible order volume',
    text: 'Start with a trial air cargo consignment and transition smoothly into regular shared or full container loads.',
  },
] as const

export const FAQS = [
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'Trial orders start from around 100 kg by air or about 1 CBM in a shared sea container (LCL). You can mix spices, dry fish, rice and branded goods to reach the minimum.',
  },
  {
    q: 'Which countries do you ship to?',
    a: 'We regularly ship to the UK and Europe, Australia and New Zealand, the Middle East and Gulf, Canada, the USA and Japan. Ask us about any other destination.',
  },
  {
    q: 'Can you ship popular brands I already sell?',
    a: 'Yes. We source leading Sri Lankan brands such as Araliya, Wijaya, Freelan, Munchee, Maliban, Dilmah and Raigam and consolidate them with our own Crossline range.',
  },
  {
    q: 'What export documents do you provide?',
    a: 'Commercial invoice, packing list, certificate of origin, phytosanitary and health certificates where required, plus the bill of lading or air waybill for your shipment.',
  },
  {
    q: 'Do you offer organic products?',
    a: 'Yes. We supply a certified organic range of Ceylon spices and tea. Tell us your market and we will confirm the certification that applies.',
  },
  {
    q: 'What are your international payment terms?',
    a: 'New buyers usually pay by bank transfer (T/T) with a deposit on order and the balance before shipping. Letters of credit are available for larger, regular orders.',
  },
]

export const QUOTE_CATEGORIES = [
  'Ceylon Cinnamon',
  'Cloves',
  'Black Pepper',
  'Dry Fish & Maldive Fish',
  'Sri Lankan Rice Varieties',
  'Rice & Kurakkan Flour',
  'Organic Range',
  'Tea & Coffee',
  'Sri Lankan Brands',
]

export const SHIPPING_OPTIONS = [
  'Sea Freight (LCL Shared Container)',
  'Sea Freight (FCL 20ft / 40ft)',
  'Air Freight (Scheduled Cargo)',
  'Not sure yet, advise me',
]

export const VOLUME_OPTIONS = [
  '100 - 500 kg (Sample / Small Shop)',
  '500 kg - 2 tonnes (Regular Shop)',
  '2 - 10 tonnes (Distributor)',
  'Full container (10+ tonnes)',
]

export const CONTACT = {
  phone: '+94 (11) 244 8920',
  phoneHref: 'tel:+94112448920',
  whatsappHref: 'https://wa.me/94112448920',
  email: 'procurements@crosslineceylon.com',
  address: ['Crossline Export Terminal', 'Marine Drive Logistics Corridor', 'Colombo 01, Sri Lanka'],
}
