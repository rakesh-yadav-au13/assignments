import mongoose from "mongoose";

const StateSchema = mongoose.Schema(
  {
    state_name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("state", StateSchema);
