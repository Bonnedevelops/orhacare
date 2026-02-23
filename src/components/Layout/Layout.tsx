import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import StickyBar from '../StickyBar/StickyBar'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyBar />
    </div>
  )
}

export default Layout
