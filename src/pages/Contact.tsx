import React from 'react'
import Layout from '../components/Layout/Layout'
import RequestForm from '../components/RequestForm/RequestForm'

const ContactPage: React.FC = () => (
  <Layout>
    <section className="section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="section-head">
          <h1>Contact</h1>
          <p className="muted">We respond quickly between 8:00 AM and 10:00 PM.</p>
        </div>
        <div className="card" style={{ display: 'grid', gap: '16px' }}>
          <div style={{ display: 'grid', gap: '8px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <div>
              <div className="muted">Phone</div>
              <a className="btn secondary" href="tel:+256708918995">+256 708 918 995</a>
            </div>
            <div>
              <div className="muted">WhatsApp</div>
              <a className="btn secondary" href="https://wa.me/256785041802">+256 785 041 802</a>
            </div>
            <div>
              <div className="muted">Address</div>
              <p className="muted">Hollywood building, Katwe, Kampala - Uganda</p>
            </div>
          </div>
          <RequestForm />
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
