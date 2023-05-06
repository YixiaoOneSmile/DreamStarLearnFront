"use strict";

const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
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
    chapters: [
        {
            title: String,
            description: String,
            videoURL: String,
            pdfURL: String,
        },
    ],
});

module.exports = mongoose.model("Course", courseSchema);
