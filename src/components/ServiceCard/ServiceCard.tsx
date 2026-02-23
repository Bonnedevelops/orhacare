import React from 'react'
import './ServiceCard.css'

interface Props {
  title: string
  description: string
  bullets?: string[]
  tone?: 'blue' | 'pink' | 'green' | 'yellow'
  image?: string
  tags?: string[]
}

const ServiceCard: React.FC<Props> = ({ title, description, bullets, tone = 'blue', image, tags }) => {
  return (
    <div className={`service-card card tone-${tone}`}>
      {image && (
        <div className="service-media">
          <img src={image} alt={title} loading="lazy" />
          <div className="media-overlay" />
          {tags && (
            <div className="media-tags">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      )}
      <h3>{title}</h3>
      <p className="muted">{description}</p>
      {bullets && (
        <ul>
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      <a className="link" href="#request">Request this service →</a>
    </div>
  )
}

export default ServiceCard
