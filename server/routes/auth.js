import express from "express";
import { googleAuth, signin, signup } from "../controllers/auth.js";

const router = express.Router();

// Register User
router.post("/signup", signup);

// Login User
router.post("/signin", signin);

// Google Auth
router.post("/google", googleAuth);

export default router;
