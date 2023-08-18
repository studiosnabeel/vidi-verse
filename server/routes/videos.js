import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  addVideo,
  deleteVideo,
  getVideo,
  getViews,
  random,
  search,
  sub,
  tag,
  trend,
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
router.put("/view/:id", getViews);

//Search trending videos
router.get("/trend", trend);

//Display Random Videos
router.get("/random", random);

//subscribe to a video
router.get("/sub", verifyToken, sub);

// Search by tags
router.get("/tags", tag);

//Search by search filter
router.get("/search", search);

export default router;
