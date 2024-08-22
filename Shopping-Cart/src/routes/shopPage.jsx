import { Link } from "react-router-dom";
import "../styles/pageTemplate.css";
import logoImg from "../assets/logo.svg";
import cartImg from "../assets/shopping-cart-logo.svg";
import style from "../styles/Button.module.css";
import "../styles/shopPage.css";
import books from "../assets/book_data.json";

export default function ShopPage() {
  const categories = () => {
    const list = [];
    for (const [key, book] of Object.entries(books.books)) {
      console.log(`Processing book with ID: ${key}`, book);
      const genres = book["genres"];
      genres.forEach((genre) => {
        if (genre && !list.includes(genre)) {
          list.push(genre);
        }
      });
    }
    return list;
  };

  const genreList = categories().sort();

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
          <img src={cartImg} alt="Cart" />
        </Link>
      </header>
      <div id="content">
        <div id="sidebar">
          <div id="search-bar">
            <label>Search:</label>
            <input type="text" />
          </div>
          <hr />
          <div id="categories">
            <h2>Categories</h2>
            <ul>
              {genreList.map((genre, id) => (
                <li key={id}>
                  <input type="checkbox" id={`checkbox-${id}`}></input>
                  <label htmlFor={`checkbox-${id}`}>{genre}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id="main"></div>
      </div>
      <footer></footer>
    </>
  );
}
