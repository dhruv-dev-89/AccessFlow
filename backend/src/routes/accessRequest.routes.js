import express from "express"
import { accessRequest, deleteRequestMadeByUser, getAccessRequestById, getAllAccessRequests, getAllRequestsMadeByUser } from "../controllers/accessRequests.controllers.js";
import { authMiddleware, authorize } from "../middlewares/authMiddleware.js";

const router=express.Router();

router.post("/access-requests",authMiddleware,accessRequest);

router.get("/getAllRequests",authMiddleware,authorize("ADMIN","APPROVER"),getAllAccessRequests);

router.get("/access-request/:id",authMiddleware,getAccessRequestById);

router.get("/getAllRequestsMadeByUser",authMiddleware,getAllRequestsMadeByUser);

router.delete("/access-request/:id",deleteRequestMadeByUser);

export default router