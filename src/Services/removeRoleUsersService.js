import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function removeRoleUsersService(token, { user, data }) {
	return AuthAxios.post(path.removeRoleUsersApp(user), data, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}
