import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function selectRoleUserService(token, { data }) {
	return AuthAxios.post(path.selectRoleUser, data, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}
