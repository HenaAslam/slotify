import type { FC } from 'react'

const Services: FC = () => (
  <section className="services-section" id="services">
    <div className="section-heading">
      <div>
        <p className="eyebrow">A little something for your hair</p>
        <h2>Made for your kind of <em>you.</em></h2>
      </div>
      <p className="section-aside">Good hair isn’t one-size-fits-all.<br />Let’s find what feels like you.</p>
    </div>
    <div className="service-list">
      <article className="service-row">
        <span className="service-number">01</span>
        <div className="service-info">
          <h3>The Signature Cut</h3>
          <p>A considered cut, finished with a soft blowout and all the little details.</p>
        </div>
        <span className="service-duration">60 min</span>
        <span className="service-price">$85</span>
      </article>
      <article className="service-row">
        <span className="service-number">02</span>
        <div className="service-info">
          <h3>Soft Dimension</h3>
          <p>Sun-kissed highlights and a seamless gloss for color that grows out beautifully.</p>
        </div>
        <span className="service-duration">2.5 hrs</span>
        <span className="service-price">$210</span>
      </article>
      <article className="service-row">
        <span className="service-number">03</span>
        <div className="service-info">
          <h3>Wash &amp; Reset</h3>
          <p>A nourishing wash, scalp massage, and easy, feel-good styling.</p>
        </div>
        <span className="service-duration">45 min</span>
        <span className="service-price">$55</span>
      </article>
    </div>
    <p className="service-disclaimer">Starting prices shown. Final pricing may vary by length and service needs.</p>
  </section>
)

export default Services