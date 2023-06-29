import { rolesUserService } from "../Services/rolesUserService";
import { selectRoleUserService } from "../Services/selectRoleUserService";
import { useAuth } from "./useAuth";
import { useAuthRequests } from "./useAuthRequests";

export const useSelectRole = () => {
	const { setAuth } = useAuth();
	const authRequest = useAuthRequests();

	const getRolesUser = async (signal) => {
		try {
			const { data } = await authRequest(rolesUserService, { signal });
			return data;
		} catch (error) {
			throw error;
		}
	};

	const selectRole = async (data) => {
		try {
			const { data: res } = await authRequest(selectRoleUserService, { data });
			setAuth((prev) => {
				const { role, permissions } = res.data;
				return { ...prev, role, permissions };
			});
			return res.message;
		} catch (error) {
			throw error;
		}
	};
	return { getRolesUser, selectRole };
};
