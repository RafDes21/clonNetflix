import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface movieState {
  news: string[];
  crime: string[];
  family: string[];
  kids: string[];
  comedies: string[];
  serCategories: string[];
  serRender: {};
}

const initialState: movieState = {
  news: [],
  crime: [],
  family: [],
  kids: [],
  comedies: [],
  serCategories: [],
  serRender: {},
};

const seriesSlice = createSlice({
  name: "series",
  initialState,

  reducers: {
    setNews: (state, actions) => {
      state.news = actions.payload;
    },
    setCrime: (state, actions) => {
      state.crime = actions.payload;
    },
    setFamily: (state, actions) => {
      state.family = actions.payload;
    },
    setKids: (state, actions) => {
      state.kids = actions.payload;
    },
    setComedies: (state, actions) => {
      state.comedies = actions.payload;
    },
    setCategories: (state, action) => {
      state.serCategories = action.payload;
    },
    setSerRender: (state, action) => {
      state.serRender = action.payload;
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
  setSerRender,
} = seriesSlice.actions;
export default seriesSlice.reducer;
