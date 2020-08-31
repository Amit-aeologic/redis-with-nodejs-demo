const mysql = require("mysql");
const Sequelize = require('sequelize');

require('dotenv').config()
//Sequelize connection
var connection = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    port: 3306,
    dialect: 'mysql'
  });
  module.exports = connection; 