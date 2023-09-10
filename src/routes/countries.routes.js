import { Router } from "express";
import { createCountryController, deleteCountryController, getCountryController } from "../controllers/country.controllers.js";

const router = Router();

router.post("/create", createCountryController);
router.delete('/delete',deleteCountryController);
router.get('/get', getCountryController);
export default router;
