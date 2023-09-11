import { Types, model } from "mongoose";
import { Schema } from "mongoose";

const clgSchema = new Schema({
  name: String,
  state: String,
  district: String,
  addressl1: String,
  addressl2: String,
  principal: String,
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "roles",
    },
  ],
  clgtype: {
    type: String,
    // enum: ["Private", "Autonomus", "Government"],
  },
  courses: [
    {
      name: {
        type: String,
      },
    },
  ],
  university: {
    type: Schema.Types.ObjectId,
    ref: "university",
  },
});

export const clgModel = model("college", clgSchema);
