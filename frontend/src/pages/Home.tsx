import type { FC } from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'

const Home: FC = () => (
  <div className="site-shell">
    <Navbar />
    <main>
      <Hero />
      <Services />
      <About />
    </main>
    <Footer />
  </div>
)

export default Home