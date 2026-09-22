import express from "express"
import { accessRequest, deleteRequestMadeByUser, getAccessRequestById, getAllAccessRequests, getAllRequestsMadeByUser } from "../controllers/accessRequests.controllers.js";

const router=express.Router();

router.post("/access-request/:id",accessRequest);

router.get("/getAllRequests",getAllAccessRequests);

router.get("/access-request/:id",getAccessRequestById);

router.get("/getAllRequestsMadeByUser/:id",getAllRequestsMadeByUser);

router.delete("/access-request/:id",deleteRequestMadeByUser);

export default router