import museumsModel from "../models/museumsModel.js";

const getAllMuseums = async (req, res) => {
  const allMuseums = await museumsModel
    .find({})
    .populate({ path: "city", select: ["name", "countryCode"] });
  try {
    res.status(200).json({
      allMuseums,
      number: museumsModel.length,
    });
  } catch (error) {
    res.status(500).json({
      msg: "something went wrong",
      error,
    });
  }
};

export { getAllMuseums };
