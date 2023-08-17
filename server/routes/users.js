import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Update User

router.put("/:id", verifyToken, updateUser);

// Delete User

router.delete("/:id", verifyToken, deleteUser);

// Get a User

router.get("/find/:id", getUser);

// Subscribe a User

router.put("/sub/:id", verifyToken, subscribe);

// Unsubscribe a User

router.put("/unsub/:id", verifyToken, unsubscribe);

// Like a Video

router.put("/like/:videoId", verifyToken, like);

// Unlike a Video

router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
