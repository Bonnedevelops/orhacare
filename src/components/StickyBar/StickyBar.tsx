import React from 'react'
import './StickyBar.css'

const StickyBar: React.FC = () => {
  return (
    <div className="sticky-bar" aria-label="Quick contact actions">
      <div className="sticky-pill">
        <a
          className="pill-button circle whatsapp"
          href="https://wa.me/256785041802"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.5 2 2 6.2 2 11.3c0 1.8.5 3.5 1.5 5L2 22l5-1.3c1.4.8 3 .9 5 .9 5.5 0 10-4.2 10-9.3C22 6.2 17.5 2 12 2Zm0 16.6c-1.6 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4.3 13.9 4 12.6 4 11.3 4 7.4 7.6 4.3 12 4.3s8 3.1 8 7c0 3.9-3.6 7.3-8 7.3Zm4.3-5.4c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1-.1.2-.6.7-.7.8-.1.1-.3.1-.5 0-1-.4-1.9-1-2.6-1.9-.2-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.3 0-.5-.1-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.6.3-.2.2-.8.7-.8 1.8s.8 2.1 1 2.3c.1.2 1.6 2.5 3.9 3.4.5.2.9.3 1.2.4.5.2 1 .2 1.3.1.4-.1 1.3-.5 1.4-1 .2-.5.2-.9.1-1 0-.1-.1-.1-.3-.2Z" />
          </svg>
        </a>

        <a className="pill-button primary" href="tel:+256708918995" aria-label="Call Orha Care">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.6 4.2c.3-.2.7-.2 1-.1l2.5 1c.4.2.7.6.7 1.1l-.1 2.3c0 .3-.1.6-.3.8l-1 1c.6 1.1 1.5 2 2.5 2.7l1.1-.9c.2-.2.5-.3.8-.3l2.3.1c.5 0 1 .3 1.2.7l1 2.5c.1.3.1.7-.1 1-.3.7-1 1.2-1.8 1.2-3.2 0-6.2-1.4-8.5-3.7C6.7 12.6 5.3 9.6 5.3 6.4c0-.8.5-1.5 1.3-1.8Z" />
          </svg>
          <span>Call Now</span>
        </a>

        <a
          className="pill-button circle request"
          href="/contact#request"
          aria-label="Request a visit"
        >
          <img src='/images/requestcare.png' width='32px' height='32px'/>
        </a>
      </div>
    </div>
  )
}

export default StickyBar
