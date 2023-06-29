import { useAuth } from "./useAuth";
import { useRefreshToken } from "./useRefreshToken";

export function useAuthRequests() {
	const refreshToken = useRefreshToken();
	const { auth } = useAuth();

	const requestAuth = async (functionAuth, params = {}) => {
		let token = auth?.accessToken;
		if (!token) {
			token = await refreshToken(params?.signal);
		}

		if (!Object.keys(params).length) {
			return await functionAuth(token);
		} else {
			return await functionAuth(token, params);
		}
	};
	return requestAuth;
}
