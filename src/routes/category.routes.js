import { Router } from "express";
import DeleteCategory, {
  createCategory, getCategoryController,
} from "../controllers/category.controllers.js";
import PermissionCheck from "../middleware/permissionCheck.js";

const router = Router();

router.post("/createcategory", PermissionCheck("admin"), createCategory);
router.delete("/deletecategory", PermissionCheck("admin"), DeleteCategory);
router.get("/get", getCategoryController);
export default router;
