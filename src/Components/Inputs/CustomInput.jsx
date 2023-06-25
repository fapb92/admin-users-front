import React from "react";
import { ErrorMessage } from "../ErrorMessage";

export const CustomInput = ({ type = "text", title='title', errors, ...props }) => {
	return (
		<div className="mb-4">
			<label className="block text-gray-700 font-bold mb-2">
				{title}:
			</label>
			{!!errors && <ErrorMessage errors={errors}/>}
			<input
				type={type}
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				{...props}
			/>
		</div>
	);
};
