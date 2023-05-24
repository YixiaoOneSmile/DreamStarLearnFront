"use strict";
const courseController = require("../controllers/courseController")
const authorization = require("./middlewares/authorization");
module.exports = function (app, passport) {
    // Set up passport authorization middleware
    authorization(passport);

    app.post("/createCourse", courseController.createCourse);
    app.post('/deleteCourse/:courseId',courseController.deleteCourse);
    app.get("/getAllCourses", courseController.getAllCourses);
    app.get("/getAllCourses/:id", courseController.getCourseById);
    app.get("/getCoursesByName", courseController.getCourseByName);
    app.post('/courses/:courseId', courseController.createChapter);
    
};
