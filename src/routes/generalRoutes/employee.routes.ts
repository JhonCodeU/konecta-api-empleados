import { Router } from "express";
import { verifyToken } from "../../middlewares/authentication";
const router = Router();

import * as employeeController from "../../controllers/employee.controller";

router.get("/get_employees", verifyToken, employeeController.getEmployees);

router.get("/get_employee/:id", verifyToken, employeeController.getEmployeeById);

router.post("/create_employee", verifyToken, employeeController.createEmployee);

export default router;