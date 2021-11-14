import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const res = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&tyep=movie`
    );
    return res.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const res = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&tyep=series`
    );
    return res.data;
  }
);

export const fetchAsyncMovieOrShow = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const res = await movieApi.get(`?apikey=${APIKey}&i=${id}&plot=full`);
    return res.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("Fetch Successfully");
      return { ...state, movies: action.payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      console.log("Fetch Successfully");
      return { ...state, shows: action.payload };
    },
    [fetchAsyncMovieOrShow.fulfilled]: (state, action) => {
      console.log("Fetch Successfully");
      return { ...state, selectedMovieOrShow: action.payload };
    },
  },
});

export const {removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
