import { Router } from "express";
import { CreateCollegeController, getCollegeController } from "../controllers/clg.controllers.js";

const router = Router();
router.post("/create", CreateCollegeController);
router.get("/get", getCollegeController);

export default router;
