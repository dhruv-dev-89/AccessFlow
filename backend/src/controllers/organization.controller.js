import prisma from "../lib/prisma.js";

const createOrganization= async (req,res)=>{

    try {
        const {name}=req.body;

        const organization= await prisma.organization.create({
            data:{
                name:name,
            }
        })

        res.status(200).json({organization});
    } catch (error) {
        res.status(500).json({
            message:"failed to create organization",
            error:error.message
        })
    }
}

export {createOrganization}