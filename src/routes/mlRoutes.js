import { Router } from "express";
import { MlApi } from "../controllers/mlApi.controllers.js";
import { AuthCheck } from "../middleware/authCheck.js";

const router = Router();
router.post("/chatbot", AuthCheck, MlApi);
export default router;
