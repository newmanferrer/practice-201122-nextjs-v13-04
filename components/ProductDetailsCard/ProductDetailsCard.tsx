import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '../../models'
import { AddToCartButton } from '../'
import styles from './ProductDetailsCard.module.css'

interface IProductDetailsCardProps {
  product: IProduct
}

export const ProductDetailsCard = ({ product }: IProductDetailsCardProps) => {
  return (
    <article className={styles.article}>
      <Image src={product.picture} alt={product.name} width={300} height={300} />
      <h2>{product.name}</h2>
      <h3>${product.price}</h3>
      <h3>quantity: {product.stock}</h3>
      <h3>brand: {product.brand_name}</h3>
      <p>{product.description}</p>
      <Link href='/store'>Go to products</Link>
      <AddToCartButton product={product} />
    </article>
  )
}
