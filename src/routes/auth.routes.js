import { Router } from "express";
import {
  Login,
  Logout,
  ProfLogin,
  Register,
  StudentRegister,
} from "../controllers/auth.controllers.js";
import {
  ValidateLoginSchema,
  ValidateUserSchema,
} from "../model/User.model.js";
import { createProfessor } from "../controllers/professorControllers.js";

const router = Router();

router.post("/register", ValidateUserSchema, Register);
router.post("/login", Login);
router.get("/logout", Logout);
router.post("/createProf", createProfessor);
router.post("/proflogin", ProfLogin);
router.post("/studentRegister", StudentRegister);
export default router;
