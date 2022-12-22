import { UserSchema } from "../schemas/UserSchema";
import { BadRequestError, ConflictError } from "../helpers/apiErrors";
import Users from "../entities/Users";

export async function createUser(userName: string, password: string) {
	const isValid = UserSchema.validate({ userName, password });
	if (isValid.error !== undefined) {
		switch (isValid.error.details[0].type) {
		case "string.min":
			throw new BadRequestError("Username must be at least 3 characters long.");
		case "string.max":
			throw new BadRequestError("Username must be at most 250 characters long.");
		case "string.pattern.base":
			throw new BadRequestError("Password must be at least 8 characters long and contain at least one uppercase letter and one number.");
		default:
			throw new BadRequestError("Invalid data.");
		}
	}

	const user = await Users.createUser( userName, password );
	if (!user) throw new ConflictError("Username already exists.");
}