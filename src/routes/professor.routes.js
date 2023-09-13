import { Router } from "express";
import {
    ApproveGuide,
  getAllProfessors,
  getPendingInvites,
} from "../controllers/professorControllers.js";

const router = Router();
router.post("/getall", getAllProfessors);
router.get("/getInvites", getPendingInvites);
router.put('/assignprof',ApproveGuide)

export default router;
