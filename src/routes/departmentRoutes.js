import { Router } from "express";
import { createDepartmentController, deleteDepartmentController, getDepartmentController } from "../controllers/department.controllers.js";

const router = Router();

router.post("/create", createDepartmentController);
router.delete('/delete',deleteDepartmentController);
router.get('/get',getDepartmentController);

export default router;