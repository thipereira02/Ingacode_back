import { ProjectSchema } from "../schemas/ProjectSchema";
import { BadRequestError } from "../helpers/apiErrors";
import Projects from "../entities/Projects";

export async function createProject(name: string, userId: string) {
	const isValid = ProjectSchema.validate({ name });
	if (isValid.error !== undefined) {
		switch (isValid.error.details[0].type) {
		case "string.min":
			throw new BadRequestError("Nome do projeto deve ter pelo menos 3 caracteres.");
		case "string.max":
			throw new BadRequestError("Nome do projeto deve ter no máximo 250 caracteres.");
		default:
			throw new BadRequestError("Dados inválidos.");
		}
	}

	await Projects.createProject(name, userId);
}

export async function getProjects(userId: string) {
	const projects = await Projects.findUserProjects(userId);
	return projects;
}

export async function updateProject(id: string, name: string) {
	const isValid = ProjectSchema.validate({ name });
	if (isValid.error !== undefined) {
		switch (isValid.error.details[0].type) {
		case "string.min":
			throw new BadRequestError("Nome do projeto deve ter pelo menos 3 caracteres.");
		case "string.max":
			throw new BadRequestError("Nome do projeto deve ter no máximo 250 caracteres.");
		default:
			throw new BadRequestError("Dados inválidos.");
		}
	}

	await Projects.updateProject(id, name);
}

export async function deleteProject(id: string) {
	await Projects.deleteProject(id);
}