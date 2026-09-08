import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
import { useParams } from "react-router-dom";
import validator from "validator";


// create user function first validate the name,email and then hashed the password then created user and send it in response

const createUser=async (req,res)=>{

    try{
        const {name,email,password}=req.body;

        if(!name||name.trim().length<2){
            return res.status(400).json({
                message:"name must be at least 2 characters"
            })
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({
                message:"invalid email format"
            });
        }
        if(password.trim().length<6){
            return res.status(400).json({
                message:"password must be at least 6 characters"
            })
        }
        const hashedPassword=await bcrypt.hash(password,10);

        const user= await prisma.user.create({
            data:{
            name:name,
            email:email,
            password:hashedPassword,
            organizationId:1
            },
            omit:{
                password:true
            }
        })

        res.status(201).json({user});
    }
    catch(error){

        if(error.code==="P2002"){  // P2002 error code sent by prisma if any unique constraint got violated
            return res.status(409).json({
                message:"duplicate email found"
            })
        }
        res.status(500).json({
            message:"Failed to create User",
            error: error.message
        });
    }
};

// this function is used to get all users
const getUsers=async (req,res)=>{

    try {
        const users=await prisma.user.findMany({
            omit:{
                password:true
            }
        })

        res.status(200).json({
            message:"users fetched successfully",
            users
        })

    } catch (error) {
        res.json({
            message:"failed to fetch users",
            error:error.message
        });
    }
}

// it will give users on base of id
const getUserById=async (req,res)=>{
    try {
        const {id}=req.params;

        const user=await prisma.user.findUnique({
            where:{
                id:Number(id)
            },
            omit:{
                password:true
            }
        })

        if(!user){
            return res.status(404).json({
                message:"user not found"
            })
        }

        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({
            message:"failed to fetch user",
            error:error.message
        })
    }
}

// now updating user details 

const updateUserDetails=async (req,res)=>{

    try {
        const {name,email}=req.body;
        const id=req.params.id;

        if (name !== undefined) {
            if (name.trim().length < 2) {
                return res.status(400).json({
                    message: "Name must be at least 2 characters"
                });
            }
        }

        if (email !== undefined) {
            if (!validator.isEmail(email)) {
                return res.status(400).json({
                    message: "Invalid email format"
                });
            }
        }
    
        const updatedUser=await prisma.user.update({
            where:{
                id:Number(id)
            },
            data:{
                name:name,
                email:email
            },
            omit:{
                password:true
            }
        })
        res.status(200).json({updatedUser});
    } catch (error) {

        if (error.code === "P2002") {
            return res.status(409).json({
                message: "Email already exists"
            });
        }

        res.status(500).json({
            message:"updating user details failed",
            error:error.message
        })
    }
}



const deleteUser=async (req,res)=>{

    try {
        const {id}=req.params;

        const userIsActive=await prisma.user.update({
            where:{
                id:Number(id)
            },
            data:{
                isActive:false
            },
            omit:{
                password:true
            }
        })

        res.status(200).json({userIsActive});
    } catch (error) {
        res.status(500).json({
            message:"failed to delete user",
            error:error.message
        })
    }
}
export {createUser,getUsers,getUserById,updateUserDetails,deleteUser};