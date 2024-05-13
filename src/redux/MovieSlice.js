import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlaying = action.payload;
    },
  },
});

export const { addNowPlayingMovie } = movieSlice.actions;

export default movieSlice.reducer;
