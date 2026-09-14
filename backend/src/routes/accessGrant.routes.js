import express from "express";
import { accessGrant } from "../controllers/accessGrant.controllers.js";

const router=express.Router();

router.post("/accessGranted/:id",accessGrant);

export default router
