import express from "express"
import { approveRequest, rejectRequest } from "../controllers/approval.controllers.js"

const router=express.Router()

router.post("/approval/:id",approveRequest);

router.post("/rejected/:id",rejectRequest);


export default router