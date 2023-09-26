// import styles from '../styles/Products.module.css';
// import { useState, useEffect } from 'react';

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('/api/v1/products')
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error('Error fetching data:', err));
//   });

//   return (
//     <div className={styles.productsMain}>
//       <div className={styles.productRow}>
//         <div className={styles.productContainer}>
//           <img src={`/images/${product[0]}`} alt='pic' />
//         </div>
//         <div className={styles.productContainer}></div>
//         <div className={styles.productContainer}></div>
//       </div>
//       <div className={styles.productRow}>
//         <div className={styles.productContainer}></div>
//         <div className={styles.productContainer}></div>
//         <div className={styles.productContainer}></div>
//       </div>
//     </div>
//   );
// }

// export default Products;

import { useState, useEffect } from 'react';
import styles from '../styles/Products.module.css';
import Cart from '../pages/Cart';

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [checkOut, setCheckOut] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:10000/api/v1/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.data.products))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <h1 className={styles.title}>Oakley & Jarvis Mart</h1>
      {!checkOut && (
        <div className={styles.productsMain}>
          {products.map((product, index) => (
            <div key={index} className={styles.productContainer}>
              <img
                className={styles.productImg}
                src={`/images/${product.imageCover}`}
                alt={product.name}
              />
              <div className={styles.productName}>{product.name}</div>
              <div className={styles.productPrice}>
                <p>${product.price}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className={styles.addCartBtn}
              >
                Add to cart
              </button>
            </div>
          ))}
          <h3 className={styles.cartItemsMessage}>
            You have{' '}
            <span className={styles.numCartItems}>{`${cart.length}`}</span>{' '}
            items in your cart{' '}
          </h3>
          <button
            onClick={() => setCheckOut(true)}
            className={styles.checkOutBtn}
          >
            View Cart
          </button>
        </div>
      )}
      {checkOut && <Cart cart={cart} setCart={setCart} />}
    </>
  );
}

export default Products;
