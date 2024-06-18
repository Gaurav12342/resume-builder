import { findByEmail, signUpService } from "../../Services/Auth/auth.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signInController = async (req, res) => {
    const { email, password: plainPassword } = req.body;

    if (!email || typeof email !== "string") {
        res.status(404).json({
            status: "error",
            statusCode: 404,
            message: "Email is required."
        })
    }


    if (!plainPassword || typeof plainPassword !== "string") {
        res.status(404).json({
            status: "error",
            statusCode: 404,
            message: "Password is required."
        })
    }

    const findUser = await findByEmail(email);
    if (findUser) {
        const comparePassword = await bcrypt.compare(plainPassword, findUser?.password);
        if (comparePassword) {
            const secretKey = process.env.SECRET_KEY;
            const { username, email, contactNumber, createdAt, updatedAt, __v, _id } = findUser;
            const generateToken = await jwt.sign({ username, email, contactNumber, createdAt, updatedAt, __v, _id }, secretKey, { expiresIn: "1h" });
            res.status(200).json({
                status: "Ok",
                statusCode: 200,
                message: "Login user successfully.",
                token: generateToken
            });

        }
    }
}

export const signUpController = async (req, res) => {
    const { username, email, contactNumber, password: plainPassword } = req.body;
    const saltRounds = 10;
    const hashPassword = await bcrypt.hashSync(plainPassword, saltRounds);

    if (!username || typeof username !== "string") {
        res.status(404).json({
            status: "error",
            statusCode: 404,
            message: "Username is required."
        })
    }

    if (!email || typeof email !== "string") {
        res.status(404).json({
            status: "error",
            statusCode: 404,
            message: "Email is required."
        })
    }


    if (!plainPassword || typeof plainPassword !== "string") {
        res.status(404).json({
            status: "error",
            statusCode: 404,
            message: "Password is required."
        })
    }

    const obj = {
        username, email, contactNumber, password: hashPassword
    }

    signUpService(obj).then((response) => {
        if (response) {
            res.status(201).json({
                status: "Created",
                statusCode: 201,
                message: "Create user successfully.",
                data: {
                    _id: response?._id,
                    username: response?.username,
                    email: response?.email,
                    contactNumber: response?.contactNumber,
                    createdAt: response?.createdAt,
                    updatedAt: response?.updatedAt,
                    __v: response?.__v,
                }
            });
        }
    }).catch((error) => {
        console.log(error);
    });
}

