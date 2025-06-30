import { combineReducers } from "@reduxjs/toolkit";
import auth from "@/features/auth/authSlice";
import snackbar from "@/components/ui/Snackbar/SnackbarSlice";

export const rootReducer = combineReducers({
    auth,
    snackbar,
});
