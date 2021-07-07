import mongoose from "mongoose";

const DistrictSchema = mongoose.Schema(
  {
    stateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "state",
      required: true,
      trim: true,
    },
    district_Id: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("district", DistrictSchema);
