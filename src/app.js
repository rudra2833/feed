import express from "express";
import bodyParser from "body-parser";
// import cors from "cors";

import userRouter from './routes/user.route.js';

const app = express();

// Middleware
// app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

// Routes declarations
app.use("/api/v1/users", userRouter);




import dotenv from "dotenv"
dotenv.config({path:"./env"});


//using google drive
import { google } from "googleapis";
import fs from "fs";


const SCOPE = "https://www.googleapis.com/auth/drive";

async function auth() {
    const jwtClient = new google.auth.JWT(
        process.env.GOOGLE_API_CLIENT_EMAIL,
        null,
        process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n'), // Fixes newline characters in private key
        SCOPE
    );
    await jwtClient.authorize();
    return jwtClient;
}

async function uploadFile(authClient) {
    return new Promise((resolve, reject) => {
        const drive = google.drive({ version: "v3", auth: authClient });

        console.log("Uploading file...");

        const fileMetadata = {
            name: "1.txt", // Set the name of the file here
            parents: ["1aHHl6t1UgZ4rwW1Dmm0rFWOSCzT_Fo35"], // Make sure the folder ID is correct
        };


        const media = {
            mimeType: "image/jpg", // Correct MIME type
            body: fs.createReadStream("public/images/good10.jpg"),
        };

        drive.files.create({
            resource: fileMetadata,
            media: media,
            fields: "id, webViewLink",
        }, (err, file) => {
            if (err) {
                console.error("Error uploading file:", err);
                reject(err);
            } else {
                console.log("File uploaded, ID:", file.data.id, "Link:", file.data.webViewLink);
                resolve(file.data.id);
            }
        });
    });
}

auth().then(uploadFile).catch(console.error);












// Export the app
export { app };
