import { getProductByIdStatic } from '../../../services'
import { ProductDetailsCard } from '../../../components'
import styles from './page.module.css'

interface IProductPageProps {
  params: {
    productId: string
  }
}

export default async function ProductPage({ params }: IProductPageProps) {
  const productId = +params.productId
  const product = await getProductByIdStatic(productId)

  if (!product) throw new Error(`Product whit id "${productId}" not found!`)

  return (
    <div className={styles.container}>
      <h1>Product</h1>
      <ProductDetailsCard product={product} />
    </div>
  )
}
