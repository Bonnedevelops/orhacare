import React from 'react'
import './Steps.css'

const steps = [
  {
    title: 'Request care',
    copy: 'Tell us who needs care, where, and when.',
    icon: '/images/request-care.gif',
  },
  {
    title: 'Match a nurse',
    copy: 'A qualified nurse suited to your care needs is carefully assigned.',
    icon: '/images/match-nurse.gif',
  },
  {
    title: 'OrhaCare, anywhere',
    copy: 'Care begins on time, reaasuring support.',
    icon: '/images/home-care.png',
  },
]

const Steps: React.FC = () => (
  <div className="timeline">
    {steps.map((s, idx) => (
      <div key={s.title} className="timeline-step">
        <div className="dot" aria-hidden>
          <span>{idx + 1}</span>
        </div>
        <div className="step-card">
          <div className="step-icon">
            <img src={s.icon} alt={s.title} loading="lazy"/>
          </div>
          <div className="step-title">{s.title}</div>
          <div className="muted">{s.copy}</div>
        </div>
      </div>
    ))}
    <div className="timeline-end">
      <a className="link" href="#request">Request care →</a>
    </div>
  </div>
)

export default Steps
