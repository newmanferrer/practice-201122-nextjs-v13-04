import Image from 'next/image'
import { ICartProduct } from '../../models'
import styles from './CartProductCard.module.css'

interface ICartProductCardProps {
  product: ICartProduct
}

export const CartProductCard = ({ product }: ICartProductCardProps) => {
  return (
    <article className={styles.article} key={product.id}>
      <div className={styles.articleImage}>
        <Image src={product.picture} alt={product.name} width={70} height={70} />
      </div>

      <div className={styles.articleInfo}>
        <h4>{product.name}</h4>
        <p>${product.price}</p>
        <p>{product.quantity} units</p>
        <p>SubTotal: ${(product.price * product.quantity).toFixed(2)}</p>
      </div>

      <div className={styles.articleButtons}>
        <button>-1</button>
        <button>Delete</button>
        <button>+1</button>
      </div>
    </article>
  )
}
