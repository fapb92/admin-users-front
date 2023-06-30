import { roleListService } from "../Services/roleListService";
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

	return { roleList };
};
