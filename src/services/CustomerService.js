import mongoose from "mongoose";
import { Customer } from "../models/Customer.js";
export const CustomerService = () => {
  const createCustomer = async (customer) => {
    customer._id = new mongoose.Types.ObjectId();
    return Customer.create(customer);
  };
  const getCustomers = async () => {
    return await Customer.find({});
  };

  const getCustomerById = async (id) => {
    return await Customer.findById(id);
  };

  const deleteCustomer = async (id) => {
    return await Customer.findByIdAndDelete(id);
  };

  return { createCustomer, getCustomers, getCustomerById, deleteCustomer };
};
