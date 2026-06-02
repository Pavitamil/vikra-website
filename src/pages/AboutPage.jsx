import About from '../components/About/About'
import PageHero from '../components/PageHero/PageHero'

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Pioneering indigenous underwater robotics solutions and marine technology."
        breadcrumbs={[{ label: 'About' }]}
      />
      <About />
    </>
  )
}
