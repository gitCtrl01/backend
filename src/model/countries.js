import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

export const CountryModel = mongoose.model("countries", CountrySchema);
