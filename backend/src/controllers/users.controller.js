import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
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


export {createUser,getUsers}