import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function logOutService(token) {
	return AuthAxios.get(path.logout, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		withCredentials: true,
	});
}
