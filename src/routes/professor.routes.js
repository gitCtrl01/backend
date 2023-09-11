import { Router } from "express";
import { getAllProfessors } from "../controllers/professorControllers.js";

const router = Router();
router.post("/getall", getAllProfessors);

export default router;
