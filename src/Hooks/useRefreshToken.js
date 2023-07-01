import { useLocation, useNavigate } from "react-router-dom";
import { refreshTokenService } from "../Services/refreshToken";
import { useAuth } from "./useAuth";

export const useRefreshToken = () => {
	const { setAuth } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const refreshToken = async (signal) => {
		try {
			const response = await refreshTokenService(signal);
			const token = response.data;
			setAuth((prev) => {
				return {
					...prev,
					accessToken: token.access_token,
					session_expires_in: Date.now() + token.expires_in * 1000,
					role: token.role,
					permissions: token.permissions,
				};
			});
			return token.access_token;
		} catch (error) {
			if (error?.response?.status >= 400) {
				navigate("/signin", { state: { from: location }, replace: true });
			}
			throw error
		}
	};

	return refreshToken;
};
