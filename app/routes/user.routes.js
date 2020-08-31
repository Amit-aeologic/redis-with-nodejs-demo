const tests = require("../controllers/user.controller.js");

module.exports = app => {
    app.post("/get-user-details",tests.getuserdetails);
};