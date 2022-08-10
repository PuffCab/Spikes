import City from "../models/citiesModel.js";
const getAllCities = async (req, res) => {
  try {
    const allCities = await City.find({});

    console.log("allCities", allCities);
    res.status(200).json({
      allCities,
      number: allCities.length,
    });
  } catch (error) {
    if (error === "xyz") {
      res.status(501).json({
        error: error,
        msg: "wrong url",
      });
    }

    res.status(500).json({
      error: error,
      msg: "server failed",
    });
  }
};

export { getAllCities };
