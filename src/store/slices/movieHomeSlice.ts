import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieData, MovieHomeState } from "../../types/types";

const initialState: MovieHomeState = {
  popular: [],
  theatres: [],
  children: [],
  comedies: [],
  top: [],
  movieRender: {},
};

const movieHomeSlice = createSlice({
  name: "movieHome",
  initialState,

  reducers: {
    setPopular: (state, actions: PayloadAction<MovieData[]>) => {
      state.popular = actions.payload;
    },
    setTheatres: (state, actions) => {
      state.theatres = actions.payload;
    },
    setChildren: (state, actions) => {
      state.children = actions.payload;
    },
    setComedies: (state, actions) => {
      state.comedies = actions.payload;
    },
    setTops: (state, actions) => {
      state.top = actions.payload;
    },
    setMovieRender: (state, action) => {
      state.movieRender = action.payload;
    },
  },
});

export const {
  setPopular,
  setTheatres,
  setChildren,
  setComedies,
  setTops,
  setMovieRender,
} = movieHomeSlice.actions;
export default movieHomeSlice.reducer;
