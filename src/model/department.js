import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({
    name: {
      type: String,
    },
  });
  
  export const DepartmentModel = mongoose.model("deparment", DepartmentSchema);