import type { FC } from 'react'

const Hero: FC = () => (
  <section className="hero-section" id="home">
    <div className="hero-copy">
      <p className="eyebrow"><span className="eyebrow-mark" /> Your neighborhood hair studio</p>
      <h1>A good hair day<br />starts <em>here.</em></h1>
      <p className="hero-intro">
        Thoughtful cuts, lived-in color, and a little room to exhale. Come as you are; leave feeling like yourself.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#contact">Book an appointment <span aria-hidden="true">↗</span></a>
        <a className="text-link" href="#services">Explore services <span aria-hidden="true">↓</span></a>
      </div>
      <p className="hero-note">A slower kind of salon visit <span>·</span> Hamburg, DE</p>
    </div>
    <div className="hero-art" aria-label="Studio Luma Hair Studio, since 2021" role="img">
      <div className="art-topline"><span>GOOD HAIR, GOOD MOOD</span><span>EST. 2021</span></div>
      <div className="art-monogram" aria-hidden="true">S</div>
      <div className="art-caption"><span>Studio Luma</span><span>Hair Studio<br />Hamburg, DE</span></div>
      <span className="art-spark" aria-hidden="true">✳</span>
    </div>
  </section>
)

export default Hero