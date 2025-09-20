import React, { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";
import Spinner from "./Spinner";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Page = (props) => {
  let location = useLocation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const capital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  useEffect(() => {
    props.setProgress(10);
    updatePage();
    // eslint-disable-next-line
  }, []);
  const updatePage = async () => {
    props.setProgress(30);
    let apiUrl = props.url + "&api_key=";
    props.setProgress(50);
    fetch(`/fetch`, {
      method: "POST",
      body: JSON.stringify({ url: apiUrl }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((parsed) => parsed.json())
      .then((parsedData) => {
        props.setProgress(70);
        if (parsedData.total_results > 0) {
          setResults(parsedData.results);
          setTotalPages(parsedData.total_results);
          props.setProgress(90);
        } else {
          setResults([
            {
              genre_ids: 404,
              overview: "",
              mode: "",
              release_date: "",
              first_air_date: "",
              poster_path: "Not found",
              backdrop_path: "",
              vote_average: 0,
              title: "Not Found",
              popularity: 0,
            },
          ]);
          console.log("Something went wrong (API)", parsedData);
        }
      })
      .catch((err) => {
        console.log(err);
        setResults([
          {
            genre_ids: [404],
            overview: "Something went wrong, while connecting to the API.",
            mode: "",
            release_date: "",
            first_air_date: "Today",
            poster_path: "Not found",
            backdrop_path: "",
            vote_average: 0,
            title: "Not Found",
            popularity: 0,
          },
        ]);
      })
      .finally(() => {
        props.setProgress(100);
        setLoading(false);
      });
  };
  const fetchMoreData = async (page) => {
    try {
      props.setProgress(30);
      const nextUrl = props.url + "&page=" + page + "&api_key=";
      props.setProgress(50);
      const json = await fetch(`/fetch`, {
        method: "POST",
        body: JSON.stringify({ url: nextUrl }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      props.setProgress(70);
      const updatedData = await json.json();
      if (updatedData.total_results >= 0) {
        setResults(updatedData.results);
        setTotalPages(updatedData.total_results);
        props.setProgress(90);
        setLoading(false);
        props.setProgress(100);
      } else {
        console.log("Something went wrong (API)");
        props.setProgress(100);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const prevHandler = () => {
    setTotalPages(0);
    setLoading(true);
    props.setProgress(10);
    setPage(page - 1);
    fetchMoreData(page - 1);
    window.location.assign("#main");
  };
  const nextHandler = () => {
    setTotalPages(0);
    setLoading(true);
    props.setProgress(10);
    setPage(page + 1);
    fetchMoreData(page + 1);
    window.location.assign("#main");
  };
  const genreList = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    404: "Not Found",
    35: "Comedy",
    80: "Thriller",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV-Film",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  const getGenre = (code) => {
    return genreList.get(code, "Unknown");
  };
  genreList.get = function (code) {
    return this[code];
  };

  const fetchGenre = (data) => {
    try {
      const genres = data.map(getGenre);
      return genres.join(", ");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="text-center" id="main">
      <section id="cont">
        <h1 className="text-center my-4 d-inline-block" id="gotop">
          {props.type === "search" ? "" : ""}
          {location.pathname.slice(1, 3) === "mo"
            ? capital(location.pathname.slice(7, 20)) + " | "
            : location.pathname.slice(1, 3) === "tv"
              ? capital(location.pathname.slice(4, 20)) + " | "
              : ""}
          {location.pathname.slice(1, 3) === "mo"
            ? "Movies"
            : location.pathname.slice(1, 3) === "tv"
              ? "TV Series"
              : "Search"}
        </h1>
        <div
          className="row justify-content-center"
          style={{ padding: "0", margin: "0", minHeight: "100vh" }}
        >
          {loading && <Spinner />}
          <div className="row container row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1" style={{ padding: "0" }}>
            {results &&
              results.map((e, index) => {
                return (
                  e && (
                    <div
                      className="col"
                      data-bs-theme={props.mode}
                      key={index}
                    >
                      <Card
                        genre={fetchGenre(e.genre_ids)}
                        name={e.name}
                        overview={e.overview}
                        mode={e.mode}
                        release={e.release_date}
                        first_air_date={e.first_air_date}
                        img={e.poster_path}
                        link={e.backdrop_path}
                        ratings={
                          e.vote_average ? e.vote_average.toFixed(1) + "⭐" : ""
                        }
                        title={e.title}
                        popularity={e.popularity}
                      />
                    </div>
                  )
                );
              })}
          </div>
        </div>
        <div className="block">
          <button
            type="button"
            onClick={prevHandler}
            className="btn btn-info float-start mx-3 my-3"
            disabled={page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            onClick={nextHandler}
            className="btn btn-warning float-end mx-3 my-3"
            disabled={page >= totalPages}
          >
            Next &rarr;
          </button>
        </div>
      </section>
      {results && <Footer />}
    </div>
  );
};
export default Page;
