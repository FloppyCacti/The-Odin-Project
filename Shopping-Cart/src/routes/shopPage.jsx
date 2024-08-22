import { Link } from "react-router-dom";
import "../styles/pageTemplate.css";
import logoImg from "../assets/logo.svg";
import cartImg from "../assets/shopping-cart-logo.svg";
import style from "../styles/Button.module.css";
import "../styles/shopPage.css";
import books from "../assets/book_data.json";
import { useEffect, useState } from "react";

export default function ShopPage() {
  const [bookAmount, setBookAmount] = useState(0);
  const [bookContainer, setBookContainer] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [genreCheckedList, setGenreCheckedList] = useState(
    new Array(10).fill(false)
  );

  useEffect(() => {
    const list = [];
    for (const [key, book] of Object.entries(books.books)) {
      const genres = book["genres"];
      genres.forEach((genre) => {
        if (genre && !list.includes(genre)) {
          list.push(genre);
        }
      });
    }
    setGenreList(list.sort());
  }, []);

  const updateCheckedState = (index) => {
    const checkedCategoryNames = [];
    const tempArr = [...genreCheckedList];
    tempArr[index] = !tempArr[index];

    tempArr.forEach((category, n) => {
      if (category) {
        checkedCategoryNames.push(genreList[n]);
      }
    });

    setGenreCheckedList(tempArr);
  };

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
              {genreList.map((genre, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    onClick={() => updateCheckedState(index)}
                  ></input>
                  <label htmlFor={`checkbox-${index}`}>{genre}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id="main">
          <h2>Result {bookAmount} out of 10</h2>
          <ul id="book-container"></ul>
        </div>
      </div>
      <footer></footer>
    </>
  );
}
