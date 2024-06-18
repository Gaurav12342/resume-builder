import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import DatabaseConnection from './db.js';
import authRoute from './Routes/Auth/auth.js';
import templateRoute from './Routes/Template/template.js';
import paymentRoute from './Routes/Payment/payment.js';

config();

const app = express();
const port = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

// routes
app.use("/auth",authRoute);
app.use("/template",templateRoute);
app.use("/api", paymentRoute);

DatabaseConnection()

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});