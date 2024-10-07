import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      console.log(state);
      state.count === 0 ? (state.count = 0) : (state.count -= 1);
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;
