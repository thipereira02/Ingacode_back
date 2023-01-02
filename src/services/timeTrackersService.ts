import TimeTrackers from "../entities/TimeTrackers";

export async function createTimeTracker(startDate: string, endDate: string, timeZoneId: string, taskId: string, collaboratorId: string) {
	await TimeTrackers.createTimeTracker(startDate, endDate, timeZoneId, taskId, collaboratorId);
}