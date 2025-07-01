import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Professional {
  id: string;
  name: string;
  email: string;
}

interface ProfessionalsState {
  list: Professional[];
}

const initialState: ProfessionalsState = {
  list: [],
};

const professionalSlice = createSlice({
  name: "professionals",
  initialState,
  reducers: {
    addProfessional: (state, action: PayloadAction<Professional>) => {
      state.list.push(action.payload);
    },
    updateProfessional: (state, action: PayloadAction<Professional>) => {
      const index = state.list.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    removeProfessional: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addProfessional, updateProfessional, removeProfessional } =
  professionalSlice.actions;
export default professionalSlice.reducer;
