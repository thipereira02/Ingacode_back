import express from "express";

import * as usersController from "../controllers/usersController";

const router = express.Router();

router.post("/sign-up", usersController.createUser);

export default router;