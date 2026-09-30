import express from "express";
import { approveRequest, getJoinRequests, joinOrganization, rejectRequest } from "../controllers/joinRequest.controllers.js";
import { authMiddleware, authorize } from "../middlewares/authMiddleware.js";

const router=express.Router();

router.post("/join-requests/:organizationId",authMiddleware,joinOrganization);

router.get("/join-requests",authMiddleware,authorize("ADMIN"),getJoinRequests);

router.patch("/join-requests/:id/approve",authMiddleware,authorize("ADMIN"),approveRequest);

router.patch("/join-requests/:id/reject",authMiddleware,authorize("ADMIN"),rejectRequest);

export default router;
