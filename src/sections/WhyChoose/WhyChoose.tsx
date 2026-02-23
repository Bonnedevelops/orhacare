import React from 'react'
import './WhyChoose.css'

const icons = {
  nurse: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l6 2v4c0 3.866-2.686 7-6 7s-6-3.134-6-7V5l6-2z" stroke="#0f1f63" strokeWidth="1.4" />
      <path d="M9.5 11h5" stroke="#0f1f63" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 8.5v5" stroke="#0f1f63" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  clock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="#0f1f63" strokeWidth="1.4" />
      <path d="M12 7v5l3 2" stroke="#0f1f63" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  chat: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 6h14v9H8l-3 3V6z" stroke="#0f1f63" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 10h6M9 13h3" stroke="#0f1f63" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
}

const cards = [
  {
    title: 'Registered, vetted nurses you can trusted',
    copy: 'We maintain strict clinical oversight and quality standards, ensuring you receive professional, ethical, and dependable care from practitioners who are both qualified and compassionate',
    icon: icons.nurse,
  },
  {
    title: 'Same-day availability',
    copy: 'Health needs don’t wait. Our services operate 24hrs daily, with rapid response support for urgent care requests. Whether planned or unexpected, we are available fo your care needs quickly and efficiently.',
    icon: icons.clock,
  },
  {
    title: 'Family-first communication',
    copy: 'We believe care works best when families feel informed, respected, and involved. That’s why we prioritize clear updates, attentive listening, and collaborative decision-making. From the first visit to ongoing support, we ensure everyone feels confident, heard, and reassured.',
    icon: icons.chat,
  },
]

const highlight = {
  title: 'Flexible Care That Adapts to Your Life',
  copy: 'Your routine matters. Orha Care offers adaptable service options; visit-based, shift-based, overnight, or short-notice bookings. With fast confirmations, transparency, and responsive coordination, you stay fully in control while we handle the details.',
}

const WhyChoose: React.FC = () => (
  <section className="why-block">
    <div className="why-frame">
      <h2>
        Why <span className="brand-accent">Orha Care</span> is the right choice for you
      </h2>
      <div className="why-grid">
        {cards.map((item) => (
          <div key={item.title} className="why-tile">
            <div className="tile-icon" aria-hidden>
              {item.icon}
            </div>
            <div className="tile-title">{item.title}</div>
            <div className="tile-copy">{item.copy}</div>
          </div>
        ))}
        <div className="why-tile highlight">
          <div className="tile-title">{highlight.title}</div>
          <div className="tile-copy">{highlight.copy}</div>
          <a className="btn" href="#request">
            Start care →
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default WhyChoose
