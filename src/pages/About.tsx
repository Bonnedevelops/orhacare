import React from 'react'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import './About.css'

const AboutPage: React.FC = () => (
  <Layout>
    <div className="about-page-bg">
    <Hero
      eyebrow="About Orha Care"
      title="Lighting the path to healing."
      copy="We bring hospital-quality care to your home with a registered, vetted nursing team focused on dignity, safety, and clear communication."
      backgroundImage="/images/orhacarenurses.png"
    />
    <section className="section">
      <div className="container" style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'stretch' }}>
        <div>
          <h1>Why we Exist</h1>
          <p className="muted">
            Orha Care exists to make professional healthcare feel personal, accessible, and reassuring.
            Our purpose is to bring safe, hospital-quality care to your comfort.
          </p>
          <p className="muted">
            We understand that seeking care for yourself or a loved one is often accompanied by concern, urgency, and many questions.
            That’s why every step of our approach is designed to be calm, respectful, and dependable.
            Care is delivered with both clinical precision and genuine compassion,
            ensuring each person feels supported not only medically, but emotionally as well.
          </p>
          <p className="muted">
            Our work is grounded in the belief that quality care should feel human.
            Beyond procedures and checklists, we focus on listening, reassuring, and adapting to individual needs.
            Whether supporting recovery, assisting with ongoing health needs, or providing comfort during
            vulnerable moments, our priority is always the person receiving care and the family who trusts us.
          </p>
        </div>
        <div className="collage side" style={{ height: '100%', maxHeight: '420px' }}>
          <img src='/images/whyweexist.png' alt="Orha Care team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </section>

    <section className="section about-section">
      <div className="container">
        <div className="section-head">
          <h2>Our Standards of Care</h2>
          <p className="muted">Clinical quality anchored in empathy and clear communication.</p>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <div className="about-title">Licensed, Carefully Screened Professionals</div>
            <p className="muted">All care is provided by registered practitioners whose credentials are verified and whose practice reflects strong ethical and professional standards.</p>
          </div>
          <div className="about-card">
            <div className="about-title">Structured Clinical Protocols</div>
            <p className="muted">Every visit follows established procedures for hygiene, infection prevention, medication safety, and confidentiality, ensuring consistent, reliable care you can trust.</p>
          </div>
          <div className="about-card">
            <div className="about-title">Coordinated Medical Continuity</div>
            <p className="muted">When appropriate, care aligns with your physician’s guidance so treatment remains consistent, clear, and supportive of your overall health plan.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section about-section">
      <div className="container">
        <div className="about-duo">
          <div>
          <div className="about-eyebrow">Our Commitment</div>
          <p className="muted">To provide care that feels safe, respectful, and reassuring where professionalism meets compassion, and where every individual is treated with dignity.</p>
          </div>
          <div className="about-mv">
            <div className="about-card">
              <div className="about-eyebrow">Mission</div>
              <p className="muted">To provide safe, professional, and compassionate nursing support wherever it is needed, ensuring every individual receives dignified, reliable care tailored to their health and personal needs.</p>
            </div>
            <div className="about-card">
              <div className="about-eyebrow">Vision</div>
              <p className="muted">To be a trusted leader in patient-centered nursing support, known for clinical excellence, integrity, and care that brings confidence, comfort, and reassurance to every client and family.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </Layout>
)

export default AboutPage
