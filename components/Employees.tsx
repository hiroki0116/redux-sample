import { useEffect } from "react";
// third party
import Table, { ColumnsType } from "antd/lib/table";
import { Employee } from "../api-client/models/Employee";
import Pagination from "antd/lib/pagination";
import dayjs from "dayjs";
// redux
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../stores/store";
import {
  changePagination,
  getEmployees,
} from "../stores/employee/employeeSlice";
import { EmployeeState } from "../stores/employee/employeeSlice";
import SearchEmployee from "./SearchEmployee";

const Employees = () => {
  const dispatch: ThunkDispatch<EmployeeState, void, AnyAction> = useDispatch();
  const { page, data, status } = useSelector(
    (state: RootState) => state.employees
  );

  useEffect(() => {
    if (page > 0) dispatch(getEmployees(page));
  }, [dispatch, page]);

  const handlePagination = (selectedPage: number) =>
    dispatch(changePagination(selectedPage));

  const columns: ColumnsType<Employee> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id: number) => <span>{id}</span>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name: string) => <span>{name}</span>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (address: string) => <span>{address}</span>,
    },
    {
      title: "StartDay",
      dataIndex: "startday",
      key: "startDay",
      // startDay with format: yyyy-MM-dd
      render: (startDay: string) => (
        <span>{dayjs(startDay).format("YYYY-MM-DD")}</span>
      ),
    },
  ];

  return (
    <div className="sm:w-1/2 mx-auto px-5 my-5">
      <p className="pb-1">Exmple 2:</p>
      <div className="border p-2 rounded">
        <SearchEmployee />
        <p>Employees List</p>
        <Table
          dataSource={data}
          loading={status === "loading"}
          columns={columns}
          pagination={page != 0 && false}
          rowKey="id"
          bordered
        />
        {page > 0 && (
          <div className="bg-white p-2">
            <Pagination total={150} onChange={handlePagination} pageSize={10} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Employees;
