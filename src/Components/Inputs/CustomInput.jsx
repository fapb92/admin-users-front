import React from "react";

export const CustomInput = ({ type = "text", name='name', ...props }) => {
	return (
		<div className="mb-4">
			<label className="block text-gray-700 font-bold mb-2">
				{name}:
			</label>
			<input
				type={type}
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				{...props}
			/>
		</div>
	);
};
