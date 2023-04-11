import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface movieState {
  action: string[];
  adventure: string[];
  family: string[];
  fantasy: string[];
  comedies: string[];
  moviesCategories: string[];
  moviesPageRender: {};
}

const initialState: movieState = {
  action: [],
  adventure: [],
  family: [],
  fantasy: [],
  comedies: [],
  moviesCategories: [],
  moviesPageRender: {},
};

const movieSlice = createSlice({
  name: "series",
  initialState,

  reducers: {
    setAction: (state, actions) => {
      state.action = actions.payload;
    },
    setAdventure: (state, actions) => {
      state.adventure = actions.payload;
    },
    setFamily: (state, actions) => {
      state.family = actions.payload;
    },
    setFantasy: (state, actions) => {
      state.fantasy = actions.payload;
    },
    setComedies: (state, actions) => {
      state.comedies = actions.payload;
    },
    setCategories: (state, action) => {
      state.moviesCategories = action.payload;
    },
    setPageMovieRender: (state, action) => {
      state.moviesPageRender = action.payload;
    },
  },
});

export const {
  setAction,
  setAdventure,
  setFamily,
  setFantasy,
  setComedies,
  setCategories,
  setPageMovieRender,
} = movieSlice.actions;
export default movieSlice.reducer;
