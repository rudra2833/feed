import mongoose, { Schema } from "mongoose";

// Feedback Schema
const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
    },
});

export const Feedback = mongoose.model('UserFeedback', feedbackSchema);