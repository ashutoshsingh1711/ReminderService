const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const appRoutes = require("../src/routes");
const jobs = require("./utils/job");

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", appRoutes);

  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
    jobs();
  });
};

setupAndStartServer();
