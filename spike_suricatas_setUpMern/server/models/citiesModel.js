import mongoose from "mongoose";

const { Schema } = mongoose;

const citiesSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  countryCode: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
});

const City = mongoose.model("city", citiesSchema);

export default City;
