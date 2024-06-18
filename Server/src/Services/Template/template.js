import { templateModel } from "../../Modal/Template/template.js";

export const createTemplateService = async (data) => {
    try {
        const response = await templateModel.create(data);
        return response
    } catch (error) {
        return error
    }
}

export const fetchAllTemplateService = async (page = 0, parPage = 10) => {
    try {
        const response = await templateModel.find({}).sort({ createdAt: -1 }).skip(page * parPage).limit(parPage);
        return response
    } catch (error) {
        return error
    }
}

export const fetchTemplateByIdService = async (id) => {
    try {
        const response = await templateModel.findOne({ _id: id });
        return response
    } catch (error) {
        return error
    }
}

export const deleteTemplateByIdService = async (id) => {
    try {
        const response = await templateModel.deleteOne({ _id: id });
        return response
    } catch (error) {
        return error
    }
}

export const updateTemplateByIdService = async (data) => {
    const {_id,...rest} = data
    try {
        const response = await templateModel.findOneAndUpdate({ _id }, { $set: data }, { new: true });
        return response;
    } catch (error) {
        return error
    }
}