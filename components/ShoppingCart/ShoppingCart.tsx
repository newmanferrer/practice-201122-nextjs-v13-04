import styles from './ShoppingCart.module.css'

export const ShoppingCart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title_button_container}>
        <h2>Shopping Cart</h2>
        <button>❌</button>
      </div>
    </div>
  )
}
