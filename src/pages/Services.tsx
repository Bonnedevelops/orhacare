import React from 'react'
import Layout from '../components/Layout/Layout'
import FAQ from '../components/FAQ/FAQ'
import Hero from '../components/Hero/Hero'
import ContactStrip from '../components/ContactStrip/ContactStrip'
import './ServicesPage.css'

const serviceDetails = [
  {
    id: 'bedside',
    title: 'Bedside nursing care',
    intro: 'Vitals, medications, wound care, IV/IM support, and recovery oversight in your home.',
    image: '/images/nurseadministeringIVcareathome.png',
    items: [
      { title: 'Post-operative care', copy: 'Dressings, pain monitoring, vitals, and mobility support.' },
      { title: 'Chronic condition support', copy: 'Monitoring for hypertension, diabetes, COPD, and more.' },
      { title: 'Medication management', copy: 'IV/IM administration, pillbox setup, safety checks.' },
      { title: 'Wound & catheter care', copy: 'Professional sterile technique and infection prevention.' },
    ],
  },
  {
    id: 'mother',
    title: 'Mother & baby care',
    intro: 'Postnatal support, breastfeeding guidance, newborn care, and rest support.',
    image: '/images/warmcaregivingincozynursery.png',
    items: [
      { title: 'Night nurse', copy: 'Overnight support so mothers can rest and recover.' },
      { title: 'Lactation guidance', copy: 'Feeding positions, latch help, routine building.' },
      { title: 'Newborn care', copy: 'Bathing, hygiene, soothing, safe sleep basics.' },
      { title: 'Postnatal recovery', copy: 'Monitoring, comfort measures, and reassurance for mum.' },
    ],
  },
  {
    id: 'elderly',
    title: 'Elderly support',
    intro: 'Dignified assistance with mobility, daily living, companionship, and safety.',
    image: '/images/caregiverassistingelderlywoman.png',
    items: [
      { title: 'Home care', copy: 'Daily living assistance, mobility, and safety monitoring.' },
      { title: 'Special needs care', copy: 'Adapted support for complex conditions and accessibility needs.' },
      { title: 'Memory care', copy: 'Gentle routines, orientation, and calm companionship.' },
      { title: 'Regular activities', copy: 'Engagement, hobbies, and cognitive stimulation.' },
      { title: 'Exercise care', copy: 'Guided mobility and light exercise within capacity.' },
      { title: 'Nutrition care', copy: 'Meal cues, hydration prompts, and safe feeding support.' },
    ],
  },
  {
    id: 'travel',
    title: 'Travel nurse assistance',
    intro: 'Nurse accompaniment for trips and appointments with professional handovers.',
    image: '/images/nurseassistingpatientoutofthecar.png',
    items: [
      { title: 'Trip readiness', copy: 'Pre-travel checks, meds, and comfort planning.' },
      { title: 'On-the-move monitoring', copy: 'Vitals and wellbeing during travel.' },
      { title: 'Clinic/hospital liaison', copy: 'Clear handovers and notes for your physician.' },
    ],
  },
]

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <div className="services-hero">
        <Hero
          eyebrow="Orha Care"
          title="Our Nursing Care Services"
          copy="Bedside nursing | Mother & Baby care | Elderly support | Travel assistance"
          backgroundImage="/images/arhacarenurseandpatientshands.png"
        />
      </div>

      <section className="section" style={{ background: '#f7fbfc' }}>
        <div className="container" style={{ display: 'grid', gap: '18px' }}>
          <div className="section-head">
            <p className="muted">Deliverring excellence in healthcare, Our Nursing Care Services are carefully crafted
              to offer comprehensive and compassionate solutions tailored to the unique needs of individuals and families.
              Our team of devoted ursing professionals n unwavering in their commitment to providing high-quality care unwavering support.
              Explore the array of services we offer:
            </p>
          </div>

          <div className="service-blocks">
            {serviceDetails.map((svc, idx) => (
              <div key={svc.id} className={`service-block ${idx % 2 ? 'reverse' : ''}`}>
                <div className="service-img">
                  <img src={svc.image} alt={svc.title} />
                </div>
                <div className="service-content">
                  <h3>{svc.title}</h3>
                  <p className="muted">{svc.intro}</p>
                  <div className="service-items">
                    {svc.items.map((item) => (
                      <div key={item.title} className="service-item">
                        <div className="service-item-title">{item.title}</div>
                        <div className="muted">{item.copy}</div>
                      </div>
                    ))}
                  </div>
                  <div className="service-cta-row">
                    <a className="link strong" href="/contact">Let’s connect →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f7fbfc' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-head">
            <h2>FAQs</h2>
            <p className="muted">Practical answers to common questions.</p>
          </div>
          <FAQ />
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <ContactStrip />
        </div>
      </section>
    </Layout>
  )
}

export default ServicesPage
