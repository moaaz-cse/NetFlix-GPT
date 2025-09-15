import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      return action.payload;
    },
  },
});
export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
