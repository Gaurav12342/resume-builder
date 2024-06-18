import express from 'express';
import { signInController, signUpController } from "../../Controller/Auth/auth.js";

const route = express.Router();

// auth route
route.post("/sign-in", signInController);
route.post("/sign-up", signUpController);

export default route;

