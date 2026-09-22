import express from "express";
import {createUser, deleteUser, getMe, getUserById, getUsers, updateUserDetails} from "../controllers/users.controller.js" 
import { authMiddleware, authorize } from "../middlewares/authMiddleware.js";
const router=express.Router();

router.post("/createuser",createUser);

router.post("/users",getUsers);

router.get("/user/me",authMiddleware,getMe);

router.get("/user",authMiddleware,getUserById);

router.patch("/user/:id",updateUserDetails);

router.delete("/user/:id",authMiddleware,authorize("ADMIN"),deleteUser);


export default router;