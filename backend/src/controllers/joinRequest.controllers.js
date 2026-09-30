import  prisma from "../lib/prisma.js"

const joinOrganization=async (req,res)=>{
    try {
        const organizationId=req.params.organizationId;
        const userId=req.user.id;

        if (req.user.organizationId) {
            return res.status(400).json({
                message: "User already belongs to an organization"
            });
        }
        
        const organizationCheck=await prisma.organization.findUnique({
            where:{
                id:Number(organizationId)
            }
        });

        if(!organizationCheck){
            return res.status(404).json({
                message:"Organization not found"
            })
        }

        const joinRequest=await prisma.joinRequest.create({
            data:{
                userId:userId,
                organizationId:Number(organizationId),
            }
        })

        res.status(201).json({joinRequest});
    } catch (error) {
        res.status(500).json({
            message:"Failed to Create Join request",
            error:error.message
        })
    }
}

const getJoinRequests=async (req,res)=>{
    try {
        
        const allJoinRequests=await prisma.joinRequest.findMany({
            where:{
                organizationId:req.user.organizationId
            }
        });

        return res.status(200).json({allJoinRequests});
    } catch (error) {
        res.status(500).json({
            message:"Failed to fetch join requests",
            error:error.message
        })
    }
}

const approveRequest=async (req,res)=>{
    try {
        const joinRequestId=Number(req.params.id);

        const joinRequest = await prisma.joinRequest.findUnique({
            where: {
                id: joinRequestId
            }
        });

         if (!joinRequest) {
            return res.status(404).json({
                message: "Join request not found"
            });
        }

        if (req.user.organizationId !== joinRequest.organizationId) {
            return res.status(403).json({
                message: "You cannot approve this request"
            });
        }

        if (joinRequest.status !== "PENDING") {
            return res.status(400).json({
                message: "Join request is already processed"
            });
        }

        const result=await prisma.$transaction(async(tx)=>{

            const approved=await tx.joinRequest.update({
                where:{
                    id:joinRequestId
                },
                data:{
                    status:"APPROVED"
                }
            })

            const user=await tx.user.update({
                where:{
                    id:joinRequest.userId
                },
                data:{
                    organizationId:joinRequest.organizationId
                },
                omit:{
                    password:true
                }
            })

            return {approved,user};
        });

        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({
            message:"Failed to approve request",
            error:error.message
        })
    }
}


const rejectRequest=async (req,res)=>{
    try {
        const joinRequestId=Number(req.params.id);

        const rejectRequest = await prisma.joinRequest.findUnique({
            where: {
                id: joinRequestId
            }
        });

         if (!rejectRequest) {
            return res.status(404).json({
                message: "Join request not found"
            });
        }

        if (req.user.organizationId !== rejectRequest.organizationId) {
            return res.status(403).json({
                message: "You cannot reject this request"
            });
        }

        if (rejectRequest.status !== "PENDING") {
            return res.status(400).json({
                message: "Join request is already processed"
            });
        }

        const rejected=await prisma.joinRequest.update({
            where:{
                id:joinRequestId
            },
            data:{
                status:"REJECTED"
            }
        })

        res.status(200).json({rejected});
    } catch (error) {
        res.status(500).json({
            message:"Failed to reject request",
            error:error.message
        })
    }
}

export {joinOrganization,getJoinRequests,approveRequest,rejectRequest}