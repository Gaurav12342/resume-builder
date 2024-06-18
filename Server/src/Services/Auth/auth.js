import { authModel } from '../../Modal/Auth/auth.js'

export const signUpService = async (data) => {
    try {
        const response = await authModel.create(data);
        return response
    } catch (error) {
        return error
    }
}

export const findByEmail = async (email) => {
    try {
        const response = await authModel.findOne({ email }).lean();
        return response
    } catch (error) {
        return error
    }
}