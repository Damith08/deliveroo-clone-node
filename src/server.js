// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
// const http = require("http");
// const app = require("./app");

// const port = process.env.PORT || 3000;

// app.set("port", port);
// const server = http.createServer(app);

// server.listen(port);
const mongoose = require("mongoose");
const Restaurant = require("./models/restaurant.model");

mongoose.connect(
  "mongodb+srv://damith:DHs123456@cluster0.yjyq82k.mongodb.net/?retryWrites=true&w=majority",
);

async function run() {
  const newRestaurant = await Restaurant.create({
    name: "abcd",
    address: "No5A,jasgdyu,jyasgdyug,Sri Lanka",
    email: "test@test.com",
    contact: 947751236541,
  });
  console.log(newRestaurant);
}

run();
