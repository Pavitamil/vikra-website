import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import PortfolioPage from './pages/PortfolioPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import WavebotDetailPage from './pages/WavebotDetailPage'
import Wavebot2DetailPage from './pages/Wavebot2DetailPage'
import KoormaDetailPage from './pages/KoormaDetailPage'
import RovitoDetailPage from './pages/RovitoDetailPage'
import BlackMantisDetailPage from './pages/BlackMantisDetailPage'
import UnderwaterLightBatteryDetailPage from './pages/UnderwaterLightBatteryDetailPage'
import UnderwaterCameraDetailPage from './pages/UnderwaterCameraDetailPage'
import BorewellCameraDetailPage from './pages/BorewellCameraDetailPage'
import ProductDetailPage from './pages/ProductDetailPage'
import './App.css'

function App() {
  const location = useLocation()
  const isSubpage = location.pathname !== '/'

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className={isSubpage ? 'main-subpage' : ''}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/wavebot-detail" element={<WavebotDetailPage />} />
          <Route path="/wavebot-2-detail" element={<Wavebot2DetailPage />} />
          <Route path="/koorma-detail" element={<KoormaDetailPage />} />
          <Route path="/rovito-detail" element={<RovitoDetailPage />} />
          <Route path="/blackmantis-detail" element={<BlackMantisDetailPage />} />
          <Route path="/underwater-light-battery-detail" element={<UnderwaterLightBatteryDetailPage />} />
          <Route path="/underwater-camera-detail" element={<UnderwaterCameraDetailPage />} />
          <Route path="/borewell-camera-detail" element={<BorewellCameraDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
