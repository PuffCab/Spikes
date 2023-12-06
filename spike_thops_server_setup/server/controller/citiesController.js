import cityModel from "../models/cityModel.js";

const getAllCities = async (req, res) => {
  console.log("route working");
  //   console.log("req :>> ", req);
  try {
    const cities = await cityModel.find({});
    console.log("cities :>> ", cities);

    if (cities) {
      res.status(200).json({
        number: cities.length,
        cities,
      });
    }
    if (cities.length === 0) {
      res.status(200).json({
        message: "sorry no documents in the database",
      });
    }
  } catch (error) {
    console.log("error :>> ", error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

export { getAllCities };
