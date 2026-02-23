import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const Header: React.FC = () => {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <div className="brand">
          <img className="logo-img" src="/images/logo.png" alt="Orha Care logo" />
          <div>
            <div className="brand-name">Orha Care</div>
            <div className="brand-tag">Lighting the path to healing</div>
          </div>
        </div>
        <button
          type="button"
          className={`menu-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className="nav">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={pathname === item.path ? 'active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={`mobile-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <nav className="nav mobile-nav" onClick={() => setOpen(false)}>
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={pathname === item.path ? 'active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
