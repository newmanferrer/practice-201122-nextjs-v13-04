'use client'

import { useShoppingCartContext } from '../../contexts'
import { CartProductCard } from '../'
import styles from './ShoppingCart.module.css'

export const ShoppingCart = () => {
  const { cart, isOpen, openCart, closeCart, toggleCart } = useShoppingCartContext()

  return (
    <div className={styles.container} style={{ display: isOpen ? 'block' : 'none' }}>
      <div className={styles.title_button_container}>
        <h2>Shopping Cart</h2>
        <button onClick={toggleCart}>❌</button>
      </div>

      {cart.length === 0 ? (
        <div>
          <h3>Cart is empty</h3>
        </div>
      ) : (
        <h3>Your Products</h3>
      )}

      <div>{JSON.stringify(isOpen, null, 2)}</div>
    </div>
  )
}
