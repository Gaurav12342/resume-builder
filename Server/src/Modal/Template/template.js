import { Schema, model } from 'mongoose';

const projectDetailSchema = new Schema({
    title: String,
    teamSize: String,
    duration: Number,
    technologies: String
});

const workExperienceSchema = new Schema({
    companyName: String,
    location: String,
    position: String,
    technologies: String,
    CTC: Number
});

const fileUploadSchema = new Schema({
    fileName: String,
    url:String,
    originalname: String,
    mimetype: String,
    size: String
})


const editorSchema = new Schema({
    personalInfo: {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
        mobile: { type: Number },
        address: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String },
        profileImg: { type: String },
        paragraph: { type: String },
        imageUrl : { type : String},
    },
    educationDetails:{
        university: { type: String },
        degree: { type: String },
        percentage: { type: String },
    },
    skills: [String],
    workExperience: [workExperienceSchema],
    projectDetails: [projectDetailSchema],
    template : { type : String},
}, {
    timestamps: true,
    collection: "template"
});

export const templateModel = new model("template", editorSchema);