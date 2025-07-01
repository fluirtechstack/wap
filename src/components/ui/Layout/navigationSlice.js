import { createSlice } from "@reduxjs/toolkit";
const initialState = {
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
