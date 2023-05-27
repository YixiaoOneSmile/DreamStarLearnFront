"use strict";
const uploadController = require("../controllers/uploadController")
const authorization = require("./middlewares/authorization");
module.exports = function (app, passport) {
    // Set up passport authorization middleware
    authorization(passport);

    app.post("/upload",uploadController.uploadFile);
    
};
