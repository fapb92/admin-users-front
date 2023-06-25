import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export function ResendEmailVerificationService(token) {
	return AuthAxios.get(path.resendEmailVerification, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
}