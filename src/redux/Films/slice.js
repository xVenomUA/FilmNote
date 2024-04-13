import { createSlice } from "@reduxjs/toolkit";
import { addFilm, deleteFilm, getFilmById, getFilms } from "./operation";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const filmSlice = createSlice({
  name: "films",
  initialState: {
    items: [],
    itemsById: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilms.pending, handlePending)
      .addCase(getFilms.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFilms.rejected, handleRejected)
      .addCase(getFilmById.pending, handlePending)
      .addCase(getFilmById.fulfilled, (state, action) => {
        state.itemsById = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFilmById.rejected, handleRejected)
      .addCase(addFilm.pending, handlePending)
      .addCase(addFilm.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addFilm.rejected, handleRejected)
      .addCase(deleteFilm.pending, handlePending) 
      .addCase(deleteFilm.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteFilm.rejected, handleRejected);

  },
});

export const filmReducer = filmSlice.reducer;
