import express from "express";
import { signup } from "../controllers/auth.js";

const router = express.Router();

// Register User
router.post("/signup", signup);

// Login User
router.post("/signin");

// Google Auth
router.post("/google");

export default router;
