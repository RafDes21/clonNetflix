import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieData, MovieHomeState } from "../../types/types";

const initialState: MovieHomeState = {
  popular: [],
  teather: [],
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
    setTeather: (state, actions:PayloadAction<MovieData[]>) => {
      state.teather = actions.payload;
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
  setTeather,
  setChildren,
  setComedies,
  setTops,
  setMovieRender,
} = movieHomeSlice.actions;
export default movieHomeSlice.reducer;
