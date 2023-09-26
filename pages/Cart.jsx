import styles from '../styles/Cart.module.css';

function Cart({ cart }) {
  const taxRate = 0.1;
  const subtotal = cart.reduce((total, product) => total + product.price, 0);
  const taxAmount = subtotal * taxRate;
  const totalPrice = subtotal + taxAmount;

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.yourCart}>Your Cart</h2>

      <ul className={styles.cartItems}>
        {cart.map((product, index) => (
          <li key={index} className={styles.cartItem}>
            <img
              src={`/images/${product.imageCover}`}
              alt={product.name}
              className={styles.cartItemImage}
            />
            <div className={styles.cartItemDetails}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p>${product.price}</p>
              {/* Add any additional product details here */}
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.totalContainer}>
        <p>
          Subtotal:{' '}
          <span className={styles.boldNum}>${subtotal.toFixed(2)}</span>
        </p>
        <p>+</p>
        <p className={styles.tax}>
          Tax: <span className={styles.taxAmount}>${taxAmount.toFixed(2)}</span>
        </p>
        <p>
          Total:{' '}
          <span className={styles.boldTotal}>${totalPrice.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}

export default Cart;
