import { Link } from "react-router-dom";
import "../styles/pageTemplate.css";
import style from "../styles/Button.module.css";
import logoImg from "../assets/logo.svg";

export default function ShoppingCartPage() {
  return (
    <>
      <header>
        <div id="homeButton">
          <Link id="logo" className={style.button} to="/">
            <img src={logoImg} alt="Logo" />
          </Link>
          <Link to="/">Home</Link>
        </div>
      </header>
      <div id="content">
        <div id="sidebar"></div>
        <div id="main"></div>
      </div>
      <footer></footer>
    </>
  );
}
