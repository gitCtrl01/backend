import { Router } from "express";
import {
  createUniversityController,
  deleteUniversityController,
} from "../controllers/university.controllers.js";
import PermissionCheck from "../middleware/permissionCheck.js";

const router = Router();

router.post("/create", createUniversityController);
router.delete("/delete", deleteUniversityController);

export default router;
