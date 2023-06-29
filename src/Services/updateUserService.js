import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function updateUserService(token, { data }) {
	return AuthAxios.put(path.updateUser, data, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}
