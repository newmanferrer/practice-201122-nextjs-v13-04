import Image from 'next/image'
import Link from 'next/link'
import { createFriendlyUrl } from '../../lib'
import { IProduct } from '../../models'
import styles from './ProductCard.module.css'

interface IProductCardProps {
  product: IProduct
}

export const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <article className={styles.article}>
      <Image src={product.picture} alt={product.name} width={150} height={150} />
      <h2>{product.name}</h2>
      <h3>${product.price}</h3>
      <h3>quantity: {product.stock}</h3>
      <Link href={`/store/${createFriendlyUrl(product)}`}>View details</Link>
      <button>Add to Cart</button>
    </article>
  )
}
