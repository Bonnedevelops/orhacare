import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import RequestForm from '../components/RequestForm/RequestForm'
import Steps from '../components/Steps/Steps'
import WhyChoose from '../sections/WhyChoose/WhyChoose'
import './HomeServices.css'
import './HomeExtras.css'

const services = [
  {
    title: 'Bedside nursing care',
    description: 'Personalized clinical support delivered in the comfort of your home. We provide attentive bedside care and post-treatment recovery support ensuring continuity of care beyond the hospital.',
    bullets: ['Post-operative care', 'Chronic condition management'],
    tone: 'blue' as const,
    image: '/images/motherbaby-care.png',
  },
  {
    title: 'Mother & baby care',
    description: 'Gentle postnatal support, breastfeeding guidance, newborn care, and rest support for mothers.',
    bullets: ['Night nurse options', 'Feeding & hygiene routines'],
    tone: 'pink' as const,
    image: '/images/motherbaby-care2.png',
  },
  {
    title: 'Elderly support',
    description: 'Orha care ensures reliable daily living assistance, mobility help, and companionship for older adults at home',
    bullets: ['Falls prevention focus', 'Medication reminders'],
    tone: 'green' as const,
    image: '/images/homecare.png',
  },
  {
    title: 'Travel nurse assistance',
    description: 'Professional nurse accompaniment for trips and appointments with full care handover ensuring safe movement, monitoring, and smooth care transitions.',
    bullets: ['Clinic/hospital liaison', 'Comfort & safety in transit'],
    tone: 'yellow' as const,
    image: '/images/travel-asstance.png',
  },
]

const blueServices = [
  { title: 'Personal care assistance', copy: 'Helping with daily activities to maintain independence.', icon: 'hands' },
  { title: 'Home nursing services', copy: 'Professional nursing care provided at home.', icon: 'lungs' },
  { title: 'Companionship services', copy: 'Enhancing quality of life through social interaction.', icon: 'heart' },
  { title: 'Rehabilitation support', copy: 'Individualized care, safety, familiarity, emotional support.', icon: 'wheelchair' },
  { title: 'Palliative care services', copy: 'Comfort, relief, support, improved quality of life.', icon: 'steth' },
]

const stats = [
  { label: 'Home visits delivered', value: 'counter', detail: 'Since launch across Kampala' },
  { label: 'Family satisfaction', value: '95%', detail: 'Post‑visit feedback score' },
  { label: 'RN-led care', value: '100%', detail: 'Registered nurses on every case' },
  { label: 'Response window', value: '8am–10pm', detail: 'Same-day scheduling' },
]

const testimonials = [
  {
    quote: 'They cared for my mum after surgery with kindness and skill.',
    name: 'Parent',
    role: 'Bedside nursing, Kampala',
    avatar: '/images/avatar.png',
  },
  {
    quote: 'Fast to respond, clear communication, and gentle with our baby.',
    name: 'Parents',
    role: 'Family caregiver, Ntinda',
    avatar: '/images/avatar.png',
  },
  {
    quote: 'Professional, punctual, and kept the doctor updated.',
    name: 'Parent',
    role: 'Guardian, Makindye',
    avatar: '/images/avatar.png',
  },
]

const HomePage: React.FC = () => {
  const [serviceCount, setServiceCount] = useState(0)

  useEffect(() => {
    const target = 120
    const duration = 1200
    let frame: number
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setServiceCount(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <Layout>
      <HeroSlider />

      <section className="section services-showcase">
        <div className="container services-wrap">
          <div className="section-head">
            <h2>Complete home care solutions</h2>
            <p className="muted">A quick look at the ways we support families.</p>
          </div>

          <div className="services-layout">
            <div className="services-photo tall">
              <img src="/images/portrait.png" alt="Home nursing care" />
            </div>

            <div className="services-stack">
              {services.map((s) => (
                <div key={s.title} className="stack-card">
                  <div className="stack-media">
                    <img src={s.image} alt={s.title} loading="lazy" />
                  </div>
                  <div className="stack-body">
                    <div className="stack-title">{s.title}</div>
                    <div className="stack-copy">{s.description}</div>
                    <a className="link" href="#request">Learn more →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
          </div>
          <div className="blue-service-grid">
            {blueServices.map((svc) => (
              <div key={svc.title} className="blue-card">
                <div className="blue-icon" aria-hidden>
                  <img src={`/images/icons/${svc.icon}.png`} alt="" />
                </div>
                <div className="blue-title">{svc.title}</div>
                <div className="blue-copy">{svc.copy}</div>
                <a className="blue-link" href="/services">Learn more</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChoose />

      <section className="section stats-strip">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-value">{stat.value === 'counter' ? `${serviceCount}+` : stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-detail">{stat.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>How it works</h2>
            <p className="muted">Book care easily.</p>
          </div>
          <Steps />
        </div>
      </section>

      <section className="section testimonials-block">
        <div className="container">
          <div className="section-head center">
            <h2>families sharing their experience with Orha Care</h2>
          </div>
          <div className="testimonial-grid success-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card success-card">
                <div className="t-head">
                  <img src={t.avatar} alt={t.name} />
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                    <div className="stars" aria-label="5 star rating">★★★★★</div>
                  </div>
                </div>
                <p className="muted">{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="request">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="section-head">
            <h2>Request care today</h2>
            <p className="muted">Send us a message to begin your care arrangements</p>
          </div>
          <RequestForm />
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
