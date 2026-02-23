import React from 'react'
import './ContactStrip.css'

const ContactStrip: React.FC = () => (
  <div className="contact-strip card">
    <div>
      <h3>Need the care you can trust? Talk to us</h3>
      <p className="muted">Call, WhatsApp, or send a request and we’ll confirm availability.</p>
    </div>
    <div className="contact-actions">
      <a className="btn secondary" href="tel:+256708918995">Call</a>
      <a className="btn secondary" href="https://wa.me/256785041802">WhatsApp</a>
      <a className="btn" href="#request">Request care</a>
    </div>
  </div>
)

export default ContactStrip
