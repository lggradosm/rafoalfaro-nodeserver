import mongoose from "mongoose";
import { Employee } from "../models/Employee.js";
export const createEmployee = async (employee) => {
  // Employee.create(employee)
  //   .then(() => {
  //     return employee._id;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     return new Error();
  //   });
  employee._id = new mongoose.Types.ObjectId();
  return Employee.create(employee);
};

export const getEmployees = async () => {
  return await Employee.find({});
};

export const getEmployeeById = async (id) => {
  return await Employee.findOne({ _id: id });
};

export const updateEmployee = () => {};

export const deleteEmployee = async (id) => {
  return await Employee.findOneAndDelete(id);
};
