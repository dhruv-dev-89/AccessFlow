import express from "express";
import {createUser, deleteUser, getUserById, getUsers, updateUserDetails} from "../controllers/users.controller.js" 
const router=express.Router();

router.post("/createuser",createUser);

router.post("/users",getUsers);

router.get("/user/:id",getUserById);

router.patch("/user/:id",updateUserDetails);

router.delete("/user/:id",deleteUser);


export default router;