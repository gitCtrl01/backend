import { Router } from "express";
import { createStateController, getStateController } from "../controllers/states.controllers.js";
import { deleteCountryController } from "../controllers/country.controllers.js";

const router = Router();

router.post("/create", createStateController);
router.delete("/delete", deleteCountryController);
router.get("/get", getStateController);

export default router;
