import express from "express";

import * as tasksController from "../controllers/tasksController";
import authMiddleware from "../middlewares/tokenValidation";

const router = express.Router();

router.post("/new-task", authMiddleware, tasksController.createTask);

export default router;