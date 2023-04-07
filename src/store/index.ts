import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";
import movieBrowseReducer from "./slices/moviesBrowsSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    movieBrowse: movieBrowseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
