import { Types, model } from "mongoose";
import { Schema } from "mongoose";

const clgSchema = new Schema({
  name: String,
  state: String,
  district: String,
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
