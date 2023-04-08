import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface movieState {
  popular: string[];
  theatres: string[];
  children: string[];
  comedies: string[];
  top: string[];
  movieRender:{}
}

const initialState: movieState = {
  popular: [],
  theatres: [],
  children: [],
  comedies: [],
  top: [],
  movieRender:{}
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
    setMovieRender: (state, action) => {
      state.movieRender = action.payload
    }
  },
});

export const { setPopular, setTheatres, setChildren, setComedies, setTops, setMovieRender } =
  movieBrowseSlice.actions;
export default movieBrowseSlice.reducer;
