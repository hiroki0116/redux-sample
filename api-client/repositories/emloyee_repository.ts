import { Employee } from "../models/employee";

type EmployeeRepository = {
  getEmployees: (page: number) => Promise<Employee[]>;
};

export const getEmployees = async (page: number): Promise<Employee[]> => {
  const response = await fetch(
    `https://retoolapi.dev/N3s827/employees=${page}&_limit=10`
  );
  const employees = await response.json();
  return employees;
};

export const employeeRepository: EmployeeRepository = {
  getEmployees,
};
