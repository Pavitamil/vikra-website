import Hero from '../components/Hero/Hero'
import AboutServices from '../components/About/AboutServices'
import FeaturedUSV from '../components/FeaturedUSV/FeaturedUSV'
import About from '../components/About/About'
import Stats from '../components/Stats/Stats'
import Products from '../components/Products/Products'
import Clients from '../components/Clients/Clients'
import Portfolio from '../components/Portfolio/Portfolio'
import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutServices />
      <FeaturedUSV />
      <About />
      <Stats />
      <Products />
      <Clients />
      <Portfolio />
      <Services />
      <Contact />
    </>
  )
}


