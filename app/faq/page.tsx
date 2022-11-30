import styles from './page.module.css'

export default function FAQ() {
  return (
    <div className={styles.container}>
      <h1>FAQ</h1>

      <div className={styles.questionsContainer}>
        <details>
          <summary>How can I sell my product in your store?</summary>
          <p>
            Register for the flexibility to sell one item or thousands. Choose a selling plan based
            on your needs—you can change plans at any time. Use Seller Central to create a product
            listing. Create a great product detail page by following this Quick-Start Style Guide.
            Promote products through Amazon advertising or other marketing channels. Fulfill orders
            quickly when customers make a purchase.
          </p>
        </details>

        <details>
          <summary>What can I sell in your store?</summary>
          <p>
            The possibilities are virtually limitless. What you can sell depends on the product, the
            product category, and the brand. Some categories are open to all sellers, some require a
            Professional seller account, some require approval to sell, and some include products
            that cannot be sold by third-party sellers.
          </p>
        </details>

        <details>
          <summary>What items can’t be sold in your store?</summary>
          <p>
            Some products may not be listed as a matter of compliance with legal or regulatory
            restrictions (for example, prescription drugs) or policy (for example, crime scene
            photos). For detailed information, visit Seller Central Help to learn more about
            restrictions, and how to request approval for new products in certain categories.
          </p>
        </details>

        <details>
          <summary>How do beginners sell in your’s store?</summary>
          <p>
            Getting started is as simple as choosing a selling plan and setting up an store seller
            account. In order to complete your registration, make sure you have access to your bank
            account number and bank routing number, chargeable credit card, government-issued ID,
            tax information, and phone number.
          </p>
        </details>
      </div>
    </div>
  )
}
