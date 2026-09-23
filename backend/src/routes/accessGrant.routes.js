import express from "express";
import { accessGrant, getAccessGrantById, getAllAccessGrant, revokeAccessGrant } from "../controllers/accessGrant.controllers.js";
import { authMiddleware, authorize } from "../middlewares/authMiddleware.js";

const router=express.Router();

router.post("/access-grants",authMiddleware,authorize("ADMIN"),accessGrant);

router.get("/access-grants/:id",authMiddleware,getAccessGrantById);

router.get("/access-grants",authMiddleware,authorize("ADMIN"),getAllAccessGrant);

router.patch("/access-grants/:id/revoke",authMiddleware,authorize("ADMIN"),revokeAccessGrant);

export default router
