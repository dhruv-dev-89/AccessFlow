import express from "express";
import {createUser, getUserById, getUsers, updateUserDetails} from "../controllers/users.controller.js" 
const router=express.Router();

router.post("/createuser",createUser);

router.post("/users",getUsers);

router.get("/user/:id",getUserById);

router.patch("/user/:id",updateUserDetails);


export default router;