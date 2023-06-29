import React from "react";
import { updateUserService } from "../Services/updateUserService";
import { useAuthRequests } from "./useAuthRequests";
import { useAuth } from "./useAuth";
import { useUser } from "./useUser";

export const useUpdateUser = () => {
	const authRequests = useAuthRequests();
	const { setAuth } = useAuth();

	const updateUser = async (data) => {
		try {
			const response = await authRequests(updateUserService, { data });
			setAuth((prev) => {
				const { user, ...rest } = prev;
				return rest;
			});
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	return updateUser;
};
