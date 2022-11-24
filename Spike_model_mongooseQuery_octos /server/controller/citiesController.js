import cityModel from "../models/citiesModel.js";

const getAllCities = async (req, res) => {
  try {
    const allCities = await cityModel.find({});
    console.log("allCities", allCities);
    res.status(200).json({
      number: allCities.length,
      allCities,
    });
  } catch (error) {
    console.log("error :>> ", error);
    res.status(500).json({
      error,
      msg: "there was a problem in the server",
    });
  }
};

const getCitiesByCountryCode = async (req, res) => {
  console.log("req.params :>> ", req.params);
  console.log("req.query :>> ", req.query);
  const { countryCode } = req.params;
  const { likes } = req.query;

  if (likes) {
    try {
      const requestedCities = await await cityModel
        .find({ countryCode: countryCode, likes: { $gte: likes } })
        .exec();
      res.status(200).json({
        number: requestedCities.length,
        requestedCities,
      });
    } catch (error) {
      console.log("error getting cities with likes", error);
      res.status(500).json({
        msg: error,
        error,
      });
    }
  } else {
    try {
      const requestedCities = await cityModel
        .find({ countryCode: countryCode })
        .exec();
      console.log("requestedCities>>>>", requestedCities);
      if (requestedCities.length === 0) {
        res.status(200).json({
          msg: "no cities with this country code",
        });
      }
      res.status(200).json({
        requestedCities,
        number: requestedCities.length,
      });
    } catch (error) {
      console.log("error getting cities :>> ", error);
      res.status(500).json({
        error: error,
        msg: "server error",
      });
    }
  }
};

export { getAllCities, getCitiesByCountryCode };
