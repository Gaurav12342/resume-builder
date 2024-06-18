import { Schema, model } from 'mongoose';

const authSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contactNumber: {
        type: Number,
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    collection: "auth"
});

export const authModel = new model("auth", authSchema);