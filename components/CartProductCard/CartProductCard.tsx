import Image from 'next/image'
import { ICartProduct } from '../../models'
import styles from './CartProductCard.module.css'

interface ICartProductCardProps {
  product: ICartProduct
}

export const CartProductCard = ({ product }: ICartProductCardProps) => {
  return (
    <article className={styles.article}>
      <Image src={product.picture} alt={product.name} width={50} height={50} />
      <h2>{product.name}</h2>
      <h3>${product.price}</h3>
      <h3>quantity: {product.quantity}</h3>
    </article>
  )
}
