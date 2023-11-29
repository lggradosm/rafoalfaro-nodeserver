import express from "express";

import { ProjectController } from "../controller/ProjectController.js";

const router = express.Router();
const { create, deleteById, getAll, getById } = ProjectController();
router.get("", getAll);
router.get("/:id", getById);
router.post("", create);
router.delete("", deleteById);

export default router;
