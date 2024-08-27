import { Link } from "react-router-dom";
import "../styles/pageTemplate.css";
import logoImg from "../assets/logo.svg";
import cartImg from "../assets/shopping-cart-logo.svg";
import style from "../styles/Button.module.css";
import "../styles/shopPage.css";
import books from "../assets/book_data.json";
import { useEffect, useState } from "react";

export default function ShopPage() {
  const [bookResultAmount, setBookResultAmount] = useState(0);
  const [bookContainer, setBookContainer] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [genreCheckedList, setGenreCheckedList] = useState(
    new Array(10).fill(false)
  );
  const [checkedCategoryNames, setCheckedCategoryNames] = useState([]);

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
    const checkedCategoryNamesTemp = [];
    const tempArr = [...genreCheckedList];
    tempArr[index] = !tempArr[index];

    tempArr.forEach((category, n) => {
      if (category) {
        checkedCategoryNamesTemp.push(genreList[n]);
      }
    });

    setCheckedCategoryNames(checkedCategoryNamesTemp);
    setGenreCheckedList(tempArr);
  };

  useEffect(() => {
    const tempBookContainer = [];

    if (checkedCategoryNames.length > 0) {
      Object.values(books.books).forEach((book) => {
        const bookGenre = new Set(book.genres);
        if (checkedCategoryNames.every((ele) => bookGenre.has(ele))) {
          tempBookContainer.push(
            <li className="book-info" key={book.title}>
              <img src={book.img} alt={book.title} />
              <div className="book-title-price">
                <div className="book-title-author">
                  <h3>{book.title}</h3>
                  <h4>by {book.author}</h4>
                </div>
                <h3>${book.price}</h3>
              </div>
            </li>
          );
        }
      });
    } else {
      Object.values(books.books).map((book) => {
        tempBookContainer.push(
          <li className="book-info" key={book.title}>
            <img src={book.img} />
            <div className="book-title-price">
              <div className="book-title-author">
                <h3>{book.title}</h3>
                <h4>by {book.author}</h4>
              </div>
              <h3>${book.price}</h3>
            </div>
          </li>
        );
      });
    }
    setBookContainer(tempBookContainer);
  }, [checkedCategoryNames]);

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
          <h2>Result {bookResultAmount} out of 10</h2>
          <ul id="book-container">{bookContainer}</ul>
        </div>
      </div>
      <footer></footer>
    </>
  );
}
