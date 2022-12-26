import Tasks from "../entities/Tasks";
import { TaskSchema } from "../schemas/TaskSchema";
import { BadRequestError } from "../helpers/apiErrors";


export async function createTask(name: string, description: string, projectId: string) {
	const isValid = TaskSchema.validate({ name, description });
	if(isValid.error !== undefined) {
		if (isValid.error.details[0].context?.key === "name") {
			switch (isValid.error.details[0].type) {
			case "string.min":
				throw new BadRequestError("Nome deve ter pelo menos 3 caracteres.");
			case "string.max":
				throw new BadRequestError("Name deve ter no máximo 250 caracteres.");
			default:
				throw new BadRequestError("Dados inválidos.");
			}
		} else if (isValid.error.details[0].context?.key === "description") {
			switch (isValid.error.details[0].type) {
			case "string.min":
				throw new BadRequestError("Descrição deve ter pelo menos 3 caracteres.");
			case "string.max":
				throw new BadRequestError("Descrição deve ter no máximo 65535 caracteres.");
			default:
				throw new BadRequestError("Dados inválidos.");
			}
		}
	}

	await Tasks.createTask(name, description, projectId);
}

export async function getTasks(projectId: string) {
	const tasks = await Tasks.findTasks(projectId);
	return tasks;
}

export async function updateTask(name: string, description: string, projectId: string, taskId: string) {
	const isValid = TaskSchema.validate({ name, description });
	if(isValid.error !== undefined) {
		if (isValid.error.details[0].context?.key === "name") {
			switch (isValid.error.details[0].type) {
			case "string.min":
				throw new BadRequestError("Nome deve ter pelo menos 3 caracteres.");
			case "string.max":
				throw new BadRequestError("Nome deve ter no máximo 250 caracteres.");
			default:
				throw new BadRequestError("Dados inválidos.");
			}
		} else if (isValid.error.details[0].context?.key === "description") {
			switch (isValid.error.details[0].type) {
			case "string.min":
				throw new BadRequestError("Descrição deve ter pelo menos 3 caracteres.");
			case "string.max":
				throw new BadRequestError("Descrição deve ter no máximo 65535 caracteres.");
			default:
				throw new BadRequestError("Dados inválidos.");
			}
		}
	}

	await Tasks.updateTask(name, description, projectId, taskId);
}

export async function deleteTask(projectId: string, taskId: string) {
	await Tasks.deleteTask(projectId, taskId);
}