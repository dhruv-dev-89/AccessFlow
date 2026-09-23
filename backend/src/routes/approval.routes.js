import express from "express"
import { approveRequest, rejectRequest } from "../controllers/approval.controllers.js"
import { authMiddleware, authorize } from "../middlewares/authMiddleware.js";

const router=express.Router()

router.post("/approval/:id",authMiddleware,authorize("APPROVER","ADMIN"),approveRequest);

router.post("/rejected/:id",authMiddleware,authorize("APPROVER","ADMIN"),rejectRequest);


export default router