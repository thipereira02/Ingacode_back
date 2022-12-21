import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../helpers/apiErrors";

import * as sessionService from "../services/sessionService";

interface JwtPayload {
    id: string;
}

export default async function authMiddleware(req: Request, res: Response, next: NextFunction) {
	const authHeader = req.header("Authorization");

	const token = authHeader?.replace("Bearer ", "");
	if (!token) throw new UnauthorizedError("Token not provided");

	const user = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
	await sessionService.findSessionByToken(token);

	res.locals.user = { id: user.id, token};
	next();
}