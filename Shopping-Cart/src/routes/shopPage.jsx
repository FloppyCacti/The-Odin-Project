import { Link } from "react-router-dom";
import "../styles/shopPage.css";
import logoImg from "../assets/logo.svg";
import cartImg from "../assets/shopping-cart-logo.svg";
import style from "../styles/Button.module.css";

export default function ShopPage() {
  return (
    <>
      <header>
        <div id="homeButton">
          <Link id="logo" className={style.button} to="/">
            <img src={logoImg} alt="Logo" />
          </Link>
          <Link to="/">Home</Link>
        </div>
        <Link id="cartLogo" className={style.button} to="/cart">
          <img src={cartImg} />
        </Link>
      </header>
      <div id="content">
        <div id="sidebar"></div>
        <div id="main"></div>
      </div>
      <footer></footer>
    </>
  );
}
