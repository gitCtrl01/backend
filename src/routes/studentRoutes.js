import { getStudentController } from "../controllers/students.controllers";
import { StudentModel } from "../model/studentschema";
import { Router } from "express";

const router = Router();

router.get("/getall", getStudentController);

export default router;
