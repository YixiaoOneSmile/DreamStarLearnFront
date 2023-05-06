const Course = require("../models/Course");

// 创建课程
exports.createCourse = async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).json({ success: true, data: course });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// 获取所有课程
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).json({ success: true, data: courses });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// 根据ID获取课程
exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            res.status(404).json({ success: false, message: "Course not found" });
            return;
        }
        res.status(200).json({ success: true, data: course });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
