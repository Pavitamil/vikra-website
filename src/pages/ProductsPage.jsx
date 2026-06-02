import Products from '../components/Products/Products'
import PageHero from '../components/PageHero/PageHero'
import usvImg from '../assets/profile/USV-1.png'

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="OUR PRODUCTS"
        subtitle="Explore our advanced remotely operated vehicles, autonomous vessels, and underwater systems."
        eyebrow="INNOVATION UNDERWATER"
        breadcrumbs={[{ label: 'Products' }]}
        image={usvImg}
        showCta={true}
        ctaText="Explore Products"
        ctaHref="#products-catalog"
      />
      <div id="products-catalog">
        <Products />
      </div>
    </>
  )
}
