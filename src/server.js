const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected to the Database successfully!");
  })
  .catch(() => {
    console.log("Connection to the database failed");
  })
  .finally(() => {
    console.log("Database process completed");
  });

const app = express();
const port = 3000;
const commonRoutes = require("./routes/common.routes");
const restaurantRoutes = require("./routes/restaurant.routes");
const userRoutes = require("./routes/user.routes");
const oderRoutes = require("./routes/oder.routes");
const dishRoutes = require("./routes/dish.routes");
const dishCategoryRoutes = require("./routes/dish-category.routes");

app.use("/users", userRoutes);
app.use("/restaurants", restaurantRoutes);
app.use("/oders", oderRoutes);
app.use("/dishes", dishRoutes);
app.use("/dish-categories", dishCategoryRoutes);
app.use(commonRoutes);

app.listen(port, () => {
  console.log(`deliveroo-node API listening on port ${port}`);
});
