import { Request, Response, NextFunction } from "express";

import * as usersService from "../services/usersService";

export async function createUser(req: Request, res: Response, next: NextFunction) {
	try{
		const { userName, password } = req.body as { userName: string; password: string };
		
		await usersService.createUser(userName, password);
		
		return res.sendStatus(201);
	} catch (error) {
		next(error);
	}
}