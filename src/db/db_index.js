//HERE IN THIS FILE THE CONNECTION OF MONGODB IS ESTABLISHED WITH ATLAS

import mongoose from "mongoose";
const MongoDBURL = "mongodb+srv://Rudra:Luffy123@mongodb1.0gde3st.mongodb.net";
//importing the dbname
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {

        const connectInstance = await mongoose.connect(`${MongoDBURL}/${DB_NAME}`)
        // the connection of response is store here (CONNECTISTANCE VARIABLE)

        // console.log(connectInstance)
        console.log(`\nMongoDB connected!! DB HOST: ${connectInstance.connection.host}`)

    } catch (error) {
        console.log("MongoDB connection ERROR: ",error);
        process.exit(1)
    }
}

export default connectDB
//Importing this in the index file (This is method 2 approach for connection establishment)