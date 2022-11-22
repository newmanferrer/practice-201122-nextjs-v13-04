import { getProductsIncrement } from '../../services'
import { ProductCard } from '../../components'
import styles from './page.module.css'

export default async function Store() {
  const products = await getProductsIncrement()

  return (
    <div className={styles.container}>
      <h1>Store</h1>
      <section>
        {products && products.map(product => <ProductCard key={product.id} product={product} />)}
      </section>
    </div>
  )
}
