import { Schema, Types, model } from "mongoose";

const professorSchema = new Schema({
  firstName: String,
  lastName: String,
  college: {
    type: Schema.Types.ObjectId,
    ref: "college",
  },
  university: { type: Schema.Types.ObjectId, ref: "university" },
  department: String,
  emailId: String,
  password: String,
  educationBackground: [
    {
      name: String,
      College: String,
      passoutDate: Date,
    },
  ],
  achivements: [
    {
      domain: String,
      name: String,
      designation: String,
      timeRequired: String,
    },
  ],
  domain: [
    {
      name: String,
    },
  ],
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "roles",
    },
  ],
});

export const ProfModel = model("professor", professorSchema);
