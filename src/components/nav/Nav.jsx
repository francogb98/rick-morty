import SearchBar from "../searchbar/SearchBar";
import style from "./nav.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Nav({ onSearch, logout, random }) {
  const location = useLocation();

  return (
    <div className={`navbar navbar-expand-lg navbar-dark ${style.body}`}>
      <div class="container-fluid">
        <a className="navbar-brand">
          <div className={style.img}></div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Mostrar / Ocultar Menu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav mb-2 mb-lg-0 fs-3 fw-bold">
            <li class="nav-item ">
              <Link
                to="/home"
                className={
                  location.pathname === "/home"
                    ? `nav-link text-warning text-decoration-underline ${style.md}`
                    : `nav-link text-light ${style.md}`
                }
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/favorites"
                className={
                  location.pathname === "/favorites"
                    ? `nav-link text-warning text-decoration-underline ${style.md}`
                    : `nav-link text-light ${style.md}`
                }
              >
                favorites
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/about"
                className={
                  location.pathname === "/about"
                    ? `nav-link text-warning text-decoration-underline ${style.md}`
                    : `nav-link text-light ${style.md}`
                }
              >
                about
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <SearchBar onSearch={onSearch} random={random} />
      <a className="navbar-brand me-5 ">
        <button
          onClick={logout}
          className="nav-link btn btn-warning text-dark fw-bold ms-2"
        >
          Log out
        </button>
      </a>
    </div>
  );
}
