import Users from "../entities/Users";
import Sessions from "../entities/Sessions";

export async function login(userName: string, password: string) {
	const user = await Users.findUser(userName, password);

	const token = await Sessions.createSession(user.id);
	return {
		token,
		userName: user.userName,
	};
}