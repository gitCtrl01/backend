import mongoose from "mongoose";
import { Schema } from "mongoose";

const districtSchema = new Schema({
  state: {
    type: Schema.Types.ObjectId,
    ref: "states",
  },
  name: String,
  pincode: Number,
});

export const DistrictModel = mongoose.model("district", districtSchema);
