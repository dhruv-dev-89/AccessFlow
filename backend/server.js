import app from "./src/app.js"
import "./src/jobs/accessExpiry.job.js";

import dotenv from "dotenv"
dotenv.config();

app.listen(process.env.PORT,()=>{
    console.log("Server started");
})
