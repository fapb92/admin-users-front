import { getUserService } from "../Services/getUserService";
import { useAuth } from "./useAuth";
import { useAuthRequests } from "./useAuthRequests";

export const useUser = () => {
	const { auth, setAuth } = useAuth();
	const requestAuth = useAuthRequests();

	const getUser = async (signal) => {
		if (!!auth?.user) {
			return auth?.user;
		}
		const response = await requestAuth(getUserService, { signal });
		const {
			role_permission_data: { role, permissions },
			...user
		} = response.data.data;

		setAuth((prev) => ({
			...prev,
			user,
			role,
			permissions,
		}));

		return user;
	};

	return getUser;
};
