import express from "express";
import { CustomerController } from "../controller/CustomerController.js";
const { create, getAll, getById } = CustomerController();
const router = express.Router();

router.get("", getAll);
router.get("/:id", getById);
router.post("", create);

export default router;
