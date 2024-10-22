import { Router } from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controller/user.controller.js";

const router = Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;
