import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../redux/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search Movies or Shows"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div>
        <i className="fas fa-user"></i>
      </div>
    </div>
  );
};

export default Header;
