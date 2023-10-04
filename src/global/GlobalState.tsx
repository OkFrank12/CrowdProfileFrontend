import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: true,
  newToggle: true,
};

const GlobalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    onToggle: (state, { payload }) => {
      state.toggle = payload;
    },
    onNewToggle: (state, { payload }) => {
      state.newToggle = payload;
    },
  },
});

export const { onToggle, onNewToggle } = GlobalState.actions;

export default GlobalState.reducer;
