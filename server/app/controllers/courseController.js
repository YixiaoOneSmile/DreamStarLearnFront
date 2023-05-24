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
//删除课程
exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.courseId);
        if(!course) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }

        await course.remove();
        res.status(200).json({ success: true, message: 'Course deleted' });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
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
// 根据课程名称获取课程
exports.getCourseByName = async (req, res) => {
    try {
        const courseName = req.query.name;
        const courses = await Course.find({ name: { $regex: courseName, $options: 'i' } });
        if (courses.length === 0) {
            res.status(404).json({ success: false, message: "No courses found" });
            return;
        }
        res.status(200).json({ success: true, data: courses });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// 添加章节
exports.createChapter = async (req, res) => {
    try {
        // 从请求中获取课程 ID 和章节数据
        const { courseId } = req.params;
        console.log(req.params)
        console.log('id:',req.query.id)
        const { title, description, videoURL, pdfURL } = req.body;

        // 校验数据
        if (!title || !description || !videoURL || !pdfURL) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // 查找课程
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            });
        }

        // 添加章节
        course.chapters.push({ title, description, videoURL, pdfURL });

        // 保存课程
        await course.save();

        // 返回新的章节数据
        res.status(201).json({
            success: true,
            data: course.chapters[course.chapters.length - 1]
        });
    } catch (error) {
        // 处理错误
        console.error(error);
        res.status(500).json({
            success: false,
            message: "An error occurred while creating the chapter",
        });
    }
};

