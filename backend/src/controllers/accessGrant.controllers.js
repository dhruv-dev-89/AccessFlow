import prisma from "../lib/prisma.js";


const accessGrant=async (req,res)=>{
    try {
        const userId=req.params.id;

        const {resourceId,accessRequestId,expiresAt}=req.body;

        const request = await prisma.accessRequest.findFirst({
            where: {
                id: Number(accessRequestId),
                status: "APPROVED"
            }
        });

        if (!request) {
            return res.status(400).json({
                message: "Access request is not approved"
            });
        }

        const accessGranted=await prisma.accessGrant.create({
            data:{
                userId: Number(userId),
                resourceId: Number(resourceId),
                accessRequestId: Number(accessRequestId),
                expiresAt: new Date(expiresAt)
            }
        })

        res.status(201).json({accessGranted});
    } catch (error) {
        res.status(500).json({
            message:"failed to grant access",
            error:error.message
        })
    }
}


const getAccessGrantById=async (req,res)=>{
    try {
        const grantId=req.params.id;

        const accessgrant=await prisma.accessGrant.findUnique({
            where:{
                id:Number(grantId)
            }
        })

        res.status(200).json({accessGrant})
    } catch (error) {
        res.status(500).json({
            message:"failed to fetch access grant",
            error:error.message
        })
    }
}



const getAllAccessGrant=async (req,res)=>{
    try {
        const grantId=req.params.id;

        const accessgrant=await prisma.accessGrant.findUnique({
            where:{
                id:Number(grantId)
            }
        })

        res.status(200).json({accessGrant})
    } catch (error) {
        res.status(500).json({
            message:"failed to fetch access grant",
            error:error.message
        })
    }
}


export {accessGrant,getAccessGrantById};