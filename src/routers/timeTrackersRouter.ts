import express from "express";

import * as timeTrackersController from "../controllers/timeTrackersController";
import authMiddleware from "../middlewares/tokenValidation";

const router = express.Router();

router.post("/new-time-tracker/:taskId", authMiddleware, timeTrackersController.createTimeTracker);
router.get("/task-time-trackers/:taskId", authMiddleware, timeTrackersController.getTaskTimeTrackers);

export default router;