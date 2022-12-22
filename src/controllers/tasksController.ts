import { Request, Response, NextFunction } from "express";

import * as tasksService from "../services/tasksService";

export async function createTask(req: Request, res: Response, next: NextFunction) {
	try{
		const { name, description, projectId } = req.body as { name: string, description: string, projectId: string };

		await tasksService.createTask(name, description, projectId);

		return res.sendStatus(201);
	} catch (error) {
		next(error);
	}
}