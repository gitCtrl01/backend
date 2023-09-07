import { Schema } from "mongoose";

const studentSchema = new Schema({
  name: String,
  department: String,
  college: String,
  university: String,
  currentSemester: String,
  Project: {
    Guide: String,
    topic: String,
    description: String,
    startDate: String,
    endDate: String,
  },
  achivements: [{
    name:String,
    description:String
  }],
  pastPublications: [
    {
      name: String,
      link: URL,
      description: String,
    },
  ],
});
