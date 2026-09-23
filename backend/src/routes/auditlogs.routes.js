import express from "express"
import { createLogs, getAllAuditLogs, getAuditLogsById } from "../controllers/auditlogs.controllers.js";
import { authMiddleware, authorize } from "../middlewares/authMiddleware.js";

const router=express.Router();

router.get("/audit-logs",authMiddleware,authorize("ADMIN"),getAllAuditLogs);

router.get("/audit-logs/:id",authMiddleware,authorize("ADMIN"),getAuditLogsById);

export default router