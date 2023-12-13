import museumModel from "../models/museumModel.js";

const getAllMuseums = async (req, res) => {
  //   console.log("route working");
  const allMuseums = await museumModel
    .find({})
    .populate({ path: "city", select: ["name", "likes"] })
    .exec();

  res.status(200).json({
    number: allMuseums.length,
    allMuseums,
  });
};

export { getAllMuseums };
