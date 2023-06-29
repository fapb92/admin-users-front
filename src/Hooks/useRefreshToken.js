import { getUserService } from "../Services/getUserService";
import { refreshTokenService } from "../Services/refreshToken";
import { useAuth } from "./useAuth";

export const useRefreshToken = () => {
	const { setAuth } = useAuth();
	const refreshToken = async (signal) => {
		const response = await refreshTokenService(signal);
		const token = response.data.access_token;
		const responseUser = await getUserService(token);
		setAuth((prev) => {
			return { ...prev, accessToken: token, user: responseUser.data.data };
		});
	};

	return refreshToken;
};
