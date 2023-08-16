import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Categorie, MovieData, MovieMovieState } from "../../types/types";


const initialState: MovieMovieState = {
  action: [],
  adventure: [],
  family: [],
  fantasy: [],
  comedies: [],
  moviesCategories: [],
};

const movieSlice = createSlice({
  name: "series",
  initialState,

  reducers: {
    setAction: (state, actions: PayloadAction<MovieData[]>) => {
      state.action = actions.payload;
    },
    setAdventure: (state, actions: PayloadAction<MovieData[]>) => {
      state.adventure = actions.payload;
    },
    setFamily: (state, actions: PayloadAction<MovieData[]>) => {
      state.family = actions.payload;
    },
    setFantasy: (state, actions: PayloadAction<MovieData[]>) => {
      state.fantasy = actions.payload;
    },
    setComedies: (state, actions: PayloadAction<MovieData[]>) => {
      state.comedies = actions.payload;
    },
    setCategories: (state, action: PayloadAction<Categorie[]>) => {
      state.moviesCategories = action.payload;
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
} = movieSlice.actions;
export default movieSlice.reducer;
