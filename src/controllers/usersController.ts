import { Request, Response } from "express";

export async function createUser(req: Request, res: Response) {
	res.send("User created");
}