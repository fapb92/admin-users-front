import React from "react";
import LoadingComponent from "../Loading";
import { NavigationBar } from "../NavigationBar";
import { useAuth } from "../../Hooks/useAuth";

export const Layout = ({ children, title = "", isLoading = false }) => {
	document.title = !title ? "User Admin" : `User Admin - ${title}`;
	const { auth } = useAuth();
	return (
		<div>
			{!isLoading && (
				<>
					{auth?.accessToken && <NavigationBar />}
					<div className="flex justify-center items-center h-screen">{children}</div>
				</>
			)}
			{isLoading && <LoadingComponent />}
		</div>
	);
};
