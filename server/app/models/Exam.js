const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question",
        },
    ],
});

module.exports = mongoose.model("Exam", examSchema);
