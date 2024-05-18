import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./MovieSlice";
import gptReducer from "./GptSlice";
import configReducer from "./ConfigSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});
