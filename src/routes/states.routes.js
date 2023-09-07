import { Router } from "express";
import { createStateController } from "../controllers/states.controllers.js";
import { deleteCountryController } from "../controllers/country.controllers.js";

const router = Router();

router.post("/create", createStateController);
router.delete("/delete", deleteCountryController);

export default router;
