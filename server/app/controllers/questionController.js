const Question = require("../models/Question");

// 创建问题
exports.createQuestion = async (req, res) => {
    try {
        const question = new Question(req.body);
        await question.save();
        res.status(201).json({ success: true, data: question });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// 获取所有问题
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find({});
        res.status(200).json({ success: true, data: questions });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// 根据ID获取问题
exports.getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) {
            res.status(404).json({ success: false, message: "Question not found" });
            return;
        }
        res.status(200).json({ success: true, data: question });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
