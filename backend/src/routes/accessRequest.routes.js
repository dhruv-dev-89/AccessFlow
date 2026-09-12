import express from "express"
import { accessRequest, getAccessRequestById, getAllAccessRequests, getAllRequestsMadeByUser } from "../controllers/accessRequests.controllers.js";

const router=express.Router();

router.post("/access-request/:id",accessRequest);

router.get("/getAllRequests",getAllAccessRequests);

router.get("/getAccessRequest/:id",getAccessRequestById);

router.get("/getAllRequestsMadeByUser/:id",getAllRequestsMadeByUser);

export default router