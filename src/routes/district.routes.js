import { Router } from "express";
import { createDistrictController, getDistrictController } from "../controllers/district.controllers.js";

const router = Router();

router.post("/create", createDistrictController);
router.get("/get", getDistrictController);

export default router;
