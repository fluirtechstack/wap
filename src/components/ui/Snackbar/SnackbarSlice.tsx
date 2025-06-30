import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface SnackbarState {
  isVisible?: boolean;
  text: string;
  color: string;
  classes?: string;
  duration?: number;
}

const initialState: SnackbarState = {
  isVisible: false,
  text: "",
  color: "",
  classes: "",
  duration: 5000,
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<SnackbarState>) => {
      state.isVisible = true;
      state.text = action.payload.text;
      state.color = action.payload.color;
      state.classes = action.payload.classes;
      state.duration = action.payload.duration;
    },
    hideSnackbar: (state) => {
      state.isVisible = false;
      // state.text = "";
      // state.color = "";
      // state.classes = "";
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
