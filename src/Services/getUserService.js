import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function getUserService(token, { signal }) {
	return AuthAxios.get(path.getUser, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		signal,
	});
}
