import { createSlice } from "@reduxjs/toolkit";
import { getFilmById, getFilms } from "./operation";

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
    .addCase(getFilms.fulfilled, (state, action) =>{ 
        state.items = action.payload;
        state.isLoading = false;
        state.error = null
    })
    .addCase(getFilms.rejected, handleRejected)
     .addCase(getFilmById.pending, handlePending)
     .addCase(getFilmById.fulfilled, (state, action) => {
        state.itemsById = action.payload;
        state.isLoading = false;
        state.error = null
     })
      .addCase(getFilmById.rejected, handleRejected)
  },
});


export const filmReducer = filmSlice.reducer; 