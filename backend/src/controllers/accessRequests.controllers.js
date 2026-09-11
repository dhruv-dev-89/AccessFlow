import prisma from "../lib/prisma.js";


const accessRequest=async (req,res)=>{
    try {
        const userId=req.params.id;
        const {reason,rresourceId}=req.body;

        const accessRequestMade=await prisma.accessRequest.create({
            data:{
                reason:reason,
                requestedById:Number(userId),
                resourceId:resourceId
            }
        })

        res.status(201).json({accessRequestMade})
    } catch (error) {
        res.status(500).json({
            message:"failed to create access-request",
            error:error.message
        })
    }
}

export {accessRequest}