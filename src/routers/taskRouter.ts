import express from "express";

import * as tasksController from "../controllers/tasksController";
import authMiddleware from "../middlewares/tokenValidation";

const router = express.Router();

router.post("/new-task", authMiddleware, tasksController.createTask);
router.get("/get-tasks/:projectId", authMiddleware, tasksController.getTasks);
router.post("/update-task/:taskId", authMiddleware, tasksController.updateTask);

export default router;