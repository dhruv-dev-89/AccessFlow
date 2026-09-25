import express from "express"
import { createResources, deleteResource, getResource, getResourceById, updateResource} from "../controllers/resources.controllers.js";
import { authMiddleware, authorize } from "../middlewares/authMiddleware.js";

const router=express.Router();

router.post("/resource",authMiddleware,authorize("ADMIN"),createResources);

router.get("/resource/:id",authMiddleware,getResourceById);

router.get("/resources",authMiddleware,authorize("ADMIN"),getResource);

router.patch("/update-resource/:id",authMiddleware,authorize("ADMIN"),updateResource);

router.delete("/delete-resource/:id",authMiddleware,authorize("ADMIN"),deleteResource);

export default router