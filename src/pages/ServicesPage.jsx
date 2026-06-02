import Services from '../components/Services/Services'
import PageHero from '../components/PageHero/PageHero'
import usvImg from '../assets/profile/USV-1.png'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="OUR SERVICES"
        subtitle="End-to-end marine inspection, hydrographic mapping, and autonomous surveillance services."
        eyebrow="WHAT WE DO"
        breadcrumbs={[{ label: 'Services' }]}
        image={usvImg}
        showCta={true}
        ctaText="Explore Services"
        ctaHref="#services-catalog"
      />
      <div id="services-catalog">
        <Services />
      </div>
    </>
  )
}


