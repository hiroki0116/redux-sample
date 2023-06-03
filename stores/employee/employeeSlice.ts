import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { employeeRepository } from "../../api-client/repositories/emloyee_repository";
import { Employee } from "../../api-client/models/employee";

type EmployeeState = {
  page: number;
  data: undefined | Employee[];
  status: string;
};

const initialState: EmployeeState = {
  page: 1,
  data: undefined,
  status: "idle",
};

export const employeeAsync = createAsyncThunk(
  "employee/async",
  async (page: number) => {
    try {
      const data = await employeeRepository.getEmployees(page);
      return {
        status: "idle",
        data,
      };
    } catch (e) {
      return {
        status: "failed",
        data: [],
      };
    }
  }
);

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    changePagenation: (state, action: PayloadAction<number>) => {
      state.page += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(employeeAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(employeeAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data && state.data.push(...action.payload.data);
      });
  },
});

// Action creators are generated for each case reducer function
export const { changePagenation } = employeeSlice.actions;

export default employeeSlice.reducer;
