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

export async function getTasks(req: Request, res: Response, next: NextFunction) {
	try{
		const { projectId } = req.params as { projectId: string };

		const tasks = await tasksService.getTasks(projectId);

		return res.send(tasks);
	} catch (error) {
		next(error);
	}
}

export async function updateTask(req: Request, res: Response, next: NextFunction) {
	try{
		const { name, description, projectId } = req.body as { name: string, description: string, projectId: string };
		const { taskId } = req.params as { taskId: string };

		await tasksService.updateTask(name, description, projectId, taskId);

		return res.sendStatus(200);
	} catch (error) {
		next(error);
	}
}