import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

import dotenv from "dotenv"
dotenv.config();

const login=async (req,res)=>{
    try {
        const {email,password}=req.body;

        const user=await prisma.user.findUnique({
            where:{
                email:email
            }
        })

        if(!user){
            return res.status(404).json({
                message:"User Not Found Please Login"
            })
        };

        const comparePassword=await bcrypt.compare(password,user.password);
        
        if(!comparePassword){
            return res.status(401).json({
                message:"Wrong password"
            })
        }

        const token=jwt.sign({
            userId:user.id,
            email:user.email,
            organizationId:user.organizationId
        },
            process.env.JWT_SECRET,
        {
            expiresIn:"1d"
        });

        res.status(200).json({
            message:"Logged In successfully",
            token
        })

    } catch (error) {
        res.status(500).json({
            message:"Failed to login user",
            error:error.message
        })
    }
}


export {login}