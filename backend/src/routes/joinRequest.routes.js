import express from "express";
import { approveRequest, getJoinRequests, joinOrganization, rejectRequest } from "../controllers/joinRequest.controllers";
import { authMiddleware, authorize } from "../middlewares/authMiddleware";

const router=express.Router();

router.post("/join-requests/:id",authMiddleware,joinOrganization);

router.get("/join-requests",authMiddleware,authorize("ADMIN"),getJoinRequests);

router.patch("/join-requests/:id",authMiddleware,authorize("ADMIN"),approveRequest);

router.patch("reject-requests/:id",authMiddleware,authorize("ADMIN"),rejectRequest);

export default router;
