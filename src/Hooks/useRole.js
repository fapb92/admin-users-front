import { assignRoleUserService } from "../Services/assignRoleUserService";
import { removeRoleUsersService } from "../Services/removeRoleUsersService";
import { roleListService } from "../Services/roleListService";
import { showRoleDetailsService } from "../Services/showRoleDetailsService";
import { useAuthRequests } from "./useAuthRequests";

export const useRole = () => {
	const authRequests = useAuthRequests();
	const roleList = async (signal) => {
		try {
			const { data: res } = await authRequests(roleListService, { signal });
			return res;
		} catch (error) {
			throw error;
		}
	};

	const showRoleDetails = async (role, signal) => {
		try {
			const { data: res } = await authRequests(showRoleDetailsService, { role, signal });
			return res.data;
		} catch (error) {
			throw error;
		}
	};
	const assignRoleUser = async (user, data) => {
		try {
			const { data: res } = await authRequests(assignRoleUserService, { user, data });
			return res.message;
		} catch (error) {
			throw error;
		}
	};
	const removeRoleUser = async (user, data) => {
		try {
			const { data: res } = await authRequests(removeRoleUsersService, { user, data });
			return res.message;
		} catch (error) {
			throw error;
		}
	};

	return { roleList, showRoleDetails, assignRoleUser, removeRoleUser };
};
