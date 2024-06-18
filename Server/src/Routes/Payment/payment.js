import express from 'express';
import { makePaymentController } from '../../Controller/Payment/index.js';

const route = express.Router();

route.post("/create-checkout-session", makePaymentController);

export default route;