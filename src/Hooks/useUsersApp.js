import { useAuthRequests } from "./useAuthRequests";
import { getUserListByNewUrlService, getUserListService } from "../Services/getUserListService";

export const useUsersApp = () => {
	const authRequest = useAuthRequests();

	const getUserList = async (signal) => {
		try {
			const { data: res } = await authRequest(getUserListService, { signal });
			return res;
		} catch (error) {
			throw error;
		}
	};

	const getUserByUrlList = async (url) => {
		try {
			const { data: res } = await authRequest(getUserListByNewUrlService, { url });
			return res;
		} catch (error) {
			throw error;
		}
	};
	return { getUserList, getUserByUrlList };
};
