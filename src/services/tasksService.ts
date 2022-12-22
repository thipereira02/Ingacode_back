import Tasks from "../entities/Tasks";
import { TaskSchema } from "../schemas/TaskSchema";
import { BadRequestError } from "../helpers/apiErrors";


export async function createTask(name: string, description: string, projectId: string) {
	const isValid = TaskSchema.validate({ name, description });
	if(isValid.error !== undefined) {
		if (isValid.error.details[0].context?.key === "name") {
			switch (isValid.error.details[0].type) {
			case "string.min":
				throw new BadRequestError("Name must be at least 3 characters long.");
			case "string.max":
				throw new BadRequestError("Name must be at most 250 characters long.");
			default:
				throw new BadRequestError("Invalid data.");
			}
		} else if (isValid.error.details[0].context?.key === "description") {
			switch (isValid.error.details[0].type) {
			case "string.min":
				throw new BadRequestError("Description must be at least 3 characters long.");
			case "string.max":
				throw new BadRequestError("Description must be at most 65535 characters long.");
			default:
				throw new BadRequestError("Invalid data.");
			}
		}
	}

	await Tasks.createTask(name, description, projectId);
}

export async function getTasks(projectId: string) {
	const tasks = await Tasks.findTasks(projectId);
	return tasks;
}