import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
export const store = configureStore({
    reducer: rootReducer,
});
// ⏬ Reexporta todas as actions aqui:
export * from "@features/auth/authSlice";
export * from "@features/profissionais/profissionalSlice";
export * from "@components/ui/Snackbar/SnackbarSlice";
export * from "@components/ui/Layout/navigationSlice";
