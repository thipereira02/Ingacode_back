import express from "express";

import * as projectController from "../controllers/projectsController";
import authMiddleware from "../middlewares/tokenValidation";

const router = express.Router();

router.post("/new-project", authMiddleware, projectController.createProject);

export default router;