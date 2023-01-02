import { Request, Response, NextFunction } from "express";

import * as timeTrackersService from "../services/timeTrackersService";

export async function createTimeTracker(req: Request, res: Response, next: NextFunction) {
	try{
		const { startDate, endDate, timeZoneId, collaboratorId } = req.body as { startDate: string, endDate: string, timeZoneId: string, collaboratorId: string };
		const { taskId } = req.params as { taskId: string };
		console.log(taskId);
		
		await timeTrackersService.createTimeTracker(startDate, endDate, timeZoneId, taskId, collaboratorId);

		return res.sendStatus(201);
	} catch (error) {
		next(error);
	}
}