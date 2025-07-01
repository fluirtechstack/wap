import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const savedSession = localStorage.getItem("userSession");
const parsedSession = savedSession ? JSON.parse(savedSession) : null;

interface AuthState {
  token: string | null;
  user: string | null;
  isAuthenticated: boolean | false;
}

const initialState: AuthState = {
  token: parsedSession,
  user: parsedSession,
  isAuthenticated: !!parsedSession,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ token: string; user: string }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem("userSession", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("userSession");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
