import express from "express";
const router = express.Router();

router.get("/test", (req, res) => {
  res.send({
    msg: "Test route",
  });
});
router.get("/info", (req, res) => {
  res.send({
    msg: "a lot of info here",
  });
});

export default router;
