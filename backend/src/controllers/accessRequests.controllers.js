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


const getAllAccessRequests=async (req,res)=>{
    try {
        const accessRequests=await prisma.accessRequest.findMany();

        res.status(200).json({accessRequests});
    } catch (error) {
        res.status(500).json({
            message:"failed to fetch access requests",
            error:error.message
        })
    }
}

const getAccessRequestById=async (req,res)=>{
    try {
        const id=req.params.id;

        const getRequest=await prisma.accessRequest.findUnique({
            where:{
                id:Number(id)
            }
        })

        if (!getRequest){
            return res.status(404).json({
                message: "Request not found"
            });
        }

        res.status(200).json({getRequest});
    } catch (error) {
        res.status(500).json({
            message:"failed to fetch access request",
            error:error.message
        })

    }
}


const getAllRequestsMadeByUser=async (req,res)=>{
    try {
        const userId=req.params.id;
        
        const requestsMadeByUser=await prisma.accessRequest.findMany({
            where:{
                requestedById:Number(userId)
            }
        });

        res.status(200).json({requestsMadeByUser});
    } catch (error) {
        
        res.status(500).json({
            message:"Failed to fetch access requests made by user",
            error:error.message
        })
    }
}


const deleteRequestMadeByUser=async (req,res)=>{
    try {
        const id=req.params.id;

        const deletedRequest = await prisma.accessRequest.deleteMany({
            where: {
                id: Number(id),
                status: "PENDING"
            }
        });

        if (deletedRequest.count === 0) {
            return res.status(404).json({
                message: "Pending request not found"
            });
        }

        res.status(200).json({
            message: "Access request cancelled successfully"
        });
        
    } catch (error) {
        res.status(500).json({
            message:"Failed to deleted request",
            error:error.message
        })
    }
}


export {accessRequest,getAllAccessRequests,getAccessRequestById,getAllRequestsMadeByUser,deleteRequestMadeByUser}