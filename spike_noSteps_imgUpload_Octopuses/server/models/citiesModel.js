import mongoose from "mongoose";

const { Schema } = mongoose;

const citySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  countryCode: {
    type: String,
    required: true,
    unique: false,
  },

  likes: {
    type: Number,
    required: false,
  },

  location: {
    long: {
      type: Number,
    },
    lat: {
      type: Number,
    },
  },
  museums: [{ type: Schema.Types.ObjectId, ref: "museum" }],
});

const cityModel = mongoose.model("city", citySchema);

export default cityModel;
