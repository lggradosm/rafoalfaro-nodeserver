import express from "express";
import { IncidentController } from "../controller/IncidentController.js";

const router = express.Router();
const { create, getAll, getById, updateById } = IncidentController();

router.get("", getAll);
router.get("/:id", getById);
router.post("", create);
router.put("", updateById);

export default router;
