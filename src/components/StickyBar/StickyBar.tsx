import React from 'react'
import './StickyBar.css'

const StickyBar: React.FC = () => {
  return (
    <div className="sticky-bar" aria-label="Quick contact actions">
      <div className="sticky-pill">
        <a
          className="pill-button circle"
          href="https://wa.me/256785041802"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <img src='/images/whatsapp.png' width='26px' height='26px'/>
        </a>

        <a className="pill-button circle primary" href="tel:+256708918995" aria-label="Call Orha Care">
          <img src='/images/emergency-call.png'/>
        </a>

        <a
          className="pill-button circle request"
          href="/contact#request"
          aria-label="Request a visit"
        >
          <img src='/images/requestcare.png' width='26px' height='26px'/>
        </a>
      </div>
    </div>
  )
}

export default StickyBar
