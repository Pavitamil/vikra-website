import Portfolio from '../components/Portfolio/Portfolio'
import PageHero from '../components/PageHero/PageHero'
import FeaturedUSV from '../components/FeaturedUSV/FeaturedUSV'

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Our Portfolio"
        subtitle="Proven track record of underwater inspection, harbor security, and deep-sea deployments."
        eyebrow="OUR MISSION HISTORY"
        breadcrumbs={[{ label: 'Portfolio' }]}
      />
      <FeaturedUSV />
      <Portfolio />
    </>
  )
}
