import express from "express";
import EmployeeRouter from "../routes/EmployeeRouter.js";
import UserRouter from "../routes/UserRouter.js";
import CustomerRouter from "../routes/CustomerRouter.js";
import ProjectRouter from "../routes/ProjectRouter.js";
import IncidentTypeRouter from "../routes/IncidentTypeRouter.js";
import IncidentRouter from "../routes/IncidentRouter.js";

const router = express.Router();

router.use("/employees", EmployeeRouter);
router.use("/users", UserRouter);
router.use("/customers", CustomerRouter);
router.use("/projects", ProjectRouter);
router.use("/incidents/types", IncidentTypeRouter);
router.use("/incidents", IncidentRouter);

export default router;
