import express from "express";
import { getUser } from "../../model/user.db/user_db.js";

const router = express.Router();
router.get("/", getUser);

export default router;