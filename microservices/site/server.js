const express = require("express");
const app = express();
const port = process.env.PORT || 4000; // the app can use either the hosting port during production 0r 5000 is not available
const cors = require("cors");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const path = require("path");
const cookieParser = require("cookie-parser");
require("express-async-errors");
const connectDb = require("./db/ConnectDb");
require("dotenv").config(); //

const BoardRoute = require("./routes/BoardRoute");
const ControllerRoute = require("./routes/ControllerRoute");
const ComponentRoute = require("./routes/ComponentRoute");
const SiteController = require("./routes/siteRoute");

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
//app.use(express.static("../client/dist"));
//app.use(express.static(path.resolve(__dirname, "../client/dist")));

//routes

app.use("/api/site/boards", BoardRoute);
app.use("/api/site/controllers", ControllerRoute);
app.use("/api/site/components", ComponentRoute);
app.use("/api/site", ComponentRoute);

//app.get("/doc", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "./doc", "reveew.html"));
//});

//app.get("*", (req, res) => {
// res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
//});

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  await connectDb(process.env.MONGO_URL);

  app.listen(port, () =>
    console.log(` Site Server is running on port : ${port}`)
  );

  // await Item.create(businesjson);
};

start();
