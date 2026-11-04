import type { FC } from 'react'

const About: FC = () => (
  <section className="about-section" id="about">
    <p className="eyebrow">A note from the studio</p>
    <div className="about-content">
      <h2>Come in as you are.<br /><em>That’s the whole point.</em></h2>
      <div className="about-copy">
        <p>Studio Luma is a small, independent hair studio built around good conversation, careful craft, and making time for yourself.</p>
        <p>No rush, no one-size-fits-all. Just a thoughtful chair, a good cup of tea, and hair that feels like yours.</p>
        <span className="signature">See you soon, <i>Sam</i></span>
      </div>
    </div>
  </section>
)

export default About