import express from "express";

import * as authController from "../controllers/authController";
import authMiddleware from "../middlewares/tokenValidation";

const router = express.Router();

router.post("/login", authController.login);
router.post("/logout", authMiddleware, authController.logout);

export default router;