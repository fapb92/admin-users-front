import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function refreshTokenService(signal) {
	return AuthAxios.get(path.refreshToken, {
		withCredentials: true,
		signal
	});
}
