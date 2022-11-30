'use client'

import Image from 'next/image'
import { useShoppingCartContext } from '../../contexts'
import { CartProductCard } from '../'
import styles from './ShoppingCart.module.css'

export const ShoppingCart = () => {
  const { cart, isOpen, closeCart } = useShoppingCartContext()

  function getTotal() {
    const total = cart
      .reduce((acc, product) => acc + product.price * product.quantity, 0)
      .toFixed(2)
    return total
  }

  return (
    <div className={styles.container} style={{ display: isOpen ? 'block' : 'none' }}>
      <div className={styles.title_button_container}>
        <h2>Shopping Cart</h2>
        <button onClick={closeCart}>❌</button>
      </div>

      {cart.length === 0 ? (
        <div className={styles.empty}>
          <h3>Cart is empty!</h3>
          <h4>Add one product...</h4>
        </div>
      ) : (
        <div className={styles.products}>
          <h3>Your Products</h3>
          <>
            {cart.map(product => (
              <article className={styles.product} key={product.id}>
                <div>
                  <Image src={product.picture} alt={product.name} width={70} height={70} />
                </div>

                <div>
                  <h4>{product.name}</h4>
                  <p>${product.price}</p>
                  <p>{product.quantity} units</p>
                  <p>SubTotal: ${(product.price * product.quantity).toFixed(2)}</p>
                </div>
              </article>
            ))}
          </>
          <div>
            <h3 className={styles.total}>Total: ${getTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  )
}
