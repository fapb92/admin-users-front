import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function assignRoleUserService(token, { user, data }) {
	return AuthAxios.post(path.assignRoleUsersApp(user), data, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}
