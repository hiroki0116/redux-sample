import Input from "antd/lib/input";
// redux
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../stores/store";
import {
  getEmployees,
  getEmployeesByName,
  changeFilterName,
  changePagination,
} from "../stores/employee/employeeSlice";

const SearchEmployee = () => {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  const { name } = useSelector((state: RootState) => state.employees);
  const handleSubmitFilter = () => {
    if (name === "") {
      dispatch(changePagination(1));
    } else {
      dispatch(getEmployeesByName(name));
    }
  };

  return (
    <>
      <Input.Search
        placeholder="Employee Name"
        allowClear
        enterButton
        className="py-3 w-1/2"
        onChange={(e) => dispatch(changeFilterName(e.target.value))}
        onSearch={handleSubmitFilter}
      />
    </>
  );
};

export default SearchEmployee;
