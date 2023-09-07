import { Router } from "express";
import { createDistrictController } from "../controllers/district.controllers.js";

const router = Router();

router.post("/create", createDistrictController);

export default router;
