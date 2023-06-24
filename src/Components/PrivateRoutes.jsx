import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
	let auth = false;
	return auth ? <Outlet /> : <Navigate to="/" />;
};
