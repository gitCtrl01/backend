import { getStudentController } from "../controllers/students.controllers.js";
import { StudentModel } from "../model/studentschema.js";
import { Router } from "express";

const router = Router();

router.get("/getall", getStudentController);

export default router;
