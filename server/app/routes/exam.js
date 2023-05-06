"use strict";
const examController = require("../controllers/examController");
const authorization = require("./middlewares/authorization");
module.exports = function (app, passport) {
    // Set up passport authorization middleware
    authorization(passport);

    app.post("/exams", examController.createExam);
    app.get("/exams", examController.getAllExams);
    app.get("/exams/:id", examController.getExamById);
    app.post("/record-learning", examController.recordLearning);
    app.post("/record-exam-result", examController.recordExamResult);

};