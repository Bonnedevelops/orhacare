import React from 'react'
import './StickyBar.css'

const StickyBar: React.FC = () => {
  return (
    <div className="sticky-bar">
      <div className="container sticky-inner">
        <div>
          <strong>Need care now?</strong>
          <span className="muted">Call or request a visit.</span>
        </div>
        <div className="actions">
          <a className="btn secondary" href="tel:+256708918995">Call</a>
          <a className="btn" href="#request">Request care</a>
        </div>
      </div>
    </div>
  )
}

export default StickyBar
