const mongoose = require("mongoose");

const studyRecordSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    chapter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chapter",
    },
    status: {
        type: String,
        enum: ["not-started", "in-progress", "completed"],
        default: "not-started",
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("StudyRecord", studyRecordSchema);
