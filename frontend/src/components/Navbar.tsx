import type { FC } from 'react'

const Navbar: FC = () => (
  <header className="site-header">
    <a className="wordmark" href="#home" aria-label="Slotify home">
      Studio Luma<span>.</span>
    </a>
    <nav className="main-nav" aria-label="Main navigation">
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </nav>
    <a className="header-cta" href="#contact">
      Let’s talk <span aria-hidden="true">↗</span>
    </a>
  </header>
)

export default Navbar