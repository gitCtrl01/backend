import { Schema, Types } from "mongoose";

const profJs = new Schema({
  firstName: String,
  LastName: String,
  College: Schema.Types.ObjectId,
  universities: Schema.Types.ObjectId,
  department: String,
  email: String,
  educationBackground: [
    {
      name: String,
      College: {
        name: Schema.Types.ObjectId,
        ref: "college",
      },
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
      name: Schema.Types.ObjectId,
      ref:'domain'
    },
  ],
});
