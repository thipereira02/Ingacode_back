import { Request, Response, NextFunction } from "express";

import * as authService from "../services/authService";

export async function login(req: Request, res: Response, next: NextFunction) {
	try{
		const { userName, password } = req.body as { userName: string; password: string };
        
		const user = await authService.login(userName, password);
        
		return res.status(200).send(user);
	} catch (error) {
		next(error);
	}
}