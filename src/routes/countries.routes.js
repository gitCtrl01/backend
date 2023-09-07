import { Router } from "express";
import { createCountryController, deleteCountryController } from "../controllers/country.controllers.js";

const router = Router();

router.post("/create", createCountryController);
router.delete('/delete',deleteCountryController)
export default router;
