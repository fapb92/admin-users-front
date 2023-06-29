import { useAuth } from "./useAuth";
import { useRefreshToken } from "./useRefreshToken";

export function useAuthRequests() {
	const refreshToken = useRefreshToken();
	const { auth } = useAuth();

	const requestAuth = async (functionAuth, params = {}) => {
		const excFunction = async (functionAuth, params = {}) => {
			if (!Object.keys(params).length) {
				return await functionAuth(token);
			} else {
				return await functionAuth(token, params);
			}
		};

		let token = auth?.accessToken;
		try {
			if (!token) {
				token = await refreshToken(params?.signal);
			}
			return await excFunction(functionAuth, params);
		} catch (error) {
			if (error?.response?.status === 401 && auth?.accessToken) {
				token = await refreshToken(params?.signal);
				return await excFunction(functionAuth, params);
			}
			throw error;
		}
	};
	return requestAuth;
}
