import express from "express";

import * as projectController from "../controllers/projectsController";
import authMiddleware from "../middlewares/tokenValidation";

const router = express.Router();

router.post("/new-project", authMiddleware, projectController.createProject);
router.get("/projects", authMiddleware, projectController.getProjects);
router.post("/projects/:id", authMiddleware, projectController.updateProject);

export default router;