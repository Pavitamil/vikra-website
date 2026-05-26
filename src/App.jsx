import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import FeaturedServices from './components/FeaturedServices/FeaturedServices'
import About from './components/About/About'
import Stats from './components/Stats/Stats'
import Products from './components/Products/Products'
import Clients from './components/Clients/Clients'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <FeaturedServices />
        <About />
        <Stats />
        <Products />
        <Clients />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
