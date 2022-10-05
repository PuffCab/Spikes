import cityModel from "../models/citiesModel.js";

const getAllCities = async (req, res) => {
  const allCities = await cityModel
    .find({})
    .populate({ path: "museums", select: ["name", "price"] });
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

const getCitiesByCountryCode = async (req, res) => {
  // console.log("req", req.params.countryCode);
  console.log("query param", req.query);
  const { likes } = req.query;
  console.log(likes);
  if (likes) {
    console.log("there are likes");
    const requestedCities = await cityModel
      .find({
        countryCode: req.params.countryCode,
        likes: { $gte: likes },
      })
      .exec();
    console.log("asdasd");
    console.log("requestedCities", requestedCities);

    try {
      if (requestedCities.length === 0) {
        res.status(200).json({
          msg: "no cities with this country code",
        });
      } else {
        res.status(200).json({
          requestedCities,
          number: requestedCities.length,
        });
      }
    } catch (error) {
      res.status(500).json({
        msg: "something went wrong",
        error,
      });
    }
  } else {
    try {
      const requestedCities = await cityModel.find({
        countryCode: req.params.countryCode,
      });
      if (requestedCities.length === 0) {
        res.status(200).json({
          msg: "no cities with this country code",
        });
      } else {
        res.status(200).json({
          requestedCities,
          number: requestedCities.length,
        });
      }
    } catch (error) {
      res.status(500).json({
        msg: "something went wrong",
        error,
      });
    }
  }
};

export { getAllCities, getCitiesByCountryCode };
