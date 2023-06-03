import {
  AnyAction,
  Dispatch,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { employeeRepository } from "../../api-client/repositories/emloyee_repository";
import { Employee } from "../../api-client/models/Employee";

export type EmployeeState = {
  page: number;
  data: Employee[];
  status: "idle" | "loading" | "failed" | "succeeded";
};

const initialState: EmployeeState = {
  page: 1,
  data: [],
  status: "idle",
};

export const getEmployees = createAsyncThunk(
  "employee/getEmployees",
  async (page: number) => {
    try {
      const data = await employeeRepository.getEmployees(page);
      return {
        data,
        status: "succeeded",
      };
    } catch (e) {
      console.log(e);
      return {
        data: [],
        status: "failed",
      };
    }
  }
);

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    changePagination: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      });
  },
});

// Action creators are generated for each case reducer function
export const { changePagination } = employeeSlice.actions;

export default employeeSlice.reducer;
