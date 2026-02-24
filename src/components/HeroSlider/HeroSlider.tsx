import React, { useEffect, useMemo, useRef, useState } from 'react'
import './HeroSlider.css'
import { heroSlides } from '../../data/heroSlides'

const AUTO_MS = 6500

const HeroSlider: React.FC = () => {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [ready, setReady] = useState(false)
  const prefersReducedMotion = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches, [])
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    setReady(true)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || paused) return
    intervalRef.current = window.setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length)
    }, AUTO_MS)
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [prefersReducedMotion, paused])

  const goTo = (idx: number) => {
    setActive(idx)
    if (intervalRef.current) window.clearInterval(intervalRef.current)
  }

  return (
    <section
      className={`hero-slider ${ready ? 'ready' : ''}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Care services hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroSlides.map((slide, idx) => (
        <article
          key={slide.title}
          className={`slide ${idx === active ? 'active' : 'inactive'}`}
          aria-hidden={idx !== active}
          style={{ backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.55), rgba(0,0,0,0.25)), url(${slide.image})` }}
        >
          <div className="slide-content" aria-live="polite">
            <h1>{slide.title}</h1>
            <p className="lead">{slide.copy}</p>
            {slide.tags && (
              <div className="chip-row">
                {slide.tags.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            )}
            <div className="cta-row">
              <a className="btn" href={slide.ctaHref}>{slide.ctaLabel}</a>
              <a className="btn secondary" href="tel:+256708918995">Call now</a>
            </div>
          </div>
        </article>
      ))}

      <div className="controls dots-only" role="tablist" aria-label="Hero slides">
        {heroSlides.map((s, idx) => (
          <button
            key={s.title}
            className={idx === active ? 'dot active' : 'dot'}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}: ${s.title}`}
            aria-pressed={idx === active}
            role="tab"
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider
