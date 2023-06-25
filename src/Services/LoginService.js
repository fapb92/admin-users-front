import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function LoginService(data) {
	return AuthAxios.post(path.login, data, {
		withCredentials: true,
	});
}
