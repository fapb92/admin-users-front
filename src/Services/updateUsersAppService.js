import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function updateUsersAppService(token, { user, data }) {
	return AuthAxios.put(path.updateUsersApp(user), data, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}
