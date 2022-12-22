import Collaborators from "../entities/Collaborators";
import { CollaboratorSchema } from "../schemas/CollaboratorSchema";
import { BadRequestError } from "../helpers/apiErrors";

export async function createCollaborator(name: string, userId: string) {
	const isValid = CollaboratorSchema.validate({ name });
	if (isValid.error !== undefined) throw new BadRequestError("Invalid data.");

	await Collaborators.createCollaborator(name, userId);
}