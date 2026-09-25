import prisma from "../lib/prisma.js";
import { createLogs } from "./auditlogs.controllers.js";


const accessGrant=async (req,res)=>{
    try {
        const userId=req.user.id;

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

        await createLogs(
            userId,
            "ACCESS_GRANTED",
            accessRequestId,
            request.resourceId
        )

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

        const accessGrant=await prisma.accessGrant.findFirst({
            where:{
                id:Number(grantId),
                userId: req.user.id
            }
        })

        if (!accessGrant) {
            return res.status(404).json({
                message: "Access grant not found"
            });
        }

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

        const accessgrant = await prisma.accessGrant.findMany({
            where: {
                user: {
                    organizationId: req.user.organizationId
                }
            }
        });

        res.status(200).json({accessGrant});
    } catch (error) {
        res.status(500).json({
            message:"failed to fetch access grant",
            error:error.message
        })
    }
}


const revokeAccessGrant=async (req,res)=>{
    try {
        const id=req.params.id;

        const grant = await prisma.accessGrant.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (!grant) {
            return res.status(404).json({
                message: "Access grant not found"
            });
        }

        if (grant.revokedAt) {
            return res.status(400).json({
                message: "Access grant is already revoked"
            });
        }
        
        const revokedGrant=await prisma.accessGrant.update({
            where:{
                id:Number(id)
            },
            data:{
                revokedAt:new Date()
            }
        })

        await createLogs(
            revokedGrant.userId,
            "ACCESS_REVOKED",
            revokedGrant.accessRequestId,
            revokedGrant.resourceId
        );
        
        res.status(200).json({revokedGrant});
    } catch (error) {

        if (error.code === "P2025") {
            return res.status(404).json({
                message: "Access grant not found"
            });
        }

        res.status(500).json({
            message:"Failed to revoke request",
            error:error.message
        })
    }
}


export {accessGrant,getAccessGrantById,getAllAccessGrant,revokeAccessGrant};