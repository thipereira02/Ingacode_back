import { Request, Response, NextFunction } from "express";

import * as projectsService from "../services/projectsService";

export async function createProject(req: Request, res: Response, next: NextFunction) {
	try{
		const { name } = req.body as { name: string };

		await projectsService.createProject(name, res.locals.user.id);
    
		return res.sendStatus(201);
	} catch (error) {
		next(error);
	}
}

export async function getProjects(req: Request, res: Response, next: NextFunction) {
	try{
		const projects = await projectsService.getProjects(res.locals.user.id);

		return res.send(projects);
	} catch (error) {
		next(error);
	}
}

export async function updateProject(req: Request, res: Response, next: NextFunction) {
	try{
		const { name } = req.body as { name: string };
		const { id } = req.params as { id: string };

		await projectsService.updateProject(id, name);

		return res.sendStatus(200);
	} catch (error) {
		next(error);
	}
}