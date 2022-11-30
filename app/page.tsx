import { getProductsLatest } from '../services'
import { ProductCard } from '../components'
import styles from './page.module.css'

export default async function Home() {
  const productsLatest = await getProductsLatest()

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerBackground}>
          <div className={styles.bannerInfo}>
            <h1>Best Sellers 2022 Collections</h1>
            <p>Universe 2022. New hats, tees, sweatshirts and more.</p>
          </div>
        </div>
      </div>

      <div className={styles.products}>
        <h2>Latest Products</h2>
        <section>
          {productsLatest &&
            productsLatest.map(product => <ProductCard key={product.id} product={product} />)}
        </section>
      </div>
    </div>
  )
}
