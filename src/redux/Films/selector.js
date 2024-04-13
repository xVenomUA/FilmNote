import { createSelector } from "@reduxjs/toolkit";

export const selectFilms = (state) => state.films.items;
export const selectFilmById = (state) => state.films.itemsById;
export const selectFavourite = (state) => state.favouriteId.id;
export const selectFilter = (state) => state.filter;

export const selectDataFilter = createSelector(
  [selectFilms, selectFilter],
  (films, filter) => {
    if (filter === "") {
      return films;
    }
    const filterData = films.filter((data) =>
      data.title.toLowerCase().includes(filter.trim().toLowerCase())
    );
    return filterData;
  }
);
