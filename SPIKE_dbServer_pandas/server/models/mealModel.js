import mongoose from "mongoose";

const { Schema } = mongoose;

const mealSchema = new Schema({
  name: { type: String, require: true, unique: true },
  country: { type: String, require: true, unique: false },
  countryCode: { type: String, require: true, unique: false },
  likes: Number,
});

const MealModel = mongoose.model("meal", mealSchema);

export default MealModel;
