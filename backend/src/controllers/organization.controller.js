import prisma from "../lib/prisma.js";

const createOrganization= async (req,res)=>{

    try {
        const {name}=req.body;

        const userId = req.user.id;

        if (req.user.organizationId) {
            return res.status(400).json({
                message: "User already belongs to an organization"
            });
        }

        

        const result=await prisma.$transaction(async(tx)=>{

            const organization= await tx.organization.create({
                data:{
                    name:name.trim(),
                }
            })

            const user=await tx.user.update({
                where:{
                    id:userId
                },
                data:{
                    organizationId:organization.id,
                    role:"ADMIN"
                },
                omit:{
                    password:true
                }
            })
            return {
                organization,
                user
            };
        })

        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({
            message:"failed to create organization",
            error:error.message
        })
    }
}



export {createOrganization}