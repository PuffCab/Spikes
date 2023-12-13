import cityModel from "../models/cityModel.js";

const getAllCities = async (req, res) => {
  console.log("route working");
  //   console.log("req :>> ", req);
  try {
    const cities = await cityModel
      .find({})
      .populate({ path: "museums", select: ["name", "price"] });
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

const getCitiesByContryCode = async (req, res) => {
  console.log("req".bgMagenta, req);
  const { countryCode } = req.params;
  const { likes } = req.query;

  if (req.query.likes) {
    try {
      const citiesWithLikes = await cityModel.find({
        countryCode: req.params.countryCode,
        likes: { $gte: req.query.likes },
      });
      res.status(200).json({
        number: citiesWithLikes.length,
        citiesWithLikes,
      });
    } catch (error) {
      console.log("error :>> ", error);
      res.status(500).json({
        message: "something went wrong",
      });
    }
  } else {
    try {
      const citiesByCountryCode = await cityModel.find({
        // countryCode: countryCode,
        countryCode: req.params.countryCode,
      });
      // console.log("citiesByCountryCode :>> ".bgGreen, citiesByCountryCode);
      res.status(200).json({
        number: citiesByCountryCode.length,
        citiesByCountryCode,
      });
    } catch (error) {
      console.log("error :>> ", error);
      res.status(500).json({
        message: "something went wrong",
      });
    }
  }
};

export { getAllCities, getCitiesByContryCode };
