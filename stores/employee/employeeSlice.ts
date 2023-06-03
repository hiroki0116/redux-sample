import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type EmployeeState = {
  page: number;
};

const initialState: EmployeeState = {
  page: 1,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    pagination: (state, action: PayloadAction<number>) => {
      state.page += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pagination } = employeeSlice.actions;

export default employeeSlice.reducer;
