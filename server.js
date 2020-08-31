const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require('sequelize');
const fetch = require("node-fetch");
const redis = require("redis");
const app = express();
app.use(bodyParser.json());
require("./app/routes/user.routes.js")(app);
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const redisClient = redis.createClient(REDIS_PORT);
redisClient.on('connect',() => {
  console.log(`Connected to Redis on port ${REDIS_PORT}.`)
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);

});