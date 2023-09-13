import mongoose, { Schema } from "mongoose";

const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 10,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },

  addressL1: {
    type: String,
    required: true,
  },
  addressL2: {
    type: String,
  },
  pincode: {
    type: Number,
    required: true,
  },
  // state: {
  //   type: String,
  //   required: true,
  // },
  district: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
    // enum: ["Male", "Female", "Others"],
  },
  dob: {
    type: Date,
    required: true,
  },
  bachloers: {
    university: {
      type: String,
    },
    college: {
      type: String,
    },
    passingYear: Date,
    programme: String,
    CGPA: Number,
  },
  masters: {
    university: {
      type: String,
    },
    college: {
      type: String,
    },
    joiningDate: Date,
    programme: String,
    CGPA: Number,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "project",
  },
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "roles",
    },
  ],
});

export const StudentModel = mongoose.model("student", StudentSchema);
