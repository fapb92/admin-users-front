import { useAuthRequests } from "./useAuthRequests";
import { getUserListByNewUrlService, getUserListService } from "../Services/getUserListService";
import { getUsersDetailsService } from "../Services/getUsersDetailsService";
import { updateUsersAppService } from "../Services/updateUsersAppService";
import { deleteUsersAppService } from "../Services/deleteUsersAppService";

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

	const updateUsersApp = async (id, data) => {
		try {
			const { data: res } = await authRequest(updateUsersAppService, { user: id, data });
			return res;
		} catch (error) {
			throw error;
		}
	};
	const deleteUsersApp = async (id) => {
		try {
			const { data: res } = await authRequest(deleteUsersAppService, { user: id });
			return res;
		} catch (error) {
			throw error;
		}
	};
	return { getUserList, getUserByUrlList, getUsersDetails, updateUsersApp, deleteUsersApp };
};
