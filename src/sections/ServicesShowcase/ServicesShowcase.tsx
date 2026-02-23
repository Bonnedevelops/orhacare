import React from 'react'
import './ServicesShowcase.css'

const services = [
  {
    title: 'Bedside nursing care',
    copy: 'VPersonalized clinical support delivered in the comfort of your home. We provide attentive bedside care, including vitals monitoring, wound management, medication administration, IV/IM therapy, and post-treatment recovery support—ensuring continuity of care beyond the hospital.',
    tags: ['medical administration', 'RN-led'],
    image: 'https://images.unsplash.com/photo-1582719478248-51f1e6a2c9c1?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Mother & baby care',
    copy: 'Postnatal support, breastfeeding guidance, newborn care, and rest support for mothers.',
    tags: ['Night nurse', 'Lactation help'],
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Elderly support',
    copy: 'Mobility assistance, companionship, safety checks, and medication reminders.',
    tags: ['Falls prevention', 'Companionship'],
    image: 'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=800&q=80',
  },
]

const highlight = {
  title: 'Travel nurse assistance',
  copy: 'Nurse accompaniment for trips and appointments with professional handovers and comfort on the move.',
  cta: 'Request travel nurse',
  image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80',
}

const ServicesShowcase: React.FC = () => (
  <section className="services-block" id="services">
    <div className="services-frame">
      <p className="pill-label">Our services</p>
      <div className="services-head hero-row">
        <div>
          <h2>Care options tailored to your family.</h2>
          <p className="muted">From bedside nursing to travel support, choose the service that fits your day.</p>
        </div>
        <div className="services-collage" aria-hidden>
          <div className="collage main">
            <img src="https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=800&q=80" alt="" />
          </div>
          <div className="collage side">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80" alt="" />
          </div>
        </div>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <article key={s.title} className="service-card">
            <div className="service-media">
              <img src={s.image} alt={s.title} loading="lazy" />
              <div className="media-overlay" />
              <div className="badge-row">
                {s.tags.map((t) => (
                  <span key={t} className="media-badge">{t}</span>
                ))}
              </div>
            </div>
            <div className="service-body">
              <h3>{s.title}</h3>
              <p className="muted">{s.copy}</p>
              <a className="link" href="#request">Request this service →</a>
            </div>
          </article>
        ))}

        <article className="service-card highlight">
          <div className="service-media">
            <img src={highlight.image} alt={highlight.title} loading="lazy" />
            <div className="media-overlay dark" />
          </div>
          <div className="service-body">
            <h3>{highlight.title}</h3>
            <p className="muted">{highlight.copy}</p>
            <a className="btn" href="#request">{highlight.cta}</a>
          </div>
        </article>
      </div>
    </div>
  </section>
)

export default ServicesShowcase
