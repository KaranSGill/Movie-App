import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../redux/movies/movieSlice";
const Home = () => {
  // const movieText = "Harry";
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    // const fetchMovies = async () => {
    //   const res = await MovieApi.get(
    //     `?apiKey=${APIKey}&s=${movieText}&type=movie`
    //   ).catch((err) => console.log("Error:" + err));
    //   dispatch(addMovies(res.data));
    // };
    // fetchMovies();
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  return (
    <>
      <div className="banner-img"> </div>
      <MovieListing />
    </>
  );
};

export default Home;
