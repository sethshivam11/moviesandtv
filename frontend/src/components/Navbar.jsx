import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  let location = useLocation();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary py-0 position-fixed"
        data-bs-theme={props.mode}
        style={{ width: "100%", top: "0", zIndex: "2" }}
      >
        <div className="container-fluid">
          <img
            src="favicon.svg"
            alt=""
            style={{ width: "35px", margin: "0 1rem" }}
          />
          <Link className="navbar-brand" to="/movie">
            Movies & TV
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="menu-btn"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu-center">
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle py-3 px-4 ${
                    props.mode === "dark" ? "text-white" : "text-black"
                  }`}
                  rel="no-referrer"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {location.pathname === "/search"
                    ? "Search"
                    : location.pathname.slice(1, 3) === "mo"
                    ? "Movies"
                    : "TV Series"}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item text-center"
                      to="/movie.trending"
                    >
                      Movies
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-center"
                      to="/tv.trending"
                    >
                      TV Series
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Movie Navigations */}
              <li className="nav-item">
                <Link
                  className={`nav-link link px-4 py-3 ${
                    location.pathname === "/movie.trending"
                      ? `d-block active ${props.mode}-border`
                      : location.pathname.slice(1, 3) === "mo"
                      ? "d-block"
                      : "d-none"
                  }`}
                  aria-current="page"
                  to="/movie.trending"
                  disabled={location.pathname === "/tv"}
                >
                  Trending
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link link px-4 py-3 ${
                    location.pathname === "/movie.popular"
                      ? `d-block active  ${props.mode}-border`
                      : location.pathname.slice(1, 3) === "mo"
                      ? "d-block"
                      : "d-none"
                  }`}
                  to="/movie.popular"
                >
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link link px-4 py-3 ${
                    location.pathname === "/movie.nowplaying"
                      ? `d-block active ${props.mode}-border`
                      : location.pathname.slice(1, 3) === "mo"
                      ? "d-block"
                      : "d-none"
                  }`}
                  aria-disabled="true"
                  to="/movie.nowplaying"
                >
                  Now Playing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link link px-4 py-3 ${
                    location.pathname === "/movie.upcoming"
                      ? `d-block active ${props.mode}-border`
                      : location.pathname.slice(1, 3) === "mo"
                      ? "d-block"
                      : "d-none"
                  }`}
                  aria-current="page"
                  to="/movie.upcoming"
                >
                  Upcoming
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link link px-4 py-3 ${
                    location.pathname === "/movie.toprated"
                      ? `d-block active ${props.mode}-border`
                      : location.pathname.slice(1, 3) === "mo"
                      ? "d-block"
                      : "d-none"
                  }`}
                  aria-current="page"
                  to="/movie.toprated"
                >
                  Top Rated
                </Link>
              </li>
              {/* // TV Series Navigations */}
              <li className="nav-item">
                <Link
                  className={`nav-link link px-4 py-3 ${
                    location.pathname === "/tv.trending"
                      ? `d-block active ${props.mode}-border`
                      : location.pathname.slice(1, 3) === "tv"
                      ? "d-block"
                      : "d-none"
                  }`}
                  aria-current="page"
                  to="/tv.trending"
                >
                  Trending
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link link px-4 py-3 ${
                    location.pathname === "/tv.popular"
                      ? `d-block active ${props.mode}-border`
                      : location.pathname.slice(1, 3) === "tv"
                      ? "d-block"
                      : "d-none"
                  }`}
                  aria-current="page"
                  to="/tv.popular"
                >
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link link px-4 py-3 ${
                    location.pathname === "/tv.ontheair"
                      ? `d-block active ${props.mode}-border`
                      : location.pathname.slice(1, 3) === "tv"
                      ? "d-block"
                      : "d-none"
                  }`}
                  aria-current="page"
                  to="/tv.ontheair"
                >
                  On The Air
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link link px-4 py-3 ${
                    location.pathname === "/tv.airingtoday"
                      ? `d-block active ${props.mode}-border`
                      : location.pathname.slice(1, 3) === "tv"
                      ? "d-block"
                      : "d-none"
                  }`}
                  aria-current="page"
                  to="/tv.airingtoday"
                >
                  Airing Today
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link link px-4 py-3 ${
                    location.pathname === "/tv.toprated"
                      ? `d-block active ${props.mode}-border`
                      : location.pathname.slice(1, 3) === "tv"
                      ? "d-block"
                      : "d-none"
                  }`}
                  aria-current="page"
                  to="/tv.toprated"
                >
                  Top Rated
                </Link>
              </li>
            </ul>
            {/* Search Box */}
            <form className="d-flex" role="search" onSubmit={props.submitForm}>
              <input
                className="form-control me-2"
                type="search"
                name="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className={`btn btn-outline-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
