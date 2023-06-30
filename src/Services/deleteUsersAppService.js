import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function deleteUsersAppService(token, { user }) {
	return AuthAxios.delete(path.deleteUsersApp(user), {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}
