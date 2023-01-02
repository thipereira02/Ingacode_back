import { Request, Response, NextFunction } from "express";

import * as timeTrackersService from "../services/timeTrackersService";

export async function createTimeTracker(req: Request, res: Response, next: NextFunction) {
	try{
		const { startDate, endDate, timeZoneId, collaboratorId } = req.body as { startDate: string, endDate: string, timeZoneId: string, collaboratorId: string | null };
		const { taskId } = req.params as { taskId: string };
		
		await timeTrackersService.createTimeTracker(startDate, endDate, timeZoneId, taskId, collaboratorId);

		return res.sendStatus(201);
	} catch (error) {
		next(error);
	}
}

export async function getTaskTimeTrackers(req: Request, res: Response, next: NextFunction) {
	try{
		const { taskId } = req.params as { taskId: string };
		const timeTrackers = await timeTrackersService.findTimeTrackers(taskId);

		return res.send(timeTrackers);
	} catch (error) {
		next(error);
	}
}