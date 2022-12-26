import { UserSchema } from "../schemas/UserSchema";
import { BadRequestError, ConflictError } from "../helpers/apiErrors";
import Users from "../entities/Users";

export async function createUser(userName: string, password: string) {
	const isValid = UserSchema.validate({ userName, password });
	if (isValid.error !== undefined) {
		switch (isValid.error.details[0].type) {
		case "string.min":
			throw new BadRequestError("Username deve ter pelo menos 3 caracteres.");
		case "string.max":
			throw new BadRequestError("Username pode ter no máximo 250 caracteres.");
		case "string.pattern.base":
			throw new BadRequestError("Password deve ter pelo menos 8 caracteres e conter pelo menos uma letra maiúscula e um número.");
		default:
			throw new BadRequestError("Dados inválidos.");
		}
	}

	const user = await Users.createUser( userName, password );
	if (!user) throw new ConflictError("Username já está em uso.");
}