import cityModel from "../models/citiesModel.js";

const getAllCities = async (req, res) => {
  const allCities = await cityModel.find({});
  console.log("allCities>>>", allCities);
  try {
    if (allCities.length === 0) {
      res.status(200).json({
        msg: "no cities in the DB anymore",
      });
    } else {
      res.status(200).json({
        allCities,
        number: allCities.length,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "server failed",
      error: error,
    });
  }
};

export { getAllCities };
