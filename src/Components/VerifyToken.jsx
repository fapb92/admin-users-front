import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { useRefreshToken } from "../Hooks/useRefreshToken";
import LoadingComponent from "./Loading";

export const VerifyToken = () => {
	const { auth, session_is_expire, setAuth } = useAuth();
	const refreshToken = useRefreshToken();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();
		const getToken = async () => {
			try {
				await refreshToken(controller.signal);
			} catch (error) {
				if (error?.response?.status) {
					setAuth({});
				}
			} finally {
				setLoading(false);
			}
		};

		!auth?.accessToken ? getToken() : setLoading(false);

		return () => {
			controller.abort();
		};
	}, []);

	return <div>{loading ? <LoadingComponent /> : <Outlet />}</div>;
};
