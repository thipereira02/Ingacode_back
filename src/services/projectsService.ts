import { ProjectSchema } from "../schemas/ProjectSchema";
import { BadRequestError } from "../helpers/apiErrors";
import Projects from "../entities/Projects";

export async function createProject(name: string, userId: string) {
	const isValid = ProjectSchema.validate({ name });
	if (isValid.error !== undefined) {
		switch (isValid.error.details[0].type) {
		case "string.min":
			throw new BadRequestError("Project name must be at least 3 characters long.");
		case "string.max":
			throw new BadRequestError("Project name must be at most 250 characters long.");
		default:
			throw new BadRequestError("Invalid data.");
		}
	}

	await Projects.createProject(name, userId);
}