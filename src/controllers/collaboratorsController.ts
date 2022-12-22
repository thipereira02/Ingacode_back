import { Request, Response, NextFunction } from "express";

import * as collaboratorsService from "../services/collaboratorsService";

export async function createCollaborator(req: Request, res: Response, next: NextFunction) {
	try{
		const { name } = req.body as { name: string };
	
		await collaboratorsService.createCollaborator(name, res.locals.user.id);
    
		return res.sendStatus(201);
	} catch (error) {
		next(error);
	}
}
