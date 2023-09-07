import mongoose from "mongoose";

const StateSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  country: {
    type: String,
  },
});

export const StatesModel = mongoose.model("states", StateSchema);
