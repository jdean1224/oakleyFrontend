import styles from '../styles/HomePage.module.css';
import Products from '../components/Products';

function HomePage() {
  return (
    <div className={styles.homepage}>
      <Products />
    </div>
  );
}

export default HomePage;
