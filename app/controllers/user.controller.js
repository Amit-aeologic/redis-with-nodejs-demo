require('dotenv').config()
const sql = require("../models/db.js");
const db = require("../models");
const sequelize = require('sequelize');
const UserModel = db.userModel;
const Op = require('sequelize').Op;
const redis = require('redis');
const redisClient = redis.createClient();
class UserController {
    static getuserdetails= async (req, res, next) => {

        redisClient.get("userData", async(err, data) => {
        try {
        if (data !== null) {
            return res.status(200).send({
                                status: 200,
                                message: ' data found',
                                data: JSON.parse(data)
                            });  
        } else {
            let uData = await UserModel.findAll();
            redisClient.setex("userData", 3600 , JSON.stringify(uData));
            return res.status(200).send({
                                status: 200,
                                message: ' data found',
                                data: JSON.parse(uData)
                            });  
            }
        } catch(error) {
        console.log(error)
        return res.status(400).send({
                    message:'Unable to find data',
                    errors: error,
                    status: 400
                });
        }
        })
    }
}
module.exports = UserController