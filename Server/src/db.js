import mongoose from "mongoose";

const DatabaseConnection = async () => {
    const dbUrl = `${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`
    try {
        const response = await mongoose.connect(`${dbUrl}`);
        return response
    } catch (error) {
        console.log("error =>",error);
    }
    
}

export default DatabaseConnection;