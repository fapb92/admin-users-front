import { refreshTokenService } from "../Services/refreshToken";
import { useAuth } from "./useAuth";

export const useRefreshToken = () => {
	const { setAuth } = useAuth();

	const refreshToken = async (signal) => {
		const response = await refreshTokenService(signal);
		const token = response.data;
		setAuth((prev) => {
			return { ...prev, accessToken: token.access_token, session_expires_in: token.expires_in };
		});
		return token.access_token;
	};

	return refreshToken;
};
