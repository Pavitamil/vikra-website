import './HeroVideoBg.css'

// Direct Mixkit CDN MP4 URLs — free to use, no copyright issues
// Source: mixkit.co (Mixkit Free License)
const PRODUCT_VIDEOS = {
  // ROV Inspection — underwater light rays ambience
  rovito: 'https://assets.mixkit.co/videos/35659/35659-720.mp4',
  // Black Mantis Surveillance — school of fish near seabed
  blackmantis: 'https://assets.mixkit.co/videos/44976/44976-720.mp4',
  // Wavebot USV — aerial flying low over ocean surface
  wavebot: 'https://assets.mixkit.co/videos/44392/44392-1080.mp4',
  // Koorma amphibious — dolphins underwater
  koorma: 'https://assets.mixkit.co/videos/4133/4133-1080.mp4',
  // Deepsea camera — undersea background with light shining through
  ucam: 'https://assets.mixkit.co/videos/35659/35659-720.mp4',
  // Deepsea lights — tropical fish on reef close-up
  ulights: 'https://assets.mixkit.co/videos/44974/44974-720.mp4',
  // Borewell — turquoise ocean waves
  borewell: 'https://assets.mixkit.co/videos/2091/2091-1080.mp4',
  // Underwater cameras — clown fish reef
  'underwater-cameras': 'https://assets.mixkit.co/videos/7255/7255-720.mp4',
}

const FALLBACK_VIDEO = 'https://assets.mixkit.co/videos/35659/35659-720.mp4'

export default function HeroVideoBg({ slug }) {
  const videoSrc = PRODUCT_VIDEOS[slug] || FALLBACK_VIDEO

  return (
    <div className="hero-video-bg">
      <video
        className="hero-video-player"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Cinematic dark overlay so text is readable */}
      <div className="hero-video-overlay" />
    </div>
  )
}
