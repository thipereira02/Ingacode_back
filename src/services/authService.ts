import Users from "../entities/Users";
import Sessions from "../entities/Sessions";

export async function login(userName: string, password: string) {
	const user = await Users.findUser(userName, password);

	const session = await Sessions.createSession(user.id);
	return {
		id: session.id,
		userId: user.id,
		token: session.token,
		userName: user.userName,
	};
}