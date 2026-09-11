import express from "express";
const app=express();
import prisma from "./lib/prisma.js";

import userRoutes from "./routes/users.routes.js"
import organizationRoutes from "./routes/organization.routes.js"
import resourceRoutes from "./routes/resources.routes.js"
import accessRequestRoutes from "./routes/accessRequest.routes.js"

app.use(express.json());

app.get("/",async (req,res)=>{
    const users=await prisma.user.findMany();
    res.json(users);
})

app.use("/api",userRoutes);

app.use("/api",organizationRoutes);

app.use("/api",resourceRoutes);

app.use("/api",accessRequestRoutes);

export default app
