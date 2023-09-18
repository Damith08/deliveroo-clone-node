const express = require("express");
const oderRouter = express.Router();

oderRouter.get("/oders", (req, res) => {
  res.send("Oder");
});

module.exports = oderRouter;
