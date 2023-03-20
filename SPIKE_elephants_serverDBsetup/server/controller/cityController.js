import cityModel from "../models/cityModel.js";

const getAllCities = async (req, res) => {
  try {
    const allCities = await cityModel.find({});
    console.log("allCities", allCities);
    res.status(201).json({
      number: allCities.length,
      allCities,
    });
  } catch (error) {
    res.status(500).json({
      error,
      msg: "something went wrong in the server",
    });
  }
};
export { getAllCities };
