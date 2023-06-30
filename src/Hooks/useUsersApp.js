import { useAuthRequests } from "./useAuthRequests";
import { getUserListByNewUrlService, getUserListService } from "../Services/getUserListService";
import { getUsersDetailsService } from "../Services/getUsersDetailsService";

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

	const getUsersDetails = async (id, signal) => {
		try {
			const { data: res } = await authRequest(getUsersDetailsService, { user: id, signal });
			return res;
		} catch (error) {
			throw error;
		}
	};
	return { getUserList, getUserByUrlList, getUsersDetails };
};
