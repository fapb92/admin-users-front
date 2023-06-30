import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function roleListService(token, { signal }) {
	return AuthAxios.get(path.rolelist, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		signal,
	});
}