/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from "react";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MovieCard from "./components/MovieCard";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMovieDetails, handleShowMovieDetails] = useState(null);

  useEffect(() => {
    document.title = "Movie Rental App";
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <MovieCard handleShowMovieDetails={handleShowMovieDetails} />
        </Route>
        <Route path="/movie-details">
          <MovieDetails showMovieDetails={showMovieDetails} />
        </Route>
        <Route exact path="/login">
          <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
