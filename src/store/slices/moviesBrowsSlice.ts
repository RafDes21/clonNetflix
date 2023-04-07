import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface movieState {
  popular: string[];
  theatres: string[];
  children: string[];
  comedies: string[];
  top: string[];
}

const initialState: movieState = {
  popular: [],
  theatres: [],
  children: [],
  comedies: [],
  top: [],
};

const movieBrowseSlice = createSlice({
  name: "movieBrowse",
  initialState,

  reducers: {
    setPopular: (state, actions) => {
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
  },
});

export const { setPopular, setTheatres, setChildren, setComedies, setTops } =
  movieBrowseSlice.actions;
export default movieBrowseSlice.reducer;
