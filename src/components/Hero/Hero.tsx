import React from 'react'
import './Hero.css'

type HeroProps = {
  eyebrow: string
  title: string
  copy: string
  backgroundImage?: string
}

const Hero: React.FC<HeroProps> = ({ eyebrow, title, copy, backgroundImage }) => {
  return (
    <section className="hero hero-overlay" style={backgroundImage ? { backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.55), rgba(0,0,0,0.25)), url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
      {!backgroundImage && <div className="hero-backdrop" role="presentation" />}
      <div className="hero-shell">
        <div className="hero-copy">
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p className="lead">{copy}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
