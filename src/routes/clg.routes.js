import { Router } from "express";
import { CreateCollegeController } from "../controllers/clg.controllers.js";

const router = Router();
router.post("/create", CreateCollegeController);

export default router;
