import mongoose from "mongoose";

const ChildSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    sex: {
      type: String,
      required: true,
      trim: true,
    },
    dob: {
      type: String,
      required: true,
      trim: true,
    },
    father_name: {
      type: String,
      required: true,
      trim: true,
    },
    mother_name: {
      type: String,
      required: true,
      trim: true,
    },
    district_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "district",
      required: true,
    },
    photo: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("child", ChildSchema);
