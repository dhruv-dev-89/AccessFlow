import prisma from "../lib/prisma.js";

const createResources=async (req,res)=>{

    try{
        const resourceName=req.body.name;
        const resourceDescription=req.body.description;
        const organizationId=req.body.organizationId;

        const resource=await prisma.resource.create({
            data:{
                name:resourceName,
                description:resourceDescription,
                organizationId:organizationId
            }
        })

        res.status(201).json({resource})

    }
    catch(error){
        res.status(500).json({
            message:"failed to create resource",
            error:error.message
        })
    }
}

const getResourceById=async (req,res)=>{
    try {
        const resourceId=req.params.id;
        
        const resource=await prisma.resource.findUnique({
            where:{
                id:Number(resourceId)
            }
        })

        if (!resource) {
            return res.status(404).json({
                message: "resource not found"
            });
        }
        
        res.status(200).json({resource})
    } catch (error) {
        res.status(500).json({
            message:"failed to fetch resource",
            error:error.message
        })
    }
}
export {createResources,getResourceById}
