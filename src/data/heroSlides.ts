export type HeroSlide = {
  title: string
  copy: string
  ctaLabel: string
  ctaHref: string
  image: string
  tags?: string[]
}

export const heroSlides: HeroSlide[] = [
  {
    title: 'Bedside nursing care at your home',
    copy: 'Vital monitoring, wound care, medications, and recovery overseen by registered nurses across Kampala.',
    ctaLabel: 'Request bedside care',
    ctaHref: '#request',
    image: '/images/homecare.png',
    tags: ['Licensed Nurses', '24/7 Care', 'Same-Day Visit'],
  },
  {
    title: 'Mother & baby care, day or night',
    copy: 'Gentle postnatal support, feeding guidance, and newborn comfort so mothers can rest and recover.',
    ctaLabel: 'Book mother & baby care',
    ctaHref: '#request',
    image: '/images/motherbaby-care.png',
    tags: ['Postnatal Experts', 'Overnight Help', 'Newborn Care'],
  },
  {
    title: 'Travel nurse assistance',
    copy: 'Safe accompaniment to appointments with professional handovers and comfort on the move.',
    ctaLabel: 'Plan a trip with a nurse',
    ctaHref: '#request',
    image: '/images/travel-asstance.png',
    tags: ['Escort Nurse', 'Safe Transfers', 'Countrywide'],
  },
]
