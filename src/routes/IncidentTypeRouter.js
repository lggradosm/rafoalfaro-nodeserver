import express from "express";
import { IncidentTypeController } from "../controller/IncidentTypeController.js";
const router = express.Router();
const { create, getAll, getById } = IncidentTypeController();
router.get("", getAll);
router.get("/:id", getById);
router.post("", create);

export default router;
