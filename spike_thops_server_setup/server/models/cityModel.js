import mongoose from "mongoose";

//if you want to use obect destructuring
// const {Schema}=mongoose
// const citySchema = new Schema({})

//without obect destructuring

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
});

const cityModel = mongoose.model("city", citySchema);

export default cityModel;
