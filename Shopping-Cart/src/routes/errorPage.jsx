import { Link } from "react-router-dom";
import "../styles/errorPage.css";
import style from "../styles/Button.module.css";

export default function ErrorPage() {
  return (
    <>
      <div id="error-content">
        <h1>Error Occurred</h1>
        <Link className={style.button} to="/">
          Go To Home
        </Link>
      </div>
    </>
  );
}
