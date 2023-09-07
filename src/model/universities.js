import { Schema, model } from "mongoose";

const universitySchema = new Schema({
  name: {
    type: String,
  },
  state: {
    type: Schema.Types.ObjectId,
  },
  regid: {
    types: Schema.Types.ObjectId,
  },
  district: {
    types: Schema.Types.ObjectId,
  },
  courses: [
    {
      name: String,
      departments: String,
    },
  ],
  departments: [
    {
      name: String,
    },
  ],


  approved: Boolean,
});

export const UniversityModel = model("university", universitySchema);
