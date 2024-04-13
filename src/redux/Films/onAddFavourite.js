import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const onAddFavourite = createSlice({
  name: "onAddFavourite",
  initialState: {
    id: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.id.push(action.payload);
      toast.success("Added to favorite");
    },
    removeFavourite: (state, action) => {
      toast.success("Removed from favorite");
      state.id = state.id.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavourite, removeFavourite } = onAddFavourite.actions;
export const onFavourite = onAddFavourite.reducer;
