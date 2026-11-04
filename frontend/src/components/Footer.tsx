import type { FC } from 'react'

const Footer: FC = () => (
  <footer className="site-footer" id="contact">
    <div className="footer-top">
      <div>
        <p className="eyebrow">Your chair is waiting</p>
        <h2>Let’s make time<br /><em>for you.</em></h2>
      </div>
      <a className="button button-light" href="mailto:hello@slotify.example">Get in touch <span aria-hidden="true">↗</span></a>
    </div>
    <div className="footer-details">
      <a className="wordmark footer-wordmark" href="#home">Studio Luma<span>.</span></a>
      <p>123 Somewhere Street<br />Hamburg, DE 20354</p>
      <p><a href="mailto:hello@luma.example">hello@luma.example</a><br /><a href="tel:+17185550142">(718) 555-0142</a></p>
      <p className="footer-hours">Tue–Sat, by appointment<br />© 2025 Studio Luma Hair Studio</p>
    </div>
  </footer>
)

export default Footer