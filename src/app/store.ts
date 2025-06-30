import { configureStore } from '@reduxjs/toolkit'
import professionalReducer from '../features/profissionais/profissionalSlice'
import SnackbarReducer from "../components/ui/Snackbar/SnackbarSlice"
export const store = configureStore({
  reducer: {
  professionals: professionalReducer,
  snackbar: SnackbarReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
