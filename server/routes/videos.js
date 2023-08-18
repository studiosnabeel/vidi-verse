import express from "express";
import { verifyToken } from "../verifyToken";
import {
  addVideo,
  deleteVideo,
  getVideo,
  updateVideo,
} from "../controllers/video";

const router = express.Router();

//Create a video
router.post("/", verifyToken, addVideo);

//Update a video
router.put("/:id", verifyToken, updateVideo);

//Delete a video
router.delete("/:id", verifyToken, deleteVideo);

//Get a video
router.get("/find/:id", getVideo);

export default router;
