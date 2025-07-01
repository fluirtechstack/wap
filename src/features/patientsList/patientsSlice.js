import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    list: [],
};
const professionalSlice = createSlice({
    name: "professionals",
    initialState,
    reducers: {
        addProfessional: (state, action) => {
            state.list.push(action.payload);
        },
        updateProfessional: (state, action) => {
            const index = state.list.findIndex((p) => p.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        },
        removeProfessional: (state, action) => {
            state.list = state.list.filter((p) => p.id !== action.payload);
        },
    },
});
export const { addProfessional, updateProfessional, removeProfessional } = professionalSlice.actions;
export default professionalSlice.reducer;
