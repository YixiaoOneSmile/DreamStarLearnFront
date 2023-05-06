const Exam = require("../models/Exam");
const Result = require("../models/Result");
const StudyRecord = require("../models/StudyRecord");
// ...其他代码

// 创建考试
exports.createExam = async (req, res) => {
    try {
        const exam = new Exam(req.body);
        await exam.save();
        res.status(201).json({ success: true, data: exam });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// 获取所有考试
exports.getAllExams = async (req, res) => {
    try {
        const exams = await Exam.find({});
        res.status(200).json({ success: true, data: exams });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// 根据ID获取考试
exports.getExamById = async (req, res) => {
    try {
        const exam = await Exam.findById(req.params.id);
        if (!exam) {
            res.status(404).json({ success: false, message: "Exam not found" });
            return;
        }
        res.status(200).json({ success: true, data: exam });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
// 记录学生学习情况
exports.recordLearning = async (req, res) => {
    try {
        const { studentId, courseId, chapterId } = req.body;
        const existingRecord = await StudyRecord.findOne({
            student: studentId,
            course: courseId,
            chapter: chapterId,
        });

        if (existingRecord) {
            existingRecord.status = "completed";
            existingRecord.updatedAt = Date.now();
            await existingRecord.save();
        } else {
            const newRecord = new StudyRecord({
                student: studentId,
                course: courseId,
                chapter: chapterId,
                status: "completed",
            });
            await newRecord.save();
        }

        res.status(200).json({ success: true, message: "Learning recorded successfully" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
// 记录学生考试成绩
exports.recordExamResult = async (req, res) => {
    try {
        const { studentId, examId, score } = req.body;
        const existingResult = await Result.findOne({
            student: studentId,
            exam: examId,
        }); if (existingResult) {
            existingResult.score = score;
            existingResult.status = "completed";
            existingResult.updatedAt = Date.now();
            await existingResult.save();
        } else {
            const newResult = new Result({
                student: studentId,
                exam: examId,
                score: score,
                status: "completed",
            });
            await newResult.save();
        }

        res.status(200).json({ success: true, message: "Exam result recorded successfully" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};