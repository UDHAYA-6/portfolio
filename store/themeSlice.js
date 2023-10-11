import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  themedark: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    change: (state) => {
      state.themedark = !state.themedark;
    },
  },
});

export const { change } = themeSlice.actions;
export default themeSlice.reducer;
