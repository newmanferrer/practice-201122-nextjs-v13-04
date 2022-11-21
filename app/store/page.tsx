import Image from 'next/image'
import { getProductsLatest } from '../../services'
import styles from './page.module.css'

export default async function Store() {
  const products = await getProductsLatest()

  return (
    <div className={styles.container}>
      <h1>Store</h1>
      {products &&
        products.map(product => (
          <div key={product.id}>
            <Image width={400} height={400} src={product.picture} alt={product.name} />
            {product.name}
          </div>
        ))}
    </div>
  )
}
