import prisma from "../lib/prisma.js";

const createResources=async (req,res)=>{

    try{
        const resourceName=req.body.name;
        const resourceDescription=req.body.description;
        
        const resource=await prisma.resource.create({
            data:{
                name:resourceName,
                description:resourceDescription,
                organizationId:req.user.organizationId
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
                id:Number(resourceId),
                organizationId: req.user.organizationId
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

const getResource=async (req,res)=>{
    try {
        const resources=await prisma.resource.findMany({
            where:{
                organizationId:req.user.organizationId
            }
        });

        if(resources.length===0){
            return res.status(404).json({
                message:"Resources are not found for the organization"
            })
        }

        res.status(200).json({resources});
    } catch (error) {
        res.status(500).json({
            message:"Failed to fetch resources",
            error:error.message
        })
    }
}

const updateResource=async (req,res)=>{
    try {
        const resourceId=req.params.id;
        const updatedName=req.body.name;
        const updatedDescription=req.body.description;
        

        const updatedResource=await prisma.resource.update({
            where:{
                id:Number(resourceId),
                organizationId:req.user.organizationId
            },
            data:{
                ...(updatedName!==undefined&&{name:updatedName}),
                ...(updatedDescription!==undefined&&{description:updatedDescription}),
            }
        })

        res.status(200).json({updatedResource})
    } catch (error) {
        if(error.code==="P2025"){
            return res.status(404).json({
                message:"resource not found"
            })
        }
        
        res.status(500).json({
            message:"Failed to Update resource",
            error:error.message
        })
    }
}


const deleteResource=async (req,res)=>{

    try {
        const id=req.params.id;

        const resource = await prisma.resource.findFirst({
            where: {
                id: Number(id),
                organizationId: req.user.organizationId
            }
        });

        if (!resource) {
            return res.status(404).json({
                message: "Resource not found"
            });
        }

        const deletedResource=await prisma.resource.delete({
            where:{
                id:resource.id,
            }
        });

        res.status(200).json({deletedResource});
    } catch (error) {
        if(error.code==="P2025"){
            return res.status(404).json({
                message:"Resource not found"
            })
        }
        
        res.status(500).json({
            message:"Failed to delete Resource",
            error:error.message
        });
    }
}

export {createResources,getResourceById,getResource,updateResource,deleteResource}
