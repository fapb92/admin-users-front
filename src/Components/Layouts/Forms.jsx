import React from "react";

export const Forms = ({ children, title = "", errorMessage="", successMessage="", ...propps }) => {
	return (
		<div className="flex bg-white-100 p-4 flex-col justify-center items-center">
			<h1 className="text-3xl font-bold mb-4 text-center">{title}</h1>
			{errorMessage && <div className="text-red-500 font-semibold">{errorMessage && <p>{errorMessage}</p>}</div>}
			{successMessage && <div className="text-green-500 font-semibold">{successMessage && <p>{successMessage}</p>}</div>}
			<form className="bg-gray-100 shadow-2xl p-4 rounded" {...propps}>
				{children}
			</form>
		</div>
	);
};
