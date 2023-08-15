import mongoose from "mongoose";
const { Schema } = "mongoose";

const commentSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Comment", commentSchema);
