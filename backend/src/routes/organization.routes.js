import express from "express"
import { createOrganization } from "../controllers/organization.controller.js"
import { authMiddleware, authorize } from "../middlewares/authMiddleware.js";
const router=express.Router()

router.post("/create-organization",authMiddleware,createOrganization);

export default router