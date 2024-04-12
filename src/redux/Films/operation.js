import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://65ce3b7dc715428e8b404162.mockapi.io/";

// Get all films from API
export const getFilms = createAsyncThunk(
  "films/getFilms",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}Films`);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getFilmById = createAsyncThunk(
  "films/getFilmById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}Films/${id}`
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addFilm = createAsyncThunk(
  "films/addFilm",
  async (film, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}Films`, film);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteFilm = createAsyncThunk(
  "films/deleteFilm",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}Films/${id}`);
      return id;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
