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
      action: PayloadAction<{
        token: string;
        user: string;
        isAuthenticated: boolean;
      }>
    ) => {
      const { token, user, isAuthenticated } = action.payload;
      state.token = token;
      state.user = user;
      state.isAuthenticated = isAuthenticated;

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
