'use client'

import { IProduct } from '../../models'
import { useShoppingCartContext } from '../../contexts'
import styles from './AddToCartButton.module.css'

interface IAddToCartButtonProps {
  product: IProduct
}

export const AddToCartButton = ({ product }: IAddToCartButtonProps) => {
  const { addProductToCart, openCart } = useShoppingCartContext()

  const handleClick = () => {
    addProductToCart(product)
    openCart()
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      Add to Cart
    </button>
  )
}
