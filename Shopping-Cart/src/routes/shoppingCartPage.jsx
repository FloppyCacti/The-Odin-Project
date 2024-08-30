import { Link } from "react-router-dom";
import "../styles/pageTemplate.css";
import style from "../styles/Button.module.css";
import logoImg from "../assets/logo.svg";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";

export default function ShoppingCartPage() {
  const { cartItems, setCartItems } = useContext(CartContext);
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
        <div id="shopItemContainer"></div>
        <div id="shopPriceBox"></div>
      </div>
      <footer></footer>
    </>
  );
}
