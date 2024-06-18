import express from 'express';
import { createTemplateController, deleteTemplateByIdController, getAllTemplateController, getTemplateByIdController, updateTemplateByIdController } from '../../Controller/Template/template.js';
import { isAuth } from '../../middleware/auth.js';

const route = express.Router();

// template route
route.post("/create-template", createTemplateController);
route.get("/fetch-template", isAuth, getAllTemplateController);
route.get("/fetch-template/:id", isAuth, getTemplateByIdController);
route.delete("/delete-template/:id", isAuth, deleteTemplateByIdController);
route.put("/update-template/:id", isAuth, updateTemplateByIdController);

export default route;

