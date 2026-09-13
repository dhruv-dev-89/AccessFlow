import express from "express"
import { accessRequest, deleteRequestMadeByUser, getAccessRequestById, getAllAccessRequests, getAllRequestsMadeByUser } from "../controllers/accessRequests.controllers.js";

const router=express.Router();

router.post("/access-request/:id",accessRequest);

router.get("/getAllRequests",getAllAccessRequests);

router.get("/getAccessRequest/:id",getAccessRequestById);

router.get("/getAllRequestsMadeByUser/:id",getAllRequestsMadeByUser);

router.delete("/deleteAccessRequest/:id",deleteRequestMadeByUser);

export default router