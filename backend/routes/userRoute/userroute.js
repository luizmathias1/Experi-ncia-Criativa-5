import express from "express";
import { getUser } from "../../crontroller/user_controller/user_controller.js";

const router = express.Router();
router.get("/", getUser);
export default router; 