import Users from "../entities/Users";
import Sessions from "../entities/Sessions";

import { NotFoundError } from "../helpers/apiErrors";

export async function login(userName: string, password: string) {
	const user = await Users.findUser(userName, password);
	if (user === null) throw new NotFoundError("User not found");

	const token = await Sessions.createSession(user.id);
	return token;
}