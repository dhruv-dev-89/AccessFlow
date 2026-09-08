import express from "express"
import { createResources, getResourceById} from "../controllers/resources.controllers.js";

const router=express.Router();

router.post("/resource",createResources);

router.get("/resource/:id",getResourceById);

export default router