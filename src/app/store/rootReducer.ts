import { combineReducers } from "@reduxjs/toolkit";
import auth from "@/features/auth/authSlice";
import snackbar from "@/components/ui/Snackbar/SnackbarSlice";
import navigation from "@components/ui/Layout/navigationSlice"
export const rootReducer = combineReducers({
    auth,
    snackbar,
    navigation
});
