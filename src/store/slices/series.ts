import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Categorie, MovieData, MovieSeriesState } from "../../types/types";

const initialState: MovieSeriesState = {
  news: [],
  crime: [],
  family: [],
  kids: [],
  comedies: [],
  setCategories: [],
};

const seriesSlice = createSlice({
  name: "series",
  initialState,

  reducers: {
    setNews: (state, actions: PayloadAction<MovieData[]>) => {
      state.news = actions.payload;
    },
    setCrime: (state, actions: PayloadAction<MovieData[]>) => {
      state.crime = actions.payload;
    },
    setFamily: (state, actions: PayloadAction<MovieData[]>) => {
      state.family = actions.payload;
    },
    setKids: (state, actions: PayloadAction<MovieData[]>) => {
      state.kids = actions.payload;
    },
    setComedies: (state, actions: PayloadAction<MovieData[]>) => {
      state.comedies = actions.payload;
    },
    setCategories: (state, action: PayloadAction<Categorie[]>) => {
      state.setCategories = action.payload;
    },
  },
});

export const {
  setNews,
  setCrime,
  setFamily,
  setKids,
  setComedies,
  setCategories,
} = seriesSlice.actions;
export default seriesSlice.reducer;
