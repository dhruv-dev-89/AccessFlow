import prisma from "../lib/prisma.js";


const approveRequest=async (req,res)=>{
    try {
        const approverId=req.params.id;
        const accessRequestId=req.body.accessRequestId;
        const comment=req.body.comment;

        
        const checkStatusOfRequest = await prisma.accessRequest.findFirst({
            where: {
                id: Number(accessRequestId),
                status: "PENDING"
            }
        });

        if (!checkStatusOfRequest) {
            return res.status(404).json({
                message: "Pending request not found"
            });
        }

        const approveRequestStatus=await prisma.approval.create({
            data:{
                decision:"APPROVED",
                comment:comment,
                accessRequestId:Number(accessRequestId),
                approvedById:Number(approverId)
            }
        })

        await prisma.accessRequest.update({
            where:{
                id:Number(accessRequestId),
            },
            data:{
                status:"APPROVED"
            }
        })
        

        res.status(201).json({approveRequestStatus});
    } catch (error) {
        res.status(500).json({
            message:"Failed to create approval request",
            error:error.message
        })
    }
}


const rejectRequest=async (req,res)=>{
    try {
        const rejectorId=req.params.id;
        const accessRequestId=req.body.accessRequestId;
        const comment=req.body.comment;

        const checkStatusOfRequest = await prisma.accessRequest.findFirst({
            where: {
                id: Number(accessRequestId),
                status: "PENDING"
            }
        });

        if (!checkStatusOfRequest) {
            return res.status(404).json({
                message: "Pending request not found"
            });
        }


        const rejectedRequestStatus=await prisma.approval.create({
            data:{
                decision:"REJECTED",
                comment:comment,
                accessRequestId:Number(accessRequestId),
                approvedById:Number(rejectorId)
            }
        })

        await prisma.accessRequest.update({
            where:{
                id:Number(accessRequestId),
            },
            data:{
                status:"REJECTED"
            }
        })

        res.status(201).json({rejectedRequestStatus});
    } catch (error) {
        res.status(500).json({
            message:"Failed to create approval request",
            error:error.message
        })
    }
}
export {approveRequest,rejectRequest}