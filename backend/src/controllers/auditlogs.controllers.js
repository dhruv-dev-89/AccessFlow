import prisma from "../lib/prisma.js";


const createLogs=async (userId,action,accessRequestId,resourceId)=>{

    return await prisma.auditLog.create({
        data:{
            userId:Number(userId),
            action:action,
            accessRequestId:Number(accessRequestId),
            resourceId:Number(resourceId)
        }
    })

}


const getAllAuditLogs=async (req,res)=>{
    try {
        const auditLogs=await prisma.auditLog.findMany({
            where: {
                user: {
                    organizationId: req.user.organizationId
                }
            }
        });

        res.status(200).json({auditLogs});
    } catch (error) {
        res.status(500).json({
            message:"Failed to fetch Logs",
            error:error.message
        })
    }
}


const getAuditLogsById=async (req,res)=>{
    try {
        const id=req.params.id;

        const auditLogs=await prisma.auditLog.findFirst({
            where:{
                id:Number(id),
                user: {
                    organizationId: req.user.organizationId
                }
            }
        });

        if (!auditLogs) {
            return res.status(404).json({
                message: "Audit log not found"
            });
        }

        res.status(200).json({auditLogs});
    } catch (error) {
        res.status(500).json({
            message:"Failed to fetch Logs",
            error:error.message
        })
    }
}


export {createLogs,getAllAuditLogs,getAuditLogsById}