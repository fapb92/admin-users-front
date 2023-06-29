import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function rolesUserService(token, { signal }) {
	return AuthAxios.get(path.rolesUser, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		signal,
	});
}