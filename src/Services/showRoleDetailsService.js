import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function showRoleDetailsService(token, { role, signal }) {
	return AuthAxios.get(path.roleDetails(role), {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		signal,
	});
}
