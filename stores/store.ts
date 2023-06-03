import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import employeesReducer from "./employee/employeeSlice";

export const store = configureStore({
  devTools: process.env.NODE_ENV === "development",
  reducer: {
    counter: counterReducer,
    employees: employeesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
