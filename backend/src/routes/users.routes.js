import express from "express";
import {createUser, getUserById, getUsers} from "../controllers/users.controller.js" 
const router=express.Router();

router.post("/createuser",createUser);

router.post("/users",getUsers);

router.get("/user/:id",getUserById);


export default router;