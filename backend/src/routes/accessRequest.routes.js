import express from "express"
import { accessRequest, getAllAccessRequest } from "../controllers/accessRequests.controllers.js";

const router=express.Router();

router.post("/access-request/:id",accessRequest);

router.get("/getAllRequests",getAllAccessRequest);

export default router