const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    exam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam",
        required: true,
    },
    score: Number,
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Result", resultSchema);
