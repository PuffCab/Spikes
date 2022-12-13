import museumsModel from "../models/museumsModel.js";

const getAllMuseums = async (req, res) => {
  try {
    const allMuseums = await museumsModel
      .find({})
      .populate({ path: "city", select: ["name", "location"] });
    res.status(200).json({
      number: allMuseums.length,
      allMuseums,
    });
  } catch (error) {
    console.log("error>>>", error);
    res.status(500).json({
      error: error,
      msg: "sorry, something went wrong",
    });
  }
};
export { getAllMuseums };
