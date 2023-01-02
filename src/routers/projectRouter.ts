import express from "express";

import * as projectController from "../controllers/projectsController";
import authMiddleware from "../middlewares/tokenValidation";

const router = express.Router();

router.post("/new-project", authMiddleware, projectController.createProject);
router.get("/projects", authMiddleware, projectController.getProjects);
router.post("/update-project/:projectId", authMiddleware, projectController.updateProject);
router.post("/delete-project/:projectId", authMiddleware, projectController.deleteProject);

export default router;