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

router.delete("/:id", deleteUser);

// Get a User

router.get("/find/:id", getUser);

// Subscribe a User

router.put("/sub/:id", subscribe);

// Unsubscribe a User

router.put("/unsub/:id", unsubscribe);

// Like a Video

router.put("/like/:videoId", like);

// Unlike a Video

router.put("/dislike/:videoId", dislike);

export default router;
