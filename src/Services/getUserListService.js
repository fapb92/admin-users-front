import { AuthAxios } from "../Config/AuhtInstance";
import { path } from "../Config/pathconfig";

export const getUserListService = (token, { signal }) => {
	return AuthAxios.get(path.userList, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		signal,
	});
};

export const getUserListByNewUrlService = (token, { url, signal }) => {
	return AuthAxios.get(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		signal,
	});
};
