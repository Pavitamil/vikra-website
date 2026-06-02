import Contact from '../components/Contact/Contact'
import PageHero from '../components/PageHero/PageHero'

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a project or need a custom solution? Reach out to our team of experts."
        eyebrow="GET IN TOUCH"
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <Contact />
    </>
  )
}
