import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState, useLayoutEffect } from "react";
import Page from "./components/Page";

const App = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const prefersNotSet = window.matchMedia(
    "(prefers-color-scheme: no-preference)"
  ).matches;
  useLayoutEffect(() => {
    if (prefersDark) {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
    }
    if (prefersLight) {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    if (prefersNotSet) {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    // eslint-disable-next-line
  }, []);
  let currentDate = new Date();
  let startDate = new Date(currentDate.getFullYear(), 0, 1);
  let day = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  let year = currentDate.getFullYear();
  let month = Number(currentDate.getMonth()) + 1;
  let date2 = currentDate.getDate();
  if(month < 10){
    month = "0" + month;
  }
  let date = year + "-" + month + "-" + date2;
  let month2 = Number(date.slice(5, 7)) + 1;
  if(month2 < 10){
    month2 = "0" + month2;
  }
  let upcoming = date.slice(0,5) + month2 + (date.slice(7,10));
  const [query, setQuery] = useState("");
  const submitForm = (e) => { // Search Bar
    e.preventDefault();
    let value = e.target.search.value;
    if(value.length === 0 || value === "0"){
      return;
    }
    setQuery(value);
    navigate('/search');
    e.target.search.value = "";
  };
  let country = "IN";
  const trendingM = `https://api.themoviedb.org/3/trending/movie/day?${day}&language=en-${country}&include_adult=false&api_key=`;
  const topratedM = `https://api.themoviedb.org/3/movie/top_rated?language=en-${country}&include_adult=false&api_key=`;
  const popularM = `https://api.themoviedb.org/3/movie/popular?language=en-${country}&include_adult=false&api_key=`;
  const upcomingM = `https://api.themoviedb.org/3/movie/upcoming?language=en-${country}&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${date}&release_date.lte=${upcoming}&include_adult=false&api_key=`;
  const nowplayingM = `https://api.themoviedb.org/3/movie/now_playing?language=en-${country}&include_adult=false&api_key=`;
  const trendingT = `https://api.themoviedb.org/3/trending/tv/day?${day}&language=en-${country}&include_adult=false&api_key=`;
  const topratedT = `https://api.themoviedb.org/3/tv/top_rated?language=en-${country}&include_adult=false&api_key=`;
  const popularT = `https://api.themoviedb.org/3/tv/popular?language=en-${country}&include_adult=false&api_key=`;
  const upcomingT = `https://api.themoviedb.org/3/tv/on_the_air?language=en-${country}&include_adult=false&api_key=`;
  const nowplayingT = `https://api.themoviedb.org/3/tv/airing_today?language=en-${country}&include_adult=false&api_key=`;
  const search = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-${country}&api_key=`;
  return (
      <div>
        <LoadingBar color="#0dcaf0" progress={progress} />
        <Navbar mode={mode} submitForm={submitForm} />
        <div>
          <Routes>
            <Route // random link
              element={<Navigate to="/movie.trending"/>}
              path="/*"
            />
            <Route // movie trending
              element={
                <Page
                  mode={mode}
                  url={trendingM}
                  type={"movie"}
                  setProgress={setProgress}
                  key={trendingM}
                />
              }
              exact
              path="/movie.trending"
            />
            <Route // movie toprated
              element={
                <Page
                  mode={mode}
                  url={topratedM}
                  type={"movie"}
                  setProgress={setProgress}
                  key={topratedM}
                />
              }
              exact
              path="/movie.toprated"
            />
            <Route // movie popular
              element={
                <Page
                  mode={mode}
                  url={popularM}
                  type={"movie"}
                  setProgress={setProgress}
                  key={popularM}
                />
              }
              exact
              path="/movie.popular"
            />
            <Route // movie upcoming
              element={
                <Page
                  mode={mode}
                  url={upcomingM}
                  type={"movie"}
                  setProgress={setProgress}
                  key={upcomingM}
                />
              }
              exact
              path="/movie.upcoming"
            />
            <Route // movie nowplaying
              element={
                <Page
                  mode={mode}
                  url={nowplayingM}
                  type={"movie"}
                  setProgress={setProgress}
                  key={nowplayingM}
                />
              }
              exact
              path="/movie.nowplaying"
            />
            <Route // search
              element={
                <Page
                  mode={mode}
                  url={search}
                  type={"search"}
                  setProgress={setProgress}
                  key={search}
                />
              }
              exact
              path="/search"
            />
            <Route // tv trending
              element={
                <Page
                  mode={mode}
                  url={trendingT}
                  type={"tv"}
                  setProgress={setProgress}
                  key={trendingT}
                />
              }
              exact
              path="/tv.trending"
            />
            <Route // tv popular
              element={
                <Page
                  mode={mode}
                  url={popularT}
                  type={"tv"}
                  setProgress={setProgress}
                  key={popularT}
                />
              }
              exact
              path="/tv.popular"
            />
            <Route // tv ontheair
              element={
                <Page
                  mode={mode}
                  url={upcomingT}
                  type={"tv"}
                  setProgress={setProgress}
                  key={upcomingT}
                />
              }
              exact
              path="/tv.ontheair"
            />
            <Route // tv toprated
              element={
                <Page
                  mode={mode}
                  url={topratedT}
                  type={"tv"}
                  setProgress={setProgress}
                  key={topratedT}
                />
              }
              exact
              path="/tv.toprated"
            />
            <Route // tv airingtoday
              element={
                <Page
                  mode={mode}
                  url={nowplayingT}
                  type={"tv"}
                  setProgress={setProgress}
                  key={nowplayingT}
                />
              }
              exact
              path="/tv.airingtoday"
            />
          </Routes>
        </div>
      </div>
  );
};
export default App;