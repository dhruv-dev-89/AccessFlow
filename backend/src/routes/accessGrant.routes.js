import express from "express";
import { accessGrant, getAccessGrantById, getAllAccessGrant, revokeAccessGrant } from "../controllers/accessGrant.controllers.js";

const router=express.Router();

router.post("/access-grants/:id",accessGrant);

router.get("/access-grants/:id",getAccessGrantById);

router.get("/access-grants",getAllAccessGrant);

router.patch("/access-grants/:id/revoke", revokeAccessGrant);

export default router
