import express from "express";
const app=express();
import prisma from "./lib/prisma.js";

import userRoutes from "./routes/users.routes.js"
import organizationRoutes from "./routes/organization.routes.js"

app.use(express.json());

app.get("/",async (req,res)=>{
    const users=await prisma.user.findMany();
    res.json(users);
})

app.use("/api",userRoutes);

app.use("/api",organizationRoutes);

export default app
