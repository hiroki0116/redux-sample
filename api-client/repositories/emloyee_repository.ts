import { Employee } from "../models/Employee";

type EmployeeRepository = {
  getEmployees: (page: number) => Promise<Employee[]>;
};

export const getEmployees = async (page: number): Promise<Employee[]> => {
  const response = await fetch(
    `https://api-generator.retool.com/N3s827/employees?_page=${page}&_limit=5`
  );
  const employees = await response.json();
  return employees;
};

export const employeeRepository: EmployeeRepository = {
  getEmployees,
};
