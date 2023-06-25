import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function RegisterService(data) {
	return AuthAxios.post(path.register, data);
}
