"use strict";
const questionController = require("../controllers/questionController")
const authorization = require("./middlewares/authorization");
module.exports = function (app, passport) {
    // Set up passport authorization middleware
    authorization(passport);

    app.post("/getAllQuestions", questionController.getAllQuestions);
    app.get("/getAllQuestions", questionController.getAllQuestions);
    app.get("/getQuestion/:id", questionController.getQuestionById);

};