import { Link } from "react-router-dom";
import "../styles/root.css";
import styles from "../styles/Button.module.css";

export default function Root() {
  return (
    <>
      <div id="home">
        <h1>Welcome to Book Shop</h1>
        <div id="button-container">
          <Link className={styles.button} to="shop">
            Start Shopping
          </Link>
          <Link className={styles.button} to="cart">
            Go to Cart
          </Link>
        </div>
      </div>
    </>
  );
}
