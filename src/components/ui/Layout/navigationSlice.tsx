import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Navigation {
  display: boolean;
}

interface NavigationState {
  display: boolean | false;
}

const initialState: NavigationState = {
  display: false,
};

const NavigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    changeDisplay: (state) => {
      const { display } = state;
      state.display = !display;
    },
  },
});

export const { changeDisplay } = NavigationSlice.actions;
export default NavigationSlice.reducer;
