/* eslint-disable @typescript-eslint/no-explicit-any */
import TimeTrackers from "../entities/TimeTrackers";

import { BadRequestError, ConflictError } from "../helpers/apiErrors";

export async function createTimeTracker(startDate: string, endDate: string, timeZoneId: string, taskId: string, collaboratorId: any) {
	const today = new Date().toISOString();
	if (startDate < today) throw new BadRequestError("A data de início não pode ser menor que a data atual.");
	if (endDate < startDate) throw new BadRequestError("A data de fim não pode ser menor que a data de início.");
	if (startDate === endDate) {
		const initialHour = new Date(startDate).getHours();
		const initialMinutes = new Date(startDate).getMinutes();
		const finalHour = new Date(endDate).getHours();
		const finalMinutes = new Date(endDate).getMinutes();

		if ((initialHour > finalHour) || (initialHour === finalHour && initialMinutes > finalMinutes)){
			throw new BadRequestError("A data de início não pode ser menor que a data de fim.");
		}
	}

	const timeTrackers = await TimeTrackers.getTaskTimeTrackers(taskId);
	timeTrackers.forEach((timeTracker: any) => {
		if ((startDate >= timeTracker.startDate && startDate <= timeTracker.endDate) || (endDate >= timeTracker.startDate && endDate <= timeTracker.endDate)) {
			throw new ConflictError("Esta task já possui um time tracker nesse período.");
		}
	});

	await TimeTrackers.createTimeTracker(startDate, endDate, timeZoneId, taskId, collaboratorId);
}

export async function findTimeTrackers(taskId: string) {
	const timeTrackers = await TimeTrackers.getTaskTimeTrackers(taskId);
	return timeTrackers;
}