import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { store } from "../index";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
