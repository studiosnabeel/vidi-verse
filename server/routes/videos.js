import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  addVideo,
  deleteVideo,
  getVideo,
  updateVideo,
} from "../controllers/video.js";

const router = express.Router();

//Create a video
router.post("/", verifyToken, addVideo);

//Update a video
router.put("/:id", verifyToken, updateVideo);

//Delete a video
router.delete("/:id", verifyToken, deleteVideo);

//Get a video
router.get("/find/:id", getVideo);

//Add View for video
router.put("/view/:id");

//Search trending videos
router.get("/trend");

//Display Random Videos
router.get("/random");

//subscribe to a video
router.get("/sub", verifyToken);

// Search by tags
router.get("/tags");

//Search by search filter
router.get("/search");

export default router;
