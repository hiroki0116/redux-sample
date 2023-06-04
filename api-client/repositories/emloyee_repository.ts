import { Employee } from "../models/Employee";

type EmployeeRepository = {
  getEmployees: (page: number) => Promise<Employee[]>;
  getEmployeesByName: (name: string) => Promise<Employee[]>;
};

export const getEmployees = async (page: number): Promise<Employee[]> => {
  const response = await fetch(
    `https://api-generator.retool.com/kscghE/employees?_page=${page}&_limit=5`
  );
  const employees = await response.json();
  return employees;
};

export const getEmployeesByName = async (name: string): Promise<Employee[]> => {
  const response = await fetch(
    `https://api-generator.retool.com/kscghE/employees?name=${name}`
  );
  const employees = await response.json();
  return employees;
};

export const employeeRepository: EmployeeRepository = {
  getEmployees,
  getEmployeesByName,
};
