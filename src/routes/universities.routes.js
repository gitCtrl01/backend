import { Router } from "express";
import {
  createUniversityController,
  deleteUniversityController,
  getUniversityController,
} from "../controllers/university.controllers.js";
import PermissionCheck from "../middleware/permissionCheck.js";

const router = Router();

router.post("/create", createUniversityController);
router.delete("/delete", deleteUniversityController);
router.get("/get", getUniversityController);

export default router;
