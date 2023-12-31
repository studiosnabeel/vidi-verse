import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
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
