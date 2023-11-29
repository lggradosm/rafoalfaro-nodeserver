import { CustomerService } from "../services/CustomerService.js";

export const CustomerController = () => {
  const { createCustomer, deleteCustomer, getCustomerById, getCustomers } =
    CustomerService();
  const create = async (req, res) => {
    const customer = req.body;
    try {
      await createCustomer(customer);
      res.send(`Customer ${customer._id} created`);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  const getAll = async (req, res) => {
    try {
      const customers = await getCustomers();
      res.json(customers);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  const getById = async (req, res) => {
    const id = req.params.id;
    try {
      const customer = await getCustomerById;
    } catch (err) {
      res.json({ error: err.message });
    }
  };

  return { create, getAll, getById };
};
