import mongoose from "mongoose";

// const {Schema} = mongoose ...as an option you can destructure here and then just do const a = new Schema()

const citiesSchema = new mongoose.Schema({
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

const cityModel = mongoose.model("city", citiesSchema);
export default cityModel;
