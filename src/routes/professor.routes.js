import { Router } from "express";
import {
  getAllProfessors,
  getPendingInvites,
} from "../controllers/professorControllers.js";

const router = Router();
router.post("/getall", getAllProfessors);
router.get("/getInvites", getPendingInvites);

export default router;
