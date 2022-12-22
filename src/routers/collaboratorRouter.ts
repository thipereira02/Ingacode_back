import express from "express";

import * as collaboratorController from "../controllers/collaboratorsController";
import authMiddleware from "../middlewares/tokenValidation";

const router = express.Router();

router.post("/new-collaborator", authMiddleware, collaboratorController.createCollaborator);
router.get("/my-collaborators", authMiddleware, collaboratorController.getUserCollaborators);

export default router;