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


const getAllAccessRequest=async (req,res){
    try {
        const accessRequests=await prisma.accessRequest.findMany();

        if(!accessRequests){
            return res.status(404).json({
                message:"There is not any access request exist"
            })
        }

        res.status(200).json({accessRequests});
    } catch (error) {
        res.status.json({
            message:"failed to fetch access requests",
            error:error.message
        })
    }
}

export {accessRequest,getAllAccessRequest}