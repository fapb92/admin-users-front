import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function getUsersDetailsService(token, { user, signal }) {
	return AuthAxios.get(path.userDetails(user), {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		signal,
	});
}
