import { createTemplateService, deleteTemplateByIdService, fetchAllTemplateService, fetchTemplateByIdService, updateTemplateByIdService } from "../../Services/Template/template.js";

export const createTemplateController = async (req, res) => {
    const obj = req.body;
    createTemplateService(obj).then((response) => {
        if (response) {
            res.status(201).json({
                status: "Created",
                statusCode: 201,
                message: "Create template successfully.",
                data: response
            });
        }
    }).catch((error) => {
        console.log(error);
    });
}

export const getAllTemplateController = async (req, res) => {
    fetchAllTemplateService().then((response) => {
        if (response) {
            res.status(200).json({
                status: "Ok",
                statusCode: 200,
                message: "Get template successfully.",
                data: response
            });
        }
    }).catch((error) => {
        console.log(error);
    });
}

export const getTemplateByIdController = async (req, res) => {
    const { id } = req?.params;
    fetchTemplateByIdService(id).then((response) => {
        if (response) {
            res.status(200).json({
                status: "Ok",
                statusCode: 200,
                message: "Get template successfully.",
                data: response
            });
        }
    }).catch((error) => {
        console.log(error);
    });
}

export const deleteTemplateByIdController = async (req, res) => {
    const { id } = req?.params;
    deleteTemplateByIdService(id).then((response) => {
        if (response) {
            res.status(200).json({
                status: "Ok",
                statusCode: 200,
                message: "Delete template successfully.",
                data: response
            });
        }
    }).catch((error) => {
        console.log(error);
    });
}

export const updateTemplateByIdController = async (req, res) => {
    updateTemplateByIdService(req?.body).then((response) => {
        if (response) {
            res.status(200).json({
                status: "Ok",
                statusCode: 200,
                message: "Update template successfully.",
                data: response
            });
        }
    }).catch((error) => {
        console.log(error);
    });
}
