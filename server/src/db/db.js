import mongoose from "mongoose";
import { DB_NAME } from "../constraints.js";


const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect('mongodb+srv://momincse13:<db_password>@cluster0.ob106ek.mongodb.net/labproject')
        console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MongoDB Connenction Error",error);
        process.exit(1);
    }
}
export default connectDB