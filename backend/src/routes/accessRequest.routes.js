import express from "express"
import { accessRequest } from "../controllers/accessRequests.controllers.js";

const router=express.Router();

router.post("/access-request/:id",accessRequest);

export default router