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

// app.use("/users", userROUTES);
// app.use("/RESTAURANTS", RESTAURANTROUTES);
// app.use(COMMONROUTES);

app.listen(port, () => {
  console.log(`deliveroo-node API listening on port ${port}`);
});
