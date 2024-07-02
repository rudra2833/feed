
import connectDB from "./db/db_index.js";
import { app } from "./app.js";


import dotenv from "dotenv"
dotenv.config({path:"./env"});

const port = 3000;

connectDB()
    .then(() => {
        app.listen(port || 8000)
        console.log(`Server started on port ${port}`);
    })

    .catch((err) => {
        console.log("MONGO ERROR: " + err);
    })
