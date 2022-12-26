import Collaborators from "../entities/Collaborators";
import { CollaboratorSchema } from "../schemas/CollaboratorSchema";
import { BadRequestError } from "../helpers/apiErrors";

export async function createCollaborator(name: string, userId: string) {
	const isValid = CollaboratorSchema.validate({ name });
	if (isValid.error !== undefined) {
		switch (isValid.error.details[0].type) {
		case "string.min":
			throw new BadRequestError("Nome do colaborador deve ter pelo menos 3 caracteres.");
		case "string.max":
			throw new BadRequestError("Nome do colaborador deve ter no máximo 250 caracteres.");
		default:
			throw new BadRequestError("Dados inválidos.");
		}
	}

	await Collaborators.createCollaborator(name, userId);
}

export async function getUserCollaborators(userId: string) {
	const collaborators = await Collaborators.findUserCollaborators(userId);
	return collaborators;
}

export async function updateCollaborator(id: string, name: string) {
	const isValid = CollaboratorSchema.validate({ name });
	if (isValid.error !== undefined) throw new BadRequestError("Dados inválidos.");

	await Collaborators.updateCollaborator(id, name);
}

export async function deleteCollaborator(id: string) {
	await Collaborators.deleteCollaborator(id);
}