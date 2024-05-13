import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./MovieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});
