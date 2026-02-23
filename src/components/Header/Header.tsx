import React from 'react'
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
        <nav className="nav">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={pathname === item.path ? 'active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="cta-group">
          <a className="cta-link" href="tel:+256708918995">Call +256 708 918 995</a>
          <a className="btn" href="#request">Request care</a>
        </div>
      </div>
    </header>
  )
}

export default Header
