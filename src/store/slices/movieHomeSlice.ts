import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieData, MovieHomeState } from "../../types/types";

const initialState: MovieHomeState = {
  popular: [],
  teather: [],
  children: [],
  comedies: [],
  top: [],
  loading:false
};

const movieHomeSlice = createSlice({
  name: "movieHome",
  initialState,

  reducers: {
    setPopular: (state, actions: PayloadAction<MovieData[]>) => {
      state.popular = actions.payload;
    },
    setTeather: (state, actions: PayloadAction<MovieData[]>) => {
      state.teather = actions.payload;
    },
    setChildren: (state, actions: PayloadAction<MovieData[]>) => {
      state.children = actions.payload;
    },
    setComedies: (state, actions: PayloadAction<MovieData[]>) => {
      state.comedies = actions.payload;
    },
    setTops: (state, actions: PayloadAction<MovieData[]>) => {
      state.top = actions.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setPopular, setTeather, setChildren, setComedies, setTops, setLoading } =
  movieHomeSlice.actions;
export default movieHomeSlice.reducer;
