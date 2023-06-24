import React from "react";

export const Layout = ({ children, title = "" }) => {
	document.title = !title ? "User Admin" : `User Admin - ${title}`;
	return <div className="flex justify-center items-center h-screen">{children}</div>;
};
