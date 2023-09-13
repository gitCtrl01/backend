import { Router } from "express";
import { CreateProject } from "../controllers/porjectControllers.js";

const router = Router()

router.post('/create',CreateProject)

export default router