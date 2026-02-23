import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer section">
      <div className="container footer-grid">
        <div>
          <img className="logo-img" src="/images/logo.png" alt="Orha Care logo" />
          <h3>Orha Care</h3>
          <p className="muted">Lighting the path to healing</p>
          <p className="muted">Hollywood building, Katwe, Kampala - Uganda</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li>Bedside nursing care</li>
            <li>Mother & baby care</li>
            <li>Elderly support</li>
            <li>Travel nurse assistance</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul className="contact-list">
            <li>
              <img className="contact-icon" src="/images/icons/phone-call.png" alt="call" />
              <a href="tel:+256708918995">+256 708 918 995</a>
            </li>
            <li>
              <img className="contact-icon" src="/images/icons/whatsapp.png" alt="whatsapp" />
              <a href="https://wa.me/256785041802">+256 785 041 802</a>
            </li>
            <li>
              <img className="contact-icon" src="/images/icons/email.png" alt="email" />
              <a href="mailto:info@orhacare.com">info@orhacare.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} Orha Care. All rights reserved.</div>
    </footer>
  )
}

export default Footer
