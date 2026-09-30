import prisma from "../lib/prisma.js";
import { createLogs } from "./auditlogs.controllers.js";


const accessRequest = async (req, res) => {
    try {
        const userId = req.user.id;
        const { reason, resourceId } = req.body;

        const parsedResourceId = Number(resourceId);

        if (!Number.isInteger(parsedResourceId) || parsedResourceId <= 0) {
            return res.status(400).json({
                message: "Invalid resource ID"
            });
        }

        if (!req.user.organizationId) {
            return res.status(400).json({
                message: "User must belong to an organization"
            });
        }

        if (!reason || reason.trim().length < 5) {
            return res.status(400).json({
                message: "Reason must be at least 5 characters"
            });
        }

        const resource = await prisma.resource.findFirst({
            where: {
                id: parsedResourceId,
                organizationId: req.user.organizationId
            }
        });

        if (!resource) {
            return res.status(404).json({
                message: "Resource not found"
            });
        }

        const existingRequest = await prisma.accessRequest.findFirst({
            where: {
                requestedById: userId,
                resourceId: parsedResourceId,
                status: "PENDING"
            }
        });

        if (existingRequest) {
            return res.status(400).json({
                message: "You already have a pending request for this resource"
            });
        }
        
        const accessRequestMade = await prisma.accessRequest.create({
            data: {
                reason: reason.trim(),
                requestedById: Number(userId),
                resourceId: parsedResourceId
            }
        });

        if (accessRequestMade) {
            await createLogs(
                userId,
                "ACCESS_REQUESTED",
                accessRequestMade.id,
                parsedResourceId
            );
        }

        res.status(201).json({ accessRequestMade });

    } catch (error) {
        res.status(500).json({
            message: "failed to create access-request",
            error: error.message
        });
    }
};


const getAllAccessRequests=async (req,res)=>{
    try {
        const accessRequests=await prisma.accessRequest.findMany({
            where:{
                requestedBy:{
                    organizationId:req.user.organizationId
                }
            }
        });

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

        const getRequest=await prisma.accessRequest.findFirst({
            where:{
                id:Number(id),
                requestedById: req.user.id,
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
        const userId=req.user.id;
        
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
                status: "PENDING",
                requestedById: req.user.id
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