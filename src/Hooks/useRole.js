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

	return { roleList, showRoleDetails };
};
