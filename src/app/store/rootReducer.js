import { combineReducers } from "@reduxjs/toolkit";
import auth from "@/features/auth/authSlice";
import snackbar from "@/components/ui/Snackbar/SnackbarSlice";
import navigation from "@components/ui/Layout/navigationSlice";
import profissionais from "@features/profissionais/profissionalSlice";
export const rootReducer = combineReducers({
    auth,
    snackbar,
    navigation,
    profissionais
});
