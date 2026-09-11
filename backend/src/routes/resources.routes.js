import express from "express"
import { createResources, deleteResource, getResource, getResourceById, updateResource} from "../controllers/resources.controllers.js";

const router=express.Router();

router.post("/resource",createResources);

router.get("/resource/:id",getResourceById);

router.get("/resources",getResource);

router.patch("/update-resource/:id",updateResource);

router.delete("/delete-resource/:id",deleteResource);

export default router