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
		const { ...user } = response.data.data;

		setAuth((prev) => ({
			...prev,
			user,
		}));

		return { user };
	};

	return getUser;
};
