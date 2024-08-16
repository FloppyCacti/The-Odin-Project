import { Link } from "react-router-dom";
import "../styles/shopPage.css";
import img from "../assets/logo.svg";

export default function ShopPage() {
  return (
    <>
      <header>
        <Link to="/">
          <img src={img} alt="Logo" />
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
