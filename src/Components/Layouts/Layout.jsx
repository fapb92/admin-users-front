import React from "react";
import LoadingComponent from "../Loading";

export const Layout = ({ children, title = "", isLoading=false }) => {
	document.title = !title ? "User Admin" : `User Admin - ${title}`;
	return <div>
		{!isLoading && <div className="flex justify-center items-center h-screen">{children}</div>}
		{isLoading && <LoadingComponent />}
	</div>;
};
