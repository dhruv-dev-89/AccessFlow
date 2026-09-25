import cron from "node-cron";
import prisma from "../lib/prisma.js";
import { createLogs } from "../controllers/auditlogs.controllers.js";


const expireGrants=async ()=>{
    try {
        const currentTime = new Date();
        const expiredGrants=await prisma.accessGrant.findMany({
            where:{
                expiresAt:{
                    lt: currentTime
                },
                revokedAt:null,
                accessRequest: {
                    status: {
                        not: "EXPIRED"
                    }
                }
            }
        })

        for (const grant of expiredGrants) {
            await prisma.accessRequest.update({
                where: {
                    id: grant.accessRequestId
                },
                data: {
                    status: "EXPIRED"
                }
            });

            await createLogs(
                grant.userId,
                "ACCESS_EXPIRED",
                grant.accessRequestId,
                grant.resourceId
            );
        }
    }
    catch (error){
        console.error("Failed to expire access grants:", error);
    }
};

cron.schedule("* * * * *", expireGrants);