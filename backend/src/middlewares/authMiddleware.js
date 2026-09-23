import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";


const authMiddleware=async (req,res,next)=>{
    try {
        const authHeader=req.headers.authorization;

        if(!authHeader){
            return res.status(401).json({
                message: "Authentication required"
            })
        }

        const token=authHeader.split(" ")[1];

        const decoded=jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user = await prisma.user.findUnique({
            where: {
                id: decoded.userId
            }
        });

        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        req.user = user;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
}

const authorize=(...allowedRoles)=>{
    return (req,res,next)=>{
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({
                message:"Access Denied"
            });
        }
        if(req.user.organizationId)
        next();
    }
}

export {authMiddleware,authorize}