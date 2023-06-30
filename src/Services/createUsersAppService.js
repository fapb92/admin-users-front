import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function createUsersAppService(token, { data }) {
	return AuthAxios.post(path.createUsersApp, data, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}
