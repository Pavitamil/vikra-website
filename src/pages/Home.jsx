import Hero from '../components/Hero/Hero'
import FeaturedServices from '../components/FeaturedServices/FeaturedServices'
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
      <FeaturedServices />
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


