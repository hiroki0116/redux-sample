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
  name: string;
  data: Employee[];
  status: "idle" | "loading" | "failed" | "succeeded";
};

const initialState: EmployeeState = {
  page: 1,
  name: "",
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
    } catch (error: any) {
      console.log(error.message);
      return {
        data: [],
        status: "failed",
      };
    }
  }
);

export const getEmployeesByName = createAsyncThunk(
  "employee/getEmployeesByName",
  async (name: string) => {
    try {
      const data = await employeeRepository.getEmployeesByName(name);
      return {
        data,
        status: "succeeded",
      };
    } catch (error: any) {
      console.log(error.message);
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
    changeFilterName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
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
      })
      .addCase(getEmployeesByName.pending, (state) => {
        state.status = "loading";
        state.page = 0;
      })
      .addCase(getEmployeesByName.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.name = "";
        state.page = 0;
        state.data = action.payload.data;
      });
  },
});

// Action creators are generated for each case reducer function
export const { changePagination, changeFilterName } = employeeSlice.actions;

export default employeeSlice.reducer;
