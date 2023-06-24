import React from "react";

export const Forms = ({ children, title = "", ...propps }) => {
	return (
		<div className="bg-white-100 p-4">
			<h1 className="text-3xl font-bold mb-4 text-center">{title}</h1>
			<form className="bg-gray-100 shadow-2xl p-4 rounded" {...propps}>
				{children}
			</form>
		</div>
	);
};
